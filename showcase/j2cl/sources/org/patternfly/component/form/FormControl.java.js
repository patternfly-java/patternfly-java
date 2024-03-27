goog.module('org.patternfly.component.form.FormControl');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.ValidationStatus');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Disabled');
goog.require('org.patternfly.style.Modifiers.Required');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const FormControl = goog.require('org.patternfly.component.form.FormControl$impl');
exports = FormControl;
