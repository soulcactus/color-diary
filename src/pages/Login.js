import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button } from "react-native";
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
        backgroundColor: `red`
    },
    naver: {
        backgroundColor: `green`
    }
});

const Login = () => {
    return (
        <View style={styles.container}>
            <Button style={styles.naver}>네이버 로그인</Button>
        </View>
    );
};

export default Login;
