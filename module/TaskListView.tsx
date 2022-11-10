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
import {ajax, Module, register, SagaGenerator} from "core-native/src";
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
        this.setState({list: employees});
    }

    *request(): SagaGenerator {
        console.log(`TaskListModule-->` + JSON.stringify(this.state));
    }

    *goDetail(navigation: any, item: any, isAdd: boolean): SagaGenerator {
        // navigation?.push("TaskDetail", item);
        const list = this.state;
        const newList = this.state.list?.map((data: any, index: number) => {
            if (data?.id === item?.id) {
                return {
                    ...data,
                    count: isAdd ? data.count + 1 : data.count === 0 ? 0 : data.count - 1,
                };
            }
            return data;
        });
        this.setState({list: newList});
        this.postLike(item);
    }

    async postLike(item: any): Promise<void> {
        await ajax("POST", "https://wwww.baidu.com", {}, {events: item}, true);
    }

    *goCart(navigation: any): SagaGenerator {
        const newList = this.state.list?.filter((data: any) => data?.count > 0);
        navigation?.push("Cart", newList);
    }
}

const module = register(new TaskListModule("taskList", {list: []}));
const TaskListView = module.attachLifecycle(TaskList);
export const taskListActions = module.getActions();
export default TaskListView;
