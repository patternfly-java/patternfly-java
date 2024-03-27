goog.module('org.jboss.elemento.Finder');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.Iterable');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.By');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.Finder.$LambdaAdaptor');
goog.require('org.jboss.elemento.IsElement');

const Finder = goog.require('org.jboss.elemento.Finder$impl');
exports = Finder;
