# PatternFly Java Showcase

The [showcase](https://patternfly-java.github.io/) for PatternFly Java is inspired by the [PatternFly](https://www.patternfly.org/) website. It provides pages for all supported components, layouts and extensions. The J2CL variant of the showcase is published to https://patternfly-java.github.io/.

The bulk of the showcase code is in the [`common`](https://github.com/patternfly-java/patternfly-java/blob/main/showcase/common/src/main/java/org/patternfly/showcase/Showcase.java#L52) module. The [`gwt`](https://github.com/patternfly-java/patternfly-java/blob/main/showcase/gwt/src/main/java/org/patternfly/showcase/Main.java#L22) and [`j2cl`](https://github.com/patternfly-java/patternfly-java/blob/main/showcase/j2cl/src/main/java/org/patternfly/showcase/Main.java#L22) modules are just thin wrappers, contain just bootstrapping code and depend on the `common` module.

# Build

To build the showcase follow these steps

## GWT

### Development Mode

```shell
mvn --projects org.patternfly:patternfly-java-showcase-gwt --also-make -P showcase gwt:devmode
```

Open http://localhost:8888/showcase

### Production Mode

```shell
mvn --projects org.patternfly:patternfly-java-showcase-gwt --also-make -P prod,showcase install
```

The compiled HTML, JavaScript and CSS filed are in `showcase/gwt/target/showcase`. Please use a local HTTP server like https://www.npmjs.com/package/http-server to serve the showcase:

```shell
http-server showcase/gwt/target/showcase
```

Open http://localhost:8080

## J2CL

### Development Mode

```shell
mvn --projects org.patternfly:patternfly-java-showcase-j2cl --also-make -P showcase j2cl:watch
```

In another shell execute

```shell
yarn run watch
```

This will open http://localhost:1234.

### Production Mode

```shell
mvn --projects org.patternfly:patternfly-java-showcase-j2cl --also-make -P prod,showcase install
```

The compiled HTML, JavaScript and CSS filed are in `showcase/j2cl/target/showcase`. Please use a local HTTP server like https://www.npmjs.com/package/http-server to serve the showcase:

```shell
http-server showcase/j2cl/target/showcase
```

Open http://localhost:8080

# Feedback

Please let us know if you have trouble building the showcase. File an [issue](https://github.com/patternfly-java/patternfly-java/issues/new) or join the [chat](https://app.gitter.im/#/room/#pf4-java_core:gitter.im).
