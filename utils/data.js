const workingImage = [
	'You provide the src, alt, width, and height of the image.',
	'The client requests the server for the image using the provided src.',
	'The server sends back the image with webp format.',
	'The Image component then renders the image according to viewport'
];

const prosImage = [
	'Optimize images by automatically adding `srcset`.',
	'Serves webp format.',
	'Prevents Cumulative Layout Shift.',
	'Provides lazy loading.',
	'Adds responsiveness to the images.',
	'Placeholder prop option.',
	'Sets Image quality to 75. Range is 1 to 100.'
];

const workingImg = [
	'You define the src and alt attributes of img tag.',
	'The client requests the server for the image using the provided src.',
	'The server sends back the image in its original format.',
	'The img tag then renders the image with its original size.'
];

const consImg = [
	'The server requests all images at once.',
	'No lazy loading.',
	'Layout shift occurs.'
];

export { workingImage, prosImage, workingImg, consImg };
