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

import java.util.ArrayList;
import java.util.List;

/**
 * Parses the value of an {@code accept} attribute (e.g. {@code ".csv,text/plain,image/*"}) and checks whether a file matches
 * one of the accepted file types. Supports file extensions, exact MIME types, and wildcard MIME types. An empty accept value
 * accepts all files.
 */
class AcceptedFileTypes {

    private static final String WILDCARD_SUFFIX = "/*";

    static AcceptedFileTypes parse(String accept) {
        List<String> tokens = new ArrayList<>();
        if (accept != null) {
            for (String token : accept.split(",")) {
                String trimmed = token.trim().toLowerCase();
                if (!trimmed.isEmpty()) {
                    tokens.add(trimmed);
                }
            }
        }
        return new AcceptedFileTypes(tokens);
    }

    private final List<String> tokens;

    private AcceptedFileTypes(List<String> tokens) {
        this.tokens = tokens;
    }

    boolean matches(String name, String type) {
        if (tokens.isEmpty()) {
            return true;
        }
        String lowerName = name == null ? "" : name.toLowerCase();
        String lowerType = type == null ? "" : type.toLowerCase();
        for (String token : tokens) {
            if (matchesToken(token, lowerName, lowerType)) {
                return true;
            }
        }
        return false;
    }

    private static boolean matchesToken(String token, String name, String type) {
        if (token.startsWith(".")) {
            return name.endsWith(token) && name.length() > token.length();
        } else if (token.endsWith(WILDCARD_SUFFIX)) {
            return !type.isEmpty() && type.startsWith(token.substring(0, token.length() - 1));
        } else {
            return token.equals(type);
        }
    }
}
