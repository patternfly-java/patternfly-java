package org.patternfly.showcase.extension;

import java.util.function.Supplier;

import org.jboss.elemento.Id;
import org.jboss.elemento.router.Route;
import org.patternfly.component.menu.Dropdown;
import org.patternfly.extension.finder.Finder;
import org.patternfly.extension.finder.FinderColumn;
import org.patternfly.extension.finder.FinderColumnHeader;
import org.patternfly.extension.finder.FinderColumnHeaderActions;
import org.patternfly.extension.finder.FinderColumnSearch;
import org.patternfly.extension.finder.FinderItem;
import org.patternfly.extension.finder.FinderItemActions;
import org.patternfly.extension.finder.FinderItemDescription;
import org.patternfly.extension.finder.FinderPreview;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.menu.Dropdown.dropdown;
import static org.patternfly.component.menu.DropdownMenu.dropdownMenu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.textinputgroup.SearchInput.searchInput;
import static org.patternfly.extension.finder.Finder.finder;
import static org.patternfly.extension.finder.FinderColumn.finderColumn;
import static org.patternfly.extension.finder.FinderColumnHeader.finderColumnHeader;
import static org.patternfly.extension.finder.FinderColumnHeaderActions.finderColumnHeaderActions;
import static org.patternfly.extension.finder.FinderColumnSearch.finderColumnSearch;
import static org.patternfly.extension.finder.FinderItem.finderItem;
import static org.patternfly.icon.IconSets.fab.appStore;
import static org.patternfly.icon.IconSets.fas.code;
import static org.patternfly.icon.IconSets.fas.download;
import static org.patternfly.icon.IconSets.fas.ellipsisV;
import static org.patternfly.icon.IconSets.fas.folder;
import static org.patternfly.icon.IconSets.fas.globe;
import static org.patternfly.icon.IconSets.fas.images;
import static org.patternfly.icon.IconSets.fas.music;
import static org.patternfly.icon.IconSets.fas.plus;
import static org.patternfly.icon.IconSets.fas.search;
import static org.patternfly.icon.IconSets.fas.terminal;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.extensions;

@Route(value = "/extensions/finder", title = "Finder")
public class FinderExtension extends SnippetPage {

    public FinderExtension() {
        super(extensions.get("finder"));

        startExamples();
        addSnippet(new Snippet("finder-basic", "Basic",
                code("finder-basic"), () -> {
            // @code-start:finder-basic
            Supplier<Dropdown> dropdown = () -> dropdown(ellipsisV(), "Root actions")
                    .addMenu(dropdownMenu()
                            .addContent(menuContent()
                                    .addList(menuList()
                                            .addItem(menuItem("finder-basic-item-0", "Action"))
                                            .addItem(linkMenuItem("finder-basic-item-1", "Link",
                                                    "#finder-basic-item-1"))
                                            .addItem(menuItem("finder-basic-item-2",
                                                    "Disabled action")
                                                    .disabled())
                                            .addItem(linkMenuItem("finder-basic-item-3",
                                                    "Disabled link", "#finder-basic-item-3")
                                                    .disabled())
                                            .addDivider()
                                            .addItem(menuItem("finder-basic-item-4",
                                                    "Separated action"))
                                            .addItem(linkMenuItem("finder-basic-item-5",
                                                    "Separated link", "#item-5")))));
            return finder()
                    .addItem(finderColumn("root")
                            .addHeader(finderColumnHeader("Root")
                                    .addActions(finderColumnHeaderActions()
                                            .addButton(button(plus()).plain())
                                            .addDropdown(dropdown.get())))
                            .addSearch(finderColumnSearch()
                                    .addSearchInput(searchInput(Id.unique())
                                            .icon(search())
                                            .placeholder("Filter by name")))
                            .addItem(finderItem("applications", "Applications")
                                    .folder()
                                    .icon(appStore())
                                    .addDescription("Installed applications")
                                    .addColumn(finderColumn("applications")
                                            .addHeader(finderColumnHeader("Applications")
                                                    .addActions(finderColumnHeaderActions()
                                                            .addButton(button(plus()).plain())
                                                            .addDropdown(dropdown.get())))
                                            .addSearch(finderColumnSearch()
                                                    .addSearchInput(searchInput(Id.unique())
                                                            .icon(search())
                                                            .placeholder("Filter by name")))
                                            .addItem(finderItem("browser", "Web Browser")
                                                    .icon(globe())
                                                    .addDescription("Browse the internet"))
                                            .addItem(finderItem("editor", "Code Editor")
                                                    .icon(code())
                                                    .addDescription("Write and edit code"))
                                            .addItem(finderItem("terminal", "Terminal")
                                                    .icon(terminal()))))
                            .addItem(finderItem("documents", "Documents")
                                    .folder()
                                    .icon(folder())
                                    .addDescription("Personal documents and projects"))
                            .addItem(finderItem("downloads", "Downloads")
                                    .folder()
                                    .icon(download())
                                    .addDescription("Downloaded files"))
                            .addItem(finderItem("music", "Music")
                                    .folder()
                                    .icon(music())
                                    .addDescription("Audio files and playlists"))
                            .addItem(finderItem("pictures", "Pictures")
                                    .folder()
                                    .icon(images())
                                    .addDescription("Photos and images")))
                    .element();
            // @code-end:finder-basic
        }));

        startApiDocs(Finder.class);
        addApiDoc(Finder.class, component);
        addApiDoc(FinderColumn.class, component);
        addApiDoc(FinderColumnHeader.class, subcomponent);
        addApiDoc(FinderColumnHeaderActions.class, subcomponent);
        addApiDoc(FinderColumnSearch.class, subcomponent);
        addApiDoc(FinderItem.class, subcomponent);
        addApiDoc(FinderItemActions.class, subcomponent);
        addApiDoc(FinderItemDescription.class, subcomponent);
        addApiDoc(FinderPreview.class, subcomponent);
    }
}
