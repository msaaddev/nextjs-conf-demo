import Link from 'next/link';
import styles from '../../styles/header.module.css';

const Header = ({ text, working, word }) => {
	return (
		<div className={styles.container}>
			{!working ? (
				<>
					<Link href="/">
						<h2>
							Image <span>Optimization</span> With Next.js
						</h2>
					</Link>
					<h3>{text}</h3>
				</>
			) : (
				<>
					<Link href={`/${word}`}>
						<h2>
							Working of <span>{word}</span>{' '}
							{word !== 'img' ? 'Component' : 'tag'}
						</h2>
					</Link>
				</>
			)}
		</div>
	);
};

export default Header;
