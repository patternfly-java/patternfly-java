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
package org.patternfly.style;

import org.jboss.elemento.HasHTMLElement;
import org.junit.jupiter.api.Test;
import org.mockito.MockedStatic;
import org.patternfly.core.Logger;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.mockStatic;
import static org.mockito.Mockito.verify;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.lg;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoint.xl;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variable.globalVar;

class VariableTest {

    @Test
    void nil() {
        assertEquals("", globalVar(null).name);
        mockLogger(() -> assertEquals("", componentVar(null).name));
    }

    @Test
    void empty() {
        assertEquals("", globalVar("").name);
        mockLogger(() -> assertEquals("", componentVar("").name));
    }

    @Test
    void global() {
        assertEquals("--pf-v5-global--foo", globalVar("foo").name);
        assertEquals("--pf-v5-global--foo--bar", globalVar("foo", "bar").name);
    }

    @Test
    void wrongComponent() {
        mockLogger(() -> assertEquals("", componentVar("foo").name));
    }

    @Test
    void rightComponent() {
        mockLogger(() -> {
            assertEquals("--pf-v5-c-foo",
                    componentVar(component("foo")).name);
            assertEquals("--pf-v5-c-foo__bar",
                    componentVar(component("foo", "bar")).name);
            assertEquals("--pf-v5-c-foo__bar--1",
                    componentVar(component("foo", "bar"), "1").name);
            assertEquals("--pf-v5-c-foo__bar--1--2--3",
                    componentVar(component("foo", "bar"), "1", "2", "3").name);
        });
    }

    @Test
    void withBreakpoints() {
        mockLogger(() -> {
            HasHTMLElement<?, ?> element = mock(HasHTMLElement.class);
            componentVar(component("foo"), "MyVar", "max").applyTo(element, breakpoints(
                    default_, "10px",
                    md, "2px",
                    lg, "4px",
                    xl, "6px"));
            verify(element).style("--pf-v5-c-foo--MyVar--max", "10px");
            verify(element).style("--pf-v5-c-foo--MyVar--max-on-md", "2px");
            verify(element).style("--pf-v5-c-foo--MyVar--max-on-lg", "4px");
            verify(element).style("--pf-v5-c-foo--MyVar--max-on-xl", "6px");
        });
    }

    private void mockLogger(Runnable block) {
        try (MockedStatic<Logger> mocked = mockStatic(Logger.class)) {
            mocked.when(() -> Logger.undefined(anyString(), any(), anyString())).then(invocation -> {
                System.out.printf("%s: %s\n", invocation.getArgument(0), invocation.getArgument(2));
                return null;
            });
            block.run();
        }
    }
}