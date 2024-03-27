goog.module('org.patternfly.showcase.component.JumpLinksComponent');

goog.require('elemental2.dom.HTMLAnchorElement.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.Class');
goog.require('java.util.function.Supplier');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.jumplinks.JumpLinks');
goog.require('org.patternfly.component.jumplinks.JumpLinksItem');
goog.require('org.patternfly.component.jumplinks.JumpLinksList');
goog.require('org.patternfly.showcase.ApiDoc');
goog.require('org.patternfly.showcase.ApiDoc.Type');
goog.require('org.patternfly.showcase.Code');
goog.require('org.patternfly.showcase.Data');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('org.patternfly.showcase.component.Component.$Overlay');
goog.require('org.patternfly.style.Breakpoint');
goog.require('org.patternfly.style.Breakpoints');
goog.require('org.patternfly.style.ExpandableModifier');
goog.require('vmbootstrap.Casts');

const JumpLinksComponent = goog.require('org.patternfly.showcase.component.JumpLinksComponent$impl');
exports = JumpLinksComponent;
