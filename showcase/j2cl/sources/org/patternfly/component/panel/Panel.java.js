goog.module('org.patternfly.component.panel.Panel');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponentFlat');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.divider.Divider');
goog.require('org.patternfly.component.divider.DividerType');
goog.require('org.patternfly.component.panel.PanelFooter');
goog.require('org.patternfly.component.panel.PanelHeader');
goog.require('org.patternfly.component.panel.PanelMain');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.Logger');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Bordered');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Panel = goog.require('org.patternfly.component.panel.Panel$impl');
exports = Panel;
