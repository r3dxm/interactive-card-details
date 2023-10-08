import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
	name: "card",
	initialState: {
		name: "Jane Appleseed",
		cardno: "0000000000000000",
		cardExpMonth: "00",
		cardExpYear: "00",
		cvc: "000",
		success: false,
	},
	reducers: {
		updateName: (state, action) => {
			if (action.payload === "") {
				state.name = "Jane Appleseed";
			} else state.name = action.payload;
		},
		updateCardno: (state, action) => {
			if (action.payload === "") {
				state.cardno = "0000000000000000";
			} else state.cardno = action.payload;
		},
		updateExpMonth: (state, action) => {
			if (action.payload === "") {
				state.cardExpMonth = "00";
			} else state.cardExpMonth = action.payload;
		},
		updateExpYear: (state, action) => {
			if (action.payload === "") {
				state.cardExpYear = "00";
			} else state.cardExpYear = action.payload;
		},
		updateCvc: (state, action) => {
			if (action.payload === "") {
				state.cvc = "000";
			} else state.cvc = action.payload;
		},
		changeSuccess: (state, action) => {
			if (
				state.name !== "Jane Appleseed" &&
				state.cardno !== "0000000000000000" &&
				state.cardno.length === 16 &&
				state.cardExpMonth !== "00" &&
				state.cardExpYear !== "00" &&
				state.cvc !== "000"
			) {
				state.success = action.payload;
			}
		},
	},
});

export const {
	updateName,
	updateCardno,
	updateExpMonth,
	updateExpYear,
	updateCvc,
	changeSuccess,
} = cardSlice.actions;

export default cardSlice.reducer;
