# PatternFly Java

PatternFly Java is a 💯 Java implementation of [PatternFly](https://www.patternfly.org/) without any JavaScript dependencies (except for the charts – see below). Its goal is to provide an easy-to-use, elegant, and efficient API to build complex web applications with PatternFly in Java. PatternFly Java integrates with and builds upon Elemento's [builder API](https://hal-console.gitbook.io/elemento/builder-api). It works with both GWT and J2CL. The following code snippet gives a taste of what PatternFly Java looks like:

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
                                .addItem(navigationItem("get-involved", "Get involved", "/get-involved")))))
        .addMain(pageMain("main-id")
                .addSection(pageMainSection()
                        .light()
                        .add(textContent()
                                .add(title(1, "PatternFly - Java"))
                                .add(p()
                                        .add(a("https://github.com/patternfly-java/patternfly-java", "_blank")
                                                .textContent("PatternFly Java"))
                                        .add(" is a 💯 Java implementation of ")
                                        .add(a("https://www.patternfly.org/", "_blank")
                                                .textContent("PatternFly"))
                                        .add(" without any JavaScript dependencies based on GWT/J2CL and ")
                                        .add(a("https://github.com/hal/elemento", "_blank")
                                                .textContent("Elemento"))
                                        .add("."))))));
```

PatternFly Java aims to provide almost complete support for all components, charts, extensions, and layouts. This showcase demonstrates all currently supported components and layouts. To get all the details about using PatternFly Java, look at the [API documentation](https://patternfly-java.github.io/apidocs/).

## Charts

To use charts, you need to install the [`@patternfly-java/charts`](https://www.npmjs.com/package/@patternfly-java/charts) NPM package. This package wraps the supported PatternFly React Chart components as web components.

Install the package using npm:

```
npm install @patternfly-java/charts
```

Import it in your JavaScript file:

```js
import "@patternfly-java/charts/dist/charts";
```
