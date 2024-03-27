goog.module('org.patternfly.showcase.component.SkeletonComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.Class');
goog.require('java.util.function.Supplier');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.skeleton.Shape');
goog.require('org.patternfly.component.skeleton.Skeleton');
goog.require('org.patternfly.showcase.ApiDoc.Type');
goog.require('org.patternfly.showcase.Code');
goog.require('org.patternfly.showcase.Data');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('org.patternfly.showcase.component.Component.$Overlay');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Size');
goog.require('vmbootstrap.Casts');

const SkeletonComponent = goog.require('org.patternfly.showcase.component.SkeletonComponent$impl');
exports = SkeletonComponent;
