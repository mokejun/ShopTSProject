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
import {delay, Interval, Loading, Log, Module, Mutex, register, SagaGenerator, showLoading, useLoadingStatus} from "core-native/src";
import {app} from "core-native/src/app";
import Login from "../pages/Login";
import {HelloWorld} from "../hooks";

class LoginModule extends Module<RootState, "login", object> {
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

    @Log()
    @Loading("login")
    *goLogin(navigation: any, userName: string, pwd: string): SagaGenerator {
        this.testHelloWorld();
        yield delay(5000);
        this.setState({userName, pwd});
        navigation?.push("TaskList");
    }

    @Mutex()
    *handleTurboModuleOne(): SagaGenerator {
        console.log(`handleTurboModuleOne--点击了`);
        yield delay(5000);
    }

    *handleTurboModuleTwo(a: number, b: string, c: boolean): SagaGenerator {
        console.log(`handleTurboModuleTwo-->${a}-->${b}-->${c}`);
    }

    *handleTurboModuleThree(data: {key: number}): SagaGenerator {
        console.log(`handleTurboModuleThree-->${data.key}`);
    }

    @HelloWorld("这个是一个普通的hook函数方法")
    testHelloWorld() {
        console.log(`---testHelloWorld---`);
    }
}

const module = register(new LoginModule("login", {userName: "", pwd: ""}));
const LoginView = module.attachLifecycle(Login);
export const loginActions = module.getActions();
export default LoginView;
