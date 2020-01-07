import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button } from "react-native";
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import RNKakaoLogins from "react-native-kakao-logins";

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
            <Button style={styles.kakao} title="카카오톡 로그인">
                카카오톡 로그인
            </Button>
            <Button style={styles.naver} title="네이버 로그인">
                네이버 로그인
            </Button>
            <Button style={styles.facebook} title="페이스북 로그인">
                페이스북 로그인
            </Button>
            <Button style={styles.google} title="구글 로그인">
                구글 로그인
            </Button>
            <Button style={styles.email} title="이메일 로그인">
                이메일 로그인
            </Button>
        </View>
    );
};

export default Login;
