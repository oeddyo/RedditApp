/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, } from 'react-native';
import Card from "./components/card";
export default class RedditApp extends Component {
    render() {
        return (React.createElement(Card, null));
    }
}
AppRegistry.registerComponent('RedditApp', () => RedditApp);
//# sourceMappingURL=index.android.js.map