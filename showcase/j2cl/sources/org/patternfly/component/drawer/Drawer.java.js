goog.module('org.patternfly.component.drawer.Drawer');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponentFlat');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.Expandable');
goog.require('org.patternfly.component.drawer.DrawerContent');
goog.require('org.patternfly.component.drawer.DrawerPanel');
goog.require('org.patternfly.component.drawer.DrawerSection');
goog.require('org.patternfly.component.drawer.Position');
goog.require('org.patternfly.handler.ToggleHandler');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers');
goog.require('org.patternfly.style.Modifiers.Inline');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Drawer = goog.require('org.patternfly.component.drawer.Drawer$impl');
exports = Drawer;
