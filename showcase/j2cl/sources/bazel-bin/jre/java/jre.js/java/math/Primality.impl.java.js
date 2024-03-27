goog.module('java.math.Primality$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let System = goog.forwardDeclare('java.lang.System$impl');
let BigInteger = goog.forwardDeclare('java.math.BigInteger$impl');
let Division = goog.forwardDeclare('java.math.Division$impl');
let Elementary = goog.forwardDeclare('java.math.Elementary$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Random = goog.forwardDeclare('java.util.Random$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$boolean = goog.forwardDeclare('vmbootstrap.primitives.$boolean$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class Primality extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {BigInteger} */
 static m_consBigInteger__int__int__java_util_Random__java_math_BigInteger(/** number */ bitLength, /** number */ certainty, /** Random */ rnd) {
  Primality.$clinit();
  if (bitLength <= 10) {
   let rp = Primality.f_offsetPrimes__java_math_Primality_[bitLength];
   return Primality.f_BIprimes__java_math_Primality_[rp[0] + rnd.m_nextInt__int__int(rp[1]) | 0];
  }
  let shiftCount = (- bitLength | 0) & 31;
  let last = (bitLength + 31 | 0) >> 5;
  let n = BigInteger.$create__int__int__arrayOf_int(1, last, /**@type {!Array<number>}*/ ($Arrays.$create([last], $$int)));
  last = last - 1 | 0;
  do {
   for (let i = 0; i < n.f_numberLength__java_math_BigInteger; i = i + 1 | 0) {
    $Arrays.$set(n.f_digits__java_math_BigInteger, i, rnd.m_nextInt__int());
   }
   n.f_digits__java_math_BigInteger[last] |= -2147483648;
   $Arrays.$set(n.f_digits__java_math_BigInteger, last, n.f_digits__java_math_BigInteger[last] >>> shiftCount | 0);
   n.f_digits__java_math_BigInteger[0] |= 1;
  } while (!Primality.m_isProbablePrime__java_math_BigInteger__int__boolean(n, certainty));
  return n;
 }
 /** @nodts @return {boolean} */
 static m_isProbablePrime__java_math_BigInteger__int__boolean(/** BigInteger */ n, /** number */ certainty) {
  Primality.$clinit();
  if (certainty <= 0 || n.f_numberLength__java_math_BigInteger == 1 && n.f_digits__java_math_BigInteger[0] == 2) {
   return true;
  }
  if (!n.m_testBit__int__boolean(0)) {
   return false;
  }
  if (n.f_numberLength__java_math_BigInteger == 1 && (n.f_digits__java_math_BigInteger[0] & -1024) == 0) {
   return Arrays.m_binarySearch__arrayOf_int__int__int(Primality.f_primes__java_math_Primality_, n.f_digits__java_math_BigInteger[0]) >= 0;
  }
  for (let i = 1; i < Primality.f_primes__java_math_Primality_.length; i = i + 1 | 0) {
   if (Division.m_remainderArrayByInt__arrayOf_int__int__int__int(n.f_digits__java_math_BigInteger, n.f_numberLength__java_math_BigInteger, Primality.f_primes__java_math_Primality_[i]) == 0) {
    return false;
   }
  }
  let /** number */ i_1;
  let bitLength = n.m_bitLength__int();
  for (i_1 = 2; bitLength < Primality.f_BITS__java_math_Primality_[i_1]; i_1 = i_1 + 1 | 0) {}
  certainty = Math.min(i_1, 1 + ((certainty - 1 | 0) >> 1) | 0);
  return Primality.m_millerRabin__java_math_BigInteger__int__boolean(n, certainty);
 }
 /** @nodts @return {BigInteger} */
 static m_nextProbablePrime__java_math_BigInteger__java_math_BigInteger(/** BigInteger */ n) {
  Primality.$clinit();
  let /** number */ i, /** number */ j;
  let /** number */ certainty;
  let gapSize = 1024;
  let modules = /**@type {!Array<number>}*/ ($Arrays.$create([Primality.f_primes__java_math_Primality_.length], $$int));
  let isDivisible = /**@type {!Array<boolean>}*/ ($Arrays.$create([gapSize], $$boolean));
  let /** BigInteger */ startPoint;
  let /** BigInteger */ probPrime;
  if (n.f_numberLength__java_math_BigInteger == 1 && n.f_digits__java_math_BigInteger[0] >= 0 && n.f_digits__java_math_BigInteger[0] < Primality.f_primes__java_math_Primality_[Primality.f_primes__java_math_Primality_.length - 1 | 0]) {
   for (i = 0; n.f_digits__java_math_BigInteger[0] >= Primality.f_primes__java_math_Primality_[i]; i = i + 1 | 0) {}
   return Primality.f_BIprimes__java_math_Primality_[i];
  }
  startPoint = BigInteger.$create__int__int__arrayOf_int(1, n.f_numberLength__java_math_BigInteger, /**@type {!Array<number>}*/ ($Arrays.$create([n.f_numberLength__java_math_BigInteger + 1 | 0], $$int)));
  System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(n.f_digits__java_math_BigInteger, 0, startPoint.f_digits__java_math_BigInteger, 0, n.f_numberLength__java_math_BigInteger);
  if (n.m_testBit__int__boolean(0)) {
   Elementary.m_inplaceAdd__java_math_BigInteger__int__void(startPoint, 2);
  } else {
   startPoint.f_digits__java_math_BigInteger[0] |= 1;
  }
  j = startPoint.m_bitLength__int();
  for (certainty = 2; j < Primality.f_BITS__java_math_Primality_[certainty]; certainty = certainty + 1 | 0) {}
  for (i = 0; i < Primality.f_primes__java_math_Primality_.length; i = i + 1 | 0) {
   $Arrays.$set(modules, i, Division.m_remainder__java_math_BigInteger__int__int(startPoint, Primality.f_primes__java_math_Primality_[i]) - gapSize | 0);
  }
  while (true) {
   Arrays.m_fill__arrayOf_boolean__boolean__void(isDivisible, false);
   for (i = 0; i < Primality.f_primes__java_math_Primality_.length; i = i + 1 | 0) {
    $Arrays.$set(modules, i, $Primitives.coerceDivision((modules[i] + gapSize | 0) % Primality.f_primes__java_math_Primality_[i]));
    j = modules[i] == 0 ? 0 : Primality.f_primes__java_math_Primality_[i] - modules[i] | 0;
    for (; j < gapSize; j = j + Primality.f_primes__java_math_Primality_[i] | 0) {
     $Arrays.$set(isDivisible, j, true);
    }
   }
   for (j = 0; j < gapSize; j = j + 1 | 0) {
    if (!isDivisible[j]) {
     probPrime = startPoint.m_copy__java_math_BigInteger_$pp_java_math();
     Elementary.m_inplaceAdd__java_math_BigInteger__int__void(probPrime, j);
     if (Primality.m_millerRabin__java_math_BigInteger__int__boolean(probPrime, certainty)) {
      return probPrime;
     }
    }
   }
   Elementary.m_inplaceAdd__java_math_BigInteger__int__void(startPoint, gapSize);
  }
 }
 /** @nodts @return {boolean} */
 static m_millerRabin__java_math_BigInteger__int__boolean(/** BigInteger */ n, /** number */ t) {
  let /** BigInteger */ x;
  let /** BigInteger */ y;
  let nMinus1 = n.m_subtract__java_math_BigInteger__java_math_BigInteger(BigInteger.f_ONE__java_math_BigInteger);
  let bitLength = nMinus1.m_bitLength__int();
  let k = nMinus1.m_getLowestSetBit__int();
  let q = nMinus1.m_shiftRight__int__java_math_BigInteger(k);
  let rnd = Random.$create__();
  for (let i = 0; i < t; i = i + 1 | 0) {
   if (i < Primality.f_primes__java_math_Primality_.length) {
    x = Primality.f_BIprimes__java_math_Primality_[i];
   } else {
    do {
     x = BigInteger.$create__int__java_util_Random(bitLength, rnd);
    } while (x.m_compareTo__java_math_BigInteger__int(n) >= BigInteger.f_EQUALS__java_math_BigInteger || x.f_sign__java_math_BigInteger == 0 || x.m_isOne__boolean_$pp_java_math());
   }
   y = x.m_modPow__java_math_BigInteger__java_math_BigInteger__java_math_BigInteger(q, n);
   if (y.m_isOne__boolean_$pp_java_math() || y.equals(nMinus1)) {
    continue;
   }
   for (let j = 1; j < k; j = j + 1 | 0) {
    if (y.equals(nMinus1)) {
     continue;
    }
    y = y.m_multiply__java_math_BigInteger__java_math_BigInteger(y).m_mod__java_math_BigInteger__java_math_BigInteger(n);
    if (y.m_isOne__boolean_$pp_java_math()) {
     return false;
    }
   }
   if (!y.equals(nMinus1)) {
    return false;
   }
  }
  return true;
 }
 /** @nodts @return {!Primality} */
 static $create__() {
  let $instance = new Primality();
  $instance.$ctor__java_math_Primality__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_math_Primality__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Primality.$clinit = () =>{};
  Primality.$loadModules();
  j_l_Object.$clinit();
  Primality.f_BITS__java_math_Primality_ = /**@type {!Array<number>}*/ ($Arrays.$init([0, 0, 1854, 1233, 927, 747, 627, 543, 480, 431, 393, 361, 335, 314, 295, 279, 265, 253, 242, 232, 223, 216, 181, 169, 158, 150, 145, 140, 136, 132, 127, 123, 119, 114, 110, 105, 101, 96, 92, 87, 83, 78, 73, 69, 64, 59, 54, 49, 44, 38, 32, 26, 1], $$int));
  Primality.f_offsetPrimes__java_math_Primality_ = /**@type {!Array<Array<number>>}*/ ($Arrays.$init([null, null, /**@type {!Array<number>}*/ ($Arrays.$init([0, 2], $$int)), /**@type {!Array<number>}*/ ($Arrays.$init([2, 2], $$int)), /**@type {!Array<number>}*/ ($Arrays.$init([4, 2], $$int)), /**@type {!Array<number>}*/ ($Arrays.$init([6, 5], $$int)), /**@type {!Array<number>}*/ ($Arrays.$init([11, 7], $$int)), /**@type {!Array<number>}*/ ($Arrays.$init([18, 13], $$int)), /**@type {!Array<number>}*/ ($Arrays.$init([31, 23], $$int)), /**@type {!Array<number>}*/ ($Arrays.$init([54, 43], $$int)), /**@type {!Array<number>}*/ ($Arrays.$init([97, 75], $$int))], $$int, 2));
  Primality.f_primes__java_math_Primality_ = /**@type {!Array<number>}*/ ($Arrays.$init([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021], $$int));
  Primality.f_BIprimes__java_math_Primality_ = /**@type {!Array<BigInteger>}*/ ($Arrays.$create([Primality.f_primes__java_math_Primality_.length], BigInteger));
  for (let i = 0; i < Primality.f_primes__java_math_Primality_.length; i = i + 1 | 0) {
   $Arrays.$set(Primality.f_BIprimes__java_math_Primality_, i, BigInteger.m_valueOf__long__java_math_BigInteger($Primitives.widenIntToLong(Primality.f_primes__java_math_Primality_[i])));
  }
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Primality;
 }
 
 /** @nodts */
 static $loadModules() {
  System = goog.module.get('java.lang.System$impl');
  BigInteger = goog.module.get('java.math.BigInteger$impl');
  Division = goog.module.get('java.math.Division$impl');
  Elementary = goog.module.get('java.math.Elementary$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Random = goog.module.get('java.util.Random$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$boolean = goog.module.get('vmbootstrap.primitives.$boolean$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@type {Array<number>} @nodts*/
Primality.f_BITS__java_math_Primality_;
/**@type {Array<Array<number>>} @nodts*/
Primality.f_offsetPrimes__java_math_Primality_;
/**@type {Array<number>} @nodts*/
Primality.f_primes__java_math_Primality_;
/**@type {Array<BigInteger>} @nodts*/
Primality.f_BIprimes__java_math_Primality_;
$Util.$setClassMetadata(Primality, 'java.math.Primality');

exports = Primality;

//# sourceMappingURL=Primality.js.map
