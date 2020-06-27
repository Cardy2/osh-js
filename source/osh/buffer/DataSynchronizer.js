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

import EventManager from "osh/events/EventManager";
import {isDefined} from "../../../dist/source/osh/utils/Utils";
import SynchronizerWorkerInterval from './DataSynchronizer.worker';


class DataSynchronizer {
    /**
     * Creates The dataSynchronizer.
     * @param {DataSource[]} datasSources - the dataSource array
     */
    constructor(properties) {
        if(!isDefined(properties.dataSources)) {
            throw 'You must specified a dataSource array';
        }
        this.bufferingTime = 1000; // default
        this.initWorker(properties.dataSources);
    }

    /**
     * @private
     */
    initWorker(dataSources) {
        // build object for Worker because DataSource is not clonable
        const dataSourcesForWorker = [];
        for(let dataSource of dataSources) {
            dataSourcesForWorker.push({
                bufferingTime: dataSource.bufferingTime,
                timeOut: dataSource.timeOut,
                id: dataSource.id
            });
            // bind dataSource data onto dataSynchronizer data
            dataSource.onData = (data) => push(dataSource.id, data);
        }


        this.synchronizerWorker = new SynchronizerWorkerInterval({bufferingTime: this.bufferingTime});
        this.synchronizerWorker.postMessage({
            dataSources: dataSourcesForWorker
        });

        this.synchronizerWorker.onmessage =(event) => {
            // EventManager.fire(EventManager.EVENT.DATA + "-" + event.data.dataSourceId, {data: event.data.data});
            this.onData(event.data.dataSourceId, event.data.data);
        }
    }

    push(dataSourceId, data) {
        this.synchronizerWorker.postMessage({
            dataSourceId: dataSourceId,
            data: data
        });
    }

    onData(dataSourceId, data) {

    }
}
export default  DataSynchronizer;
