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
/**
 * Provides a timestamp component for displaying dates and times in various formats.
 *
 * <p>The timestamp component renders a date/time value with support for predefined formats (short, medium, long, full),
 * custom formatting options, UTC display, display suffixes, and custom content. It wraps the JavaScript
 * {@code Intl.DateTimeFormat} API for locale-aware formatting.
 *
 * <h2>Key Classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.timestamp.Timestamp} - Main timestamp component</li>
 *     <li>{@link org.patternfly.component.timestamp.TimestampFormat} - Predefined format options (short, medium, long, full)</li>
 *     <li>{@link org.patternfly.component.timestamp.CustomFormat} - Custom date/time format configuration</li>
 *     <li>{@link org.patternfly.component.timestamp.DateTimeFormatOptions} - Options for individual date/time fields</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Create timestamps with various formats:
 *
 * {@snippet :
 * import static org.patternfly.component.timestamp.Timestamp.timestamp;
 * import org.patternfly.component.timestamp.TimestampFormat;
 *
 * // Default timestamp (current date/time)
 * Timestamp now = timestamp();
 *
 * // UTC display
 * Timestamp utc = timestamp().utc(true);
 *
 * // With predefined date and time formats
 * Timestamp formatted = timestamp()
 *         .dateFormat(TimestampFormat.full)
 *         .timeFormat(TimestampFormat._short);
 *
 * // With a display suffix
 * Timestamp withSuffix = timestamp()
 *         .dateFormat(TimestampFormat.medium)
 *         .timeFormat(TimestampFormat._short)
 *         .displaySuffix("US Eastern");
 * }
 *
 * <p>Create a timestamp with custom format options:
 *
 * {@snippet :
 * import static org.patternfly.component.timestamp.Timestamp.timestamp;
 * import org.patternfly.component.timestamp.CustomFormat;
 * import org.patternfly.component.timestamp.DateTimeFormatOptions.*;
 *
 * Timestamp custom = timestamp()
 *         .customFormat(CustomFormat.create()
 *                 .weekday(Weekday._short)
 *                 .day(Day.numeric)
 *                 .month(Month._short)
 *                 .year(Year._2digit)
 *                 .hour(Hour._2digit));
 * }
 *
 * @see org.patternfly.component.timestamp.Timestamp
 * @see org.patternfly.component.timestamp.TimestampFormat
 * @see <a href="https://www.patternfly.org/components/timestamp">PatternFly Timestamp</a>
 */
package org.patternfly.component.timestamp;