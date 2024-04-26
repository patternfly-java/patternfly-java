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
package org.patternfly.popper;

import org.jboss.elemento.Callback;
import org.jboss.elemento.logger.Logger;

import elemental2.promise.Promise;

public class PopperError implements Popper {

    private static final Logger logger = Logger.getLogger(PopperError.class.getName());
    private static final String ERROR_MESSAGE = "Unable to create popper: '" + Popper.POPPER_CREATE + "' is undefined.";

    private final String category;

    PopperError(String category) {
        this.category = category;
    }

    @Override
    public Promise<State> update() {
        logger.error(ERROR_MESSAGE);
        return null;
    }

    @Override
    public void show(Callback visible) {
        logger.error(ERROR_MESSAGE);
    }

    @Override
    public void hide(Callback hidden) {
        logger.error(ERROR_MESSAGE);
    }

    @Override
    public void cleanup() {
        logger.error(ERROR_MESSAGE);
    }
}
