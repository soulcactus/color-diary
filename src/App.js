import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from "react-native";
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import Login from "./pages/Login.js";

import SplashScreen from "react-native-splash-screen";

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={"transparent"} />
            <SafeAreaView>
                <Login />
            </SafeAreaView>
        </>
    );
};

export default App;
