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
package org.patternfly.component;

import elemental2.dom.DomGlobal;

import static org.patternfly.dom.DomGlobal.crypto;

class UUID {

    static String uuid() {
        if (DomGlobal.isSecureContext) {
            return crypto.randomUUID();
        } else {
            long msb = Math.abs((long) (Math.random() * Long.MAX_VALUE));
            long lsb = Math.abs((long) (Math.random() * Long.MAX_VALUE));

            // Convert to hexadecimal and pad with 0s if necessary
            String msbHex = Long.toHexString(msb);
            msbHex = ("0000000000000000" + msbHex).substring(msbHex.length());

            String lsbHex = Long.toHexString(lsb);
            lsbHex = ("0000000000000000" + lsbHex).substring(lsbHex.length());

            // Format as 8-4-4-4-12 hexadecimal digits
            return msbHex.substring(0, 8) + "-"
                    + msbHex.substring(8, 12) + "-"
                    + lsbHex.substring(0, 4) + "-"
                    + lsbHex.substring(4, 8) + "-"
                    + lsbHex.substring(8, 16);
        }
    }
}
