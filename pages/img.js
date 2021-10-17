import Header from '../components/common/Header';
import names from '../utils/names';
import styles from '../styles/common.module.css';
import Working from '../components/common/Working';

const img = () => {
	return (
		<div>
			<Header text="img HTML tag" />
			<Working link="/working/img" />
			<div className={styles.wrapper}>
				{names.map((picture) => {
					return (
						<img
							src={`./images/${picture}`}
							alt={picture}
							key={names.indexOf(picture)}
							width="1000px"
							height="800px"
						/>
					);
				})}
			</div>
		</div>
	);
};

export default img;
