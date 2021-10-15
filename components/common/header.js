import Link from 'next/link';
import styles from '../../styles/header.module.css';

const Header = ({ text }) => {
	return (
		<div className={styles.container}>
			<Link href="/">
				<h2>
					Image <span>Optimization</span> With Next.js
				</h2>
			</Link>
			<h3>{text}</h3>
		</div>
	);
};

export default Header;
