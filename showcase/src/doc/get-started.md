# Get started

PatternFly Java is available on [Maven Central](https://central.sonatype.com/search?q=g%3Aorg.patternfly). The easiest way is to import its BOM

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.patternfly</groupId>
            <artifactId>patternfly-java-bom</artifactId>
            <version>0.6.14-SNAPSHOT</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

and add a dependency to either

```xml
<dependency>
    <groupId>org.patternfly</groupId>
    <artifactId>patternfly-java-gwt</artifactId>
    <type>gwt-lib</type>
</dependency>
```

or

```xml
<dependency>
    <groupId>org.patternfly</groupId>
    <artifactId>patternfly-java-j2cl</artifactId>
</dependency>
```

depending on your stack. If you're using GWT, inherit from `org.patternfly.PatternFly`:

```xml
<module>
    <inherits name="org.patternfly.PatternFly"/>
</module>
```

## JavaScript Dependencies

PatternFly Java has **no JavaScript** dependencies. Everything necessary is included in the code base for both GWT and J2CL. The only exception is the charts package, which wraps PatternFly React Chart components as web components so they can be used from Java.

```
npm install @patternfly-java/charts
```

```js
import "@patternfly-java/charts/dist/charts";
```

## Stylesheets

PatternFly Java does **not** come with PatternFly styles. You have to provide them yourself. Please follow the PatternFly [getting started guide](https://www.patternfly.org/get-started/develop/#develop-with-htmlcss).

In addition, PatternFly Java defines a set of its own styles in the `core` and `extensions/finder` packages. Unlike other components that map to existing PatternFly components, the finder extension has no related PatternFly component and relies entirely on its own styles.

All NPM packages are published under the [`@patternfly-java`](https://www.npmjs.com/org/patternfly-java) scope and share the same version number as the Maven artifacts.

### @patternfly-java/core

Bundles the PatternFly Java CSS stylesheets required by PatternFly Java components and layouts.

```
npm install @patternfly-java/core
```

```js
import "@patternfly-java/core";
```

### @patternfly-java/finder

Provides the CSS for the [finder](https://patternfly-java.github.io/extensions/finder) extension. Only needed if you use the finder component.

```
npm install @patternfly-java/finder
```

```js
import "@patternfly-java/finder";
```

# Modules

PatternFly Java consists of these Maven modules (a-z):

| Module                     | Description           |
|----------------------------|-----------------------|
| patternfly-java-bom        | Bill of materials     |
| patternfly-java-charts     | Charts                |
| patternfly-java-codeeditor | Code editor extension |
| patternfly-java-components | Components            |
| patternfly-java-core       | Core classes          |
| patternfly-java-finder     | Finder extension      |
| patternfly-java-gwt        | GWT support           |
| patternfly-java-icons      | Icons                 |
| patternfly-java-j2cl       | J2CL support          |
| patternfly-java-layouts    | Layouts               |
| patternfly-java-tokens     | Tokens                |

Here’s the dependency graph of these maven modules and their external dependencies:

![Dependency graph](https://raw.githubusercontent.com/patternfly-java/patternfly-java/main/dependency-graph.png)
