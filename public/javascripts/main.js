/**
 * @description Entry point of the application
 * @author Fabien Beaujean
 * @licence MIT
 * @constructor
 */

App = {};
Lib = {};

requirejs.config({
    baseUrl: 'javascripts/'
});

requirejs([
    'lib/ol',
    'lib/jquery-3.4.1.min',
    'editor/editor',
    'editor/tile',
    'editor/util',
    'editor/map',
    'editor/menu',
    'editor/save'
], function (ol, jquery, editor, tile, util, map, menu, save) {
    Lib.ol = ol;
    
    var editor = new App.Editor();
    editor.Init();
});