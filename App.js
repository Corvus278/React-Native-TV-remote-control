import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { APP_TOP_PADDING } from './src/app/constants';
import { Index } from './src/app/Index';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
	return (
		<LinearGradient colors={['#252525', '#424242']}>
			<View style={styles.container}>
				<Index />
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: APP_TOP_PADDING + 28,
		paddingHorizontal: 18,
		height: Dimensions.get('window').height,
	},
});
