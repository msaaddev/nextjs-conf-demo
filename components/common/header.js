import Link from 'next/link';
import styles from '../../styles/header.module.css';

const Header = ({ text }) => {
	return (
		<div className={styles.container}>
			<Link href="/">
				<h2>Image Optimization With Next.js</h2>
			</Link>
			<h3>{text}</h3>
		</div>
	);
};

export default Header;
