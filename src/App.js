import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from "react-native";
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import Login from "./pages/Login.js";

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Login />
            </SafeAreaView>
        </>
    );
};

export default App;
