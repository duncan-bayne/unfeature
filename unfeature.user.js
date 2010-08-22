// ==UserScript==
// @name           'Unfeature'
// @namespace      http://github.com/duncan-bayne/unfeature
// @description    Removes the Featured Videos feed from YouTube, regardless of whether you're logged in or not.
// @include        http://www.youtube.com/*
// ==/UserScript==

var promoted_feed_id = 'feedmodule-PRO';
var promoted = document.getElementById(promoted_feed_id);
while (promoted != null) {
    promoted.parentNode.removeChild(promoted);
    promoted = document.getElementById(promoted_feed_id);
}