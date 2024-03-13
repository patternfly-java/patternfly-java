/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.icon;

import org.jboss.elemento.Container;
import org.jboss.elemento.Finder;
import org.jboss.elemento.HasElement;
import org.jboss.elemento.TypedBuilder;
import org.jboss.elemento.svg.HasSVGElement;
import org.jboss.elemento.svg.SVGElement;

public interface IconSet extends
        TypedBuilder<SVGElement, IconSet>,
        HasElement<SVGElement, IconSet>,
        HasSVGElement<SVGElement, IconSet>,
        Finder<SVGElement>,
        Container<SVGElement, IconSet> {
}
