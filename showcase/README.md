# PatternFly Java Showcase

The [showcase](https://patternfly-java.github.io/) for PatternFly Java is inspired by the [PatternFly](https://www.patternfly.org/) website. It provides pages for all supported components, layouts and extensions. The showcase is published to https://patternfly-java.github.io/.

To run the showcase, you can use the `showcase.sh` script:

```shell
USAGE:
    showcase.sh [FLAGS] <mode>

FLAGS:
    -c, --clean         Adds the 'clean' goal
    -h, --help          Prints help information
    -v, --version       Prints version information
    --no-color          Uses plain text output

ARGS:
    <mode>              One of 'd', 'dev', 'development', 'p', 'prod', or 'production'
```

## Development

Run `./showcase.sh dev`, wait until you see

```
[INFO] -----  Build Complete: ready for browser refresh  -----
```

then open another shell and run

```shell
npm run watch
```

This will open https://localhost:1234/.

## Production

Run `./showcase.sh prod`. After a successful build, open https://localhost:8080
