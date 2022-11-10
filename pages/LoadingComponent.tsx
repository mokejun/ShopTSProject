import React from "react";
import {View, StyleSheet, Modal, Text} from "react-native";

const LoadingComponent = () => {
    return (
        <Modal transparent={true}>
            <View style={styles.loadingBox}>
                <View style={{backgroundColor: "white", width: 250, height: 150, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: "red", fontSize: 32}}>加载中...</Text>
                </View>
            </View>
        </Modal>
    );
};

export default LoadingComponent;

const styles = StyleSheet.create({
    loadingBox: {
        // Loading居中
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
});
