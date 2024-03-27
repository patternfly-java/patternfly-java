goog.module('org.patternfly.component.drawer.DrawerPanelHead');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MutationRecord.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.jboss.elemento.Attachable');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.drawer.Drawer');
goog.require('org.patternfly.component.drawer.DrawerCloseButton');
goog.require('org.patternfly.component.drawer.DrawerPanelBody');
goog.require('org.patternfly.component.drawer.DrawerSubComponent');
goog.require('org.patternfly.core.ElementDelegate');
goog.require('org.patternfly.handler.ToggleHandler');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.NoPadding');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const DrawerPanelHead = goog.require('org.patternfly.component.drawer.DrawerPanelHead$impl');
exports = DrawerPanelHead;
