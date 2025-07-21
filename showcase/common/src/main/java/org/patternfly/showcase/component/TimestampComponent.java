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
package org.patternfly.showcase.component;

import java.util.Date;

import org.jboss.elemento.router.Route;
import org.patternfly.component.timestamp.CustomFormat;
import org.patternfly.component.timestamp.TimestampFormat;
import org.patternfly.component.timestamp.DateTimeFormatOptions.Day;
import org.patternfly.component.timestamp.DateTimeFormatOptions.Hour;
import org.patternfly.component.timestamp.DateTimeFormatOptions.Month;
import org.patternfly.component.timestamp.DateTimeFormatOptions.Weekday;
import org.patternfly.component.timestamp.DateTimeFormatOptions.Year;
import org.patternfly.component.timestamp.Timestamp;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.timestamp.Timestamp.timestamp;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Classes.timestamp;

@Route(value = "/components/timestamp", title = "Timestamp")
public class TimestampComponent extends SnippetPage {

    public TimestampComponent() {
        super(components.get(timestamp));

        startExamples();
        addSnippet(new Snippet("timestamp-default", "Default",
                code("timestamp-default"), () -> {
                    // @code-start:timestamp-default
                    return div()
                            .add(timestamp())
                            .add(br())
                            .add(timestamp().utc(true))
                            .add(br())
                            .add(timestamp().timeFormat(TimestampFormat._short))
                            .element();
                    // @code-end:timestamp-default
                }));

        addSnippet(new Snippet("timestamp-basic-formats", "Basic formats",
                code("timestamp-basic-formats"), () -> {
                    // @code-start:timestamp-basic-formats
                    Date currentDateTime = new Date();
                    return div()
                            .add(timestamp().dateTime(currentDateTime)
                                    .dateFormat(TimestampFormat.full)
                                    .timeFormat(TimestampFormat.full))
                            .add(br()).add(br())
                            .add(timestamp().dateTime(currentDateTime)
                                    .dateFormat(TimestampFormat.full))
                            .add(br()).add(br())
                            .add(timestamp().dateTime(currentDateTime)
                                    .timeFormat(TimestampFormat.full))
                            .add(br()).add(br())
                            .add(timestamp().dateTime(currentDateTime)
                                    .dateFormat(TimestampFormat.medium)
                                    .timeFormat(TimestampFormat._short)
                                    .displaySuffix("US Eastern"))
                            .element();
                    // @code-end:timestamp-basic-formats
                }));

        addSnippet(new Snippet("timestamp-custom-format", "Custom format",
                code("timestamp-custom-format"), () -> {
                    // @code-start:timestamp-custom-format
                    Date currentDate = new Date();

                    return div()
                            .add(timestamp().dateTime(currentDate)
                                    .customFormat(CustomFormat.create()
                                            .weekday(Weekday._short)
                                            .day(Day.numeric)
                                            .month(Month._short)
                                            .year(Year._2digit)
                                            .hour(Hour._2digit)))
                            .element();
                    // @code-end:timestamp-custom-format
                }));

        addSnippet(new Snippet("timestamp-custom-content", "Custom content",
                code("timestamp-custom-content"), () -> {
                    // @code-start:timestamp-custom-content
                    Date pastDateTime = new Date(122, 7, 9, 14, 57);
                    return div()
                            .add(timestamp("1 hour ago").dateTime(pastDateTime))
                            .add(br()).add(br())
                            .add(timestamp("Last updated August 9th, 2022 at 2:57 PM EDT")
                                    .dateTime(pastDateTime))
                            .element();
                    // @code-end:timestamp-custom-content
                }));

        startApiDocs(Timestamp.class);
        addApiDoc(Timestamp.class, component);
    }
}
