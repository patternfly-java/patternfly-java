// noinspection BadExpressionStatementJS,JSUnusedGlobalSymbols,SpellCheckingInspection,ES6ConvertVarToLetConst

/**
 * @fileoverview Declarations for @popperjs/core v2.11.8
 * @externs
 */

// ------------------------------------------------------ strategy

/** @enum {string} */
var Strategy = {
    absolute: 'absolute',
    fixed: 'fixed'
}

// ------------------------------------------------------ modifier arguments

/** @constructor */
function ModifierArguments() {
}

/** @type {string} */
ModifierArguments.prototype.name

/** @type {State} */
ModifierArguments.prototype.state

// ------------------------------------------------------ modifier options

/** @constructor */
function ModifierOptions() {
}

/** @type {Array<number>} */
ModifierOptions.prototype.offset

// ------------------------------------------------------ modifier

/** @constructor */
function Modifier() {
}

/** @type {string} */
Modifier.prototype.name

/** @type {boolean} */
Modifier.prototype.enabled

/** @type {string} */
Modifier.prototype.phase

/** @type {Array<string>} */
Modifier.prototype.requires

/** @type {ModifierOptions} */
Modifier.prototype.options

/** @type {function(ModifierArguments)} */
Modifier.prototype.fn

// ------------------------------------------------------ options

/** @constructor */
function Options() {
}

/** @type {string} */
Options.prototype.placement;

/** @type {Array<Modifier>} */
Options.prototype.modifiers;

/** @type {Strategy} */
Options.prototype.strategy;

/** @type {function(State)} */
Options.prototype.onFirstUpdate;

// ------------------------------------------------------ state

/** @constructor */
function State() {
}

/** @type {StateElements} */
State.prototype.elements

/** @type {string} */
State.prototype.placement

// ------------------------------------------------------ state elements

/** @constructor */
function StateElements() {
}

/** @type {HTMLElement} */
StateElements.prototype.reference

/** @type {HTMLElement} */
StateElements.prototype.popper

/** @type {HTMLElement} */
StateElements.prototype.arrow

// ------------------------------------------------------ popper

/** @constructor */
function Popper() {
}

/** @type {State} */
Popper.prototype.state;

/**
 * @param {HTMLElement} reference
 * @param {HTMLElement} popper
 * @param {Options} options
 * @return {Popper}
 */
Popper.prototype.createPopper = function (reference, popper, options) {
};

Popper.prototype.destroy = function () {
};

/**
 * @param {function(Options)} updateOptionsFn
 */
Popper.prototype.setOptions = function (updateOptionsFn) {
};

/**
 * @return {Promise<!State>}
 */
Popper.prototype.update = function () {
};
