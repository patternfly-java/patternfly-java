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
package org.patternfly.showcase.demo.user;

import java.util.Comparator;

import org.jboss.elemento.Elements;
import org.patternfly.icon.IconSets.fas;

import elemental2.core.JsDate;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.img;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.icon.IconSets.fas.mapMarkedAlt;
import static org.patternfly.style.Classes.util;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class User {

    @JsOverlay
    public static final Comparator<User> BIRTHDAY_COMPARATOR = (u1,
            u2) -> (int) (u1.getBirthday().getTime() - u2.getBirthday().getTime());

    @JsOverlay
    public static final Comparator<User> REGISTERED_COMPARATOR = (u1,
            u2) -> (int) (u1.getRegistered().getTime() - u2.getRegistered().getTime());

    public String gender;
    public Name name;
    public Location location;
    public String email;
    public Login login;
    public DateOfBirth dob;
    public DateOfBirth registered;
    public String phone;
    public String cell;
    public Picture picture;
    public String nat;

    @JsOverlay
    public final String fullName() {
        return name.first + " " + name.last;
    }

    @JsOverlay
    public final JsDate getBirthday() {
        return new JsDate(dob.date);
    }

    @JsOverlay
    public final JsDate getRegistered() {
        return new JsDate(registered.date);
    }

    @JsOverlay
    public final HTMLElement address() {
        return Elements.address()
                .add(location.street.name + " " + location.street.number)
                .add(br())
                .add(location.postcode + " " + location.city)
                .add(br())
                .add(location.state + ", " + nat)
                .add(a(googleMaps()).attr("target", "map").css(util("ml-sm")).add(mapMarkedAlt))
                .element();
    }

    @JsOverlay
    public final HTMLElement contact() {
        return ul()
                .add(li()
                        .add(a("mailto:" + email)
                                .add(fas.envelope.css(util("mr-sm")))
                                .add(email)))
                .add(li()
                        .add(a("tel:" + phone)
                                .add(fas.phone.css(util("mr-sm")))
                                .add(phone)))
                .add(li()
                        .add(a("tel:" + cell)
                                .add(fas.mobileAlt.css(util("mr-sm")))
                                .add(cell))).element();
    }

    @JsOverlay
    public final HTMLImageElement nat() {
        return img("https://www.countryflags.io/" + nat + "/flat/32.png").title(nat).style("min-width:32px").element();
    }

    @JsOverlay
    public final HTMLDivElement photo() {
        return div().css("sc-user-photo-75").add(img(picture.medium)).element();
    }

    @JsOverlay
    public final String googleMaps() {
        return "https://www.google.com/maps/search/?api=1&query=" + location.coordinates.latitude + ","
                + location.coordinates.longitude;
    }

    @JsOverlay
    public final boolean match(String query) {
        return name.first.toLowerCase().contains(query.toLowerCase()) || name.last.toLowerCase()
                .contains(query.toLowerCase())
                || email.toLowerCase().contains(query.toLowerCase())
                || login.username.toLowerCase().contains(query.toLowerCase());
    }
}
