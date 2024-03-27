goog.module('org.patternfly.component.form.FormGroup');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MutationRecord.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Attachable');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.form.FormGroupControl');
goog.require('org.patternfly.component.form.FormGroupLabel');
goog.require('org.patternfly.component.form.FormGroupRole');
goog.require('org.patternfly.component.form.FormSubComponent');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.core.Logger');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const FormGroup = goog.require('org.patternfly.component.form.FormGroup$impl');
exports = FormGroup;
