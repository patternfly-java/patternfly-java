goog.module('org.patternfly.component.code.CodeBlock');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLPreElement.$Overlay');
goog.require('elemental2.dom.MutationRecord.$Overlay');
goog.require('java.lang.CharSequence');
goog.require('java.lang.String');
goog.require('java.util.Arrays');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Attachable');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.Id');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.code.CodeBlockAction');
goog.require('org.patternfly.component.code.CodeBlockActions');
goog.require('org.patternfly.component.code.CodeBlockHeader');
goog.require('org.patternfly.component.expandable.ExpandableSection');
goog.require('org.patternfly.component.expandable.ExpandableSectionContent');
goog.require('org.patternfly.component.expandable.ExpandableSectionToggle');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const CodeBlock = goog.require('org.patternfly.component.code.CodeBlock$impl');
exports = CodeBlock;
