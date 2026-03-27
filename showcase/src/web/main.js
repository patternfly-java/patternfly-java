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
import "@patternfly-java/core";
import "@patternfly-java/finder";
import "@patternfly-java/charts/dist/charts";
import "./pforg/*.css";
import "./showcase.css";

import "@github/relative-time-element";
import hljs from "highlight.js/lib/common";
import "highlight.js/styles/github.css";

window["hljs"] = hljs; // 'export' hljs for J2CL

// Unless https://github.com/parcel-bundler/lightningcss/issues/1176 is fixed,
// we have to inject the anchored container queries manually 😩
const HEAD = document.querySelector('head')

const insertStyles = styles => {
    const STYLE = document.createElement('style')
    STYLE.setAttribute('type', 'text/css')
    STYLE.innerHTML = styles
    HEAD.appendChild(STYLE)
}

// language=css
const STYLES_TO_INSERT = `
    /* Was top, flipped to bottom */
    @container anchored(fallback: flip-block) {
        .pf-v6-c-popover[popover].pf-m-top .pf-v6-c-popover__arrow {
            --pf-v6-c-popover__arrow--InsetBlockStart: var(--pf-v6-c-popover--m-bottom--InsetBlockStart, 0);
            --pf-v6-c-popover__arrow--InsetBlockEnd: auto;
            --pf-v6-c-popover__arrow--InsetInlineStart: var(--pf-v6-c-popover--m-bottom--InsetInlineStart, 50%);
            --pf-v6-c-popover__arrow--TranslateX: var(--pf-v6-c-popover__arrow--m-bottom--TranslateX);
            --pf-v6-c-popover__arrow--TranslateY: var(--pf-v6-c-popover__arrow--m-bottom--TranslateY);
            --pf-v6-c-popover__arrow--Rotate: var(--pf-v6-c-popover__arrow--m-bottom--Rotate);
        }
    }

    /* Was bottom, flipped to top */
    @container anchored(fallback: flip-block) {
        .pf-v6-c-popover[popover].pf-m-bottom .pf-v6-c-popover__arrow {
            --pf-v6-c-popover__arrow--InsetBlockStart: auto;
            --pf-v6-c-popover__arrow--InsetBlockEnd: var(--pf-v6-c-popover--m-top--InsetBlockEnd, 0);
            --pf-v6-c-popover__arrow--InsetInlineStart: var(--pf-v6-c-popover--m-top--InsetInlineStart, 50%);
            --pf-v6-c-popover__arrow--TranslateX: var(--pf-v6-c-popover__arrow--m-top--TranslateX);
            --pf-v6-c-popover__arrow--TranslateY: var(--pf-v6-c-popover__arrow--m-top--TranslateY);
            --pf-v6-c-popover__arrow--Rotate: var(--pf-v6-c-popover__arrow--m-top--Rotate);
        }
    }

    /* Was left, flipped to right */
    @container anchored(fallback: flip-inline) {
        .pf-v6-c-popover[popover].pf-m-left .pf-v6-c-popover__arrow {
            --pf-v6-c-popover__arrow--InsetBlockStart: var(--pf-v6-c-popover--m-right--InsetBlockStart, 50%);
            --pf-v6-c-popover__arrow--InsetInlineStart: var(--pf-v6-c-popover--m-right--InsetInlineStart, 0);
            --pf-v6-c-popover__arrow--InsetInlineEnd: auto;
            --pf-v6-c-popover__arrow--TranslateX: var(--pf-v6-c-popover__arrow--m-right--TranslateX);
            --pf-v6-c-popover__arrow--TranslateY: var(--pf-v6-c-popover__arrow--m-right--TranslateY);
            --pf-v6-c-popover__arrow--Rotate: var(--pf-v6-c-popover__arrow--m-right--Rotate);
        }
    }

    /* Was right, flipped to left */
    @container anchored(fallback: flip-inline) {
        .pf-v6-c-popover[popover].pf-m-right .pf-v6-c-popover__arrow {
            --pf-v6-c-popover__arrow--InsetBlockStart: var(--pf-v6-c-popover--m-left--InsetBlockStart, 50%);
            --pf-v6-c-popover__arrow--InsetInlineStart: auto;
            --pf-v6-c-popover__arrow--InsetInlineEnd: var(--pf-v6-c-popover--m-left--InsetInlineEnd, 0);
            --pf-v6-c-popover__arrow--TranslateX: var(--pf-v6-c-popover__arrow--m-left--TranslateX);
            --pf-v6-c-popover__arrow--TranslateY: var(--pf-v6-c-popover__arrow--m-left--TranslateY);
            --pf-v6-c-popover__arrow--Rotate: var(--pf-v6-c-popover__arrow--m-left--Rotate);
        }
    }
`

insertStyles(STYLES_TO_INSERT);
