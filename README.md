[![Verify Codebase](https://github.com/patternfly-java/patternfly-java/actions/workflows/verify.yml/badge.svg)](https://github.com/patternfly-java/patternfly-java/actions/workflows/verify.yml) [![Javadoc](https://img.shields.io/badge/JavaDoc-Online-green)](https://patternfly-java.github.io/apidocs/) [![Maven Central](https://img.shields.io/maven-central/v/org.patternfly/patternfly-java)](https://search.maven.org/search?q=g:org.patternfly%20AND%20a:patternfly-java) ![GWT3/J2CL compatible](https://img.shields.io/badge/GWT3/J2CL-compatible-brightgreen.svg) [![Chat on Gitter](https://badges.gitter.im/patternfly-java/patternfly-java.svg)](https://app.gitter.im/#/room/#pf4-java_core:gitter.im)

PatternFly Java is a Java implementation of [PatternFly 5](https://www.patternfly.org) based on GWT/J2CL and [Elemento](https://github.com/hal/elemento). Its goal is to provide an easy-to-use, elegant, and efficient API to build complex web applications with PatternFly in Java. The following code snippet gives a taste of what PatternFly Java looks like:

```java
body().add(page()
        .addSkipToContent(skipToContent("main-id"))
        .addMasthead(masthead()
                .addToggle(mastheadToggle())
                .addBrand(brand("/assets/your-logo.svg"), "#home"))
        .addSidebar(sidebar()
                .addBody(sidebarBody()
                        .addNavigation(navigation(flat)
                                .addItem(navigationItem("get-started", "Get started", "#get-started"))
                                .addItem(navigationItem("contribute", "Contribute", "#contribute"))
                                .addItem(navigationItem("get-in-touch", "Get in touch", "#get-in-touch")))))
        .addMain(pageMain("main-id")
                .addSection(pageMainSection()
                        .light()
                        .add(textContent()
                                .add(title(1, "PatternFly - Java"))
                                .add(p()
                                        .add(a("https://github.com/patternfly-java/patternfly-java", "_blank")
                                                .textContent("PatternFly Java"))
                                        .add(" is a Java implementation of ")
                                        .add(a("https://www.patternfly.org/", "_blank")
                                                .textContent("PatternFly"))
                                        .add(" based on GWT and ")
                                        .add(a("https://github.com/hal/elemento", "_blank")
                                                .textContent("Elemento"))
                                        .add("."))))));
```

To see more components in action, head over to the PatternFly Java [showcase](https://patternfly-java.github.io/showcase/). It demonstrates the usage of all currently supported components. To get all details about how to use PatternFly Java take a look at the [API documentation](https://patternfly-java.github.io/apidocs/).

# Getting Started

PatternFly Java is available in [Maven Central](https://search.maven.org/search?q=g:org.patternfly%20AND%20a:patternfly-java). To use it, add the following dependency to your POM:

```xml
<dependency>
    <groupId>org.patternfly</groupId>
    <artifactId>patternfly-java</artifactId>
    <version>0.1.5</version>
</dependency>
```

If you're using GWT, inherit from `org.patternfly.PatternFly`:

```xml
<module>
    <inherits name="org.patternfly.PatternFly"/>
</module>
```

# API Design

PatternFly Java integrates with and builds upon Elemento's [builder API](https://github.com/hal/elemento#builder-api). Static factory methods are used to create the components, and public instances methods modify and add child elements.

```java
expandableSection()
        .indented()
        .addToggle(expandableSectionToggle("Show more", "Show less"))
        .addContent(expandableSectionContent()
                .textContent("This content is visible only when the component is expanded."))
```

```java
dropdown()
        .addToggle(menuToggle("Dropdown"))
        .addMenu(menu()
                .addContent(menuContent()
                        .addList(menuList()
                                .addItem(actionMenuItem("item-0", "Action"))
                                .addItem(linkMenuItem("item-1", "Link", "#home"))
                                .addItem(actionMenuItem("item-2", "Disabled action")
                                        .disabled())
                                .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                        .disabled())
                                .addDivider()
                                .addItem(actionMenuItem("item-4", "Separated action"))
                                .addItem(linkMenuItem("item-5", "Separated link", "#home")))))
```

# PatternFly Assets

PatternFly Java does *not* come with stylesheets, fonts, or other static PatternFly assets. We don't want to dictate how to embed these assets. One way is to download or get PatternFly using a CDN provider like [jsDelivr](https://www.jsdelivr.com/package/npm/@patternfly/patternfly) and include the stylesheets in your HTML page. See the [getting started](https://www.patternfly.org/get-started/develop#htmlcss) section on the PatternFly website for more details.

# Third Party

Some PatternFly components rely on 3rd party dependencies. If you want to use these components, you must add a call to `ThirdParty.injectXyz()` in your application.

| Components                                                    | Dependency                                           | Version | Code                        |
|---------------------------------------------------------------|------------------------------------------------------|---------|-----------------------------|
| Dropdown<br>SingleSelect<br>MultiSelect<br>Popover<br>Tooltip | [Popper](https://popper.js.org/)                     | 2.11.8  | `ThirdParty.injectPopper()` |
| CodeEditor                                                    | [Monaco](https://microsoft.github.io/monaco-editor/) | 0.44.0  | `ThirdParty.injectMonaco()` |

If you want to inject all dependencies, please use `ThirdPrty.injectAll()`

# PatternFly Support

PatternFly Java aims to provide almost complete support for all components, charts, extensions, and layouts. The following issues show how many components, charts, extensions, and layouts have already been implemented.

- [component progress](https://github.com/patternfly-java/patternfly-java/issues/125)
- [chart progress](https://github.com/patternfly-java/patternfly-java/issues/127)
- [extension progress](https://github.com/patternfly-java/patternfly-java/issues/126)
- [layout progress](https://github.com/patternfly-java/patternfly-java/issues/128)

# Get Involved

PatternFly Java is still under development. The API might change, and things might not work as expected. Please give it a try and share your feedback. Join the [chat](https://app.gitter.im/#/room/#pf4-java_core:gitter.im), enter the [discussions](https://github.com/orgs/patternfly-java/discussions) or use the GitHub [issues](https://github.com/patternfly-java/patternfly-java/issues) to report bugs or request new features.

Of course, you're welcome to [contribute](CONTRIBUTING.md) to PatternFly Java. If you like what you're seeing, leave us a star!
