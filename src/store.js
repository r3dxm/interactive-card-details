import { configureStore } from "@reduxjs/toolkit";
import card from "./reducers/cardSlice";

export default configureStore({
	reducer: {
		card: card,
	},
});
