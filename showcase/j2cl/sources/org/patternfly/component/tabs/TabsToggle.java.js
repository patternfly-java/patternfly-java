goog.module('org.patternfly.component.tabs.TabsToggle');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MouseEvent.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.Id');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.tabs.TabSubComponent');
goog.require('org.patternfly.component.tabs.Tabs');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.icon.IconSets.fas');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Disabled');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const TabsToggle = goog.require('org.patternfly.component.tabs.TabsToggle$impl');
exports = TabsToggle;
