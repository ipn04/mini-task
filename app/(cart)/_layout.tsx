import { Stack } from 'expo-router';
import { Text } from 'react-native';

export default function CartLayout() {
    return (
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="index"
                options={{
                    title: '',
                    headerRight: () => (
                        <Text className='text-2xl font-semibold'>
                            My Shopping Cart
                        </Text>
                    )
                }}
            />
        </Stack>
    );
}
