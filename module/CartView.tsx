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
import {delay, Loading, Log, Module, Mutex, register, SagaGenerator} from "core-native/src";
import Cart from "../pages/Cart";

class CartModule extends Module<RootState, "cart", object> {
    @Mutex()
    @Log()
    @Loading("cart")
    *handlerNum(item: any, isAdd: boolean): SagaGenerator {
        yield delay(1000);
        console.log(`handlerNum-->` + isAdd);
        const index = this.state.list?.findIndex((data: any) => {
            return data?.id === item?.id;
        });
        if (index === -1) {
            const newItem = {
                ...item,
                count: isAdd ? item.count + 1 : item.count === 0 ? 0 : item.count - 1,
            };
            this.setState({list: [...this.state.list, newItem]});
        } else {
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
}

const module = register(new CartModule("cart", {list: []}));
const CartView = module.attachLifecycle(Cart);
export const cartActions = module.getActions();
export default CartView;
