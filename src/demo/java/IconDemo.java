import java.util.Random;

import org.patternfly.components.icon.Icon;

import static org.patternfly.components.icon.Icon.icon;
import static org.patternfly.layout.Icons.check;
import static org.patternfly.layout.Icons.exclamationTriangle;
import static org.patternfly.layout.Icons.fas;
import static org.patternfly.layout.Icons.filter;
import static org.patternfly.layout.Size.lg;
import static org.patternfly.layout.Status.warning;

public class IconDemo {

    public void iconDemo() {
        // @start region = icon
        icon(fas(check));
        icon(fas(filter))
                .size(lg);
        icon(fas(exclamationTriangle))
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
