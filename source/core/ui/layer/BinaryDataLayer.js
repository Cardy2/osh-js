/***************************** BEGIN LICENSE BLOCK ***************************

 The contents of this file are subject to the Mozilla Public License, v. 2.0.
 If a copy of the MPL was not distributed with this file, You can obtain one
 at http://mozilla.org/MPL/2.0/.

 Software distributed under the License is distributed on an "AS IS" basis,
 WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 for the specific language governing rights and limitations under the License.

 Copyright (C) 2015-2022 Mathieu Dhainaut. All Rights Reserved.

 Author: Mathieu Dhainaut <mathieu.dhainaut@gmail.com>

 ******************************* END LICENSE BLOCK ***************************/

import Layer from "./Layer.js";
import {isDefined, randomUUID} from "../../utils/Utils";

/**
 * @extends Layer
 * @example
 *
 * import BinaryDataLayer from 'osh-js/core/ui/layer/BinaryDataLayer';
 *
 */
class BinaryDataLayer extends Layer {

    constructor(properties) {
        super(properties);
        this.type = 'binaryData';
        this.props.dataId = randomUUID();
        this.props.frameData = undefined;

        if (isDefined(properties.frameData)){
            this.props.frameData = properties.frameData;
        }

        let that = this;

        if (isDefined(properties.getFrameData)){
            let fn = async (rec) => {
                that.props.frameData = await that.getFunc('getFrameData')(rec);
            };
            this.addFn(that.getDataSourcesIdsByProperty('getFrameData'), fn);
        }

        this.saveState();
    }
}
export default BinaryDataLayer;
