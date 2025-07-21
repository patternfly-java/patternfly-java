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
package org.patternfly.component.timestamp;

import java.util.Date;

import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;

import elemental2.core.JsDate;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.time;
import static org.patternfly.component.timestamp.TimestampFormat.full;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.text;
import static org.patternfly.style.Classes.timestamp;

/**
 * A timestamp component for displaying date and time values.
 * This component supports various formatting options including
 * custom formats, standard date/time styles, and UTC display.
 * It can also handle custom HTML content or plain text.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/timestamp">https://www.patternfly.org/components/timestamp</a>
 *
 * @author mskacelik
 */
public class Timestamp extends BaseComponent<HTMLElement, Timestamp>
        implements ElementTextDelegate<HTMLElement, Timestamp> {

    private static final Logger logger = Logger.getLogger(Timestamp.class.getName());
    private static final String DATETIME_ATTR = "datetime";
    private static final String COORDINATED_UNIVERSAL_TIME = "Coordinated Universal Time";
    private static final String UTC = "UTC";

    // ------------------------------------------------------ factory

    public static Timestamp timestamp() {
        return new Timestamp();
    }

    public static Timestamp timestamp(String text) {
        return new Timestamp().text(text);
    }

    public static Timestamp timestamp(Date dateTime) {
        return new Timestamp().dateTime(dateTime);
    }

    public static Timestamp timestamp(String text, Date dateTime) {
        return new Timestamp().text(text).dateTime(dateTime);
    }

    // ------------------------------------------------------ instance

    private HTMLContainerBuilder<HTMLElement> timeElement;
    private Date dateTime;
    private TimestampFormat dateFormat;
    private TimestampFormat timeFormat;
    private CustomFormat customFormat;
    private String displaySuffix = "";
    private boolean is12Hour = true;
    private String locale;
    private boolean shouldDisplayUTC = false;
    private boolean showDateTimeAsTextFlag = true;

    Timestamp() {
        super(ComponentType.Timestamp, span().css(component(timestamp)).element());
        this.timeElement = time().css(component(timestamp, text));
        updateDisplayAndDatetime();
    }

    // ------------------------------------------------------ builder

    @Override
    public Timestamp that() {
        return this;
    }

    @Override
    public Element textDelegate() {
        return timeElement.element();
    }

    @Override
    public Timestamp text(String text) {
        this.showDateTimeAsTextFlag = text == null || text.trim().length() == 0; // isBlank()
        textDelegate().textContent = text;
        return this;
    }

    public Timestamp dateTime(Date dateTime) {
        this.dateTime = dateTime;
        updateDisplayAndDatetime();
        return this;
    }

    public Timestamp dateFormat(TimestampFormat dateFormat) {
        if (this.customFormat != null) {
            logger.warn("Setting dateFormat while customFormat is already set. " +
                    "CustomFormat will be cleared to avoid conflicting format options. " +
                    "Use either dateFormat/timeFormat OR customFormat, not both.");
        }
        this.dateFormat = dateFormat;
        this.customFormat = null;
        updateDisplayAndDatetime();
        return this;
    }

    public Timestamp timeFormat(TimestampFormat timeFormat) {
        if (this.customFormat != null) {
            logger.warn("Setting timeFormat while customFormat is already set. " +
                    "CustomFormat will be cleared to avoid conflicting format options. " +
                    "Use either dateFormat/timeFormat OR customFormat, not both.");
        }
        this.timeFormat = timeFormat;
        this.customFormat = null;
        updateDisplayAndDatetime();
        return this;
    }

    public Timestamp customFormat(CustomFormat customFormat) {
        if (this.dateFormat != null || this.timeFormat != null) {
            logger.warn("Setting customFormat while dateFormat and/or timeFormat are already set. " +
                    "Standard formats will be cleared to avoid conflicting format options. " +
                    "Use either dateFormat/timeFormat OR customFormat, not both.");
        }
        this.customFormat = customFormat;
        this.dateFormat = null;
        this.timeFormat = null;
        updateDisplayAndDatetime();
        return this;
    }

    public Timestamp displaySuffix(String displaySuffix) {
        this.displaySuffix = displaySuffix;
        updateDisplayAndDatetime();
        return this;
    }

    public Timestamp is12Hour(boolean is12Hour) {
        this.is12Hour = is12Hour;
        updateDisplayAndDatetime();
        return this;
    }

    public Timestamp locale(String locale) {
        this.locale = locale;
        updateDisplayAndDatetime();
        return this;
    }

    public Timestamp utc(boolean shouldDisplayUTC) {
        this.shouldDisplayUTC = shouldDisplayUTC;
        updateDisplayAndDatetime();
        return this;
    }

    // ------------------------------------------------------ accessors

    public Date dateTime() {
        return dateTime;
    }
    // ------------------------------------------------------ internal


    /**
     * Updates both the display text and datetime attribute of the timestamp
     * component.
     * This method is called whenever any formatting property changes.
     */
    private void updateDisplayAndDatetime() {
        timeElement.attr(DATETIME_ATTR, formatDateTimeAttribute());
        if (showDateTimeAsTextFlag) {
            timeElement.text(formatDisplayText()); // important not to set via this#text()
        }
        element().replaceChildren(timeElement.element());
    }

    /**
     * Formats the display text using current date and formatting options.
     * Separated from updateDisplayAndDatetime for clarity and reusability.
     */
    private String formatDisplayText() {
        Date dateToFormat = (dateTime != null) ? dateTime : new Date();
        JsDate jsDate = new JsDate((double) dateToFormat.getTime());

        String formattedText;
        if (customFormat != null) {
            formattedText = formatWithCustomFormat(jsDate);
        } else {
            formattedText = formatWithStandardOptions(jsDate);
        }
        if (!shouldDisplayUTC) {
            return appendSuffix(formattedText);
        }
        return formattedText;
    }

    /**
     * Formats the date using custom format options.
     * CustomFormat settings take precedence over builder-level settings.
     */
    private String formatWithCustomFormat(JsDate jsDate) {
        if (shouldDisplayUTC) {
            return formatAsUTC(jsDate, customFormat);
        }
        return jsDate.toLocaleString(locale, customFormat);
    }

    /**
     * Formats the date using standard TimestampFormat options with builder-level
     * preferences.
     */
    private String formatWithStandardOptions(JsDate jsDate) {
        LocaleOptions formatOptions = LocaleOptions.create();

        if (dateFormat != null) {
            formatOptions.dateStyle(dateFormat);
        }
        formatOptions.hour12(is12Hour);
        if (timeFormat != null) {
            formatOptions.timeStyle(timeFormat);
        }
        if (shouldDisplayUTC) {
            return formatAsUTC(jsDate, formatOptions);
        }
        return jsDate.toLocaleString(locale, formatOptions);
    }

    private String formatAsUTC(JsDate jsDate, FormatOptions formatOptions) {
        JsDate utcDate = convertToUtcDate(jsDate);
        String utcDateString = utcDate.toLocaleString(locale, formatOptions);
        return appendSuffix(utcDateString);
    }

    private JsDate convertToUtcDate(JsDate jsDate) {
        String utcString = jsDate.toUTCString();
        String convertToUTCString = utcString.substring(0, utcString.length() - 3);
        return new JsDate(convertToUTCString);
    }

    /**
     * Determines the UTC suffix to use for display.
     * Returns the displaySuffix if set, otherwise uses the default based on
     * timeFormat.
     */
    private String determineUtcSuffix() {
        if (displaySuffix != null && !displaySuffix.isEmpty()) {
            return displaySuffix;
        }
        return full.equals(timeFormat) ? COORDINATED_UNIVERSAL_TIME : UTC;
    }

    private String appendSuffix(String dateAsString) {
        String suffixToUse = "";
        if (shouldDisplayUTC) {
            suffixToUse = determineUtcSuffix();
        } else if (displaySuffix != null && !displaySuffix.isEmpty()) {
            suffixToUse = displaySuffix;
        }

        if (!suffixToUse.isEmpty()) {
            return dateAsString + " " + suffixToUse;
        }
        return dateAsString;
    }

    /**
     * Formats the datetime attribute for semantic HTML compliance.
     * Always uses ISO format regardless of display formatting.
     */
    private String formatDateTimeAttribute() {
        Date dateToFormat = (dateTime != null) ? dateTime : new Date();
        JsDate jsDate = new JsDate((double) dateToFormat.getTime());
        return jsDate.toISOString();
    }
}
