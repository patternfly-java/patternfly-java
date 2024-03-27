goog.module('org.patternfly.layout.gallery.Gallery');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.core.Tuple');
goog.require('org.patternfly.layout.BaseLayout');
goog.require('org.patternfly.layout.gallery.GalleryItem');
goog.require('org.patternfly.style.Breakpoint');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Gutter');
goog.require('org.patternfly.style.Variable');
goog.require('org.patternfly.style.Variables');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Gallery = goog.require('org.patternfly.layout.gallery.Gallery$impl');
exports = Gallery;
