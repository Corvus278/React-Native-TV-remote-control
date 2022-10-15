import { Button } from 'react-native';

export const BurgerMenu = onClick => {
	return <Button onClick={e => onClick(e)}></Button>;
};
