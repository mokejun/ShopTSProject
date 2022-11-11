import {useAction, useBinaryAction, useLoadingStatus, useUnaryAction} from "core-native/src";
import React from "react";
import {View, Text, StyleSheet, TouchableHighlight} from "react-native";
import {useSelector} from "react-redux";
import {RootState} from "../config/RootState";
import {cartActions} from "../module/CartView";
import {taskDetailActions} from "../module/TaskDetailView";
import LoadingComponent from "./LoadingComponent";

const TaskDetail = (props: any) => {
    const {navigation} = props;
    const detail = useSelector((state: RootState) => state.app.taskDetail.detail);
    const handlerNum = useBinaryAction(cartActions.handlerNum);
    const goCart = useUnaryAction(taskDetailActions.goCart);
    const isShowLoading = useLoadingStatus("cart");
    const cartDetail = useSelector((state: RootState) => {
        return state.app.cart.list;
    });
    const temp = useSelector((state: RootState) => {
        if (cartDetail && cartDetail.length > 0) {
            return cartDetail?.filter((data: any) => {
                return data.id === detail.id;
            });
        }
    });

    const handleItemClick = (item: any, isAdd: boolean) => {
        handlerNum(item, isAdd);
    };

    const handerCartItemClick = () => {
        goCart(navigation);
    };

    return (
        <View style={styles.mainBody}>
            {isShowLoading ? <LoadingComponent content="请求数据.." /> : null}
            <Text>项目列表详情</Text>
            <Text>{`name-->${detail?.name}`}</Text>
            <Text style={{color: "black"}}>{temp && temp[0]?.count ? temp[0]?.count : 0}</Text>
            <View style={{flexDirection: "row"}}>
                <TouchableHighlight
                    style={styles.addButtonStyle}
                    onPress={() => {
                        handleItemClick(detail, true);
                    }}
                >
                    <Text style={styles.buttonTextStyle}>添加</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.addButtonStyle}
                    onPress={() => {
                        handleItemClick(detail, false);
                    }}
                >
                    <Text style={styles.buttonTextStyle}>减少</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.addButtonStyle} onPress={handerCartItemClick}>
                    <Text style={styles.buttonTextStyle}>购物车</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

export default TaskDetail;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
        alignContent: "center",
        alignItems: "center",
    },
    SectionStyle: {
        flexDirection: "row",
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: "#7DE24E",
        borderWidth: 0,
        color: "#FFFFFF",
        borderColor: "#7DE24E",
        height: 40,
        alignItems: "center",
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
        width: 120,
    },
    buttonTextStyle: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    inputStyle: {
        height: 40,
        width: 120,
        color: "black",
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "#dadae8",
    },
    registerTextStyle: {
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 14,
        alignSelf: "center",
        padding: 10,
    },
    errorTextStyle: {
        color: "red",
        textAlign: "center",
        fontSize: 14,
    },
    itemStyle: {
        height: 80,
        width: 250,
        backgroundColor: "yellow",
    },
    itemOtherStyle: {
        height: 80,
        width: 250,
        backgroundColor: "white",
    },
    addButtonStyle: {
        backgroundColor: "#7DE24E",
        borderWidth: 0,
        color: "#FFFFFF",
        borderColor: "#7DE24E",
        height: 30,
        alignItems: "center",
        borderRadius: 30,
        width: 60,
    },
});
