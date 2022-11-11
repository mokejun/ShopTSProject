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
import {Module, Mutex, register, SagaGenerator} from "core-native/src";
import TaskDetail from "../pages/TaskDetail";

class TaskDetailModule extends Module<RootState, "taskDetail", object> {
    *onEnter(routeParameters: object): SagaGenerator {
        console.log(`TaskDetailModule-->onEnter`);
        this.setState({detail: routeParameters});
    }

    @Mutex()
    *goCart(navigation: any): SagaGenerator {
        navigation?.push("Cart");
    }

    *onFocus(): SagaGenerator {
        console.log(`TaskDetailModule-->onFocus`);
    }
}

const module = register(new TaskDetailModule("taskDetail", {detail: {}}));
const TaskDetailView = module.attachLifecycle(TaskDetail);
export const taskDetailActions = module.getActions();
export default TaskDetailView;
