import styles from '../../styles/working.module.css';
import Link from 'next/link';

const Working = ({ link }) => {
	return (
		<div className={styles.working}>
			<Link href={link}>
				<a>
					<button>How It Works</button>
				</a>
			</Link>
		</div>
	);
};

export default Working;
