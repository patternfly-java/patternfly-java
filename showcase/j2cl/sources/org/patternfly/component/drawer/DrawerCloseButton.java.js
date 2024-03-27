goog.module('org.patternfly.component.drawer.DrawerCloseButton');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.MouseEvent.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.drawer.Drawer');
goog.require('org.patternfly.component.drawer.DrawerSubComponent');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.icon.IconSets.fas');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const DrawerCloseButton = goog.require('org.patternfly.component.drawer.DrawerCloseButton$impl');
exports = DrawerCloseButton;
