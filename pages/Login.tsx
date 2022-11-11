import React, {useState} from "react";
import {View, Text, TextInput, Keyboard, StyleSheet, TouchableHighlight} from "react-native";
import {useAction, useBinaryAction, useLoadingStatus} from "core-native/src";
import {loginActions} from "../module/LoginView";
import LoadingComponent from "./LoadingComponent";

const Login = (props: any) => {
    const {navigation} = props;
    const [userName, setUserName] = useState("");
    const [userPwd, setUserPwd] = useState("");

    const loginAction = useBinaryAction(loginActions.goLogin, navigation);
    const turboMoudleAction = useAction(loginActions.handleTurboModuleOne);

    const isShowLoading = useLoadingStatus("login");

    const handleSubmitPress = () => {
        loginAction(userName, userPwd);
    };

    const handleTurboModuleOne = () => {
        turboMoudleAction();
    };

    return (
        <View style={styles.mainBody}>
            {isShowLoading ? <LoadingComponent content="登陆中.." /> : null}
            <TextInput
                style={styles.inputStyle}
                placeholder="请输入账户"
                value={userName}
                placeholderTextColor={"#b3b3b3"}
                onChangeText={(userName: string) => {
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
                onChangeText={(userPwd: string) => {
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
                <Text style={styles.buttonTextStyle}>测试 turbo module</Text>
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
