import java.util.Random;

import org.patternfly.component.icon.Icon;
import org.patternfly.component.icon.IconSize;

import static org.patternfly.component.icon.Icon.icon;
import static org.patternfly.icon.IconSets.fas.check;
import static org.patternfly.icon.IconSets.fas.exclamationTriangle;
import static org.patternfly.icon.IconSets.fas.filter;
import static org.patternfly.style.Status.warning;

public class IconDemo {

    public void iconDemo() {
        // @start region = icon
        icon(check());
        icon(filter())
                .size(IconSize.lg);
        icon(exclamationTriangle())
                .inline()
                .status(warning);
        // @end region = icon
    }

    public void progressDemo() {
        // @start region = progress
        Icon icon = icon(check()).progress(true);
        boolean finished = new Random().nextBoolean(); // @replace substring = 'new Random().nextBoolean();' replacement = "..."
        if (finished) {
            icon.progress(false);
        }
        // @end region = progress
    }
}
