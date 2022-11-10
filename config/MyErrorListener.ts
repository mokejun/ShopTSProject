import {ErrorListener, Exception, SagaGenerator, sendEventLogs} from "core-native/src";

export default class MyErrorListener implements ErrorListener {
    *onError(error: Exception): SagaGenerator {
        console.log(`error.message--> + ${error.message}`);
    }
}
