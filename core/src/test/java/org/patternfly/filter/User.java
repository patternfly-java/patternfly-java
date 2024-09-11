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
package org.patternfly.filter;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import static java.time.ZoneId.systemDefault;
import static java.util.Arrays.asList;
import static java.util.Collections.emptyList;

class User {

    // ------------------------------------------------------ factory

    static List<User> users() {
        // users.json generated from
        // https://randomuser.me/api/?results=100&seed=filtertest
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
            mapper.setVisibility(mapper.getSerializationConfig().getDefaultVisibilityChecker()
                    .withFieldVisibility(Visibility.ANY)
                    .withGetterVisibility(Visibility.NONE)
                    .withSetterVisibility(Visibility.NONE)
                    .withCreatorVisibility(Visibility.NONE));
            return asList(mapper.readValue(User.class.getResource("users.json"), User[].class));
        } catch (IOException e) {
            System.err.println("Unable to read users.json: " + e.getMessage());
            return emptyList();
        }
    }

    // ------------------------------------------------------ instance

    String gender;
    Name name;
    Location location;
    String email;
    Login login;
    DateOfBirth dob;
    DateOfBirth registered;
    String phone;
    String cell;
    Picture picture;
    String nat;

    String fullName() {
        return name.first + " " + name.last;
    }

    boolean match(String query) {
        return name.first.toLowerCase().contains(query.toLowerCase()) ||
                name.last.toLowerCase().contains(query.toLowerCase()) ||
                email.toLowerCase().contains(query.toLowerCase()) ||
                login.username.toLowerCase().contains(query.toLowerCase());
    }

    @Override
    public String toString() {
        return fullName() + " <" + email + "> (" + login.username + ")";
    }

    // ------------------------------------------------------ inner classes (a-z)

    static class Coordinates {

        String latitude;
        String longitude;
    }

    static class DateOfBirth {

        Date date;
        public int age;

        LocalDate localDate() {
            return date.toInstant().atZone(systemDefault()).toLocalDate();
        }
    }

    static class Location {

        Street street;
        String city;
        String state;
        String postcode;
        Coordinates coordinates;
        Timezone timezone;
    }

    static class Login {

        String uuid;
        String username;
        String password;
        String salt;
        String md5;
        String sha1;
        String sha256;
    }

    static class Name {

        String title;
        String first;
        String last;
    }

    static class Picture {

        String large;
        String medium;
        String thumbnail;
    }

    static class Street {

        int number;
        String name;
    }

    static class Timezone {

        String offset;
        String description;
    }
}
