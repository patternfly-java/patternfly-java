goog.module('org.patternfly.component.expandable.ExpandableSectionToggle');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLButtonElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MouseEvent.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.By');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.Id');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.expandable.ExpandableSection');
goog.require('org.patternfly.component.expandable.ExpandableSectionSubComponent');
goog.require('org.patternfly.component.expandable.ExpandableSectionToggleText');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.icon.IconSets.fas');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const ExpandableSectionToggle = goog.require('org.patternfly.component.expandable.ExpandableSectionToggle$impl');
exports = ExpandableSectionToggle;
