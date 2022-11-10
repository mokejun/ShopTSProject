import React, {useCallback, useEffect, useState} from "react";
import {View, Text, TextInput, Button, ToastAndroid, Keyboard, StyleSheet, Dimensions, Touchable, TouchableOpacity, TouchableHighlight} from "react-native";
import {useDispatch, useStore, connect, useSelector} from "react-redux";
import {RootState} from "../config/RootState";
import {useAction, useUnaryAction, useBinaryAction, useObjectKeyAction, useLoadingStatus, showLoading, loadingAction} from "core-native/src";
import {loginActions} from "../module/LoginView";

const Login = (props: any) => {
    const {navigation} = props;
    const [userName, setUserName] = useState("");
    const [userPwd, setUserPwd] = useState("");

    const action = useAction(loginActions.goLogin, navigation, userName, userPwd);
    const handlerUseUnaryAction = useUnaryAction(loginActions.handleTurboModuleOne, 100, "");
    const handlerUseBinaryAction = useBinaryAction(loginActions.handleTurboModuleTwo, 100);
    const handlerUseObjectKeyAction = useObjectKeyAction(loginActions.handleTurboModuleThree, "key");
    const dispatch = useDispatch();

    const isShowLoading = useLoadingStatus("login");

    const handleSubmitPress = () => {
        action();
    };

    const handleTurboModuleOne = () => {
        if (!isShowLoading) {
            handlerUseUnaryAction(false);
        } else {
            ToastAndroid.show("已经loading", 500);
        }
    };

    const handleTurboModuleTwo = () => {
        handlerUseBinaryAction("99", true);
    };

    const handleTurboModuleThree = () => {
        handlerUseObjectKeyAction(99);
    };

    const handleTurboModuleFour = () => {
        // Error console.error( );
        e.message;
    };

    return (
        <View style={styles.mainBody}>
            <TextInput
                style={styles.inputStyle}
                placeholder="请输入账户"
                value={userName}
                placeholderTextColor={"#b3b3b3"}
                onChangeText={userName => {
                    setUserName(userName);
                }}
                autoCapitalize="none"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
            />
            <TextInput
                style={styles.inputStyle}
                secureTextEntry={true}
                placeholder="请输入密码"
                value={userPwd}
                placeholderTextColor={"#b3b3b3"}
                onChangeText={userPwd => {
                    setUserPwd(userPwd);
                }}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                underlineColorAndroid="#f000"
                returnKeyType="next"
            />

            <TouchableHighlight style={styles.buttonStyle} onPress={handleSubmitPress}>
                <Text style={styles.buttonTextStyle}>登陆</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonStyle} onPress={handleTurboModuleOne}>
                <Text style={styles.buttonTextStyle}>测试 turbo module1</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonStyle} onPress={handleTurboModuleTwo}>
                <Text style={styles.buttonTextStyle}>测试 turbo module2</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonStyle} onPress={handleTurboModuleThree}>
                <Text style={styles.buttonTextStyle}>测试 turbo module3</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonStyle} onPress={handleTurboModuleFour}>
                <Text style={styles.buttonTextStyle}>发一些错误出去</Text>
            </TouchableHighlight>
        </View>
    );
};

export default Login;

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
        width: 250,
    },
    buttonTextStyle: {
        color: "#FFFFFF",
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        height: 40,
        width: 250,
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
});
