goog.module('org.patternfly.component.code.CodeEditorLink');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.EventType');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.code.CodeEditor');
goog.require('org.patternfly.component.code.CodeEditorSubComponent');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.icon.IconSets.patternfly');
goog.require('vmbootstrap.Casts');

const CodeEditorLink = goog.require('org.patternfly.component.code.CodeEditorLink$impl');
exports = CodeEditorLink;
