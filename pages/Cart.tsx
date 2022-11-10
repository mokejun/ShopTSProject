import React, {PureComponent, useEffect, useState} from "react";
import {View, Text, TextInput, Button, ToastAndroid, Keyboard, StyleSheet, Dimensions, Touchable, TouchableOpacity, FlatList, TouchableHighlight} from "react-native";
import {toJS} from "mobx";
import {useDispatch, useStore, connect, useSelector} from "react-redux";
import {taskListActions} from "../module/TaskListView";
import {RootState} from "../config/RootState";
import {cartActions} from "../module/CartView";

const Cart = (props: any) => {
    const {navigation} = props;
    const dispatch = useDispatch();
    const serverData = useSelector((state: RootState) => state.app.cart.list);

    const handleItemClick = (item: any, isAdd: boolean) => {
        dispatch(cartActions.goDetail(navigation, item, isAdd));
        dispatch(taskListActions.goDetail(navigation, item, isAdd));
    };

    const _renderItem = ({item, index}: {item: any; index: number}) => {
        return (
            <TouchableOpacity style={index % 2 == 1 ? styles.itemStyle : styles.itemOtherStyle}>
                <Text style={{color: "red"}}>{item?.name}</Text>
                <Text style={{color: "black"}}>{item?.count}</Text>
                <View style={{flexDirection: "row"}}>
                    <TouchableHighlight
                        style={styles.addButtonStyle}
                        onPress={() => {
                            handleItemClick(item, true);
                        }}
                    >
                        <Text style={styles.buttonTextStyle}>添加</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.addButtonStyle}
                        onPress={() => {
                            handleItemClick(item, false);
                        }}
                    >
                        <Text style={styles.buttonTextStyle}>减少</Text>
                    </TouchableHighlight>
                </View>
            </TouchableOpacity>
        );
    };

    const _keyExtractor = (_item: any, index: any) => index;

    return (
        <View style={styles.mainBody}>
            <Text>购物车</Text>
            <FlatList keyExtractor={_keyExtractor} data={toJS(serverData)} renderItem={_renderItem} />
        </View>
    );
};

export default Cart;

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
        paddingVertical: 8,
        fontSize: 12,
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
});
