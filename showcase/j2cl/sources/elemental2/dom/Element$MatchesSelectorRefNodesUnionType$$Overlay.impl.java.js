goog.module('elemental2.dom.Element.MatchesSelectorRefNodesUnionType.$Overlay$impl');

let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let NodeList_$Overlay = goog.forwardDeclare('elemental2.dom.NodeList.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_Element_MatchesSelectorRefNodesUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {Node} */
 static m_asNode__$devirt__elemental2_dom_Element_MatchesSelectorRefNodesUnionType__elemental2_dom_Node(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Node}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Node_$Overlay));
 }
 /** @nodts @return {NodeList<*>} */
 static m_asNodeList__$devirt__elemental2_dom_Element_MatchesSelectorRefNodesUnionType__elemental2_dom_NodeList(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {NodeList<*>}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), NodeList_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isNode__$devirt__elemental2_dom_Element_MatchesSelectorRefNodesUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Node_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isNodeList__$devirt__elemental2_dom_Element_MatchesSelectorRefNodesUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return NodeList_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  NodeList_$Overlay = goog.module.get('elemental2.dom.NodeList.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Element$MatchesSelectorRefNodesUnionType$$Overlay.js.map
