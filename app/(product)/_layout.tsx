import { Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { useCart } from '@/src/Context/AppContext';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from './style';
import { useRouter } from 'expo-router';

export default function ProductLayout() {
    const { state } = useCart();
    const router = useRouter();

    const redirectToCart = () => {
        router.push('./(cart)');
    }

    return (
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="index"
                options={{
                    title: '',
                    headerLeft: () => (
                        <Text className='text-4xl font-medium'>
                            Products
                        </Text>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={style.cartBadgeContainer} onPress={redirectToCart}>
                            <Ionicons name="cart-outline" size={24} color="#0a0a0aff" />
                            <View style={style.cartBadge}>
                                <Text className='font-semibold text-center' style={style.cartBadgeText}>{state.items.length}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack>
    );
}
