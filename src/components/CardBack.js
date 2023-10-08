import React from "react";
import styles from "./CardBack.module.scss";
import { useSelector } from "react-redux";

function CardBack(props) {
	const cvc = useSelector((state) => state.card.cvc);
	return (
		<div className={styles.container}>
			<p>{cvc}</p>
		</div>
	);
}

export default CardBack;
