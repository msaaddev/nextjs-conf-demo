import { useRouter } from 'next/router';
import Header from '../../components/common/Header';
import SubHeading from '../../components/common/SubHeading';
import Point from '../../components/common/Point';
import { workingImage, prosImage, workingImg, consImg } from '../../utils/data';
import styles from '../../styles/learn.module.css';

const Image = () => {
	const router = useRouter();
	const { type } = router.query;

	return (
		<>
			{type === 'image' ? (
				<div className={styles.container}>
					<Header working={true} word="Image" />
					{workingImage.map((point) => (
						<Point info={point} key={workingImage.indexOf(point)} />
					))}
					<SubHeading data="Pros" />
					{prosImage.map((point) => (
						<Point info={point} key={workingImage.indexOf(point)} />
					))}
				</div>
			) : (
				<div className={styles.container}>
					<Header working={true} word="img" />
					{workingImg.map((point) => (
						<Point info={point} key={workingImg.indexOf(point)} />
					))}
					<SubHeading data="Cons" />
					{consImg.map((point) => (
						<Point info={point} key={workingImg.indexOf(point)} />
					))}
				</div>
			)}
		</>
	);
};

export default Image;
