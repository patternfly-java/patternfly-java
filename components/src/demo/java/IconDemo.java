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
