goog.module('org.patternfly.component.page.Masthead');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.page.MastheadContent');
goog.require('org.patternfly.component.page.MastheadMain');
goog.require('org.patternfly.component.page.MastheadToggle');
goog.require('org.patternfly.core.Validation');
goog.require('org.patternfly.style.Breakpoint');
goog.require('org.patternfly.style.Breakpoints');
goog.require('org.patternfly.style.Brightness');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Display');
goog.require('org.patternfly.style.Inset');
goog.require('org.patternfly.style.Rect');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Masthead = goog.require('org.patternfly.component.page.Masthead$impl');
exports = Masthead;
