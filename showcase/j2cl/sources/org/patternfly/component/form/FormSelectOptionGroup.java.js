goog.module('org.patternfly.component.form.FormSelectOptionGroup');

goog.require('elemental2.dom.HTMLOptGroupElement.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.form.FormSelectOption');
goog.require('org.patternfly.component.form.FormSelectSubComponent');
goog.require('org.patternfly.style.Modifiers.Disabled');
goog.require('vmbootstrap.Casts');

const FormSelectOptionGroup = goog.require('org.patternfly.component.form.FormSelectOptionGroup$impl');
exports = FormSelectOptionGroup;
