import { configureStore } from "@reduxjs/toolkit";
import GeneralSlice from "./ManageMenuSlice";

const store = configureStore({
    reducer: {
        GeneralSlice
    }
});

export default store