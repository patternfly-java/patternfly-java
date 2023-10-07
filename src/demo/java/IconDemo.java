import java.util.Random;

import org.patternfly.component.icon.Icon;

import static org.patternfly.component.icon.Icon.icon;
import static org.patternfly.layout.PredefinedIcon.check;
import static org.patternfly.layout.PredefinedIcon.exclamationTriangle;
import static org.patternfly.layout.PredefinedIcon.filter;
import static org.patternfly.layout.Size.lg;
import static org.patternfly.layout.Status.warning;

public class IconDemo {

    public void iconDemo() {
        // @start region = icon
        icon(check);
        icon(filter)
                .size(lg);
        icon(exclamationTriangle)
                .inline()
                .status(warning);
        // @end region = icon
    }

    public void progressDemo() {
        // @start region = progress
        Icon icon = icon(check).inProgress();
        boolean finished = new Random().nextBoolean(); // @replace substring='new Random().nextBoolean();' replacement="..."
        if (finished) {
            icon.inProgress(false);
        }
        // @end region = progress
    }
}
