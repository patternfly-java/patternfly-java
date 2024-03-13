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
package org.patternfly.component.popper;

import org.jboss.elemento.Callback;
import org.patternfly.core.Logger;

import elemental2.promise.Promise;

public class PopperError implements Popper {

    private static final String ERROR_MESSAGE = "Unable to create popper: 'Popper' is undefined. " +
            "Please add a call to 'ThirdParty.injectPopper()'. " +
            "See also https://github.com/patternfly-java/patternfly-java#third-party";

    private final String category;

    PopperError(String category) {
        this.category = category;
    }

    @Override
    public Promise<State> update() {
        Logger.undefined(category, null, ERROR_MESSAGE);
        return null;
    }

    @Override
    public void show(Callback visible) {
        Logger.undefined(category, null, ERROR_MESSAGE);
    }

    @Override
    public void hide(Callback hidden) {
        Logger.undefined(category, null, ERROR_MESSAGE);
    }

    @Override
    public void cleanup() {
        Logger.undefined(category, null, ERROR_MESSAGE);
    }
}
