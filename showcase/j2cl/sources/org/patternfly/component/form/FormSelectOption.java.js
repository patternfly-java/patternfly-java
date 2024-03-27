goog.module('org.patternfly.component.form.FormSelectOption');

goog.require('elemental2.dom.HTMLOptionElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLElementBuilder');
goog.require('org.jboss.elemento.Id');
goog.require('org.patternfly.component.HasValue');
goog.require('org.patternfly.component.form.FormSelectSubComponent');
goog.require('org.patternfly.core.Dataset');
goog.require('org.patternfly.style.Modifiers.Disabled');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const FormSelectOption = goog.require('org.patternfly.component.form.FormSelectOption$impl');
exports = FormSelectOption;
