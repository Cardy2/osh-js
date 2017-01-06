/**
 * @classdesc The DataConnector is the abstract class used to create different connectors.
 * @constructor
 * @abstract
 * @param {string} url The full url used to connect to the data stream
 */

OSH.DataConnector.DataConnector = function(url) {
    this.url = url;
    this.id = "DataConnector-"+OSH.Utils.randomUUID();
};


/**
 * The data connector default id.
 * @returns {string}
 * @memberof OSH.DataConnector.DataConnector
 * @instance
 */

OSH.DataConnector.DataConnector.prototype.getId = function() {
    return this.id;
};


/**
 * The stream url.
 * @returns {string}
 * @memberof OSH.DataConnector.DataConnector
 * @instance
 */

OSH.DataConnector.DataConnector.prototype.getUrl = function() {
    return this.url;
};

