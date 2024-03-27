goog.module('org.patternfly.component.list.DescriptionListGroup');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.list.DescriptionListDescription');
goog.require('org.patternfly.component.list.DescriptionListSubComponent');
goog.require('org.patternfly.component.list.DescriptionListTerm');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const DescriptionListGroup = goog.require('org.patternfly.component.list.DescriptionListGroup$impl');
exports = DescriptionListGroup;
