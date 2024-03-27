goog.module('org.jboss.elemento.Attachable');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MutationRecord.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Attachable.$LambdaAdaptor');
goog.require('org.jboss.elemento.BodyObserver');
goog.require('org.jboss.elemento.IsElement');
goog.require('org.jboss.elemento.ObserverCallback');
goog.require('vmbootstrap.Casts');

const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
exports = Attachable;
