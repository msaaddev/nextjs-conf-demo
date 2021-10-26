import Head from 'next/head';
import config from '../utils/config';

const SEO = () => {
	return (
		<Head>
			<title>{config.title}</title>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta name="description" content={config.description} />
			<meta name="keywords" content={config.keywords} />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossorigin
			/>
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={config.title} />
			<meta property="og:description" content={config.description} />
			<link
				href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
				rel="stylesheet"
			/>
		</Head>
	);
};

export default SEO;
