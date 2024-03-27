goog.module('org.patternfly.showcase.component.ListComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.Class');
goog.require('java.util.function.Supplier');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.list.List');
goog.require('org.patternfly.component.list.ListItem');
goog.require('org.patternfly.icon.IconSets.fas');
goog.require('org.patternfly.icon.IconSets.patternfly');
goog.require('org.patternfly.showcase.ApiDoc.Type');
goog.require('org.patternfly.showcase.Code');
goog.require('org.patternfly.showcase.Data');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('org.patternfly.showcase.component.Component.$Overlay');
goog.require('vmbootstrap.Casts');

const ListComponent = goog.require('org.patternfly.showcase.component.ListComponent$impl');
exports = ListComponent;
