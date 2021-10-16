import Image from 'next/image';
import Header from '../components/common/header';
import names from '../utils/names';
import styles from '../styles/common.module.css';
import Working from '../components/common/working';

const ImageComponent = () => {
	return (
		<div>
			<Header text="Image Component" />
			<Working link="/working/image" />
			<div className={styles.wrapper}>
				{names.map((picture) => {
					return (
						<div
							key={names.indexOf(picture)}
							className={styles.image}
						>
							<Image
								src={`/images/${picture}`}
								alt={picture}
								width={1000}
								height={800}
								loading="lazy"
								quality={50}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ImageComponent;
