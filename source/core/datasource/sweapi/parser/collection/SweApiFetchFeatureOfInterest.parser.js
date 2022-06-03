import DataSourceParser from "../../../parsers/DataSourceParser";
import FeatureOfInterest from "../../../../sweapi/featureofinterest/FeatureOfInterest";
import SweApiCollectionObjectParser from "./SweApiCollectionObjectParser";

class SweApiFetchFeatureOfInterestParser extends SweApiCollectionObjectParser {
    parseData(data) {
        return new FeatureOfInterest(
            {
                ...data,
                geometry: data.geometry || undefined,
                bbox: data.bbox || undefined
            },

            this.networkProperties
        );
    }
}

export default SweApiFetchFeatureOfInterestParser;
