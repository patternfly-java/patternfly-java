goog.module('org.patternfly.component.skeleton.Skeleton');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponentFlat');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.skeleton.Shape');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Size');
goog.require('org.patternfly.style.Variable');
goog.require('org.patternfly.style.Variables');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Skeleton = goog.require('org.patternfly.component.skeleton.Skeleton$impl');
exports = Skeleton;
