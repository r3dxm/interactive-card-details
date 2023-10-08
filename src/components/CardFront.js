import React from "react";
import styles from "./CardFront.module.scss";
import CardLogo from "../images/card-logo.svg";
import { useSelector } from "react-redux";

function CardFront(props) {
	const name = useSelector((state) => state.card.name);
	const cardno = useSelector((state) => state.card.cardno);
	const expMonth = useSelector((state) => state.card.cardExpMonth);
	const expYear = useSelector((state) => state.card.cardExpYear);
	return (
		<div className={styles.container}>
			<img src={CardLogo} alt="card-logo" />
			<div className={styles.details}>
				<h1>
					{cardno.slice(0, 4)} {cardno.slice(4, 8)} {cardno.slice(8, 12)}{" "}
					{cardno.slice(12, 16)}
				</h1>
				<div className={styles.namedate}>
					<p>{String(name).toUpperCase()}</p>
					<p>
						{expMonth}/{expYear}
					</p>
				</div>
			</div>
		</div>
	);
}

export default CardFront;
