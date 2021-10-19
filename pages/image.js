import Image from 'next/image';
import Header from '../components/common/Header';
import names from '../utils/names';
import styles from '../styles/common.module.css';
import Working from '../components/common/Working';

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
								quality={50}
								width={1000}
								height={800}
								placeholder="blur"
								blurDataURL="https://via.placeholder.com/1000x800.png/000000/FFFFFF/?text=Nextjs+Conf+Demo"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ImageComponent;
