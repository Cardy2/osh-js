/***************************** BEGIN LICENSE BLOCK ***************************

 The contents of this file are subject to the Mozilla Public License, v. 2.0.
 If a copy of the MPL was not distributed with this file, You can obtain one
 at http://mozilla.org/MPL/2.0/.

 Software distributed under the License is distributed on an "AS IS" basis,
 WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 for the specific language governing rights and limitations under the License.

 Copyright (C) 2015-2020 Mathieu Dhainaut. All Rights Reserved.

 Author: Mathieu Dhainaut <mathieu.dhainaut@gmail.com>

 ******************************* END LICENSE BLOCK ***************************/

import DataConnector from './DataConnector.js';
import {isDefined} from '../utils/Utils.js';
import {Status} from './Status.js';

/**
 * Defines the AjaxConnector to connect to a remote server by making AjaxRequest.
 * @extends DataConnector
 * @example
 * import Ajax from 'core/protocol/Ajax.js';
 *
 * let request = ...;
 * let protocol = new Ajax(url);
 *
 * // handle onSuccess
 * protocol.onSuccess = function(event) {
 *  // does something
 * }
 *
 * protocol.onError = function(event) {
 *  // does something
 * }
 *
 * // send request
 * protocol.sendRequest(request);
 *
 */
class HttpConnector extends DataConnector {

    /**
     * Creates Ajax.
     * @param {String} url -
     * @param {Object} properties -
     * @param {String} properties.method -
     * @param {String} properties.headers -
     */
    constructor(url, properties ) {
        super(url, properties);

        this.method = "POST";

        if (isDefined(properties)) {
            if (properties.method) {
                this.method = properties.method;
            }

            if (properties.headers) {
                this.headers = properties.headers;
            }
        }
    }

    /**
     * Sends the request to the defined server.
     * @param {String} extraUrl - extra url to append to the url
     * @param {String} queryString - get query parameters
     */
    async doRequest(extraUrl = '', queryString = undefined, responseType = undefined) {
        let fullUrl = this.getUrl() + extraUrl;

        if (isDefined(queryString)) {
            fullUrl += '?' + queryString;
        }

        // default
        const promiseResponse = fetch(fullUrl, {
            method: this.method,
            headers: this.headers
        })
            .then(function (response) {
                // if(responseTypeVar === 'application/json') {
                //     return response.json();
                // } else if(responseTypeVar === 'plain/text'){
                //     return response.text();
                // } else {
                    return response.arrayBuffer();
                // }
            });
        const response = await promiseResponse;
        this.onMessage(response);
        return response;
    }

    /**
     * This is the callback method in case of getting error connection.
     * @param event The error details
     * @event
     */
    onError(event) {

    }

    /**
     * This is the callback method in case of getting success connection.
     * @param event
     * @event
     */
    onMessage(event) {

    }

    disconnect() {}

    /**
     * Sends the request
     * @private
     */
    connect() {
        return this.doRequest();
    }

    isConnected() {
        return false;
    }
}
export default HttpConnector;