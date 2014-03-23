var app = app || {};

/**
 * Library, used to incapsulate DOM specific methods.
 * Should be extended to support older browsers.
 *
 */
app.domUtils = (function(){
    'use strict';


    function getByClass(className, rootEl){
        return (rootEl||document).getElementsByClassName(className);
    }

    function getByTag(tagNane, rootEl){
        return (rootEl||document).getElementsByTagName(tagNane);
    }

    function getById(id){
        return document.getElementById(id);
    }


    function click(el, handler){
        el.addEventListener('click', handler);
    }

    return {
        getByClass  : getByClass,
        getById     : getById,
        getByTag    : getByTag,
        click       : click
    }


})();