import org.patternfly.component.page.MastheadLogo;

import static org.patternfly.component.page.Masthead.masthead;
import static org.patternfly.component.page.MastheadBrand.mastheadBrand;
import static org.patternfly.component.page.MastheadContent.mastheadContent;
import static org.patternfly.component.page.MastheadMain.mastheadMain;
import static org.patternfly.component.page.MastheadToggle.mastheadToggle;
import static org.patternfly.component.page.Page.page;
import static org.patternfly.component.page.PageBreadcrumb.pageBreadcrumb;
import static org.patternfly.component.page.PageGroup.pageGroup;
import static org.patternfly.component.page.PageMain.pageMain;
import static org.patternfly.component.page.PageSection.pageSection;
import static org.patternfly.component.page.PageSidebar.pageSidebar;
import static org.patternfly.component.skiptocontent.SkipToContent.skipToContent;
import static org.patternfly.component.toolbar.Toolbar.toolbar;

public class PageDemo {

    public void pageDemo() {
        // @start region = page
        page()
                .addSkipToContent(skipToContent("main-id"))
                .addMasthead(masthead())
                .addSidebar(pageSidebar())
                .addMain(pageMain("main-id"));
        // @end region = page
    }

    public void pageMainDemo() {
        // @start region = pageMain
        pageMain("main-id")
                .addGroup(pageGroup()
                        .addSection(pageBreadcrumb())
                        .addSection(pageSection()))
                .addSection(pageSection())
                .addSection(pageSection());
        // @end region = pageMain
    }

    public void pageMainGroupDemo() {
        // @start region = pageMainGroup
        pageGroup()
                .addSection(pageBreadcrumb())
                .addSection(pageSection());
        // @end region = pageMainGroup
    }

    public void mastheadDemo() {
        // @start region = masthead
        masthead()
                .addMain(mastheadMain()
                        .addToggle(mastheadToggle())
                        .addBrand(mastheadBrand()
                                .addLogo(MastheadLogo.mastheadLogo("/"))))
                .addContent(mastheadContent()
                        .addToolbar(toolbar()));
        // @end region = masthead
    }
}
