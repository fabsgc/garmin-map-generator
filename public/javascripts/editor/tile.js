/**
 * @description Class Tile (ORM)
 * @author Fabien Beaujean
 * @licence MIT
 * @class App.Tile
 * @constructor
 */
App.Tile = function(){
    /**
     * Sprite instance
     * @type {Integer}
     * @private
     */
    this.id = null;

    /**
     * Sprite instance
     * @type {String}
     * @private
     */
    this.name = null;

    /**
     * Sprite instance
     * @type {String}
     * @private
     */
    this.description = null;

    /**
     * Position
     * @type {Object}
     * @private
     */
    this.position = null;

    /**
     * @method App.Tile#Init
     * @public
     * @return {void}
     */
    this.Init = function(id, name, description, north = 0.0, south = 0.0, west = 0.0, east = 0.0) {
        this.id = id;
        this.name = name;
        this.description = description;

        this.position = { 
            noth: north,
            south: south,
            west: west,
            east: east
        };
    }
}