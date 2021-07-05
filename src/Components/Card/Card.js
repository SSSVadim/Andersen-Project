import styles from "./Card.module.scss";
import PropTypes from "prop-types";
// import classNames from "classnames/bind";

function Card(props) {
	let isFavorite = props.isFavorite;

	return (
		<div className={styles.card}>
			<h2 className={styles.card__title}>{props.title}</h2>

			<div className={styles.card__img}>
				<img src={props.imgPath} />
			</div>

			<div className={styles.card__contentWrapper}>
				<h3 className={styles.card__moreTitle}>More info</h3>
				<p className={styles.card__text}>{props.text}</p>
				<a href={props.buttonLink} className={styles.card__btn}>
					Подробнее
				</a>

				<btn type="button" className={styles.card__favorite}>
					{/* 1st ico */}
					<svg
						version="1.1"
						id="Capa_1"
						x="0px"
						y="0px"
						viewBox="0 0 477.534 477.534"
						className={!isFavorite ? "d-none" : null}
					>
						<g>
							<g>
								<path
									d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909
l-8.431-8.909C181.284,5.762,98.663,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778
c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654
c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z"
								/>
							</g>
						</g>
					</svg>

					{/* 2nd ico */}
					<svg
						version="1.1"
						id="Capa_1"
						x="0px"
						y="0px"
						viewBox="0 0 477.534 477.534"
						className={isFavorite ? "d-none" : null}
					>
						<g>
							<g>
								<path
									d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909
			l-8.431-8.909C181.284,5.762,98.662,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778
			c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654
			c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z M413.787,234.226h-0.017
			L238.802,418.768L63.818,234.226c-39.78-42.916-39.78-109.233,0-152.149c36.125-39.154,97.152-41.609,136.306-5.484
			c1.901,1.754,3.73,3.583,5.484,5.484l20.804,21.948c6.856,6.812,17.925,6.812,24.781,0l20.804-21.931
			c36.125-39.154,97.152-41.609,136.306-5.484c1.901,1.754,3.73,3.583,5.484,5.484C453.913,125.078,454.207,191.516,413.787,234.226
			z"
								/>
							</g>
						</g>
					</svg>
				</btn>
			</div>
		</div>
	);
}

export default Card;

Card.propTypes = {
	link: PropTypes.string,
	imgPath: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	buttonLink: PropTypes.string,
	buttonText1: PropTypes.string,
	buttonText2: PropTypes.string,
	isFavorite: PropTypes.bool
};