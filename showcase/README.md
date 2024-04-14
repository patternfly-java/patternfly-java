# PatternFly Java Showcase

The [showcase](https://patternfly-java.github.io/) for PatternFly Java is inspired by the [PatternFly](https://www.patternfly.org/) website. It provides pages for all supported components, layouts and extensions. The J2CL variant of the showcase is published to https://patternfly-java.github.io/.

The bulk of the showcase code is in the [`common`](https://github.com/patternfly-java/patternfly-java/blob/main/showcase/common/src/main/java/org/patternfly/showcase/Showcase.java#L52) module. The [`gwt`](https://github.com/patternfly-java/patternfly-java/blob/main/showcase/gwt/src/main/java/org/patternfly/showcase/Main.java#L22) and [`j2cl`](https://github.com/patternfly-java/patternfly-java/blob/main/showcase/j2cl/src/main/java/org/patternfly/showcase/Main.java#L22) modules are just thin wrappers, contain just bootstrapping code and depend on the `common` module.

# Build

To build the showcase you can use the `dev.sh` and `prod.sh` scripts:

## Development

```java
USAGE:
    dev.sh [FLAGS] <mode>

FLAGS:
    -c, --clean         Adds the 'clean' goal
    -h, --help          Prints help information
    -v, --version       Prints version information
    --no-color          Uses plain text output

ARGS:
    <mode>              One of 'gwt' or 'j2cl'
```

### GWT

Run `./dev.sh gwt`, then open http://localhost:8888/showcase

> [!WARNING]
> GWT development mode currently only supports hot code reloading of the `org.patternfly:patternfly-java-showcase-common` module.

### J2CL

Run `./dev.sh j2cl`, wait until you see

```
[INFO] -----  Build Complete: ready for browser refresh  -----
```

in the console then `cd showcase/j2cl` and run

```shell
yarn run watch
```

This will open https://localhost:1234/ in the browser.

## Production

```java
USAGE:
    prod.sh [FLAGS] <mode>

FLAGS:
    -c, --clean         Adds the 'clean' goal
    -h, --help          Prints help information
    -v, --version       Prints version information
    --no-color          Uses plain text output

ARGS:
    <mode>              One of 'gwt' or 'j2cl'
```

After a successful build, the script will open https://localhost:8080

# Feedback

Please let us know if you have trouble building the showcase. File an [issue](https://github.com/patternfly-java/patternfly-java/issues/new) or join the [chat](https://app.gitter.im/#/room/#pf4-java_core:gitter.im).
