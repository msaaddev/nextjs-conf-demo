import styles from '../../styles/points.module.css';

const Point = ({ info }) => {
	return (
		<div className={styles.point}>
			<p>{info}</p>
		</div>
	);
};

export default Point;
