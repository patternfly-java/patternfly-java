goog.module('java.util.Collections$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparable = goog.forwardDeclare('java.lang.Comparable$impl');
let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let $1 = goog.forwardDeclare('java.util.Collections.$1$impl');
let EmptyList = goog.forwardDeclare('java.util.Collections.EmptyList$impl');
let EmptyListIterator = goog.forwardDeclare('java.util.Collections.EmptyListIterator$impl');
let EmptyMap = goog.forwardDeclare('java.util.Collections.EmptyMap$impl');
let EmptySet = goog.forwardDeclare('java.util.Collections.EmptySet$impl');
let LifoQueue = goog.forwardDeclare('java.util.Collections.LifoQueue$impl');
let RandomHolder = goog.forwardDeclare('java.util.Collections.RandomHolder$impl');
let SetFromMap = goog.forwardDeclare('java.util.Collections.SetFromMap$impl');
let SingletonList = goog.forwardDeclare('java.util.Collections.SingletonList$impl');
let UnmodifiableCollection = goog.forwardDeclare('java.util.Collections.UnmodifiableCollection$impl');
let UnmodifiableList = goog.forwardDeclare('java.util.Collections.UnmodifiableList$impl');
let UnmodifiableMap = goog.forwardDeclare('java.util.Collections.UnmodifiableMap$impl');
let UnmodifiableRandomAccessList = goog.forwardDeclare('java.util.Collections.UnmodifiableRandomAccessList$impl');
let UnmodifiableSet = goog.forwardDeclare('java.util.Collections.UnmodifiableSet$impl');
let UnmodifiableSortedMap = goog.forwardDeclare('java.util.Collections.UnmodifiableSortedMap$impl');
let UnmodifiableSortedSet = goog.forwardDeclare('java.util.Collections.UnmodifiableSortedSet$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Comparators = goog.forwardDeclare('java.util.Comparators$impl');
let Deque = goog.forwardDeclare('java.util.Deque$impl');
let Enumeration = goog.forwardDeclare('java.util.Enumeration$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ListIterator = goog.forwardDeclare('java.util.ListIterator$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let NavigableMap = goog.forwardDeclare('java.util.NavigableMap$impl');
let NavigableSet = goog.forwardDeclare('java.util.NavigableSet$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Queue = goog.forwardDeclare('java.util.Queue$impl');
let Random = goog.forwardDeclare('java.util.Random$impl');
let RandomAccess = goog.forwardDeclare('java.util.RandomAccess$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let SortedMap = goog.forwardDeclare('java.util.SortedMap$impl');
let SortedSet = goog.forwardDeclare('java.util.SortedSet$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class Collections extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template T @return {Collection<T>} */
 static m_synchronizedCollection__java_util_Collection__java_util_Collection(/** Collection<T> */ c) {
  Collections.$clinit();
  return c;
 }
 /** @nodts @template T @return {List<T>} */
 static m_synchronizedList__java_util_List__java_util_List(/** List<T> */ list) {
  Collections.$clinit();
  return list;
 }
 /** @nodts @template K, V @return {Map<K, V>} */
 static m_synchronizedMap__java_util_Map__java_util_Map(/** Map<K, V> */ m) {
  Collections.$clinit();
  return m;
 }
 /** @nodts @template K, V @return {NavigableMap<K, V>} */
 static m_synchronizedNavigableMap__java_util_NavigableMap__java_util_NavigableMap(/** NavigableMap<K, V> */ m) {
  Collections.$clinit();
  return m;
 }
 /** @nodts @template T @return {NavigableSet<T>} */
 static m_synchronizedNavigableSet__java_util_NavigableSet__java_util_NavigableSet(/** NavigableSet<T> */ s) {
  Collections.$clinit();
  return s;
 }
 /** @nodts @template T @return {Set<T>} */
 static m_synchronizedSet__java_util_Set__java_util_Set(/** Set<T> */ s) {
  Collections.$clinit();
  return s;
 }
 /** @nodts @template K, V @return {SortedMap<K, V>} */
 static m_synchronizedSortedMap__java_util_SortedMap__java_util_SortedMap(/** SortedMap<K, V> */ m) {
  Collections.$clinit();
  return m;
 }
 /** @nodts @template T @return {SortedSet<T>} */
 static m_synchronizedSortedSet__java_util_SortedSet__java_util_SortedSet(/** SortedSet<T> */ s) {
  Collections.$clinit();
  return s;
 }
 /** @nodts @template T @return {boolean} */
 static m_addAll__java_util_Collection__arrayOf_java_lang_Object__boolean(/** Collection<?> */ c, /** Array<T> */ a) {
  Collections.$clinit();
  let result = false;
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let e = $array[$index];
   {
    result = !!(+ result | + c.add(e));
   }
  }
  return result;
 }
 /** @nodts @template T @return {Queue<T>} */
 static m_asLifoQueue__java_util_Deque__java_util_Queue(/** Deque<T> */ deque) {
  Collections.$clinit();
  return /**@type {!LifoQueue<T>}*/ (LifoQueue.$create__java_util_Deque(deque));
 }
 /** @nodts @template T @return {number} */
 static m_binarySearch__java_util_List__java_lang_Object__int(/** List<?> */ sortedList, /** T */ key) {
  Collections.$clinit();
  return Collections.m_binarySearch__java_util_List__java_lang_Object__java_util_Comparator__int(sortedList, key, null);
 }
 /** @nodts @template T @return {number} */
 static m_binarySearch__java_util_List__java_lang_Object__java_util_Comparator__int(/** List<?> */ sortedList, /** T */ key, /** Comparator<?> */ comparator) {
  Collections.$clinit();
  comparator = /**@type {Comparator<*>}*/ (Comparators.m_nullToNaturalOrder__java_util_Comparator__java_util_Comparator(comparator));
  let low = 0;
  let high = sortedList.size() - 1 | 0;
  while (low <= high) {
   let mid = low + ((high - low | 0) >> 1) | 0;
   let midVal = sortedList.getAtIndex(mid);
   let compareResult = comparator.m_compare__java_lang_Object__java_lang_Object__int(midVal, key);
   if (compareResult < 0) {
    low = mid + 1 | 0;
   } else if (compareResult > 0) {
    high = mid - 1 | 0;
   } else {
    return mid;
   }
  }
  return - low - 1 | 0;
 }
 /** @nodts @template T */
 static m_copy__java_util_List__java_util_List__void(/** List<?> */ dest, /** List<?> */ src) {
  Collections.$clinit();
  if (src.size() > dest.size()) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String('src does not fit in dest'));
  }
  let destIt = dest.m_listIterator__java_util_ListIterator();
  for (let $iterator = src.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = $iterator.m_next__java_lang_Object();
   {
    destIt.m_next__java_lang_Object();
    destIt.m_set__java_lang_Object__void(e);
   }
  }
 }
 /** @nodts @return {boolean} */
 static m_disjoint__java_util_Collection__java_util_Collection__boolean(/** Collection<?> */ c1, /** Collection<?> */ c2) {
  Collections.$clinit();
  let iterating = c1;
  let testing = c2;
  if (Set.$isInstance(c1) && !Set.$isInstance(c2)) {
   iterating = c2;
   testing = c1;
  }
  for (let $iterator = iterating.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let o = $iterator.m_next__java_lang_Object();
   {
    if (testing.contains(o)) {
     return false;
    }
   }
  }
  return true;
 }
 /** @nodts @template T @return {Iterator<T>} */
 static m_emptyIterator__java_util_Iterator() {
  Collections.$clinit();
  return /**@type {Iterator<T>}*/ (EmptyListIterator.f_INSTANCE__java_util_Collections_EmptyListIterator);
 }
 /** @nodts @template T @return {List<T>} */
 static m_emptyList__java_util_List() {
  Collections.$clinit();
  return /**@type {List<T>}*/ (Collections.$static_EMPTY_LIST__java_util_Collections);
 }
 /** @nodts @template T @return {ListIterator<T>} */
 static m_emptyListIterator__java_util_ListIterator() {
  Collections.$clinit();
  return /**@type {ListIterator<T>}*/ (EmptyListIterator.f_INSTANCE__java_util_Collections_EmptyListIterator);
 }
 /** @nodts @template K, V @return {Map<K, V>} */
 static m_emptyMap__java_util_Map() {
  Collections.$clinit();
  return /**@type {Map<K, V>}*/ (Collections.$static_EMPTY_MAP__java_util_Collections);
 }
 /** @nodts @template T @return {Set<T>} */
 static m_emptySet__java_util_Set() {
  Collections.$clinit();
  return /**@type {Set<T>}*/ (Collections.$static_EMPTY_SET__java_util_Collections);
 }
 /** @nodts @template T @return {Enumeration<T>} */
 static m_enumeration__java_util_Collection__java_util_Enumeration(/** Collection<T> */ c) {
  Collections.$clinit();
  let it = c.m_iterator__java_util_Iterator();
  return /**@type {!$1<T>}*/ ($1.$create__java_util_Iterator(it));
 }
 /** @nodts @template T */
 static m_fill__java_util_List__java_lang_Object__void(/** List<?> */ list, /** T */ obj) {
  Collections.$clinit();
  for (let it = list.m_listIterator__java_util_ListIterator(); it.m_hasNext__boolean(); ) {
   it.m_next__java_lang_Object();
   it.m_set__java_lang_Object__void(obj);
  }
 }
 /** @nodts @return {number} */
 static m_frequency__java_util_Collection__java_lang_Object__int(/** Collection<?> */ c, /** * */ o) {
  Collections.$clinit();
  let count = 0;
  for (let $iterator = c.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = $iterator.m_next__java_lang_Object();
   {
    if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(o, e)) {
     count = count + 1 | 0;
    }
   }
  }
  return count;
 }
 /** @nodts @template T @return {ArrayList<T>} */
 static m_list__java_util_Enumeration__java_util_ArrayList(/** Enumeration<T> */ e) {
  Collections.$clinit();
  let arrayList = /**@type {!ArrayList<T>}*/ (ArrayList.$create__());
  while (e.m_hasMoreElements__boolean()) {
   arrayList.add(e.m_nextElement__java_lang_Object());
  }
  return arrayList;
 }
 /** @nodts @template T @return {T} */
 static m_max__java_util_Collection__java_lang_Object(/** Collection<?> */ coll) {
  Collections.$clinit();
  return Collections.m_max__java_util_Collection__java_util_Comparator__java_lang_Object(coll, null);
 }
 /** @nodts @template T @return {T} */
 static m_max__java_util_Collection__java_util_Comparator__java_lang_Object(/** Collection<?> */ coll, /** Comparator<?> */ comp) {
  Collections.$clinit();
  comp = /**@type {Comparator<*>}*/ (Comparators.m_nullToNaturalOrder__java_util_Comparator__java_util_Comparator(comp));
  let it = coll.m_iterator__java_util_Iterator();
  let max = it.m_next__java_lang_Object();
  while (it.m_hasNext__boolean()) {
   let t = it.m_next__java_lang_Object();
   if (comp.m_compare__java_lang_Object__java_lang_Object__int(t, max) > 0) {
    max = t;
   }
  }
  return max;
 }
 /** @nodts @template T @return {T} */
 static m_min__java_util_Collection__java_lang_Object(/** Collection<?> */ coll) {
  Collections.$clinit();
  return Collections.m_min__java_util_Collection__java_util_Comparator__java_lang_Object(coll, null);
 }
 /** @nodts @template T @return {T} */
 static m_min__java_util_Collection__java_util_Comparator__java_lang_Object(/** Collection<?> */ coll, /** Comparator<?> */ comp) {
  Collections.$clinit();
  return Collections.m_max__java_util_Collection__java_util_Comparator__java_lang_Object(coll, /**@type {Comparator<*>}*/ (Collections.m_reverseOrder__java_util_Comparator__java_util_Comparator(comp)));
 }
 /** @nodts @template E @return {Set<E>} */
 static m_newSetFromMap__java_util_Map__java_util_Set(/** Map<E, ?boolean> */ map) {
  Collections.$clinit();
  InternalPreconditions.m_checkArgument__boolean__java_lang_Object__void(map.isEmpty(), 'map is not empty');
  return /**@type {!SetFromMap<E>}*/ (SetFromMap.$create__java_util_Map(map));
 }
 /** @nodts @template T @return {List<T>} */
 static m_nCopies__int__java_lang_Object__java_util_List(/** number */ n, /** T */ o) {
  Collections.$clinit();
  let list = /**@type {!ArrayList<T>}*/ (ArrayList.$create__());
  for (let i = 0; i < n; i = i + 1 | 0) {
   list.add(o);
  }
  return /**@type {List<T>}*/ (Collections.m_unmodifiableList__java_util_List__java_util_List(list));
 }
 /** @nodts @template T @return {boolean} */
 static m_replaceAll__java_util_List__java_lang_Object__java_lang_Object__boolean(/** List<T> */ list, /** T */ oldVal, /** T */ newVal) {
  Collections.$clinit();
  let modified = false;
  for (let it = list.m_listIterator__java_util_ListIterator(); it.m_hasNext__boolean(); ) {
   let t = it.m_next__java_lang_Object();
   if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(t, oldVal)) {
    it.m_set__java_lang_Object__void(newVal);
    modified = true;
   }
  }
  return modified;
 }
 /** @nodts */
 static m_reverse__java_util_List__void(/** List<?> */ l) {
  Collections.$clinit();
  if (RandomAccess.$isInstance(l)) {
   for (let iFront = 0, iBack = l.size() - 1 | 0; iFront < iBack; iFront = iFront + 1 | 0, iBack = iBack - 1 | 0) {
    Collections.m_swap__java_util_List__int__int__void(l, iFront, iBack);
   }
  } else {
   let head = l.m_listIterator__java_util_ListIterator();
   let tail = l.m_listIterator__int__java_util_ListIterator(l.size());
   while (head.m_nextIndex__int() < tail.m_previousIndex__int()) {
    let headElem = head.m_next__java_lang_Object();
    let tailElem = tail.m_previous__java_lang_Object();
    head.m_set__java_lang_Object__void(tailElem);
    tail.m_set__java_lang_Object__void(headElem);
   }
  }
 }
 /** @nodts @template T @return {Comparator<T>} */
 static m_reverseOrder__java_util_Comparator() {
  Collections.$clinit();
  return /**@type {Comparator<T>}*/ (Comparator.m_reverseOrder__java_util_Comparator());
 }
 /** @nodts @template T @return {Comparator<T>} */
 static m_reverseOrder__java_util_Comparator__java_util_Comparator(/** Comparator<T> */ cmp) {
  Collections.$clinit();
  return $Equality.$same(cmp, null) ? /**@type {Comparator<T>}*/ (Collections.m_reverseOrder__java_util_Comparator()) : cmp.m_reversed__java_util_Comparator();
 }
 /** @nodts */
 static m_rotate__java_util_List__int__void(/** List<?> */ lst, /** number */ dist) {
  Collections.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(lst);
  let size = lst.size();
  if (size == 0) {
   return;
  }
  let normdist = $Primitives.coerceDivision(dist % size);
  if (normdist == 0) {
   return;
  }
  if (normdist < 0) {
   normdist = normdist + size | 0;
  }
  if (RandomAccess.$isInstance(lst)) {
   let list = /**@type {List<*>}*/ (lst);
   let temp = list.getAtIndex(0);
   let index = 0, beginIndex = 0;
   for (let i = 0; i < size; i = i + 1 | 0) {
    index = $Primitives.coerceDivision((index + normdist | 0) % size);
    temp = list.setAtIndex(index, temp);
    if (index == beginIndex) {
     index = beginIndex = beginIndex + 1 | 0;
     temp = list.getAtIndex(beginIndex);
    }
   }
  } else {
   let divideIndex = size - normdist | 0;
   let sublist1 = lst.subList(0, divideIndex);
   let sublist2 = lst.subList(divideIndex, size);
   Collections.m_reverse__java_util_List__void(sublist1);
   Collections.m_reverse__java_util_List__void(sublist2);
   Collections.m_reverse__java_util_List__void(lst);
  }
 }
 /** @nodts */
 static m_shuffle__java_util_List__void(/** List<?> */ list) {
  Collections.$clinit();
  Collections.m_shuffle__java_util_List__java_util_Random__void(list, RandomHolder.f_rnd__java_util_Collections_RandomHolder_);
 }
 /** @nodts */
 static m_shuffle__java_util_List__java_util_Random__void(/** List<?> */ list, /** Random */ rnd) {
  Collections.$clinit();
  if (RandomAccess.$isInstance(list)) {
   for (let i = list.size() - 1 | 0; i >= 1; i = i - 1 | 0) {
    Collections.m_swapImpl__java_util_List__int__int__void(list, i, rnd.m_nextInt__int__int(i + 1 | 0));
   }
  } else {
   let arr = list.toArray();
   for (let i_1 = arr.length - 1 | 0; i_1 >= 1; i_1 = i_1 - 1 | 0) {
    Collections.m_swapImpl__arrayOf_java_lang_Object__int__int__void(arr, i_1, rnd.m_nextInt__int__int(i_1 + 1 | 0));
   }
   let it = list.m_listIterator__java_util_ListIterator();
   for (let $array = arr, $index = 0; $index < $array.length; $index++) {
    let e = $array[$index];
    {
     it.m_next__java_lang_Object();
     it.m_set__java_lang_Object__void(e);
    }
   }
  }
 }
 /** @nodts @template T @return {Set<T>} */
 static m_singleton__java_lang_Object__java_util_Set(/** T */ o) {
  Collections.$clinit();
  let set = /**@type {!HashSet<T>}*/ (HashSet.$create__int(1));
  set.add(o);
  return /**@type {Set<T>}*/ (Collections.m_unmodifiableSet__java_util_Set__java_util_Set(set));
 }
 /** @nodts @template T @return {List<T>} */
 static m_singletonList__java_lang_Object__java_util_List(/** T */ o) {
  Collections.$clinit();
  return /**@type {!SingletonList<T>}*/ (SingletonList.$create__java_lang_Object(o));
 }
 /** @nodts @template K, V @return {Map<K, V>} */
 static m_singletonMap__java_lang_Object__java_lang_Object__java_util_Map(/** K */ key, /** V */ value) {
  Collections.$clinit();
  let map = /**@type {!HashMap<K, V>}*/ (HashMap.$create__int(1));
  map.put(key, value);
  return /**@type {Map<K, V>}*/ (Collections.m_unmodifiableMap__java_util_Map__java_util_Map(map));
 }
 /** @nodts @template T */
 static m_sort__java_util_List__void(/** List<T> */ target) {
  Collections.$clinit();
  target.m_sort__java_util_Comparator__void(null);
 }
 /** @nodts @template T */
 static m_sort__java_util_List__java_util_Comparator__void(/** List<T> */ target, /** Comparator<?> */ c) {
  Collections.$clinit();
  target.m_sort__java_util_Comparator__void(c);
 }
 /** @nodts */
 static m_swap__java_util_List__int__int__void(/** List<?> */ list, /** number */ i, /** number */ j) {
  Collections.$clinit();
  Collections.m_swapImpl__java_util_List__int__int__void(list, i, j);
 }
 /** @nodts @template T @return {Collection<T>} */
 static m_unmodifiableCollection__java_util_Collection__java_util_Collection(/** Collection<?> */ coll) {
  Collections.$clinit();
  return /**@type {!UnmodifiableCollection<T>}*/ (UnmodifiableCollection.$create__java_util_Collection(coll));
 }
 /** @nodts @template T @return {List<T>} */
 static m_unmodifiableList__java_util_List__java_util_List(/** List<?> */ list) {
  Collections.$clinit();
  return RandomAccess.$isInstance(list) ? /**@type {!UnmodifiableRandomAccessList<T>}*/ (UnmodifiableRandomAccessList.$create__java_util_List(list)) : /**@type {!UnmodifiableList<T>}*/ (UnmodifiableList.$create__java_util_List(list));
 }
 /** @nodts @template K, V @return {Map<K, V>} */
 static m_unmodifiableMap__java_util_Map__java_util_Map(/** Map<?, ?> */ map) {
  Collections.$clinit();
  return /**@type {!UnmodifiableMap<K, V>}*/ (UnmodifiableMap.$create__java_util_Map(map));
 }
 /** @nodts @template T @return {Set<T>} */
 static m_unmodifiableSet__java_util_Set__java_util_Set(/** Set<?> */ set) {
  Collections.$clinit();
  return /**@type {!UnmodifiableSet<T>}*/ (UnmodifiableSet.$create__java_util_Set(set));
 }
 /** @nodts @template K, V @return {SortedMap<K, V>} */
 static m_unmodifiableSortedMap__java_util_SortedMap__java_util_SortedMap(/** SortedMap<K, ?> */ map) {
  Collections.$clinit();
  return /**@type {!UnmodifiableSortedMap<K, V>}*/ (UnmodifiableSortedMap.$create__java_util_SortedMap(map));
 }
 /** @nodts @template T @return {SortedSet<T>} */
 static m_unmodifiableSortedSet__java_util_SortedSet__java_util_SortedSet(/** SortedSet<T> */ set) {
  Collections.$clinit();
  return /**@type {!UnmodifiableSortedSet<T>}*/ (UnmodifiableSortedSet.$create__java_util_SortedSet(set));
 }
 /** @nodts @template T @return {number} */
 static m_hashCode__java_lang_Iterable__int(/** Iterable<T> */ collection) {
  Collections.$clinit();
  let hashCode = 0;
  for (let $iterator = collection.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = $iterator.m_next__java_lang_Object();
   {
    hashCode = hashCode + Objects.m_hashCode__java_lang_Object__int(e) | 0;
   }
  }
  return hashCode;
 }
 /** @nodts @template T @return {number} */
 static m_hashCode__java_util_List__int(/** List<T> */ list) {
  Collections.$clinit();
  let hashCode = 1;
  for (let $iterator = list.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = $iterator.m_next__java_lang_Object();
   {
    hashCode = Math.imul(31, hashCode) + Objects.m_hashCode__java_lang_Object__int(e) | 0;
   }
  }
  return hashCode;
 }
 /** @nodts @template T */
 static m_swapImpl__java_util_List__int__int__void(/** List<T> */ list, /** number */ i, /** number */ j) {
  let t = list.getAtIndex(i);
  list.setAtIndex(i, list.getAtIndex(j));
  list.setAtIndex(j, t);
 }
 /** @nodts */
 static m_swapImpl__arrayOf_java_lang_Object__int__int__void(/** Array<*> */ a, /** number */ i, /** number */ j) {
  let obj = a[i];
  $Arrays.$set(a, i, a[j]);
  $Arrays.$set(a, j, obj);
 }
 /** @nodts @return {!Collections} */
 static $create__() {
  let $instance = new Collections();
  $instance.$ctor__java_util_Collections__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {List} */
 static get f_EMPTY_LIST__java_util_Collections() {
  return (Collections.$clinit(), Collections.$static_EMPTY_LIST__java_util_Collections);
 }
 /** @nodts @return {Map} */
 static get f_EMPTY_MAP__java_util_Collections() {
  return (Collections.$clinit(), Collections.$static_EMPTY_MAP__java_util_Collections);
 }
 /** @nodts @return {Set} */
 static get f_EMPTY_SET__java_util_Collections() {
  return (Collections.$clinit(), Collections.$static_EMPTY_SET__java_util_Collections);
 }
 /** @nodts */
 static $clinit() {
  Collections.$clinit = () =>{};
  Collections.$loadModules();
  j_l_Object.$clinit();
  Collections.$static_EMPTY_LIST__java_util_Collections = EmptyList.$create__();
  Collections.$static_EMPTY_MAP__java_util_Collections = EmptyMap.$create__();
  Collections.$static_EMPTY_SET__java_util_Collections = EmptySet.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Collections;
 }
 
 /** @nodts */
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $1 = goog.module.get('java.util.Collections.$1$impl');
  EmptyList = goog.module.get('java.util.Collections.EmptyList$impl');
  EmptyListIterator = goog.module.get('java.util.Collections.EmptyListIterator$impl');
  EmptyMap = goog.module.get('java.util.Collections.EmptyMap$impl');
  EmptySet = goog.module.get('java.util.Collections.EmptySet$impl');
  LifoQueue = goog.module.get('java.util.Collections.LifoQueue$impl');
  RandomHolder = goog.module.get('java.util.Collections.RandomHolder$impl');
  SetFromMap = goog.module.get('java.util.Collections.SetFromMap$impl');
  SingletonList = goog.module.get('java.util.Collections.SingletonList$impl');
  UnmodifiableCollection = goog.module.get('java.util.Collections.UnmodifiableCollection$impl');
  UnmodifiableList = goog.module.get('java.util.Collections.UnmodifiableList$impl');
  UnmodifiableMap = goog.module.get('java.util.Collections.UnmodifiableMap$impl');
  UnmodifiableRandomAccessList = goog.module.get('java.util.Collections.UnmodifiableRandomAccessList$impl');
  UnmodifiableSet = goog.module.get('java.util.Collections.UnmodifiableSet$impl');
  UnmodifiableSortedMap = goog.module.get('java.util.Collections.UnmodifiableSortedMap$impl');
  UnmodifiableSortedSet = goog.module.get('java.util.Collections.UnmodifiableSortedSet$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  Comparators = goog.module.get('java.util.Comparators$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  RandomAccess = goog.module.get('java.util.RandomAccess$impl');
  Set = goog.module.get('java.util.Set$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@private {List} @nodts*/
Collections.$static_EMPTY_LIST__java_util_Collections;
/**@private {Map} @nodts*/
Collections.$static_EMPTY_MAP__java_util_Collections;
/**@private {Set} @nodts*/
Collections.$static_EMPTY_SET__java_util_Collections;
$Util.$setClassMetadata(Collections, 'java.util.Collections');

exports = Collections;

//# sourceMappingURL=Collections.js.map
