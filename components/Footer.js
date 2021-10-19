import Link from 'next/link';
import styles from '../styles/footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
			<Link href="https://twitter.com/msaaddev">
				<a>
					<p>Made by Saad</p>
				</a>
			</Link>
		</div>
	);
};

export default Footer;
