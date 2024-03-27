goog.module('org.patternfly.component.form.Form');

goog.require('elemental2.dom.HTMLFormElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.form.FormActionGroup');
goog.require('org.patternfly.component.form.FormAlert');
goog.require('org.patternfly.component.form.FormFieldGroup');
goog.require('org.patternfly.component.form.FormGroup');
goog.require('org.patternfly.component.form.FormSection');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Horizontal');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Form = goog.require('org.patternfly.component.form.Form$impl');
exports = Form;
