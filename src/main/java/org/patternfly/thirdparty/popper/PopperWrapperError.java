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

import org.patternfly.handler.Callback;

import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.console;

public class PopperWrapperError implements PopperWrapper {

    private static final String ERROR_MESSAGE = "Unable to create popper: 'createPopper' is undefined. " +
            "Please see https://github.com/patternfly-java/patternfly-java#third-party for more details.";

    @Override
    public Promise<State> update() {
        console.error(ERROR_MESSAGE);
        return null;
    }

    @Override
    public void show(Callback visible) {
        console.error(ERROR_MESSAGE);
    }

    @Override
    public void hide(Callback hidden) {
        console.error(ERROR_MESSAGE);
    }

    @Override
    public void cleanup() {
        console.error(ERROR_MESSAGE);
    }
}
