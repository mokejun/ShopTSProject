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
import TaskList from "../pages/TaskList";

const employees = [
    {id: 1, name: "Alice", country: "Austria", count: 0},
    {id: 2, name: "Bob", country: "Belgium", count: 0},
    {id: 3, name: "Carl", country: "Canada", count: 0},
    {id: 4, name: "Alice1", country: "Austria", count: 0},
    {id: 5, name: "Bob2", country: "Belgium", count: 0},
    {id: 6, name: "Carl3", country: "Canada", count: 0},
];

class TaskListModule extends Module<RootState, "taskList", object> {
    *onEnter(routeParameters: object): SagaGenerator {
        console.log(`onEnter`);
    }

    *request(url: string, method: string): SagaGenerator {
        console.log(`request url-->${url} method-->${method}`);
        this.setState({list: employees});
    }

    *onFocus(): SagaGenerator {
        this.setState({list: employees});
    }

    @Mutex()
    *goDetail(item: any, navigation: any): SagaGenerator {
        navigation?.push("TaskDetail", item);
    }
}

const module = register(new TaskListModule("taskList", {list: []}));
const TaskListView = module.attachLifecycle(TaskList);
export const taskListActions = module.getActions();
export default TaskListView;
