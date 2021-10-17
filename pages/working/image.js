import Header from '../../components/common/Header';
import SubHeading from '../../components/common/SubHeading';
import Point from '../../components/common/Point';
import styles from '../../styles/learn.module.css';

const Image = () => {
	const working = [
		'You provide the src, alt, width, and height of the image.',
		'The client requests the server for the image using the provided src.',
		'The server sends back the image with webp format.',
		'The Image component then renders the image according to viewport'
	];

	const pros = [
		'Optimize images by automatically adding `srcset`.',
		'Serves webp format.',
		'Prevents Cumulative Layout Shift.',
		'Provides lazy loading.',
		'Adds responsiveness to the images.',
		'Placeholder prop option.',
		'Sets Image quality to 75. Range is 1 to 100.'
	];

	return (
		<div className={styles.container}>
			<Header working={true} word="Image" />
			{working.map((point) => (
				<Point info={point} key={working.indexOf(point)} />
			))}
			<SubHeading data="Pros" />
			{pros.map((point) => (
				<Point info={point} key={working.indexOf(point)} />
			))}
		</div>
	);
};

export default Image;
