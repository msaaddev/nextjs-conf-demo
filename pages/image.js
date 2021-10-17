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
				{names.map((picture, index) => {
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
								layout="responsive"
								placeholder="blur"
								blurDataURL={`/images/${picture}`}
								loading={
									names.indexOf(picture) === 1
										? 'eager'
										: 'lazy'
								}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ImageComponent;
