/**
 * @description Class Map
 * @author Fabien Beaujean
 * @licence MIT
 * @class App.Map
 * @constructor
 */
App.Map = function(){
    /**
     * OL map instance
     * @type {ol.Map}
     * @private
     */
    var _map = null;

    /**
     * @method App.Map#Init
     * @public
     * @return {void}
     */
    this.Init = function() {
        InitMap();
        window.onresize = function(e) { ResizeMap(e) };
    }

    /**
     * @method App.Map#InitMap
     * @public
     * @return {void}
     */
    function InitMap() {
        ResizeMap();

        _map = new  Lib.ol.Map({
            target: 'map',
            pixelRatio: 1,
            layers: [
                new  Lib.ol.layer.Tile({
                    source: new Lib.ol.source.OSM()
                })
            ],
            view: new Lib.ol.View({
              center: Lib.ol.proj.fromLonLat([37.41, 8.82]),
              zoom: 4
            })
        });
    }

    /**
     * @method App.Map#ResizeMap
     * @param {Object} e
     * @public
     * @return {void}
     */
    function ResizeMap(e) {
        var width = window.innerWidth;
        var height = window.innerHeight;
        
        document.getElementById('map').style.width = (width - 250) + "px";
        document.getElementById('map').style.height = height + "px";

        if(_map != null)
        {
            _map.updateSize();
        }
    }

    /**
     * @method App.Map#Clear
     * @public
     * @return {void}
     */
    this.Clear = function() {
        // TODO
    }
}
