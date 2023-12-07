"use client";
import React from "react";
import App from "./components/App";
import store from "./components/store";
import { Provider } from "react-redux";
import SideBar from "./components/SideBar";

function page() {
  return (
    <div>
      <Provider store={store}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // position: "relative",
            // display: "grid",
            // gridTemplateColumns: "1fr 5fr",
            // backgroundColor: "red",
          }}
        >
          <SideBar />
          <App />
        </div>
      </Provider>
    </div>
  );
}

export default page;
