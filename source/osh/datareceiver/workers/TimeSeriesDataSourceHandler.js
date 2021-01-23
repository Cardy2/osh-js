import {isDefined} from "../../utils/Utils.js";
import DataSourceHandler from "./DataSourceHandler";

class TimeSeriesDataSourceHandler extends DataSourceHandler{

    constructor(parser) {
        super(parser);
        this.lastTimeStamp = null;
        this.lastStartTime = 'now';
        this.timeShift = 0;
    }

    /**
     * @private
     */
    createDataConnector(properties) {
        super.createDataConnector({
            ...properties,
            timeShift: this.timeShift
        });

        const lastStartTimeCst = this.parser.lastStartTime;
        this.connector.onReconnect = () => {
            // if not real time, preserve last timestamp to reconnect at the last time received
            // for that, we update the URL with the new last time received
            if (lastStartTimeCst !== 'now') {
                this.connector.setUrl(this.parser.buildUrl(
                    {
                        ...properties,
                        lastTimeStamp: isDefined(this.lastTimeStamp) ? new Date(this.lastTimeStamp).toISOString(): properties.startTime,
                    }));
            }
            return true;
        }
    }

    async onMessage(event) {
        const timeStamp = await Promise.resolve(this.parser.parseTimeStamp(event) + this.timeShift);
        const data      = await Promise.resolve(this.parser.parseData(event));

        // check if data is array
        if (Array.isArray(data)) {
            for(let i=0;i < data.length;i++) {
                this.values.push({
                    data: data[i],
                    timeStamp: timeStamp
                });
            }
        } else {
            this.values.push({
                data: data,
                timeStamp: timeStamp
            });
        }
        this.lastTimeStamp = timeStamp;

        if (isDefined(this.batchSize) && this.values.length >= this.batchSize) {
            this.flush();
        }
    }

    getLastTimeStamp() {
        return this.lastTimeStamp;
    }

    updateProperties(properties) {
        this.disconnect();

        let lastTimestamp =  new Date(this.lastTimeStamp).toISOString();

        if(properties.hasOwnProperty('startTime')) {
            lastTimestamp = properties.startTime;
        } else if(this.properties.startTime === 'now'){
            //handle RealTime
            lastTimestamp = 'now';
        }

        this.createDataConnector({
            ...this.properties,
            ...properties,
            lastTimeStamp: lastTimestamp
        });

        this.connect();
    }

    handleMessage(message, worker) {
        super.handleMessage(message, worker);

        if (message.message === 'last-timestamp') {
            const lastTimeStamp = this.getLastTimeStamp();
            worker.postMessage({
                message: 'last-timestamp',
                data: lastTimeStamp
            })
        }
    }
}
export default TimeSeriesDataSourceHandler;

