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
