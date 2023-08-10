import static org.patternfly.components.Brand.brand;
import static org.patternfly.components.Content.content;
import static org.patternfly.components.Toolbar.toolbar;
import static org.patternfly.components.page.Masthead.pageMasthead;
import static org.patternfly.components.page.MastheadToggle.mastheadToggle;
import static org.patternfly.components.page.Page.page;
import static org.patternfly.components.page.PageMain.pageMain;
import static org.patternfly.components.page.PageMainBody.pageMainBody;
import static org.patternfly.components.page.PageMainBreadcrumb.pageMainBreadcrumb;
import static org.patternfly.components.page.PageMainGroup.pageMainGroup;
import static org.patternfly.components.page.PageMainSection.pageMainSection;
import static org.patternfly.components.page.PageSidebar.pageSidebar;
import static org.patternfly.components.page.SkipToContent.skipToContent;

public class PageDemo {

    public void pageDemo() {
        // @start region = page
        page()
                .addSkipToContent(skipToContent("main-id"))
                .addMasthead(pageMasthead())
                .addSidebar(pageSidebar())
                .addMain(pageMain("main-id"));
        // @end region = page
    }

    public void pageMainDemo() {
        // @start region = pageMain
        pageMain("main-id")
                .addGroup(pageMainGroup()
                        .addSection(pageMainBreadcrumb())
                        .addSection(pageMainSection()))
                .addSection(pageMainSection())
                .addSection(pageMainSection());
        // @end region = pageMain
    }

    public void pageMainBodyDemo() {
        // @start region = pageMainBody
        pageMain("main-id")
                .addSection(pageMainBreadcrumb()
                        .limitWidth()
                        .addBody(pageMainBody()
                                .add(content())))
                .addSection(pageMainSection()
                        .add(content()))
                .addSection(pageMainSection()
                        .limitWidth()
                        .addBody(pageMainBody()
                                .add(content())));
        // @end region = pageMainBody
    }

    public void pageMainGroupDemo() {
        // @start region = pageMainGroup
        pageMainGroup()
                .addSection(pageMainBreadcrumb())
                .addSection(pageMainSection());
        // @end region = pageMainGroup
    }

    public void mastheadDemo() {
        // @start region = masthead
        pageMasthead()
                .addToggle(mastheadToggle())
                .addBrand(brand("/logo.svg"), "/index.html")
                .addToolbar(toolbar());
        // @end region = masthead
    }
}
