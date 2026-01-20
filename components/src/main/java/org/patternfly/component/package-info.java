/**
 * Provides PatternFly component implementations for building web applications in Java.
 * <p>
 * This package contains the core components of PatternFly Java, a 100% Java implementation of
 * <a href="https://www.patternfly.org/">PatternFly</a> design system without any JavaScript dependencies.
 * It integrates with and builds upon <a href="https://hal-console.gitbook.io/elemento/builder-api">Elemento's builder API</a>
 * and works with both GWT and J2CL.
 *
 * <h2>Quick Start</h2>
 *
 * Components are created using static factory methods and configured using a fluent builder API:
 *
 * {@snippet :
 * import static org.patternfly.component.button.Button.button;
 * import static org.patternfly.component.alert.Alert.alert;
 * import static org.patternfly.component.card.Card.card;
 *
 * Button btn = button("Click me!");
 * Alert alert = alert(info, "Info", "This is an information message");
 * Card card = card()
 *         .flat()
 *         .rounded()
 *         .large();
 * }
 *
 * <h2>API Design</h2>
 *
 * The component API follows consistent patterns organized into these groups:
 *
 * <h3>Static Factory Methods</h3>
 *
 * Create components using static factory methods named after the component. These methods are overloaded
 * to accept required and optional arguments:
 *
 * {@snippet :
 * Button button1 = button("Click me!");
 * Button button2 = button("PatternFly", "https://www.patternfly.org");
 * }
 *
 * <h3>Add Methods</h3>
 *
 * Add subcomponents using {@code add<SubComponent>()} methods that return the parent component
 * for method chaining:
 *
 * {@snippet :
 * Dropdown dropdown = dropdown()
 *         .addToggle(menuToggle("Dropdown"))
 *         .addMenu(menu()
 *                 .addContent(menuContent()
 *                         .addList(menuList()
 *                                 .addItem(actionMenuItem("item-0", "Action")))));
 * }
 *
 * <h3>Builder/Modifier Methods</h3>
 *
 * Modify component appearance and behavior using chainable builder methods:
 *
 * {@snippet :
 * Card card = card()
 *         .flat()
 *         .rounded()
 *         .large();
 * }
 *
 * <h3>Event Handlers</h3>
 *
 * Register event handlers using {@code on<Event>()} methods. PatternFly Java defines
 * common event handlers in {@link org.patternfly.handler} that are reused across components:
 *
 * {@snippet :
 * Drawer drawer = drawer().id("drw")
 *         .onToggle((e, c, expanded) -> console.log("Drawer expanded: " + expanded));
 * }
 *
 * <h3>ARIA Methods</h3>
 *
 * Set ARIA attributes using {@code aria<Attribute>()} methods for accessibility:
 *
 * {@snippet :
 * Navigation navigation = navigation(flat)
 *         .ariaScrollBackLabel("← back")
 *         .ariaScrollForwardLabel("→ forward");
 * }
 *
 * <h2>Component Hierarchy</h2>
 *
 * All components extend from either:
 * <ul>
 *     <li>{@link BaseComponent} - Base class for HTML element-based components</li>
 *     <li>{@link BaseComponentSVG} - Base class for SVG element-based components</li>
 * </ul>
 *
 * These base classes implement <a href="https://hal-console.gitbook.io/elemento/builder-api#classes-and-interfaces">
 * Elemento interfaces</a> for element manipulation.
 *
 * <h2>Common Interfaces</h2>
 *
 * Components implement common interfaces to provide consistent behavior:
 *
 * <ul>
 *     <li>{@link org.patternfly.style.Modifiers Modifiers.*} - Toggle component flags (e.g., {@code plain()}, {@code inline()})</li>
 *     <li>{@link Closeable} - For components with closeable popups</li>
 *     <li>{@link org.patternfly.core.ComponentContext ComponentContext},
 *         {@link HasIdentifier}, {@link HasItems} - For parent-child component relationships</li>
 *     <li>{@link ComponentIcon}, {@link ComponentIconAndText} - For components with icons and text</li>
 *     <li>{@link ComponentProgress} - For components showing progress</li>
 *     <li>{@link Expandable} - For components with expandable content</li>
 *     <li>{@link HasValue}, {@link HasObservableValue} - For components with values</li>
 *     <li>{@link Validatable}, {@link ValidationStatus} - For components with validation</li>
 * </ul>
 *
 * <h2>Available Components</h2>
 *
 * This package provides a comprehensive set of PatternFly components including:
 * <p>
 * <strong>Actions &amp; Controls:</strong> Button, Switch, Slider, Number input
 * <br>
 * <strong>Navigation:</strong> Navigation, Breadcrumb, Tabs, Jump links, Wizard
 * <br>
 * <strong>Data Display:</strong> Table, Data list, Card, Label, Badge, Timestamp
 * <br>
 * <strong>Feedback:</strong> Alert, Modal, Notification, Progress, Spinner, Skeleton
 * <br>
 * <strong>Forms:</strong> Form, Input group, Text input group
 * <br>
 * <strong>Menus:</strong> Dropdown, Menu, Toolbar, Toggle group
 * <br>
 * <strong>Containers:</strong> Accordion, Drawer, Panel, Popover, Tooltip, Empty state
 * <br>
 * <strong>Page Layout:</strong> Page, Sidebar, Masthead, Skip to content, Back to top
 * <br>
 * <strong>Content:</strong> Content, Title, Divider, Icon, Brand, Avatar
 * <br>
 * <strong>Advanced:</strong> Code block, Tree view, Expandable section, Hint, Help
 *
 * <h2>Example: Building a Page</h2>
 *
 * Here's a complete example showing how components work together:
 *
 * {@snippet :
 * body().add(page()
 *         .addSkipToContent(skipToContent("main-id"))
 *         .addMasthead(masthead()
 *                 .addMain(mastheadMain()
 *                         .addToggle(mastheadToggle())
 *                         .addBrand(mastheadBrand()
 *                                 .addLogo(mastheadLogo("/"))))
 *                 .addContent(mastheadContent()
 *                         .addToolbar(toolbar())))
 *         .addSidebar(pageSidebar()
 *                 .addBody(pageSidebarBody()
 *                         .addNavigation(navigation(flat)
 *                                 .addItem(navigationItem("get-started", "Get started", "/get-started"))
 *                                 .addItem(navigationItem("get-involved", "Get involved", "/get-involved")))))
 *         .addMain(pageMain("main-id")
 *                 .addSection(pageSection()
 *                         .add(content()
 *                                 .add(title(1, "PatternFly - Java"))
 *                                 .add(p()
 *                                         .add("PatternFly Java is a 100% Java implementation of PatternFly."))))));
 * }
 *
 * @see <a href="https://www.patternfly.org/">PatternFly Design System</a>
 * @see <a href="https://patternfly-java.github.io/">PatternFly Java Showcase</a>
 * @see <a href="https://patternfly-java.github.io/apidocs/">API Documentation</a>
 * @see <a href="https://hal-console.gitbook.io/elemento/builder-api">Elemento Builder API</a>
 */
package org.patternfly.component;