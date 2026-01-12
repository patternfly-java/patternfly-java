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

import java.util.List;

import org.patternfly.component.list.DataList;
import org.patternfly.component.list.DataListItem;

import static java.util.Collections.emptyList;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.list.DataList.dataList;
import static org.patternfly.component.list.DataListCell.dataListCell;
import static org.patternfly.component.list.DataListItem.dataListItem;
import static org.patternfly.icon.IconSets.fas.user;

public class HasItemsDemo {

    public void hasItemsDemo() {
        // @start region = hasItems
        record User(String id, String name, boolean valid) {}

        // construction time
        List<User> users = emptyList(); // @replace substring = 'emptyList;' replacement = "findUsers(...)"
        DataList dl = dataList()
                .addItems(users, user -> dataListItem(user.id())
                        .store("user", user)
                        .addCell(dataListCell().icon(user()))
                        .addCell(dataListCell()
                                .add(span()
                                        .id(user.id())
                                        .text(user.name()))));

        // later, responding to an event or something similar
        for (DataListItem item : dl) {
            User user = item.get("user");
            item.toggle("invalid-user", !user.valid());
        }
        // @end region = hasItems
    }
}
