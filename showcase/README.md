# PatternFly Java Showcase

The [showcase](https://patternfly-java.github.io/) for PatternFly Java is inspired by the [PatternFly](https://www.patternfly.org/) website. It provides pages for all supported charts, components, layouts and extensions. The showcase is published to https://patternfly-java.github.io/.

## Development

In the development mode, the Java code is transpiled to JavaScript using J2CL. The HTML and CSS are transpiled to JavaScript
using Parcel. Changes to HTML and CSS will be detected by Parcel, and the browser reloads the page automatically.
Changes to the Java code will be detected by the J2CL Maven plugin, but you need to reload the browser manually.

To start the showcase in development mode, run the following command in the root directory:

```shell
mvn j2cl:watch -P showcase
```

and wait until you see the message

```
[INFO] -----  Build Complete: ready for browser refresh  -----
```

In another shell run

```shell
cd showcase
npm run watch
```

This will open a browser at http://localhost:1234.

## Production

To build the showcase for production, run the following command in the root directory:

```shell
mvn clean package -P showcase,prod
cd showcase
mvn com.github.eirslett:frontend-maven-plugin:npm@http-server

```
After a successful build, open https://localhost:8080
