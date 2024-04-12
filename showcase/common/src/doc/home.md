# PatternFly Java

PatternFly Java is a Java implementation of [PatternFly](https://www.patternfly.org/). Its goal is to provide an easy-to-use, elegant, and efficient API to build complex web applications with PatternFly in Java. PatternFly Java integrates with and builds upon Elemento's [builder API](https://github.com/hal/elemento#builder-api). It works with both GWT and J2CL. The following code snippet gives a taste of what PatternFly Java looks like:

```java
body().add(page()
        .addSkipToContent(skipToContent("main-id"))
        .addMasthead(masthead()
                .addToggle(mastheadToggle())
                .addBrand(brand("/assets/your-logo.svg"), "/home"))
        .addSidebar(sidebar()
                .addBody(sidebarBody()
                        .addNavigation(navigation(flat)
                                .addItem(navigationItem("get-started", "Get started", "/get-started"))
                                .addItem(navigationItem("contribute", "Contribute", "/contribute"))
                                .addItem(navigationItem("get-in-touch", "Get in touch", "/get-in-touch")))))
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
                                        .add(" based on GWT/J2CL and ")
                                        .add(a("https://github.com/hal/elemento", "_blank")
                                                .textContent("Elemento"))
                                        .add("."))))));
```

PatternFly Java aims to provide almost complete support for all components, charts, extensions, and layouts. This [showcase](https://patternfly-java.github.io/) demonstrates all currently supported components and layouts. To get all the details about using PatternFly Java, look at the [API documentation](https://patternfly-java.github.io/apidocs/).
