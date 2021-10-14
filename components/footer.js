import Link from 'next/link';
import styles from '../styles/footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
			<Link href="https://twitter.com/msaaddev">
				<p>Made by Saad</p>
			</Link>
		</div>
	);
};

export default Footer;
