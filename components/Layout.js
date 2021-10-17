import Footer from './Footer';
import SEO from './SEO';

const Layout = ({ children }) => {
	return (
		<>
			<SEO />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
