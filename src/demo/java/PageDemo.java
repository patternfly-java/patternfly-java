import static org.patternfly.component.brand.Brand.brand;
import static org.patternfly.component.page.Masthead.masthead;
import static org.patternfly.component.page.MastheadToggle.mastheadToggle;
import static org.patternfly.component.page.Page.page;
import static org.patternfly.component.page.PageMain.pageMain;
import static org.patternfly.component.page.PageMainBody.pageMainBody;
import static org.patternfly.component.page.PageMainBreadcrumb.pageMainBreadcrumb;
import static org.patternfly.component.page.PageMainGroup.pageMainGroup;
import static org.patternfly.component.page.PageMainSection.pageMainSection;
import static org.patternfly.component.page.PageSidebar.pageSidebar;
import static org.patternfly.component.skiptocontent.SkipToContent.skipToContent;
import static org.patternfly.component.text.TextContent.textContent;
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
                                .add(textContent())))
                .addSection(pageMainSection()
                        .add(textContent()))
                .addSection(pageMainSection()
                        .limitWidth()
                        .addBody(pageMainBody()
                                .add(textContent())));
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
        masthead()
                .addToggle(mastheadToggle())
                .addBrand(brand("/logo.svg", "Logo"), "/index.html")
                .addToolbar(toolbar());
        // @end region = masthead
    }
}
