import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./store/Store";
import RoutesWrap from "./Routes";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4C1D0B",
      light: "#B0816F"
    },
    secondary: {
      main: "#E1BB80",
      light: "#FBF1E2"
    },
    divider: "#4C1D0B",
    background: {
      default: "#FBF1E2"
    },
    text :{
      primary : "#4C1D0B"
    },
    action : {
      disabled : "white"
    }
  },
  spacing : factor => `${.5 * factor}rem`
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <RoutesWrap />
    </Provider></ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
