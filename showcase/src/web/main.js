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
import "@patternfly/patternfly/patternfly.css";
import "@patternfly/patternfly/patternfly-addons.css";
import "@patternfly/patternfly/patternfly-charts.css";
import "../../../charts/npm/src/charts.js";
import "../../../core/npm/core.css";
import "../../../extensions/finder/npm/finder.css";
import "@patternfly/documentation-framework/global.css";
import "@patternfly/documentation-framework/components/autoLinkHeader/autoLinkHeader.css";
import "@patternfly/documentation-framework/components/cssVariables/cssVariables.css";
import "@patternfly/documentation-framework/components/example/example.css";
import "@patternfly/documentation-framework/components/footer/footer.css";
import "@patternfly/documentation-framework/components/sectionGallery/sectionGallery.css";
import "@patternfly/documentation-framework/components/tableOfContents/tableOfContents.css";
import "@patternfly/documentation-framework/layouts/sideNavLayout/sideNavLayout.css";
import "@patternfly/documentation-framework/templates/mdx.css";
import "./showcase.css";

import "@github/relative-time-element";
import hljs from "highlight.js/lib/common";
import "highlight.js/styles/github.css";

window["hljs"] = hljs; // 'export' hljs for J2CL

// Load J2CL-compiled showcase app
const script = document.createElement("script");
script.src = "/showcase.js";
script.defer = true;
document.body.appendChild(script);
