# Get started

PatternFly Java is available on [Maven Central](https://central.sonatype.com/search?q=g%3Aorg.patternfly). The easiest way is to import its BOM

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.patternfly</groupId>
            <artifactId>patternfly-java-bom</artifactId>
            <version>0.2.2</version>
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

## Dependencies

PatternFly Java has **no JavaScript** dependencies. Everything necessary is included in the code base for both GWT and J2CL. However, Patternfly Java does **not** come with **stylesheets**. You are expected to include or bundle the necessary stylesheets yourself. Take a look at the PatternFly [getting started guide](https://www.patternfly.org/get-started/develop#htmlcss) for more information.

You can also take a look at the code of the [showcase](https://github.com/patternfly-java/patternfly-java/tree/main/showcase#readme) to see how to set up and use PatternFly Java.

# Modules

PatternFly Java consists of these Maven modules (a-z):

| Module                     | Description                      |
|----------------------------|----------------------------------|
| patternfly-java-bom        | Bill of materials                |
| patternfly-java-codeeditor | PatternFly codeeditor            |
| patternfly-java-components | PatternFly components            |
| patternfly-java-core       | Core PatternFly Java classes     |
| patternfly-java-finder     | PatternFly Java Finder extension |
| patternfly-java-gwt        | PatternFly Java for GWT          |
| patternfly-java-icons      | PatternFly Java icons            |
| patternfly-java-j2cl       | PatternFly Java for J2CL         |
| patternfly-java-layouts    | PatternFly Java layouts          |

Here’s the dependency graph of these maven modules and its external dependencies:

![Dependency graph](https://raw.githubusercontent.com/patternfly-java/patternfly-java/main/dependency-graph.png)
