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
import org.patternfly.component.menu.MenuContent;
import org.patternfly.component.menu.MenuToggle;
import org.patternfly.component.menu.SingleSelect;
import org.patternfly.component.togglegroup.ToggleGroup;

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuGroup.menuGroup;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.MenuToggle.menuToggle;
import static org.patternfly.component.menu.SingleSelect.singleSelect;
import static org.patternfly.component.menu.SingleSelectMenu.singleSelectMenu;
import static org.patternfly.component.togglegroup.ToggleGroup.toggleGroup;
import static org.patternfly.component.togglegroup.ToggleGroupItem.toggleGroupItem;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.menu;
import static org.patternfly.style.Classes.search;
import static org.patternfly.style.Classes.themeSelector;

public class ThemeSelector extends BaseComponent<HTMLElement, ThemeSelector> implements Attachable {

    // ------------------------------------------------------ factory

    public static ThemeSelector themeSelector() {
        return new ThemeSelector(null);
    }

    public static ThemeSelector themeSelector(String storagePrefix) {
        return new ThemeSelector(storagePrefix);
    }

    // ------------------------------------------------------ instance

    private static final String COLOR_KEY = "color";
    private static final String CONTRAST_KEY = "contrast";
    private final ThemeManager<Color> colorManager;
    private final ThemeManager<Contrast> contrastManager;
    private final MenuContent menuContent;
    private boolean hasContrast;

    ThemeSelector(String storagePrefix) {
        super(ComponentType.ThemeSelector, div().css(component(themeSelector)).element());
        this.hasContrast = false;

        String colorKey = storagePrefix == null
                ? "theme-preference"
                : Id.build(storagePrefix, "theme-preference");
        String contrastKey = storagePrefix == null
                ? "high-contrast-preference"
                : Id.build(storagePrefix, "high-contrast-preference");
        colorManager = new ThemeManager<>(colorKey, "pf-v6-theme-dark", "(prefers-color-scheme: dark)",
                Color.SYSTEM, Color.DARK, Color.DARK,
                Color::fromIdentifier, Color::identifier);
        contrastManager = new ThemeManager<>(contrastKey, "pf-v6-theme-high-contrast", "(prefers-contrast: more)",
                Contrast.SYSTEM, Contrast.ON, Contrast.ON,
                Contrast::fromIdentifier, Contrast::identifier);

        menuContent = menuContent()
                .addGroup(menuGroup("Color scheme")
                        .addList(menuList()
                                .addItems(asList(Color.values()), color ->
                                        menuItem(color.identifier, color.text)
                                                .icon(color.icon())
                                                .description(color.description)
                                                .store(COLOR_KEY, color))));
        MenuToggle menuToggle = menuToggle().icon(colorManager.value.icon());
        SingleSelect singleSelect = singleSelect(menuToggle)
                .noDefaultSelectHandler()
                .addMenu(singleSelectMenu()
                        .onSingleSelect((e, menuItem, selected) -> {
                            Color color = menuItem.get(COLOR_KEY);
                            if (color != colorManager.value) {
                                colorManager.apply(color);
                                menuToggle.icon(color.icon());
                            }
                        })
                        .addContent(menuContent));
        singleSelect.select(colorManager.value.identifier());
        add(singleSelect);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        // noop
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        colorManager.cleanup();
        contrastManager.cleanup();
    }

    // ------------------------------------------------------ builder

    public ThemeSelector withContrast() {
        if (!hasContrast) {
            ToggleGroup toggleGroup = toggleGroup(single)
                    .addItems(asList(Contrast.values()), contrast ->
                            toggleGroupItem(contrast.identifier(), contrast.text)
                                    .store(CONTRAST_KEY, contrast))
                    .onSingleSelect((e, menuItem, selected) -> {
                        Contrast contrast = menuItem.get(CONTRAST_KEY);
                        if (contrast != contrastManager.value) {
                            contrastManager.apply(contrast);
                        }
                    });
            menuContent
                    .addDivider()
                    .addGroup(menuGroup("High contrast")
                            .add(div().css(component(menu, search)) // just a fake MenuSearch component
                                    .add(toggleGroup)));
            toggleGroup.select(contrastManager.value.identifier());
            hasContrast = true;
        }
        return this;
    }

    @Override
    public ThemeSelector that() {
        return this;
    }
}
