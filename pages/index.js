import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<h2>Next.js Conf 2021</h2>
				<h3>
					Let's Talk About <span>Image</span>{' '}
					<span>Optimization</span>
				</h3>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.button}>
					<Link href="/img">
						<button>{`<img>`}</button>
					</Link>
				</div>
				<div className={styles.button}>
					<Link href="/Image">
						<button>{`<Image/>`}</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
