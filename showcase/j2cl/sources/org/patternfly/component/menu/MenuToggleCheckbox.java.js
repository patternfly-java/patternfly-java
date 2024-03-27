goog.module('org.patternfly.component.menu.MenuToggleCheckbox');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLInputElement.$Overlay');
goog.require('elemental2.dom.HTMLLabelElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.Id');
goog.require('org.jboss.elemento.InputElementBuilder');
goog.require('org.jboss.elemento.InputType');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.HasValue');
goog.require('org.patternfly.component.menu.MenuToggleSubComponent');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.handler.ChangeHandler');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Disabled');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const MenuToggleCheckbox = goog.require('org.patternfly.component.menu.MenuToggleCheckbox$impl');
exports = MenuToggleCheckbox;
