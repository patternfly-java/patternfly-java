goog.module('java.util.stream.TerminatableStream$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Error = goog.forwardDeclare('java.lang.Error$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let RuntimeException = goog.forwardDeclare('java.lang.RuntimeException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template T
 */
class TerminatableStream extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_terminated__java_util_stream_TerminatableStream_ = false;
  /**@type {List<Runnable>} @nodts*/
  this.f_onClose__java_util_stream_TerminatableStream_;
  /**@type {TerminatableStream<?>} @nodts*/
  this.f_root__java_util_stream_TerminatableStream_;
 }
 /** @nodts @template T @return {!TerminatableStream<T>} */
 static $create__java_util_stream_TerminatableStream(/** TerminatableStream<?> */ previous) {
  TerminatableStream.$clinit();
  let $instance = new TerminatableStream();
  $instance.$ctor__java_util_stream_TerminatableStream__java_util_stream_TerminatableStream__void(previous);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_TerminatableStream__java_util_stream_TerminatableStream__void(/** TerminatableStream<?> */ previous) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_stream_TerminatableStream();
  if ($Equality.$same(previous, null)) {
   this.f_root__java_util_stream_TerminatableStream_ = null;
   this.f_onClose__java_util_stream_TerminatableStream_ = /**@type {!ArrayList<Runnable>}*/ (ArrayList.$create__());
  } else {
   this.f_root__java_util_stream_TerminatableStream_ = previous;
   this.f_onClose__java_util_stream_TerminatableStream_ = null;
  }
 }
 /** @nodts */
 m_throwIfTerminated__void_$pp_java_util_stream() {
  if (!$Equality.$same(this.f_root__java_util_stream_TerminatableStream_, null)) {
   this.f_root__java_util_stream_TerminatableStream_.m_throwIfTerminated__void_$pp_java_util_stream();
  } else if (this.f_terminated__java_util_stream_TerminatableStream_) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String('Stream already terminated, can\'t be modified or used'));
  }
 }
 /** @nodts */
 m_terminate__void_$pp_java_util_stream() {
  if ($Equality.$same(this.f_root__java_util_stream_TerminatableStream_, null)) {
   this.m_throwIfTerminated__void_$pp_java_util_stream();
   this.f_terminated__java_util_stream_TerminatableStream_ = true;
  } else {
   this.f_root__java_util_stream_TerminatableStream_.m_terminate__void_$pp_java_util_stream();
  }
 }
 /** @nodts @return {T} */
 m_onClose__java_lang_Runnable__java_util_stream_TerminatableStream(/** Runnable */ closeHandler) {
  if ($Equality.$same(this.f_root__java_util_stream_TerminatableStream_, null)) {
   this.f_onClose__java_util_stream_TerminatableStream_.add(closeHandler);
  } else {
   this.f_root__java_util_stream_TerminatableStream_.m_onClose__java_lang_Runnable__java_util_stream_TerminatableStream(closeHandler);
  }
  return /**@type {T}*/ (this);
 }
 /** @nodts */
 m_close__void() {
  if ($Equality.$same(this.f_root__java_util_stream_TerminatableStream_, null)) {
   this.f_terminated__java_util_stream_TerminatableStream_ = true;
   this.m_runClosers__void_$p_java_util_stream_TerminatableStream();
  } else {
   this.f_root__java_util_stream_TerminatableStream_.m_close__void();
  }
 }
 /** @nodts */
 m_runClosers__void_$p_java_util_stream_TerminatableStream() {
  let throwables = /**@type {!ArrayList<Throwable>}*/ (ArrayList.$create__());
  this.f_onClose__java_util_stream_TerminatableStream_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((runnable) =>{
   let runnable_1 = /**@type {Runnable}*/ ($Casts.$to(runnable, Runnable));
   try {
    runnable_1.m_run__void();
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    {
     let e = /**@type {Throwable}*/ (__$exc);
     throwables.add(e);
    }
   }
  }));
  this.f_onClose__java_util_stream_TerminatableStream_.clear();
  if (!throwables.isEmpty()) {
   let e_1 = /**@type {Throwable}*/ ($Casts.$to(throwables.getAtIndex(0), Throwable));
   for (let i = 1, size = throwables.size(); i < size; i = i + 1 | 0) {
    let suppressed = /**@type {Throwable}*/ ($Casts.$to(throwables.getAtIndex(i), Throwable));
    if (!$Equality.$same(suppressed, e_1)) {
     e_1.m_addSuppressed__java_lang_Throwable__void(suppressed);
    }
   }
   if (RuntimeException.$isInstance(e_1)) {
    throw $Exceptions.toJs(/**@type {RuntimeException}*/ ($Casts.$to(e_1, RuntimeException)));
   }
   if (Error.$isInstance(e_1)) {
    throw $Exceptions.toJs(/**@type {Error}*/ ($Casts.$to(e_1, Error)));
   }
   $Asserts.$assertWithMessage(false, 'Couldn\'t have caught this exception from a Runnable! ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(e_1));
  }
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_TerminatableStream() {
  this.f_terminated__java_util_stream_TerminatableStream_ = false;
 }
 /** @nodts */
 static $clinit() {
  TerminatableStream.$clinit = () =>{};
  TerminatableStream.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TerminatableStream;
 }
 
 /** @nodts */
 static $loadModules() {
  Error = goog.module.get('java.lang.Error$impl');
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Runnable = goog.module.get('java.lang.Runnable$impl');
  RuntimeException = goog.module.get('java.lang.RuntimeException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Throwable = goog.module.get('java.lang.Throwable$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(TerminatableStream, 'java.util.stream.TerminatableStream');

exports = TerminatableStream;

//# sourceMappingURL=TerminatableStream.js.map
