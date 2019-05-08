/**
 * @description Class Editor
 * @author Fabien Beaujean
 * @licence MIT
 * @class App.Editor
 * @constructor
 */
App.Editor = function(){
    /**
     * Map instance
     * @type {App.Map}
     * @private
     */
    var _map = null;

    /**
     * Menu instance
     * @type {App.Menu}
     * @private
     */
    var _menu = null;

    /**
     * Save instance
     * @type {App.Save}
     * @private
     */
    var _save = null;

    /**
     * Tile list
     * @type {Object}
     * @private
     */
    var _tiles = [];

    /**
     * Tile list
     * @type {Object}
     * @private
     */
    var _selectedTiles = [];
    
    this.Init = function() {
        _map = new App.Map();
        _map.Init();

        _menu = new App.Menu();
        _menu.Init();

        _save = new App.Save();
        _save.Init();

        document.addEventListener("clickMap", ClickMapHandler);
        document.addEventListener("clear", ClearHandler);
        document.addEventListener("save", SaveHandler);
    }

    /**
     * @method App.Editor#ClickMapHandler
     * @param {CustomEvent} e
     * @private
     * @return {void}
     */
    function ClickMapHandler(e) {
        console.log("Click map handler");
        console.log(e.detail);

        switch(_menu.GetCurrentTool()) {
            case ToolType.Select:
            break;
        }
    }

    /**
     * @method App.Editor#ClearHandler
     * @param {CustomEvent} e
     * @private
     * @return {void}
     */
    function ClearHandler(e) {
        console.log("Clear handler");

        _tiles = [];
        _map.Clear();

        DrawOptions(_tiles);
    }

    /**
     * @method App.Editor#SaveHandler
     * @param {CustomEvent} e
     * @private
     * @return {void}
     */
    function SaveHandler(e) {
        console.log("Save handler");

        if(_tiles.length > 0) {
            _save.DisplaySave(_tiles);
        }
    }

    /**
     * @method App.Editor#DrawOptions
     * @param {Tile[]} tileList
     * @private
     * @return {void}
     */
    function DrawOptions(tileList) {
        console.log("Draw options");
        _menu.DrawOptions(tileList);
    }
}