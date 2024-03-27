goog.module('elemental2.dom.ServiceWorkerRegistration.$Overlay');

goog.require('elemental2.core.JsArray.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.NavigationPreloadManager.$Overlay');
goog.require('elemental2.dom.Notification.$Overlay');
goog.require('elemental2.dom.PushManager.$Overlay');
goog.require('elemental2.dom.ServiceWorker.$Overlay');
goog.require('elemental2.dom.SyncManager.$Overlay');
goog.require('elemental2.promise.Promise.$Overlay');

const $Overlay = goog.require('elemental2.dom.ServiceWorkerRegistration.$Overlay$impl');
/** @nodts */
exports = $Overlay;
