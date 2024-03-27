goog.module('javaemul.internal.InternalPreconditions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArithmeticException = goog.forwardDeclare('java.lang.ArithmeticException$impl');
let ArrayIndexOutOfBoundsException = goog.forwardDeclare('java.lang.ArrayIndexOutOfBoundsException$impl');
let ArrayStoreException = goog.forwardDeclare('java.lang.ArrayStoreException$impl');
let AssertionError = goog.forwardDeclare('java.lang.AssertionError$impl');
let ClassCastException = goog.forwardDeclare('java.lang.ClassCastException$impl');
let Exception = goog.forwardDeclare('java.lang.Exception$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let NegativeArraySizeException = goog.forwardDeclare('java.lang.NegativeArraySizeException$impl');
let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let RuntimeException = goog.forwardDeclare('java.lang.RuntimeException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringIndexOutOfBoundsException = goog.forwardDeclare('java.lang.StringIndexOutOfBoundsException$impl');
let ConcurrentModificationException = goog.forwardDeclare('java.util.ConcurrentModificationException$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @final
 */
class InternalPreconditions extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {boolean} */
 static m_isTypeChecked__boolean() {
  InternalPreconditions.$clinit();
  return InternalPreconditions.f_IS_TYPE_CHECKED__javaemul_internal_InternalPreconditions_ || InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_;
 }
 /** @nodts @return {boolean} */
 static m_isApiChecked__boolean() {
  InternalPreconditions.$clinit();
  return InternalPreconditions.f_IS_API_CHECKED__javaemul_internal_InternalPreconditions_ || InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_;
 }
 /** @nodts */
 static m_checkType__boolean__void(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  InternalPreconditions.m_checkType__boolean__java_lang_String__void(expression, null);
 }
 /** @nodts */
 static m_checkType__boolean__java_lang_String__void(/** boolean */ expression, /** ?string */ message) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_TYPE_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalType__boolean__java_lang_String__void(expression, message);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalType__boolean__java_lang_String__void(expression, message);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (RuntimeException.$isInstance(__$exc)) {
     let e = /**@type {RuntimeException}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalType__boolean__void(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  InternalPreconditions.m_checkCriticalType__boolean__java_lang_String__void(expression, null);
 }
 /** @nodts */
 static m_checkCriticalType__boolean__java_lang_String__void(/** boolean */ expression, /** ?string */ message) {
  InternalPreconditions.$clinit();
  if (!expression) {
   throw $Exceptions.toJs(ClassCastException.$create__java_lang_String(message));
  }
 }
 /** @nodts */
 static m_checkArrayType__boolean__void(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_TYPE_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalArrayType__boolean__void(expression);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalArrayType__boolean__void(expression);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalArrayType__boolean__void(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  if (!expression) {
   throw $Exceptions.toJs(ArrayStoreException.$create__());
  }
 }
 /** @nodts */
 static m_checkArrayType__boolean__java_lang_Object__void(/** boolean */ expression, /** * */ errorMessage) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_TYPE_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalArrayType__boolean__java_lang_Object__void(expression, errorMessage);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalArrayType__boolean__java_lang_Object__void(expression, errorMessage);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalArrayType__boolean__java_lang_Object__void(/** boolean */ expression, /** * */ errorMessage) {
  InternalPreconditions.$clinit();
  if (!expression) {
   throw $Exceptions.toJs(ArrayStoreException.$create__java_lang_String(j_l_String.m_valueOf__java_lang_Object__java_lang_String(errorMessage)));
  }
 }
 /** @nodts */
 static m_checkArithmetic__boolean__void(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_NUMERIC_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalArithmetic__boolean__void(expression);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalArithmetic__boolean__void(expression);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalArithmetic__boolean__void(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  if (!expression) {
   throw $Exceptions.toJs(ArithmeticException.$create__());
  }
 }
 /** @nodts */
 static m_checkElement__boolean__void(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_API_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalElement__boolean__void(expression);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalElement__boolean__void(expression);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalElement__boolean__void(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  if (!expression) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
 }
 /** @nodts */
 static m_checkElement__boolean__java_lang_Object__void(/** boolean */ expression, /** * */ errorMessage) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_API_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalElement__boolean__java_lang_Object__void(expression, errorMessage);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalElement__boolean__java_lang_Object__void(expression, errorMessage);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalElement__boolean__java_lang_Object__void(/** boolean */ expression, /** * */ errorMessage) {
  InternalPreconditions.$clinit();
  if (!expression) {
   throw $Exceptions.toJs(NoSuchElementException.$create__java_lang_String(j_l_String.m_valueOf__java_lang_Object__java_lang_String(errorMessage)));
  }
 }
 /** @nodts */
 static m_checkArgument__boolean__void(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_API_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalArgument__boolean__void(expression);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalArgument__boolean__void(expression);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalArgument__boolean__void(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  if (!expression) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__());
  }
 }
 /** @nodts */
 static m_checkArgument__boolean__java_lang_Object__void(/** boolean */ expression, /** * */ errorMessage) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_API_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalArgument__boolean__java_lang_Object__void(expression, errorMessage);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalArgument__boolean__java_lang_Object__void(expression, errorMessage);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalArgument__boolean__java_lang_Object__void(/** boolean */ expression, /** * */ errorMessage) {
  InternalPreconditions.$clinit();
  if (!expression) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(j_l_String.m_valueOf__java_lang_Object__java_lang_String(errorMessage)));
  }
 }
 /** @nodts */
 static m_checkState__boolean__void(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_API_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalState__boolean__void(expression);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalState__boolean__void(expression);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalState__boolean__void(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  if (!expression) {
   throw $Exceptions.toJs(IllegalStateException.$create__());
  }
 }
 /** @nodts */
 static m_checkState__boolean__java_lang_Object__void(/** boolean */ expression, /** * */ errorMessage) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_API_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalState__boolean__java_lang_Object__void(expression, errorMessage);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalState__boolean__java_lang_Object__void(expression, errorMessage);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalState__boolean__java_lang_Object__void(/** boolean */ expression, /** * */ errorMessage) {
  InternalPreconditions.$clinit();
  if (!expression) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String(j_l_String.m_valueOf__java_lang_Object__java_lang_String(errorMessage)));
  }
 }
 /** @nodts @template T @return {T} */
 static m_checkNotNull__java_lang_Object__java_lang_Object(/** T */ reference) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_API_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(reference);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(reference);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
  return reference;
 }
 /** @nodts @template T @return {T} */
 static m_checkCriticalNotNull__java_lang_Object__java_lang_Object(/** T */ reference) {
  InternalPreconditions.$clinit();
  if ($Equality.$same(reference, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__());
  }
  return reference;
 }
 /** @nodts */
 static m_checkNotNull__java_lang_Object__java_lang_Object__void(/** * */ reference, /** * */ errorMessage) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_API_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object__void(reference, errorMessage);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object__void(reference, errorMessage);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalNotNull__java_lang_Object__java_lang_Object__void(/** * */ reference, /** * */ errorMessage) {
  InternalPreconditions.$clinit();
  if ($Equality.$same(reference, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String(j_l_String.m_valueOf__java_lang_Object__java_lang_String(errorMessage)));
  }
 }
 /** @nodts */
 static m_checkArraySize__int__void(/** number */ size) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_API_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalArraySize__int__void(size);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalArraySize__int__void(size);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalArraySize__int__void(/** number */ size) {
  InternalPreconditions.$clinit();
  if (size < 0) {
   throw $Exceptions.toJs(NegativeArraySizeException.$create__java_lang_String('Negative array size: ' + size));
  }
 }
 /** @nodts */
 static m_checkElementIndex__int__int__void(/** number */ index, /** number */ size) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_BOUNDS_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalElementIndex__int__int__void(index, size);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalElementIndex__int__int__void(index, size);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalElementIndex__int__int__void(/** number */ index, /** number */ size) {
  InternalPreconditions.$clinit();
  if (index < 0 || index >= size) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String('Index: ' + index + ', Size: ' + size));
  }
 }
 /** @nodts */
 static m_checkStringElementIndex__int__int__void(/** number */ index, /** number */ size) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_BOUNDS_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalStringElementIndex__int__int__void(index, size);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalStringElementIndex__int__int__void(index, size);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalStringElementIndex__int__int__void(/** number */ index, /** number */ size) {
  InternalPreconditions.$clinit();
  if (index < 0 || index >= size) {
   throw $Exceptions.toJs(StringIndexOutOfBoundsException.$create__java_lang_String('Index: ' + index + ', Size: ' + size));
  }
 }
 /** @nodts */
 static m_checkPositionIndex__int__int__void(/** number */ index, /** number */ size) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_BOUNDS_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalPositionIndex__int__int__void(index, size);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalPositionIndex__int__int__void(index, size);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalPositionIndex__int__int__void(/** number */ index, /** number */ size) {
  InternalPreconditions.$clinit();
  if (index < 0 || index > size) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String('Index: ' + index + ', Size: ' + size));
  }
 }
 /** @nodts */
 static m_checkPositionIndexes__int__int__int__void(/** number */ start, /** number */ end, /** number */ size) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_BOUNDS_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalPositionIndexes__int__int__int__void(start, end, size);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalPositionIndexes__int__int__int__void(start, end, size);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalPositionIndexes__int__int__int__void(/** number */ start, /** number */ end, /** number */ size) {
  InternalPreconditions.$clinit();
  if (start < 0 || end > size) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String('fromIndex: ' + start + ', toIndex: ' + end + ', size: ' + size));
  }
  if (start > end) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('fromIndex: ' + start + ' > toIndex: ' + end));
  }
 }
 /** @nodts */
 static m_checkCriticalArrayBounds__int__int__int__void(/** number */ start, /** number */ end, /** number */ length) {
  InternalPreconditions.$clinit();
  if (start > end) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('fromIndex: ' + start + ' > toIndex: ' + end));
  }
  if (start < 0 || end > length) {
   throw $Exceptions.toJs(ArrayIndexOutOfBoundsException.$create__java_lang_String('fromIndex: ' + start + ', toIndex: ' + end + ', length: ' + length));
  }
 }
 /** @nodts */
 static m_checkStringBounds__int__int__int__void(/** number */ start, /** number */ end, /** number */ length) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_BOUNDS_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalStringBounds__int__int__int__void(start, end, length);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalStringBounds__int__int__int__void(start, end, length);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalStringBounds__int__int__int__void(/** number */ start, /** number */ end, /** number */ length) {
  InternalPreconditions.$clinit();
  if (start < 0 || end > length || end < start) {
   throw $Exceptions.toJs(StringIndexOutOfBoundsException.$create__java_lang_String('fromIndex: ' + start + ', toIndex: ' + end + ', length: ' + length));
  }
 }
 /** @nodts */
 static m_checkConcurrentModification__int__int__void(/** number */ currentModCount, /** number */ recordedModCount) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_API_CHECKED__javaemul_internal_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalConcurrentModification__double__double__void(currentModCount, recordedModCount);
  } else if (InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalConcurrentModification__double__double__void(currentModCount, recordedModCount);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /** @nodts */
 static m_checkCriticalConcurrentModification__double__double__void(/** number */ currentModCount, /** number */ recordedModCount) {
  InternalPreconditions.$clinit();
  if (currentModCount != recordedModCount) {
   throw $Exceptions.toJs(ConcurrentModificationException.$create__());
  }
 }
 /** @nodts @return {!InternalPreconditions} */
 static $create__() {
  let $instance = new InternalPreconditions();
  $instance.$ctor__javaemul_internal_InternalPreconditions__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_InternalPreconditions__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  InternalPreconditions.$clinit = () =>{};
  InternalPreconditions.$loadModules();
  j_l_Object.$clinit();
  InternalPreconditions.f_CHECK_TYPE__javaemul_internal_InternalPreconditions_ = $Util.$getDefine('jre.checks.type');
  InternalPreconditions.f_CHECK_NUMERIC__javaemul_internal_InternalPreconditions_ = $Util.$getDefine('jre.checks.numeric');
  InternalPreconditions.f_CHECK_BOUNDS__javaemul_internal_InternalPreconditions_ = $Util.$getDefine('jre.checks.bounds');
  InternalPreconditions.f_CHECK_API__javaemul_internal_InternalPreconditions_ = $Util.$getDefine('jre.checks.api');
  InternalPreconditions.f_LEVEL_NORMAL_OR_HIGHER__javaemul_internal_InternalPreconditions_ = $Equality.$same($Util.$getDefine('jre.checks.checkLevel'), 'NORMAL');
  InternalPreconditions.f_LEVEL_OPT_OR_HIGHER__javaemul_internal_InternalPreconditions_ = $Equality.$same($Util.$getDefine('jre.checks.checkLevel'), 'OPTIMIZED') || $Equality.$same($Util.$getDefine('jre.checks.checkLevel'), 'NORMAL');
  InternalPreconditions.f_LEVEL_MINIMAL_OR_HIGHER__javaemul_internal_InternalPreconditions_ = $Equality.$same($Util.$getDefine('jre.checks.checkLevel'), 'MINIMAL') || $Equality.$same($Util.$getDefine('jre.checks.checkLevel'), 'OPTIMIZED') || $Equality.$same($Util.$getDefine('jre.checks.checkLevel'), 'NORMAL');
  if (!InternalPreconditions.f_LEVEL_MINIMAL_OR_HIGHER__javaemul_internal_InternalPreconditions_) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String('Incorrect level: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String($Util.$getDefine('jre.checks.checkLevel'))));
  }
  InternalPreconditions.f_IS_TYPE_CHECKED__javaemul_internal_InternalPreconditions_ = $Equality.$same(InternalPreconditions.f_CHECK_TYPE__javaemul_internal_InternalPreconditions_, 'AUTO') && InternalPreconditions.f_LEVEL_OPT_OR_HIGHER__javaemul_internal_InternalPreconditions_ || $Equality.$same(InternalPreconditions.f_CHECK_TYPE__javaemul_internal_InternalPreconditions_, 'ENABLED');
  InternalPreconditions.f_IS_BOUNDS_CHECKED__javaemul_internal_InternalPreconditions_ = $Equality.$same(InternalPreconditions.f_CHECK_BOUNDS__javaemul_internal_InternalPreconditions_, 'AUTO') && InternalPreconditions.f_LEVEL_NORMAL_OR_HIGHER__javaemul_internal_InternalPreconditions_ || $Equality.$same(InternalPreconditions.f_CHECK_BOUNDS__javaemul_internal_InternalPreconditions_, 'ENABLED');
  InternalPreconditions.f_IS_API_CHECKED__javaemul_internal_InternalPreconditions_ = $Equality.$same(InternalPreconditions.f_CHECK_API__javaemul_internal_InternalPreconditions_, 'AUTO') && InternalPreconditions.f_LEVEL_NORMAL_OR_HIGHER__javaemul_internal_InternalPreconditions_ || $Equality.$same(InternalPreconditions.f_CHECK_API__javaemul_internal_InternalPreconditions_, 'ENABLED');
  InternalPreconditions.f_IS_NUMERIC_CHECKED__javaemul_internal_InternalPreconditions_ = $Equality.$same(InternalPreconditions.f_CHECK_NUMERIC__javaemul_internal_InternalPreconditions_, 'AUTO') && InternalPreconditions.f_LEVEL_NORMAL_OR_HIGHER__javaemul_internal_InternalPreconditions_ || $Equality.$same(InternalPreconditions.f_CHECK_NUMERIC__javaemul_internal_InternalPreconditions_, 'ENABLED');
  InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_ = $Equality.$same($Util.$getDefine('jre.checkedMode'), 'ENABLED');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalPreconditions;
 }
 
 /** @nodts */
 static $loadModules() {
  ArithmeticException = goog.module.get('java.lang.ArithmeticException$impl');
  ArrayIndexOutOfBoundsException = goog.module.get('java.lang.ArrayIndexOutOfBoundsException$impl');
  ArrayStoreException = goog.module.get('java.lang.ArrayStoreException$impl');
  AssertionError = goog.module.get('java.lang.AssertionError$impl');
  ClassCastException = goog.module.get('java.lang.ClassCastException$impl');
  Exception = goog.module.get('java.lang.Exception$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  NegativeArraySizeException = goog.module.get('java.lang.NegativeArraySizeException$impl');
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  RuntimeException = goog.module.get('java.lang.RuntimeException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringIndexOutOfBoundsException = goog.module.get('java.lang.StringIndexOutOfBoundsException$impl');
  ConcurrentModificationException = goog.module.get('java.util.ConcurrentModificationException$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@type {?string} @nodts*/
InternalPreconditions.f_CHECK_TYPE__javaemul_internal_InternalPreconditions_;
/**@type {?string} @nodts*/
InternalPreconditions.f_CHECK_NUMERIC__javaemul_internal_InternalPreconditions_;
/**@type {?string} @nodts*/
InternalPreconditions.f_CHECK_BOUNDS__javaemul_internal_InternalPreconditions_;
/**@type {?string} @nodts*/
InternalPreconditions.f_CHECK_API__javaemul_internal_InternalPreconditions_;
/**@type {boolean} @nodts*/
InternalPreconditions.f_LEVEL_NORMAL_OR_HIGHER__javaemul_internal_InternalPreconditions_ = false;
/**@type {boolean} @nodts*/
InternalPreconditions.f_LEVEL_OPT_OR_HIGHER__javaemul_internal_InternalPreconditions_ = false;
/**@type {boolean} @nodts*/
InternalPreconditions.f_LEVEL_MINIMAL_OR_HIGHER__javaemul_internal_InternalPreconditions_ = false;
/**@type {boolean} @nodts*/
InternalPreconditions.f_IS_TYPE_CHECKED__javaemul_internal_InternalPreconditions_ = false;
/**@type {boolean} @nodts*/
InternalPreconditions.f_IS_BOUNDS_CHECKED__javaemul_internal_InternalPreconditions_ = false;
/**@type {boolean} @nodts*/
InternalPreconditions.f_IS_API_CHECKED__javaemul_internal_InternalPreconditions_ = false;
/**@type {boolean} @nodts*/
InternalPreconditions.f_IS_NUMERIC_CHECKED__javaemul_internal_InternalPreconditions_ = false;
/**@type {boolean} @nodts*/
InternalPreconditions.f_IS_ASSERTED__javaemul_internal_InternalPreconditions_ = false;
$Util.$setClassMetadata(InternalPreconditions, 'javaemul.internal.InternalPreconditions');

exports = InternalPreconditions;

//# sourceMappingURL=InternalPreconditions.js.map
