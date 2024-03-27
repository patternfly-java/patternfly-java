// noinspection BadExpressionStatementJS,JSUnusedGlobalSymbols,SpellCheckingInspection,ES6ConvertVarToLetConst

/**
 * @fileoverview Declarations for @popperjs/core v2.11.8
 * @see https://popper.js.org/docs/v2/
 * @externs
 */

// ------------------------------------------------------ popper

/** @constructor */
function Popper() {
}

/**
 * @param {HTMLElement} reference
 * @param {HTMLElement} popper
 * @param {!Options} options
 * @return {Popper}
 */
Popper.prototype.createPopper = function (reference, popper, options) {
};

/** @type {State} */
Popper.prototype.state;

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

// ------------------------------------------------------ options

/** @constructor */
function Options() {
}

/** @type {string} */
Options.prototype.placement;

/** @type {Array<Modifier>} */
Options.prototype.modifiers;

/** @type {string} */
Options.prototype.strategy;

/** @type {function(State)} */
Options.prototype.onFirstUpdate;

// ------------------------------------------------------ modifier

/** @constructor */
function Modifier() {
}

/** @type {string} */
Modifier.prototype.name;

/** @type {boolean} */
Modifier.prototype.enabled;

/** @type {string} */
Modifier.prototype.phase;

/** @type {Array<string>} */
Modifier.prototype.requires;

/** @type {ModifierOptions} */
Modifier.prototype.options;

/** @type {function(ModifierArguments)} */
Modifier.prototype.fn;

// ------------------------------------------------------ modifier arguments

/** @constructor */
function ModifierArguments() {
}

/** @type {string} */
ModifierArguments.prototype.name;

/** @type {State} */
ModifierArguments.prototype.state;

// ------------------------------------------------------ modifiers data

/** @constructor */
function ModifiersData() {
}

/** @type {{}} */
ModifiersData.prototype.applyStyles;

/** @type {{ x?: number, y?: number, centerOffset: number }} */
ModifiersData.prototype.arrow;

/** @type {{}} */
ModifiersData.prototype.flip;

/** @type {{ isReferenceHidden: boolean, hasPopperEscaped: boolean, referenceClippingOffsets: SideObject, popperEscapeOffsets: SideObject }} */
ModifiersData.prototype.hide;

/** @type {{}} */
ModifiersData.prototype.offset;

/** @type {{}} */
ModifiersData.prototype.placements;

/** @type {Offsets} */
ModifiersData.prototype.popperOffsets;

// ------------------------------------------------------ modifier options

/** @constructor */
function ModifierOptions() {
}

/** @type {Array<number>} */
ModifierOptions.prototype.offset;

// ------------------------------------------------------ offsets

/** @constructor */
function Offsets() {
}

/** @type {number} */
Offsets.prototype.x;

/** @type {number} */
Offsets.prototype.y;

// ------------------------------------------------------ state

/** @constructor */
function State() {
}

/** @type {StateElements} */
State.prototype.elements;

/** @type {ModifiersData} */
State.prototype.modifiersData;

/** @type Array<Modifier> */
State.prototype.orderedModifiers;

/** @type {string} */
State.prototype.placement;

/** @type {StateRects} */
State.prototype.rects;

/** @type {ScrollParents} */
State.prototype.scrollParents;

/** @type {StyleDefinitions} */
State.prototype.styles;

// ------------------------------------------------------ state rects

/** @constructor */
function StateRects() {
}

/** @type {Rect} */
StateRects.prototype.reference;

/** @type {Rect} */
StateRects.prototype.popper;

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

// ------------------------------------------------------ scroll parents

/** @constructor */
function ScrollParents() {
}

/** @type Array<HTMLElement> */
ScrollParents.prototype.reference;

/** @type Array<HTMLElement> */
ScrollParents.prototype.popper;

// ------------------------------------------------------ rect

/** @type number */
Rect.prototype.x;

/** @type number */
Rect.prototype.y;

/** @type number */
Rect.prototype.width;

/** @type number */
Rect.prototype.height;

// ------------------------------------------------------ side object

/** @constructor */
function SideObject() {
}

/** @type {number} */
SideObject.prototype.top;

/** @type {number} */
SideObject.prototype.left;

/** @type {number} */
SideObject.prototype.right;

/** @type {number} */
SideObject.prototype.bottom;

// ------------------------------------------------------ style definxitions

/** @constructor */
function StyleDefinitions() {
}

/** @type {CSSStyleDeclaration} */
StyleDefinitions.prototype.popper;
