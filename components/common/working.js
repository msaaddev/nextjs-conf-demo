import styles from '../../styles/working.module.css';
import Link from 'next/link';

const Working = ({ link }) => {
	return (
		<Link href={link}>
			<div className={styles.working}>
				<button>How It Works</button>
			</div>
		</Link>
	);
};

export default Working;
