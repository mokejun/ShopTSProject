/**
 * @format
 */
import {name as appName} from "./app.json";
import MyErrorListener from "./config/MyErrorListener";
import {startApp} from "core-native/src";
import HomeView from "./module/HomeView";

startApp({
    registeredAppName: appName,
    componentType: HomeView,
    errorListener: new MyErrorListener(),
    beforeRendering: () => {
        console.log(`beforeRendering 先做一些处理`);
    },
    loggerConfig: {serverURL: "https://www.baidu.com", slowStartupThreshold: 10},
});
