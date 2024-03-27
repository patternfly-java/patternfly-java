goog.module('org.patternfly.component.WithProgress');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.IsElement');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.patternfly.component.spinner.Spinner');
goog.require('org.patternfly.style.Classes');

const WithProgress = goog.require('org.patternfly.component.WithProgress$impl');
exports = WithProgress;
