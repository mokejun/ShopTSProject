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
import {Interval, Loading, loadingAction, Log, Module, register, SagaGenerator, showLoading, useLoadingStatus} from "core-native/src";
import {app} from "core-native/src/app";
import Login from "../pages/Login";

const show = () => {
    app.store.dispatch(loadingAction(true, "login"));
};
const hint = () => {
    app.store.dispatch(loadingAction(false, "login"));
};

class LoginModule extends Module<RootState, "login", object> {
    // onEnter: (routeParameters: RouteParam) => SagaGenerator;
    // onDestroy: () => SagaGenerator;
    // onTick: (() => SagaGenerator) & TickIntervalDecoratorFlag;
    // onAppActive: () => SagaGenerator;
    // onAppInactive: () => SagaGenerator;
    // onFocus: () => SagaGenerator;
    // onBlur: () => SagaGenerator;

    *onEnter(routeParameters: object): SagaGenerator {
        this.logger.info({action: "", info: {test: "onEnter"}});
        console.log(`onEnter`);
        // console.log(`onEnter this.state().userName-->${this.state.userName}`);
    }

    *onDestroy(): SagaGenerator {
        console.log(`onDestory`);
    }

    @Interval(5)
    *onTick(): SagaGenerator {
        console.log(`onTick-->` + new Date().toTimeString());
    }

    *onAppActive(): SagaGenerator {
        console.log(`onAppActive`);
    }

    *onAppInactive(): SagaGenerator {
        console.log(`onAppInactive`);
    }

    *onFocus(): SagaGenerator {
        console.log(`onFocus`);
    }

    *onBlur(): SagaGenerator {
        console.log(`onBlur`);
    }

    @Loading("login")
    @Log()
    *goLogin(navigation: any, userName: string, pwd: string): SagaGenerator {
        console.log(`showLoading-->` + showLoading(this.rootState, "login"));
        this.setState({userName, pwd});
        navigation?.push("TaskList");
    }

    *handleTurboModuleOne(a: number, b: string, c: boolean): SagaGenerator {
        // Loading("login");
        // show();
        // console.log(`showLoading-->` + showLoading(this.rootState, "login"));
        // console.log(`handleTurboModuleOne-->${a}-->${b}-->${c}`);
        // setTimeout(() => {
        //     hint();
        //     console.log(`showLoading-->` + showLoading(this.rootState, "login"));
        // }, 2000);
    }

    *handleTurboModuleTwo(a: number, b: string, c: boolean): SagaGenerator {
        console.log(`handleTurboModuleTwo-->${a}-->${b}-->${c}`);
    }

    *handleTurboModuleThree(data: {key: number}): SagaGenerator {
        console.log(`handleTurboModuleThree-->${data.key}`);
    }
}

const module = register(new LoginModule("login", {userName: "sven", pwd: "1222"}));
const LoginView = module.attachLifecycle(Login);
export const loginActions = module.getActions();
export default LoginView;
