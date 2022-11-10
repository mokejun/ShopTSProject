/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {RootState} from "../config/RootState";
import {Module, register, SagaGenerator} from "core-native/src";
import Home from "../pages/Home";

class AppModule extends Module<RootState, "home", object> {}

const module = register(new AppModule("home", {}));
const HomeView = module.attachLifecycle(Home);
export default HomeView;
