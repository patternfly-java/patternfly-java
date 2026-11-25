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
package org.patternfly.component.upload;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class AcceptedFileTypesTest {

    @Test
    void nullOrEmptyAcceptsEverything() {
        assertTrue(AcceptedFileTypes.parse(null).matches("foo.bin", ""));
        assertTrue(AcceptedFileTypes.parse("").matches("foo.bin", "application/octet-stream"));
        assertTrue(AcceptedFileTypes.parse(" , ").matches("foo.bin", null));
    }

    @Test
    void extensionMatchesCaseInsensitive() {
        AcceptedFileTypes types = AcceptedFileTypes.parse(".csv, .TXT");
        assertTrue(types.matches("data.CSV", ""));
        assertTrue(types.matches("notes.txt", "text/plain"));
        assertFalse(types.matches("image.png", "image/png"));
        assertFalse(types.matches("csv", ""));
    }

    @Test
    void exactMimeType() {
        AcceptedFileTypes types = AcceptedFileTypes.parse("text/csv");
        assertTrue(types.matches("data.csv", "text/csv"));
        assertTrue(types.matches("data.csv", "Text/CSV"));
        assertFalse(types.matches("data.txt", "text/plain"));
        assertFalse(types.matches("data.csv", null));
    }

    @Test
    void wildcardMimeType() {
        AcceptedFileTypes types = AcceptedFileTypes.parse("image/*");
        assertTrue(types.matches("a.png", "image/png"));
        assertTrue(types.matches("a.svg", "image/svg+xml"));
        assertFalse(types.matches("a.txt", "text/plain"));
        assertFalse(types.matches("a.png", ""));
    }

    @Test
    void mixedTokens() {
        AcceptedFileTypes types = AcceptedFileTypes.parse("text/csv,.csv,image/*");
        assertTrue(types.matches("data.csv", ""));
        assertTrue(types.matches("x", "text/csv"));
        assertTrue(types.matches("x", "image/jpeg"));
        assertFalse(types.matches("x.txt", "text/plain"));
    }
}
