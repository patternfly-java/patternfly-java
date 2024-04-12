# Icons

PatternFly Java comes with predefined icons for

- FontAwesome brand ([fab](https://fontawesome.com/search?o=r&m=free&f=brands))
- FontAwesome regular ([far](https://fontawesome.com/search?o=r&m=free&s=regular))
- FontAwesome solid ([fas](https://fontawesome.com/search?o=r&m=free&s=solid)) and
- PatternFly icons ([patternfly](https://www.patternfly.org/design-foundations/icons/#patternfly-icons))

There are static factory methods in [`IconsSets`](https://patternfly-java.github.io/apidocs/org/patternfly/icon/IconSets.html) to easily use these icons. The icons are returned as instances of the [`PredefinedIcon`](https://patternfly-java.github.io/apidocs/org/patternfly/icon/PredefinedIcon.html) class, which is essentially an instance of an SVG builder and allows easy customization of the returned icon.

Components that support icons usually implement the interface [`WithIcon`](https://patternfly-java.github.io/apidocs/org/patternfly/component/WithIcon.html) or [`WithIconAndText`](https://patternfly-java.github.io/apidocs/org/patternfly/component/WithIconAndText.html) and thus use a common API.

```java
import static org.patternfly.component.IconPosition.start;
import static org.patternfly.icon.IconSets.fas.book;
import static org.patternfly.icon.IconSets.fas.cube;
import static org.patternfly.icon.IconSets.fas.flag;
import static org.patternfly.icon.IconSets.fas.globe;
import static org.patternfly.icon.IconSets.fas.plusCircle;
import static org.patternfly.icon.IconSets.patternfly.key;

DescriptionList dl = descriptionList()
        .addGroup(descriptionListGroup()
                .addTerm(descriptionListTerm("Name").icon(cube()))
                .addDescription(descriptionListDescription("Example")))
        .addGroup(descriptionListGroup()
                .addTerm(descriptionListTerm("Namespace").icon(book()))
                .addDescription(descriptionListDescription()
                        .add(a("#").textContent("mary-test"))))
        .addGroup(descriptionListGroup()
                .addTerm(descriptionListTerm("Labels").icon(key()))
                .addDescription(descriptionListDescription("example")))
        .addGroup(descriptionListGroup()
                .addTerm(descriptionListTerm("Pod selector").icon(globe()))
                .addDescription(descriptionListDescription()
                        .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                .inline().link())))
        .addGroup(descriptionListGroup()
                .addTerm(descriptionListTerm("Annotation").icon(flag()))
                .addDescription(descriptionListDescription("2 annotations")));
```

See also the PatternFly website about [icons](https://www.patternfly.org/design-foundations/icons#all-icons) to get an overview of the available icons.
