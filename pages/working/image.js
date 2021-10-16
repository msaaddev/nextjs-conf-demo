import Header from '../../components/common/Header';
import Point from '../../components/common/Point';
import styles from '../../styles/learn.module.css';

const Image = () => {
	return (
		<div className={styles.container}>
			<Header working={true} word="Image" />
			<Point
				info="Lorem Ipsum is simply dummy text of the printing and
					typesetting industry."
			/>
		</div>
	);
};

export default Image;
