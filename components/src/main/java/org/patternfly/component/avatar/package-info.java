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
 * Provides the PatternFly avatar component for displaying user profile images.
 *
 * <p>An avatar is a visual used to represent a user. It may contain an image or a placeholder graphic.
 * Avatars support different sizes and an optional border.
 *
 * <h2>Usage</h2>
 *
 * <p>Basic avatar with size and border variations:
 *
 * {@snippet :
 * Avatar basicAvatar = avatar("/img/avatar.svg", "User avatar");
 * Avatar largeAvatar = avatar("/img/avatar.svg", "User avatar").size(lg);
 * Avatar borderedAvatar = avatar("/img/avatar.svg", "User avatar").bordered();
 * }
 *
 * @see org.patternfly.component.avatar.Avatar
 * @see <a href="https://www.patternfly.org/components/avatar">PatternFly Avatar</a>
 */
package org.patternfly.component.avatar;