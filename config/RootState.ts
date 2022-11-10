import {State} from "core-native/src";

export interface RootState extends State {
    app: {
        home: any;
        login: {
            userName: string;
            pwd: string;
        };
        taskList: {list: any};
        taskDetail: {detail: any};
        cart: {list: any};
    };
    loading: {
        login: number;
        taskList: number;
        taskDetail: number;
        cart: number;
    };
}
