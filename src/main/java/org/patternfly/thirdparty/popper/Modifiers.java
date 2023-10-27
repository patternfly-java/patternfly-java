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
package org.patternfly.thirdparty.popper;

import elemental2.dom.HTMLElement;

public interface Modifiers {

    static Modifier placement() {
        Modifier modifier = new Modifier();
        modifier.name = "placement";
        modifier.enabled = true;
        modifier.phase = ModifierPhase.main.name();
        modifier.fn = (args) -> {
            if (args.state != null && args.state.elements != null) {
                Placement placement = Placement.fromValue(args.state.placement);
                HTMLElement popper = args.state.elements.popper;
                if (placement != null && popper != null) {
                    popper.classList.remove(Placement.modifiers);
                    popper.classList.add(placement.modifier);
                }
            }
        };
        return modifier;
    }

    static Modifier offset(int offset) {
        Modifier modifier = new Modifier();
        modifier.name = "offset";
        modifier.options = new ModifierOptions();
        modifier.options.offset = new int[] { 0, offset };
        return modifier;
    }

    static Modifier noOverflow() {
        Modifier modifier = new Modifier();
        modifier.name = "preventOverflow";
        modifier.enabled = false;
        return modifier;
    }

    static Modifier hide() {
        Modifier modifier = new Modifier();
        modifier.name = "hide";
        modifier.enabled = true;
        return modifier;
    }

    static Modifier flip(boolean enabled) {
        Modifier modifier = new Modifier();
        modifier.name = "flip";
        modifier.enabled = enabled;
        return modifier;
    }

    static Modifier eventListeners(boolean enabled) {
        Modifier modifier = new Modifier();
        modifier.name = "eventListeners";
        modifier.enabled = enabled;
        return modifier;
    }
}
