/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {toJS} from "mobx";
import {RootState} from "../config/RootState";
import {Module, register, SagaGenerator} from "core-native/src";
import Cart from "../pages/Cart";

class CartModule extends Module<RootState, "cart", object> {
    *onEnter(routeParameters: object): SagaGenerator {
        this.setState({list: toJS(routeParameters)});
    }

    *goDetail(navigation: any, item: any, isAdd: boolean): SagaGenerator {
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
    }
}

const module = register(new CartModule("cart", {list: []}));
const CartView = module.attachLifecycle(Cart);
export const cartActions = module.getActions();
export default CartView;
