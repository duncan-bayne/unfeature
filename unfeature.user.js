// ==UserScript==
// @name           Unfeature
// @namespace      http://github.com/duncan-bayne/unfeature
// @description    Removes the Featured Videos feed from YouTube.
// @include        http://www.youtube.com/*
// ==/UserScript==

// Unfeature is Free Software, and is licensed under the GNU LGPL.
// See lgpl-3.0.txt for the full licence text.

//
// Set these to true or false to remove specific feeds.
//
remove_popular_videos           = true;
remove_featured_videos          = true;
remove_suggested_videos         = true;
remove_videos_being_watched_now = true;





if (remove_videos_being_watched_now) {
    remove_elements_by_id('feedmodule-POP');
}
if (remove_featured_videos) {
    remove_elements_by_id('feedmodule-PRO');
}
if (remove_popular_videos) {
    remove_elements_by_id('feedmodule-TOP');
}
if (remove_suggested_videos) {
    remove_elements_by_id('watch-related');
    remove_elements_by_id('watch-more-related-button');
}

function remove_elements_by_id(element_id) {
    var node = document.getElementById(element_id);
    while (node != null) {
	node.parentNode.removeChild(node);
	node = document.getElementById(element_id);
    }
}