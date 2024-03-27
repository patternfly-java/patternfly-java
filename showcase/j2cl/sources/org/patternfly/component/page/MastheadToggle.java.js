goog.module('org.patternfly.component.page.MastheadToggle');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.MouseEvent.$Overlay');
goog.require('java.lang.Boolean');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.page.MastheadSubComponent');
goog.require('org.patternfly.component.page.Page');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.icon.IconSets.fas');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const MastheadToggle = goog.require('org.patternfly.component.page.MastheadToggle$impl');
exports = MastheadToggle;
