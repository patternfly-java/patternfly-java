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

/**
 * Provides classes and interfaces for working with predefined SVG icons in PatternFly Java.
 * <p>
 * PatternFly Java comes with predefined icons from multiple icon sets:
 * <ul>
 *   <li><a href="https://fontawesome.com/search?o=r&m=free&f=brands">FontAwesome brand (fab)</a></li>
 *   <li><a href="https://fontawesome.com/search?o=r&m=free&s=regular">FontAwesome regular (far)</a></li>
 *   <li><a href="https://fontawesome.com/search?o=r&m=free&s=solid">FontAwesome solid (fas)</a></li>
 *   <li><a href="https://www.patternfly.org/design-foundations/icons/#patternfly-icons">PatternFly icons</a></li>
 * </ul>
 *
 * <h2>Usage</h2>
 * <p>
 * The {@link org.patternfly.icon.IconSets} interface provides static factory methods to easily access these icons.
 * Icons are returned as instances of {@link org.patternfly.icon.PredefinedIcon}, which extends SVG builder interfaces
 * and allows easy customization of the icon's SVG element.
 * </p>
 * <p>
 * Components that support icons typically implement the {@code ComponentIcon} or {@code ComponentIconAndText} interfaces
 * and use a common API for icon integration.
 * </p>
 *
 * <h3>Example</h3>
 * <p>
 * The following example demonstrates using icons with a description list component:
 * </p>
 * {@snippet :
 * import static org.patternfly.component.IconPosition.start;
 * import static org.patternfly.icon.IconSets.fas.book;
 * import static org.patternfly.icon.IconSets.fas.cube;
 * import static org.patternfly.icon.IconSets.fas.flag;
 * import static org.patternfly.icon.IconSets.fas.globe;
 * import static org.patternfly.icon.IconSets.fas.plusCircle;
 * import static org.patternfly.icon.IconSets.patternfly.key;
 *
 * DescriptionList dl = descriptionList()
 *         .addGroup(descriptionListGroup()
 *                 .addTerm(descriptionListTerm("Name").icon(cube()))
 *                 .addDescription(descriptionListDescription("Example")))
 *         .addGroup(descriptionListGroup()
 *                 .addTerm(descriptionListTerm("Namespace").icon(book()))
 *                 .addDescription(descriptionListDescription()
 *                         .add(a("#").textContent("mary-test"))))
 *         .addGroup(descriptionListGroup()
 *                 .addTerm(descriptionListTerm("Labels").icon(key()))
 *                 .addDescription(descriptionListDescription("example")))
 *         .addGroup(descriptionListGroup()
 *                 .addTerm(descriptionListTerm("Pod selector").icon(globe()))
 *                 .addDescription(descriptionListDescription()
 *                         .add(button().iconAndText(plusCircle(), "app=MyApp", start)
 *                                 .inline().link())))
 *         .addGroup(descriptionListGroup()
 *                 .addTerm(descriptionListTerm("Annotation").icon(flag()))
 *                 .addDescription(descriptionListDescription("2 annotations")));
 * }
 *
 * <h3>Dynamic Icon Loading</h3>
 * <p>
 * If you need to load an icon based on a string name, use {@link org.patternfly.icon.PredefinedIcon#predefinedIcon(String)}.
 * The name can optionally include the icon set prefix (e.g., "fab.github" or "patternfly.user"). If no prefix is specified,
 * the "fas" (FontAwesome solid) icon set is used by default.
 * </p>
 *
 * @see org.patternfly.icon.IconSets
 * @see org.patternfly.icon.PredefinedIcon
 * @see org.patternfly.icon.IconSpec
 * @see <a href="https://www.patternfly.org/design-foundations/icons">PatternFly Icons</a>
 */
package org.patternfly.icon;