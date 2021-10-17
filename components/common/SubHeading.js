import styles from '../../styles/subheading.module.css';

const SubHeading = ({ data }) => {
	return (
		<div className={styles.container}>
			<h3>{data}</h3>
		</div>
	);
};

export default SubHeading;
