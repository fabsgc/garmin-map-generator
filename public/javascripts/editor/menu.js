var ToolType = {
    Select: "tool-select", 
    Clear: "tool-clear", 
    Undo: "tool-undo",
    Save: "tool-save"
};

/**
 * @description Class Menu
 * @author Fabien Beaujean
 * @licence MIT
 * @class App.Menu
 * @constructor
 */
App.Menu = function(){
    /**
     * Tool type
     * @type {String}
     * @private
     */
    var _currentTool = null;

    /**
     * @type {Tile[]}
     * @private
     */
    var _currentTiles = [];

    /**
     * @method App.Menu#Init
     * @public
     * @return {void}
     */
    this.Init = function() {
        _currentTool = ToolType.Select;

        Array.from(document.getElementsByClassName("tool")).forEach(function(element) {
            element.addEventListener("click", ClickMenuToolHandler);
        });
    }

    /**
     * @method App.Menu#GetCurrentTool
     * @public
     * @return {String}
     */
    this.GetCurrentTool = function() {
        return _currentTool;
    }

    /**
     * @method App.Menu#GetCurrentTiles
     * @public
     * @return {Tile[]}
     */
    this.GetCurrentTiles = function() {
        return _currentTiles;
    }

    /**
     * @method App.Menu#DrawOptions
     * @param {Tile[]} tileList
     * @private
     * @return {void}
     */
    this.DrawOptions = function(tileList) {
        console.log("Draw options");
        console.log(tileList);

        _currentTiles = tileList;
        ResetOptions();

        _currentTiles.forEach(function(tile) {
            DrawOptionElement(tile);
        });
    }

    /**
     * @method App.Menu#ResetOptions
     * @private
     * @return {void}
     */
    function ResetOptions() {
        var node = document.getElementById("tile-list");

        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }

    /**
     * @method App.Menu#DrawOptionElement
     * @param {Tile[]} tile
     * @private
     * @return {void}
     */
    function DrawOptionElement(tile) {
        var tileElement = document.createElement("div");
        tileElement.classList.add("tile-element");
        tileElement.setAttribute("id", "tile-" + tile.id);

        var menuContent = document.createElement("div");
        menuContent.classList.add("menu-content");
        menuContent.setAttribute("id", tile.id);

        var optionInfo = document.createElement("div");
        optionInfo.setAttribute("option", "option-info");
        optionInfo.setAttribute("id", "option-info-" + tile.id);
        optionInfo.setAttribute("value", tile.description);
        optionInfo.classList.add("option");

        menuContent.appendChild(optionInfo);
        tileElement.appendChild(menuContent);

        document.getElementById("tile-list").appendChild(tileElement);
    }

    /**
     * @method App.Menu#ClickMenuToolHandler
     * @param {Event} e
     * @private
     * @return {void}
     */
    function ClickMenuToolHandler(e) {
        var obj = e.target;
        var toolId = obj.getAttribute("id");

        if(toolId == null) {
            obj = obj.parentNode;
            toolId  = obj.getAttribute("id");
        }

        Array.from(document.getElementsByClassName("tool")).forEach(function(element) {
            element.classList.remove("selected");
        });

        _currentTool = toolId;
        obj.classList.add("selected");

        switch(_currentTool){
            case ToolType.Clear: {
                var event = new CustomEvent('clear', {});
                document.dispatchEvent(event);
            } break;

            case ToolType.Save: {
                var event = new CustomEvent('save', {});
                document.dispatchEvent(event);
            } break;
        }

        console.log(_currentTool);
    }
}
