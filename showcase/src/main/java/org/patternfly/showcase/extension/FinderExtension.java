package org.patternfly.showcase.extension;

import java.util.function.Function;

import org.jboss.elemento.Id;
import org.jboss.elemento.router.Route;
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
import static org.patternfly.component.textinputgroup.SearchInput.searchInput;
import static org.patternfly.extension.finder.Finder.finder;
import static org.patternfly.extension.finder.FinderColumn.finderColumn;
import static org.patternfly.extension.finder.FinderColumnHeader.finderColumnHeader;
import static org.patternfly.extension.finder.FinderColumnHeaderActions.finderColumnHeaderActions;
import static org.patternfly.extension.finder.FinderColumnSearch.finderColumnSearch;
import static org.patternfly.extension.finder.FinderItem.finderItem;
import static org.patternfly.icon.IconSets.fab.appStore;
import static org.patternfly.icon.IconSets.fab.java;
import static org.patternfly.icon.IconSets.fab.swift;
import static org.patternfly.icon.IconSets.fas.archive;
import static org.patternfly.icon.IconSets.fas.calculator;
import static org.patternfly.icon.IconSets.fas.camera;
import static org.patternfly.icon.IconSets.fas.code;
import static org.patternfly.icon.IconSets.fas.download;
import static org.patternfly.icon.IconSets.fas.file;
import static org.patternfly.icon.IconSets.fas.fileAudio;
import static org.patternfly.icon.IconSets.fas.fileCode;
import static org.patternfly.icon.IconSets.fas.fileImage;
import static org.patternfly.icon.IconSets.fas.filePdf;
import static org.patternfly.icon.IconSets.fas.filePowerpoint;
import static org.patternfly.icon.IconSets.fas.folder;
import static org.patternfly.icon.IconSets.fas.globe;
import static org.patternfly.icon.IconSets.fas.hdd;
import static org.patternfly.icon.IconSets.fas.images;
import static org.patternfly.icon.IconSets.fas.music;
import static org.patternfly.icon.IconSets.fas.plus;
import static org.patternfly.icon.IconSets.fas.redo;
import static org.patternfly.icon.IconSets.fas.search;
import static org.patternfly.icon.IconSets.fas.terminal;
import static org.patternfly.icon.IconSets.fas.wrench;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.BuildingBlocks.mixedKebab;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.extensions;
import static org.patternfly.style.Classes.filtered;
import static org.patternfly.style.Classes.modifier;

@Route(value = "/extensions/finder", title = "Finder")
public class FinderExtension extends SnippetPage {

    public FinderExtension() {
        super(extensions.get("finder"));

        startExamples();
        addSnippet(new Snippet("finder-basic", "Basic",
                code("finder-basic"), () -> {
            // @code-start:finder-basic
            Function<String, FinderColumnHeader> columnHeader = (text) -> finderColumnHeader(text)
                    .addActions(finderColumnHeaderActions()
                            .addButton(button(plus()).plain())
                            .addButton(button(redo()).plain())
                            .addDropdown(mixedKebab(Id.build("finder-basic", text, "cha"))));

            // top level columns
            FinderColumn applicationsColumn = finderColumn("applications")
                    .addHeader(columnHeader.apply("Applications"))
                    .addItem(finderItem("browser", "Web Browser", "Browse the internet").icon(globe()))
                    .addItem(finderItem("editor", "Code Editor", "Write and edit code").icon(code()))
                    .addItem(finderItem("terminal", "Terminal", "Run commands").icon(terminal()))
                    .addItem(finderItem("utilities", "Utilities", "System utilities").icon(wrench())
                            .nextColumn(finderColumn("utilities")
                                    .addHeader(columnHeader.apply("Utilities"))
                                    .addItem(finderItem("calculator", "Calculator").icon(calculator()))
                                    .addItem(finderItem("screenshot", "Screenshot").icon(camera()))
                                    .addItem(finderItem("disk-utility", "Disk Utility").icon(hdd()))));

            FinderColumn documentsColumn = finderColumn("documents")
                    .addHeader(columnHeader.apply("Documents"))
                    .addItem(finderItem("projects", "Projects").icon(folder())
                            .nextColumn(finderColumn("projects")
                                    .addHeader(columnHeader.apply("Projects"))
                                    .addItem(finderItem("web-app", "Web App").icon(folder())
                                            .nextColumn(finderColumn("web-app")
                                                    .addHeader(columnHeader.apply("Web App"))
                                                    .addItem(finderItem("index-html", "index.html").icon(fileCode()))
                                                    .addItem(finderItem("styles-css", "styles.css").icon(fileCode()))
                                                    .addItem(finderItem("app-js", "app.js").icon(fileCode()))
                                                    .addItem(finderItem("src", "src").icon(folder())
                                                            .nextColumn(finderColumn("src")
                                                                    .addHeader(columnHeader.apply("src"))
                                                                    .addItem(finderItem("components", "components")
                                                                            .icon(folder())
                                                                            .nextColumn(finderColumn("components")
                                                                                    .addHeader(columnHeader.apply("components"))
                                                                                    .addItem(finderItem("header-java",
                                                                                            "Header.java").icon(java()))
                                                                                    .addItem(finderItem("footer-java",
                                                                                            "Footer.java").icon(java()))
                                                                                    .addItem(finderItem("sidebar-java",
                                                                                            "Sidebar.java").icon(java()))))
                                                                    .addItem(finderItem("util-js", "util.js")
                                                                            .icon(fileCode()))))))
                                    .addItem(finderItem("mobile-app", "Mobile App").icon(folder())
                                            .nextColumn(finderColumn("mobile-app")
                                                    .addHeader(columnHeader.apply("Mobile App"))
                                                    .addItem(finderItem("main-swift", "Main.swift").icon(swift()))))))
                    .addItem(finderItem("notes-txt", "notes.txt").icon(file()))
                    .addItem(finderItem("report-pdf", "report.pdf").icon(filePdf()));

            FinderColumn downloadsColumn = finderColumn("downloads")
                    .addHeader(columnHeader.apply("Downloads"))
                    .addItem(finderItem("archive-zip", "archive.zip").icon(archive()))
                    .addItem(finderItem("photo-jpg", "photo.jpg").icon(fileImage()))
                    .addItem(finderItem("presentation-pptx", "presentation.pptx").icon(filePowerpoint()));

            FinderColumn musicColumn = finderColumn("music")
                    .addHeader(columnHeader.apply("Music"))
                    .addItem(finderItem("playlist-1", "Favorites").icon(folder())
                            .nextColumn(finderColumn("playlist-1")
                                    .addHeader(columnHeader.apply("Favorites"))
                                    .addItem(finderItem("heart-of-gold", "Heart of Golg.mp3").icon(fileAudio()))
                                    .addItem(finderItem("venice-queen", "Venice Queen.mp3").icon(fileAudio()))));

            FinderColumn picturesColumn = finderColumn("pictures")
                    .addHeader(columnHeader.apply("Pictures"))
                    .addItem(finderItem("wallpapers", "Wallpapers").icon(folder())
                            .nextColumn(finderColumn("wallpapers")
                                    .addHeader(columnHeader.apply("Wallpapers"))
                                    .addItem(finderItem("mountain-jpg", "mountain.jpg").icon(fileImage()))
                                    .addItem(finderItem("ocean-jpg", "ocean.jpg").icon(fileImage()))))
                    .addItem(finderItem("screenshots", "Screenshots").icon(folder())
                            .nextColumn(finderColumn("screenshots")
                                    .addHeader(columnHeader.apply("Screenshots"))
                                    .addItem(finderItem("screenshot-1", "Screen Shot 2025-09-02.png").icon(fileImage()))));

            FinderColumn rootColumn = finderColumn("root");
            rootColumn
                    .addHeader(columnHeader.apply("Root"))
                    .addSearch(finderColumnSearch().addSearchInput(searchInput(Id.unique()).icon(search())
                            .placeholder("Filter by name")
                            .onInput((e, si, value) -> {
                                String lcv = value.toLowerCase();
                                for (FinderItem item : rootColumn.items()) {
                                    item.classList().toggle(modifier(filtered),
                                            !value.isEmpty() && !item.text().toLowerCase().contains(lcv));
                                }
                            })
                            .onClear((e, si) ->
                                    rootColumn.items().forEach(item ->
                                            item.classList().remove(modifier(filtered))))
                    ))
                    .addItem(finderItem("applications", "Applications", "Installed applications")
                            .icon(appStore())
                            .nextColumn(applicationsColumn))
                    .addItem(finderItem("documents", "Documents", "Personal documents and projects")
                            .icon(folder())
                            .nextColumn(documentsColumn))
                    .addItem(finderItem("downloads", "Downloads", "Downloaded files")
                            .icon(download())
                            .nextColumn(downloadsColumn))
                    .addItem(finderItem("music", "Music", "Audio files and playlists")
                            .icon(music())
                            .nextColumn(musicColumn))
                    .addItem(finderItem("pictures", "Pictures", "Photos and images")
                            .icon(images())
                            .nextColumn(picturesColumn));

            return finder().addItem(rootColumn).element();
            // @code-end:finder-basic
        }));

        startApiDocs(Finder.class);
        addApiDoc(Finder.class, component);
        addApiDoc(FinderColumn.class, subcomponent);
        addApiDoc(FinderColumnHeader.class, subcomponent);
        addApiDoc(FinderColumnHeaderActions.class, subcomponent);
        addApiDoc(FinderColumnSearch.class, subcomponent);
        addApiDoc(FinderItem.class, subcomponent);
        addApiDoc(FinderItemActions.class, subcomponent);
        addApiDoc(FinderItemDescription.class, subcomponent);
        addApiDoc(FinderPreview.class, subcomponent);
    }
}
