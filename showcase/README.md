# PatternFly Java Showcase

The [showcase](https://patternfly-java.github.io/) for PatternFly Java is inspired by the [PatternFly](https://www.patternfly.org/) website. It provides pages for all supported components, layouts and extensions.

The bulk of the showcase code is in the [`common`](https://github.com/patternfly-java/patternfly-java/tree/main/showcase/common) module. The `gwt` and `j2cl` modules contain just some bootstrapping code and depend on the `common` module.

# Build

To build the showcase follow theses steps

## GWT

### Development Mode

```shell
cd $PATTERNFLY_JAVA_HOME
mvn -Dquickly install
cd showcase/gwt
mvn gwt:devmode
open http://localhost:8888/showcase
```

### Production Mode

```shell
cd $PATTERNFLY_JAVA_HOME
mvn --projects org.patternfly:patternfly-java-showcase-gwt --also-make -P prod,showcase install
```

The compiled HTML, JavaScript and CSS filed are in `showcase/gwt/target/patternfly-java-showcase-gwt-<version>-gwt-app`. Please use a local HTTP server like https://www.npmjs.com/package/http-server open the showcase:

```shell
http-server showcase/gwt/target/patternfly-java-showcase-gwt-0.2.2-SNAPSHOT-gwt-app
open http://localhost:8080/showcase
```

## J2CL

### Development Mode

```shell
cd $PATTERNFLY_JAVA_HOME
mvn --projects org.patternfly:patternfly-java-showcase-j2cl --also-make -P showcase j2cl:watch
```

In another shell execute

```shell
cd $PATTERNFLY_JAVA_HOME/showcase/j2cl
yarn run watch
```

### Production Mode

```shell
cd $PATTERNFLY_JAVA_HOME
mvn --projects org.patternfly:patternfly-java-showcase-j2cl --also-make -P prod,showcase install
```

The compiled HTML, JavaScript and CSS filed are in `showcase/j2cl/target/showcase`. Please use a local HTTP server like https://www.npmjs.com/package/http-server open the showcase:

```shell
http-server showcase/j2cl/target/showcase
open http://localhost:8080
```

# Feedback

Please let me know if you have troublw building the showcase. File an [issue](https://github.com/patternfly-java/patternfly-java/issues/new) or join the [chat](https://app.gitter.im/#/room/#pf4-java_core:gitter.im).