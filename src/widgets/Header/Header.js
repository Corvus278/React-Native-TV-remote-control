import { View } from 'react-native';
import { MiLogo } from '../../shared/img/MiLogo';
import { BurgerMenu } from '../../shared/ui/Buttons/BurgerMenu/BurgerMenu';

export const Header = () => {
	return (
		<View style={style.header}>
			<BurgerMenu></BurgerMenu>
			<MiLogo></MiLogo>
		</View>
	);
};

const style = StyleSheet.create({
	header: {
		display: 'flex',
		alignItems: 'center',
	},
	logo: {
		marginLeft: 'auto',
	},
});
