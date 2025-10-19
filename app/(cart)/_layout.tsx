import { Stack } from 'expo-router';
import { Text, View } from 'react-native';
// import { useCart } from '@/src/Context/AppContext';
// import { useMemo } from 'react';

export default function CartLayout() {
    // const { state } = useCart();

    // const totalProducts = useMemo(() => state.items.length, [state.items]);

    return (
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="index"
                options={{
                    title: '',
                    headerRight: () => (
                        <View>
                            <Text className='text-2xl font-semibold'>
                                My Shopping Cart
                            </Text>
                        </View>
                    )
                }}
            />
        </Stack>
    );
}
