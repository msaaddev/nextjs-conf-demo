import Link from 'next/link';
import styles from '../../styles/header.module.css';

const Header = ({ text, working, word }) => {
	return (
		<div className={styles.container}>
			{!working ? (
				<>
					<Link href="/">
						<a>
							<h2>
								Image <span>Optimization</span> With Next.js
							</h2>
						</a>
					</Link>
					<h3>{text}</h3>
				</>
			) : (
				<>
					<h2>
						<Link href={`/${word.toLowerCase()}`}>
							<a>
								Working of <span>{word}</span>{' '}
								{word !== 'img' ? 'Component' : 'tag'}
							</a>
						</Link>
					</h2>
				</>
			)}
		</div>
	);
};

export default Header;
