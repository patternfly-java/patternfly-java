goog.module('org.patternfly.component.inputgroup.InputGroup');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.inputgroup.InputGroupItem');
goog.require('org.patternfly.component.inputgroup.InputGroupText');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Disabled');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const InputGroup = goog.require('org.patternfly.component.inputgroup.InputGroup$impl');
exports = InputGroup;
