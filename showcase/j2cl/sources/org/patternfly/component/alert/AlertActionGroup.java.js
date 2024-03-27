goog.module('org.patternfly.component.alert.AlertActionGroup');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.MouseEvent.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.alert.Alert');
goog.require('org.patternfly.component.alert.AlertSubComponent');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const AlertActionGroup = goog.require('org.patternfly.component.alert.AlertActionGroup$impl');
exports = AlertActionGroup;
