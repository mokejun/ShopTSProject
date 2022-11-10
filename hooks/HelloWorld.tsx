import {createRegularDecorator} from "core-native/src";

export function HelloWorld(identifier: string) {
    return createRegularDecorator(function (handler) {
        try {
            console.log("helloworld-->" + identifier);
        } finally {
            handler();
        }
    });
}
