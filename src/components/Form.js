import React, { useState } from "react";
import styles from "./Form.module.scss";
import { useDispatch } from "react-redux";
import {
	changeSuccess,
	updateCardno,
	updateCvc,
	updateExpMonth,
	updateExpYear,
	updateName,
} from "../reducers/cardSlice";

function Form(props) {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [cardno, setCardno] = useState("");
	const [expMonth, setExpMonth] = useState("");
	const [expYear, setExpYear] = useState("");
	const [cvc, setCvc] = useState("");
	const [emptyName, setEmptyName] = useState();
	const [emptyCardno, setEmptyCardno] = useState();
	const [emptyExpMonth, setEmptyExpMonth] = useState();
	const [emptyExpYear, setEmptyExpYear] = useState();
	const [emptyCvc, setEmptyCvc] = useState();
	const [invalidAccount, setInvalidAccount] = useState();
	const [invalidYear, setInvalidYear] = useState();
	const [invalidCvc, setInvalidCvc] = useState();

	function validateName(e) {
		let tempName = e.target.value;
		if (name !== "") setEmptyName(false);
		if (String(tempName).match(/^[A-Za-z\s]*$/)) {
			dispatch(updateName(tempName));
			setName(tempName);
		} else {
			e.target.value = String(tempName).slice(0, -1);
			setName(e.target.value);
		}
	}

	function validateCardno(e) {
		const tempCardno = e.target.value;
		if (cardno !== "") setEmptyCardno(false);
		setInvalidAccount(false);
		if (
			String(tempCardno).match(/^[0-9]+$/) &&
			String(tempCardno).length <= 16
		) {
			dispatch(updateCardno(tempCardno));
			setCardno(tempCardno);
		} else {
			e.target.value = String(tempCardno).slice(0, -1);
			dispatch(updateCardno(e.target.value));
			setCardno(e.target.value);
		}
	}

	function validateExpMonth(e) {
		const tempExpMonth = e.target.value;
		if (expMonth !== "") setEmptyExpMonth(false);
		if (parseInt(tempExpMonth) < 1 || parseInt(tempExpMonth) > 12) {
			e.target.value = String(tempExpMonth).slice(0, -1);
			return 0;
		}
		if (
			String(tempExpMonth).match(/^[0-9]+$/) &&
			String(tempExpMonth).length <= 2
		) {
			dispatch(updateExpMonth(tempExpMonth));
			setExpMonth(tempExpMonth);
		} else {
			e.target.value = String(tempExpMonth).slice(0, -1);
			dispatch(updateExpMonth(e.target.value));
			setExpMonth(e.target.value);
		}
	}

	function validateExpYear(e) {
		const tempExpYear = e.target.value;
		setInvalidYear(false);
		if (expYear !== "") setEmptyExpYear(false);
		if (parseInt(tempExpYear) < 1 || parseInt(tempExpYear) > 40) {
			e.target.value = String(tempExpYear).slice(0, -1);
			return 0;
		}
		if (
			String(tempExpYear).match(/^[0-9]+$/) &&
			String(tempExpYear).length <= 2
		) {
			dispatch(updateExpYear(tempExpYear));
			setExpYear(tempExpYear);
		} else {
			e.target.value = String(tempExpYear).slice(0, -1);
			dispatch(updateExpYear(e.target.value));
			setExpYear(e.target.value);
		}
	}

	function validateCvc(e) {
		const tempCvc = e.target.value;
		setInvalidCvc(false);
		if (cvc !== "") setEmptyCvc(false);
		if (String(tempCvc).match(/^[0-9]+$/) && String(tempCvc).length <= 3) {
			dispatch(updateCvc(tempCvc));
			setCvc(tempCvc);
		} else {
			e.target.value = String(tempCvc).slice(0, -1);
			dispatch(updateCvc(e.target.value));
			setCvc(e.target.value);
		}
	}

	function submit() {
		name === "" ? setEmptyName(true) : setEmptyName(false);
		cardno === "" ? setEmptyCardno(true) : setEmptyCardno(false);
		expMonth === "" ? setEmptyExpMonth(true) : setEmptyExpMonth(false);
		expYear === "" ? setEmptyExpYear(true) : setEmptyExpYear(false);
		cvc === "" ? setEmptyCvc(true) : setEmptyCvc(false);

		cardno.length >= 1 && cardno.length < 16
			? setInvalidAccount(true)
			: setInvalidAccount(false);
		parseInt(expYear) < 23 ? setInvalidYear(true) : setInvalidYear(false);
		cvc.length >= 1 && cvc.length < 3
			? setInvalidCvc(true)
			: setInvalidCvc(false);

		if (
			emptyName ||
			emptyCardno ||
			emptyExpMonth ||
			emptyExpYear ||
			emptyCvc ||
			invalidAccount ||
			invalidYear ||
			invalidCvc
		) {
			return 0;
		} else {
			dispatch(changeSuccess(true));
		}
	}

	return (
		<form onSubmit={() => false} className={styles.container}>
			<label for="name">CARDHOLDER NAME</label>
			<br />
			<input
				className={emptyName ? styles.invalidInput : styles.input}
				onChange={validateName}
				value={name}
				id="name"
				placeholder="e.g. Jane Appleseed"
			/>
			{emptyName && <p>Can't be blank</p>}
			<br />
			<label for="cardno">CARD NUMBER</label>
			<br />
			<input
				className={
					emptyCardno || invalidAccount ? styles.invalidInput : styles.input
				}
				onChange={validateCardno}
				value={cardno}
				id="cardno"
				placeholder="e.g. 1234 5678 9123 0000"
			/>
			{emptyCardno && <p>Can't be blank</p>}
			{invalidAccount && <p>Enter a valid card number</p>}
			<br />
			<div className={styles.datecvc}>
				<fieldset className={styles.date}>
					<legend>EXP. DATE (MM/YY)</legend>
					<input
						className={emptyExpMonth ? styles.invalidInput : styles.input}
						onChange={validateExpMonth}
						value={expMonth}
						placeholder="MM"
					/>
					<input
						className={
							emptyExpYear || invalidYear ? styles.invalidInput : styles.input
						}
						onChange={validateExpYear}
						value={expYear}
						placeholder="YY"
					/>
					{(emptyExpMonth || emptyExpYear) && <p>Can't be blank</p>}
					{invalidYear && <p>date must be in the future</p>}
				</fieldset>
				<fieldset className={styles.cvc}>
					<legend>CVC</legend>
					<input
						className={
							emptyCvc || invalidCvc ? styles.invalidInput : styles.input
						}
						onChange={validateCvc}
						value={cvc}
						placeholder="e.g. 123"
					/>
					{emptyCvc && <p>Can't be blank</p>}
					{invalidCvc && <p>Invalid cvc</p>}
				</fieldset>
			</div>
			<button onClick={submit} type="button">
				Confirm
			</button>
		</form>
	);
}

export default Form;
