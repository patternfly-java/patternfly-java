goog.module('org.patternfly.component.page.PageSectionBuilder');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Container');
goog.require('org.jboss.elemento.Finder');
goog.require('org.jboss.elemento.HasElement');
goog.require('org.jboss.elemento.HasHTMLElement');
goog.require('org.patternfly.component.page.PageMainBody');
goog.require('org.patternfly.component.page.PageSection');
goog.require('org.patternfly.component.page.PageSubComponent');
goog.require('org.patternfly.style.Breakpoints');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Padding');
goog.require('org.patternfly.style.Sticky');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const PageSectionBuilder = goog.require('org.patternfly.component.page.PageSectionBuilder$impl');
exports = PageSectionBuilder;
