
import React from "react";
import userStore from "./userStore";

export const StoreContext = React.createContext({
    userStore,
});

export const useStore = () => React.useContext(StoreContext);