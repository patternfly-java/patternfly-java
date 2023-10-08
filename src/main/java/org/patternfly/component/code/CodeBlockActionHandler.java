package org.patternfly.component.code;

@FunctionalInterface
public interface CodeBlockActionHandler {

    void onAction(CodeBlockAction action, CodeBlock codeBlock);
}
