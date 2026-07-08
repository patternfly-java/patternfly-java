[![Verify Codebase](https://github.com/patternfly-java/patternfly-java/actions/workflows/verify.yml/badge.svg)](https://github.com/patternfly-java/patternfly-java/actions/workflows/verify.yml) [![Javadoc](https://img.shields.io/badge/JavaDoc-Online-green)](https://patternfly-java.github.io/apidocs/) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/patternfly-java/patternfly-java) [![Maven Central](https://img.shields.io/maven-central/v/org.patternfly/patternfly-java-parent)](https://central.sonatype.com/search?q=g%3Aorg.patternfly) ![GWT3/J2CL compatible](https://img.shields.io/badge/GWT3/J2CL-compatible-brightgreen.svg) [![Chat on Gitter](https://badges.gitter.im/patternfly-java/patternfly-java.svg)](https://app.gitter.im/#/room/#pf4-java_core:gitter.im)

# PatternFly Java

PatternFly Java is a 100% Java implementation of [PatternFly](https://www.patternfly.org/) without any JavaScript dependencies (except for [charts](https://www.npmjs.com/package/@patternfly-java/charts)). Built on [Elemento](https://github.com/hal/elemento)'s builder API, compatible with both GWT and J2CL.

```java
card().flat().rounded().large()
    .addHeader(cardHeader().addTitle(cardTitle("Title")))
    .addBody(cardBody().textContent("Body"))
    .addFooter(cardFooter().textContent("Footer"));
```

## Quick Start

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.patternfly</groupId>
            <artifactId>patternfly-java-bom</artifactId>
            <version>0.9.4</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

Then add `patternfly-java-gwt` (GWT) or `patternfly-java-j2cl` (J2CL) as a dependency. See the [Get Started](https://patternfly-java.github.io/get-started) guide for full setup instructions.

## Resources

- [Showcase](https://patternfly-java.github.io/) - Interactive demos of all components and layouts
- [API Documentation](https://patternfly-java.github.io/apidocs/) - Javadoc
- [Get Started](https://patternfly-java.github.io/get-started) - Installation and setup
- [API Design](https://patternfly-java.github.io/concepts/api-design) - How the fluent builder API works
- [Contributing](CONTRIBUTING.md) - How to contribute

## Get Involved

PatternFly Java is still under development. Join the [chat](https://app.gitter.im/#/room/#pf4-java_core:gitter.im), enter the [discussions](https://github.com/orgs/patternfly-java/discussions), or use the [issues](https://github.com/patternfly-java/patternfly-java/issues) to report bugs or request features.
