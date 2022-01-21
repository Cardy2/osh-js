/***************************** BEGIN LICENSE BLOCK ***************************

 The contents of this file are subject to the Mozilla Public License, v. 2.0.
 If a copy of the MPL was not distributed with this file, You can obtain one
 at http://mozilla.org/MPL/2.0/.

 Software distributed under the License is distributed on an "AS IS" basis,
 WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 for the specific language governing rights and limitations under the License.

 Copyright (C) 2015-2021 Georobotix Inc. All Rights Reserved.

 Author: Mathieu Dhainaut <mathieu.dhainaut@gmail.com>

 ******************************* END LICENSE BLOCK ***************************/

import SystemFilter from "./SystemFilter";
import SensorWebApi from "../SensorWebApi";
import Collection from "../Collection";
import SweApiFetchSystemParser from "../../datasource/sweapi/parser/json/SweApiFetchSystem.parser";
import DataStreamFilter from "../datastream/DataStreamFilter";
import SweApiDataStreamParser from "../../datasource/sweapi/parser/json/SweApiDataStream.parser";
import FeatureOfInterestFilter from "../featureofinterest/FeatureOfInterestFilter";
import SweApiFetchFeatureOfInterestParser  from "../../datasource/sweapi/parser/json/SweApiFetchFeatureOfInterest.parser";
import API from "../routes.conf";

class System extends SensorWebApi {

    constructor(properties, networkProperties) {
        super(networkProperties); // network properties
        this.properties = properties;
        this.systemParser = new SweApiFetchSystemParser(networkProperties);
        this.dataStreamParser = new SweApiDataStreamParser(networkProperties);
        this.featureOfInterestParser = new SweApiFetchFeatureOfInterestParser(networkProperties);
    }

    /**
     * Get the latest specsheet of a system
     * @param {SystemFilter} systemFilter - the system filter
     * @return Promise<JSON> - SensorlML Description
     */
    async getDetails(systemFilter = new SystemFilter()) {
        return this._network.info.connector.doRequest(
            API.systems.details.replace('{id}',this.properties.id),
            systemFilter.toQueryString(['select', 'format']),
            systemFilter.props.format
        );
    }

    /**
     *
     * @param {SystemFilter} systemFilter - the system filter
     * @param pageSize
     * @return Promise<Collection<System>>
     */
    async searchSubSystems(systemFilter = new SystemFilter(), pageSize = 10) {
        systemFilter.props.parent = this.properties.id;
        return new Collection(API.systems.search, systemFilter, pageSize, this.systemParser, this._network.info.connector);
    }

    /**
     * List or search output datastreams of the selected system. Individual datastreams can be retrieved by ID directly on the root "datastreams" collection.     * @param dataStreamFilter
     * @param pageSize
     * @return {Promise<Collection>}
     */
    async searchDataStreams(dataStreamFilter = new DataStreamFilter(), pageSize= 10) {
        return new Collection(
            API.systems.datastreams.replace('{id}',this.properties.id),
            dataStreamFilter, pageSize,this.dataStreamParser, this._network.info.connector);
    }

    /**
     * List or search features of interest of a system. Individual features can be retrieved by ID directly on the root "featuresOfInterest" collection
     * @param featureOfInterestFilter
     * @param pageSize
     * @return {Promise<Collection>}
     */
    async searchFeaturesOfInterest(featureOfInterestFilter = new FeatureOfInterestFilter(), pageSize= 10) {
        return new Collection(
            API.systems.fois.replace('{id}',this.properties.id),featureOfInterestFilter,
            pageSize,this.featureOfInterestParser, this._network.info.connector);
    }
}

export default System;