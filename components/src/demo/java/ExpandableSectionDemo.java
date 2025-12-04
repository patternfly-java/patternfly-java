import static org.patternfly.component.expandable.ExpandableSection.expandableSection;
import static org.patternfly.component.expandable.ExpandableSectionContent.expandableSectionContent;
import static org.patternfly.component.expandable.ExpandableSectionToggle.expandableSectionToggle;
import static org.patternfly.layout.stack.Stack.stack;
import static org.patternfly.layout.stack.StackItem.stackItem;

public class ExpandableSectionDemo {

    public void detachedDemo() {
        // @start region = detached
        stack().gutter()
                .addItem(stackItem()
                        .add(expandableSection("detached-expandable-section")
                                .detached()
                                .addContent(expandableSectionContent()
                                        .text("This content is visible only when the component is expanded."))))
                .addItem(stackItem()
                        .add(expandableSection("detached-expandable-section")
                                .detached()
                                .addToggle(expandableSectionToggle("Show more", "Show less"))));
        // @end region = detached
    }
}
