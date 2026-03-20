// noinspection BadExpressionStatementJS,JSUnusedGlobalSymbols,SpellCheckingInspection,ES6ConvertVarToLetConst

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
 * @fileoverview Declaration of JS code used in this showcase.
 * @externs
 */

// ------------------------------------------------------ chart

/** @constructor */
function Chart() {
}

/** @type {string} */
Chart.prototype.name

/** @type {string} */
Chart.prototype.title

/** @type {string} */
Chart.prototype.route

/** @type {string} */
Chart.prototype.clazz

/** @type {string} */
Chart.prototype.summary

// ------------------------------------------------------ component

/** @constructor */
function Component() {
}

/** @type {string} */
Component.prototype.name

/** @type {string} */
Component.prototype.title

/** @type {string} */
Component.prototype.route

/** @type {string} */
Component.prototype.clazz

/** @type {string} */
Component.prototype.illustration

/** @type {string} */
Component.prototype.summary

// ------------------------------------------------------ coordinates

/** @constructor */
function Coordinates() {
}

/** @type {string} */
Coordinates.prototype.latitude

/** @type {string} */
Coordinates.prototype.longitude

// ------------------------------------------------------ date of birth

/** @constructor */
function DateOfBirth() {
}

/** @type {string} */
DateOfBirth.prototype.date

/** @type {number} */
DateOfBirth.prototype.age

// ------------------------------------------------------ extension

/** @constructor */
function Extension() {
}

/** @type {string} */
Extension.prototype.name

/** @type {string} */
Extension.prototype.title

/** @type {string} */
Extension.prototype.route

/** @type {string} */
Extension.prototype.clazz

/** @type {string} */
Extension.prototype.summary

// ------------------------------------------------------ file

/** @constructor */
function File() {
}

/** @type {string} */
File.prototype.id

/** @type {string} */
File.prototype.name

/** @type {string} */
File.prototype.description

/** @type {string} */
File.prototype.icon

/** @type {!Object<string, string>} */
File.prototype.meta

/** @type {!Array<!File>} */
File.prototype.children

// ------------------------------------------------------ layout

/** @constructor */
function Layout() {
}

/** @type {string} */
Layout.prototype.name

/** @type {string} */
Layout.prototype.title

/** @type {string} */
Layout.prototype.route

/** @type {string} */
Layout.prototype.clazz

/** @type {string} */
Layout.prototype.summary

// ------------------------------------------------------ location

/** @constructor */
function Location() {
}

/** @type {!Street} */
Location.prototype.street

/** @type {string} */
Location.prototype.city

/** @type {string} */
Location.prototype.state

/** @type {string} */
Location.prototype.postcode

/** @type {!Coordinates} */
Location.prototype.coordinates

/** @type {!Timezone} */
Location.prototype.timezone

// ------------------------------------------------------ login

/** @constructor */
function Login() {
}

/** @type {string} */
Login.prototype.uuid

/** @type {string} */
Login.prototype.username

/** @type {string} */
Login.prototype.password

/** @type {string} */
Login.prototype.salt

/** @type {string} */
Login.prototype.md5

/** @type {string} */
Login.prototype.sha1

/** @type {string} */
Login.prototype.sha256

// ------------------------------------------------------ name

/** @constructor */
function Name() {
}

/** @type {string} */
Name.prototype.title

/** @type {string} */
Name.prototype.first

/** @type {string} */
Name.prototype.last

// ------------------------------------------------------ picture

/** @constructor */
function Picture() {
}

/** @type {string} */
Picture.prototype.large

/** @type {string} */
Picture.prototype.medium

/** @type {string} */
Picture.prototype.thumbnail

// ------------------------------------------------------ record

/** @constructor */
function Record() {
}

/** @type {string} */
Record.prototype.title

/** @type {string} */
Record.prototype.released

/** @type {number} */
Record.prototype.year

/** @type {string} */
Record.prototype.url

/** @type {string} */
Record.prototype.cover

/** @type {!Array<!Track>} */
Record.prototype.tracks

// ------------------------------------------------------ server

/** @constructor */
function Server() {
}

/** @type {string} */
Server.prototype.name

/** @type {number} */
Server.prototype.threads

/** @type {number} */
Server.prototype.applications

/** @type {number} */
Server.prototype.workspaces

/** @type {string} */
Server.prototype.status

/** @type {string} */
Server.prototype.location

// ------------------------------------------------------ street

/** @constructor */
function Street() {
}

/** @type {number} */
Street.prototype.number

/** @type {string} */
Street.prototype.name

// ------------------------------------------------------ timezone

/** @constructor */
function Timezone() {
}

/** @type {string} */
Timezone.prototype.offset

/** @type {string} */
Timezone.prototype.description

// ------------------------------------------------------ track

/** @constructor */
function Track() {
}

/** @type {number} */
Track.prototype.track

/** @type {string} */
Track.prototype.title

/** @type {!Array<string>} */
Track.prototype.writer

/** @type {string} */
Track.prototype.length

// ------------------------------------------------------ user

/** @constructor */
function User() {
}

/** @type {string} */
User.prototype.gender

/** @type {!Name} */
User.prototype.name

/** @type {!Location} */
User.prototype.location

/** @type {string} */
User.prototype.email

/** @type {!Login} */
User.prototype.login

/** @type {!DateOfBirth} */
User.prototype.dob

/** @type {!DateOfBirth} */
User.prototype.registered

/** @type {string} */
User.prototype.phone

/** @type {string} */
User.prototype.cell

/** @type {!Picture} */
User.prototype.picture

/** @type {string} */
User.prototype.nat