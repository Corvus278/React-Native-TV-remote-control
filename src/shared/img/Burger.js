import Svg, { Path } from 'react-native-svg';

export const Burger = () => {
	return (
		<Svg
			width='15'
			height='12'
			viewBox='0 0 15 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<Path d='M1 1H14' stroke='#A2A2A2' stroke-linecap='round' />
			<Path d='M1 6H14' stroke='#A2A2A2' stroke-linecap='round' />
			<Path d='M1 11H14' stroke='#A2A2A2' stroke-linecap='round' />
		</Svg>
	);
};
