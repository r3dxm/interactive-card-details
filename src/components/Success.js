import React from "react";
import styles from "./Success.module.scss";
import SuccessIcon from "../images/icon-complete.svg";
import { useDispatch } from "react-redux";
import { changeSuccess } from "../reducers/cardSlice";

function Success(props) {
	const dispatch = useDispatch();
	return (
		<div className={styles.container}>
			<img src={SuccessIcon} alt="success-icon" />
			<h1>THANK YOU!</h1>
			<p>We've added your card details</p>
			<button onClick={() => dispatch(changeSuccess(false))}>Continue</button>
		</div>
	);
}

export default Success;
