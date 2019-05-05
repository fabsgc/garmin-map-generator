/**
 * @description Entry point of the application
 * @author Fabien Beaujean
 * @licence MIT
 * @constructor
 */

App = {};
App.Config = {};

requirejs.config({baseUrl: 'javascripts/'});

requirejs([
    'lib/ol',
    'editor/editor',
    'editor/util',
    'editor/map',
    'editor/menu',
    'editor/save'
], function () {
    var editor = new App.Editor();
    editor.Init();
});