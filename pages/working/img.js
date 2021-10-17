import Header from '../../components/common/Header';
import SubHeading from '../../components/common/SubHeading';
import styles from '../../styles/learn.module.css';
import Point from '../../components/common/Point';

const Img = () => {
	const working = [
		'You define the src and alt attributes of img tag.',
		'The client requests the server for the image using the provided src.',
		'The server sends back the image in its original format.',
		'The img tag then renders the image with its original size.'
	];

	const cons = [
		'The server requests all images at once.',
		'No lazy loading.',
		'Layout shift occurs.'
	];

	return (
		<div className={styles.container}>
			<Header working={true} word="img" />
			{working.map((point) => (
				<Point info={point} key={working.indexOf(point)} />
			))}
			<SubHeading data="Cons" />
			{cons.map((point) => (
				<Point info={point} key={working.indexOf(point)} />
			))}
		</div>
	);
};

export default Img;
