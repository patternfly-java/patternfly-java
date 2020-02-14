/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.patternfly.dataprovider;

import java.util.Arrays;
import java.util.function.Function;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class SelectionInfoTest {

    private static final Function<Integer, String> IDENTIFIER = String::valueOf;

    private SelectionInfo<Integer> selectionInfo;

    @BeforeEach
    void setUp() {
        selectionInfo = new SelectionInfo<>(IDENTIFIER);
    }

    @Test
    void add() {
        selectionInfo.add("0", 0);
        assertSelection(selectionInfo, 0);
        selectionInfo.add("1", 1);
        assertSelection(selectionInfo, 0, 1);
        selectionInfo.add("2", 2);
        assertSelection(selectionInfo, 0, 1, 2);
    }

    @Test
    void remove() {
        selectionInfo.add("0", 0);
        selectionInfo.add("1", 1);
        selectionInfo.add("2", 2);
        assertSelection(selectionInfo, 0, 1, 2);
        selectionInfo.remove("2");
        assertSelection(selectionInfo, 0, 1);
        selectionInfo.remove("1");
        assertSelection(selectionInfo, 0);
        selectionInfo.remove("0");
        assertNoSelection(selectionInfo);
    }

    private void assertNoSelection(SelectionInfo<Integer> selectionInfo) {
        assertFalse(selectionInfo.hasSelection());
        assertTrue(selectionInfo.getSelection().isEmpty());
    }

    private void assertSelection(SelectionInfo<Integer> selectionInfo, int... expected) {
        assertTrue(selectionInfo.hasSelection());
        assertFalse(selectionInfo.getSelection().isEmpty());
        int[] actual = new int[selectionInfo.getSelectionCount()];
        for (int i = 0; i < selectionInfo.getSelection().size(); i++) {
            actual[i] = selectionInfo.getSelection().get(i);
        }
        Arrays.sort(actual);
        assertArrayEquals(expected, actual);
    }

}
