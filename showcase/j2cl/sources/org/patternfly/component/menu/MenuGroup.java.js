goog.module('org.patternfly.component.menu.MenuGroup');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLHeadingElement.$Overlay');
goog.require('elemental2.dom.HTMLUListElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.menu.MenuList');
goog.require('org.patternfly.component.menu.MenuSubComponent');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const MenuGroup = goog.require('org.patternfly.component.menu.MenuGroup$impl');
exports = MenuGroup;
