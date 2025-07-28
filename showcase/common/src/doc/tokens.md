# Tokens

PatternFly Java comes with predefined enum constants for all PatternFly design [tokens](https://www.patternfly.org/tokens/about-tokens). They are defined in the enum class [`org.patternfly.token.Token`](https://patternfly-java.github.io/apidocs/org/patternfly/token/Token.html):

```java
public enum Token {

    // enum constants omitted
    ;

    /** The CSS custom property name starting with <code>--pf-t</code> */
    public final String name;
    /** The default value for the custom property. */
    public final String value;
    /** The property name wrapped in <code>var()</code>. */
    public final String var;

    Token(String name, String value, String var) {
        this.name = name;
        this.value = value;
        this.var = var;
    }
}
```

Here's an example of how to use the token definitions:

```java
import elemental2.dom.HTMLElement;

import static org.patternfly.token.Token.globalFontSizeSm;
import static org.patternfly.token.Token.globalTextColorDisabled;

HTMLElement container = div()
        .style("color", globalTextColorDisabled.var)
        .style("font-size", globalFontSizeSm.var)
        .element();
```
