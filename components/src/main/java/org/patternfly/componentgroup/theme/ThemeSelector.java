/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.componentgroup.theme;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.Id;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.menu.MenuToggle;
import org.patternfly.component.menu.SingleSelect;
import org.patternfly.component.togglegroup.ToggleGroup;
import org.patternfly.style.Placement;

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuGroup.menuGroup;
import static org.patternfly.component.menu.MenuToggle.menuToggle;
import static org.patternfly.component.menu.SingleSelect.singleSelect;
import static org.patternfly.component.menu.SingleSelectMenu.singleSelectMenu;
import static org.patternfly.component.togglegroup.ToggleGroup.toggleGroup;
import static org.patternfly.component.togglegroup.ToggleGroupItem.toggleGroupItem;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.menu;
import static org.patternfly.style.Classes.search;
import static org.patternfly.style.Classes.themeSelector;

/** A composite component that lets users select color scheme, contrast, and theme preferences. */
public class ThemeSelector extends BaseComponent<HTMLElement, ThemeSelector> implements Attachable {

    // ------------------------------------------------------ factory

    public static ThemeSelector themeSelector() {
        return new ThemeSelector(null);
    }

    public static ThemeSelector themeSelector(String storagePrefix) {
        return new ThemeSelector(storagePrefix);
    }

    // ------------------------------------------------------ instance

    private static final String THEME_KEY = "theme";
    private static final String COLOR_KEY = "color";
    private static final String CONTRAST_KEY = "contrast";
    private final ThemeManager<Theme> themeManager;
    private final ThemeManager<Color> colorManager;
    private final ThemeManager<Contrast> contrastManager;
    private final SingleSelect singleSelect;

    ThemeSelector(String storagePrefix) {
        super(ComponentType.ThemeSelector, div().css(component(themeSelector)).element());

        String themeKey = storagePrefix == null
                ? "theme-variant-preference"
                : Id.build(storagePrefix, "theme-variant-preference");
        String colorKey = storagePrefix == null
                ? "theme-preference"
                : Id.build(storagePrefix, "theme-preference");
        String contrastKey = storagePrefix == null
                ? "contrast-preference"
                : Id.build(storagePrefix, "contrast-preference");

        themeManager = new ThemeManager<>(themeKey,
                t -> t == Theme.FELT ? "pf-v6-theme-felt" : null,
                "(prefers-color-scheme: dark)", // not used for theme, but required by ThemeManager
                Theme.DEFAULT, Theme.DEFAULT,
                Theme::fromIdentifier, Theme::identifier,
                Theme.values());
        colorManager = new ThemeManager<>(colorKey,
                c -> c == Color.DARK ? "pf-v6-theme-dark" : null,
                "(prefers-color-scheme: dark)",
                Color.SYSTEM, Color.DARK,
                Color::fromIdentifier, Color::identifier,
                Color.values());
        contrastManager = new ThemeManager<>(contrastKey,
                c -> {
                    if (c == Contrast.HIGH_CONTRAST) {
                        return "pf-v6-theme-high-contrast";
                    } else if (c == Contrast.GLASS) {
                        return "pf-v6-theme-glass";
                    }
                    return null;
                },
                "(prefers-contrast: more)",
                Contrast.SYSTEM, Contrast.HIGH_CONTRAST,
                Contrast::fromIdentifier, Contrast::identifier,
                Contrast.values());

        // Theme toggle group
        ToggleGroup themeToggleGroup = toggleGroup(single)
                .addItems(asList(Theme.values()), theme ->
                        toggleGroupItem(theme.identifier(), theme.text)
                                .store(THEME_KEY, theme))
                .onSingleSelect((e, item, selected) -> {
                    Theme theme = item.get(THEME_KEY);
                    if (theme != themeManager.value) {
                        themeManager.apply(theme);
                    }
                });
        themeToggleGroup.select(themeManager.value.identifier());

        // Color scheme toggle group
        ToggleGroup colorToggleGroup = toggleGroup(single)
                .addItems(asList(Color.values()), color ->
                        toggleGroupItem(color.identifier(), color.text)
                                .store(COLOR_KEY, color))
                .onSingleSelect((e, item, selected) -> {
                    Color color = item.get(COLOR_KEY);
                    if (color != colorManager.value) {
                        colorManager.apply(color);
                    }
                });
        colorToggleGroup.select(colorManager.value.identifier());

        // Contrast mode toggle group
        ToggleGroup contrastToggleGroup = toggleGroup(single)
                .addItems(asList(Contrast.values()), contrast ->
                        toggleGroupItem(contrast.identifier(), contrast.text)
                                .store(CONTRAST_KEY, contrast))
                .onSingleSelect((e, item, selected) -> {
                    Contrast contrast = item.get(CONTRAST_KEY);
                    if (contrast != contrastManager.value) {
                        contrastManager.apply(contrast);
                    }
                });
        contrastToggleGroup.select(contrastManager.value.identifier());

        MenuToggle menuToggle = menuToggle().icon(colorManager.value.icon());
        singleSelect = singleSelect(menuToggle)
                .noDefaultSelectHandler()
                .addMenu(singleSelectMenu()
                        .addContent(menuContent()
                                .addGroup(menuGroup("Theme")
                                        .add(div().css(component(menu, search))
                                                .add(themeToggleGroup)))
                                .addDivider()
                                .addGroup(menuGroup("Color scheme")
                                        .add(div().css(component(menu, search))
                                                .add(colorToggleGroup)))
                                .addDivider()
                                .addGroup(menuGroup("Contrast mode")
                                        .add(div().css(component(menu, search))
                                                .add(contrastToggleGroup)))));
        add(singleSelect);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        // noop
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        themeManager.cleanup();
        colorManager.cleanup();
        contrastManager.cleanup();
    }

    // ------------------------------------------------------ builder

    public ThemeSelector placement(Placement placement) {
        singleSelect.placement(placement);
        return this;
    }

    @Override
    public ThemeSelector that() {
        return this;
    }
}
