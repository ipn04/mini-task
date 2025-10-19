import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useCart } from '@/src/Context/AppContext';
import { useMemo } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function CartScreen() {
    const { state, removeFromCart, clearCart, updateQuantity } = useCart();
    const [promocode, setPromocode] = useState('');
    const [discount, setDiscount] = useState(0);

    const totalPrice = useMemo(() => {
        const subtotal = state.items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
        return subtotal * (1 - discount);
    }, [state.items, discount]);

    const totalItem = useMemo(() => state.items.length, [state.items]);

    const applyPromoCode = (code: string) => {
        if (code.toLowerCase() === 'discount10') {
            setDiscount(0.1);
            alert('Promo code applied!');
        } else {
            alert('Invalid promo code');
        }
        setPromocode('');
    }

    return (
        <View className="flex-1 bg-gray-100">
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="px-4 mt-4">
                    {state.items.length === 0 ? (
                        <Text className="text-center mt-4 text-gray-400">
                            Your cart is empty.
                        </Text>
                    ) : (
                        state.items.map((item) => (
                            <View
                                key={item.id}
                                className="flex-row items-center justify-between p-2 mb-3 bg-white rounded-xl shadow"
                            >
                                <Image
                                    source={{ uri: item.image }}
                                    className="w-20 h-20 rounded-lg"
                                />
                                <View className="flex-1 ml-3">
                                    <Text className="font-semibold">{item.productName}</Text>
                                    <Text className="text-gray-500">${item.price.toFixed(2)}</Text>

                                    <View className="flex-row items-center mt-1">
                                        <TouchableOpacity
                                            onPress={() =>
                                                updateQuantity(item.id, (item.quantity || 1) - 1)
                                            }
                                            className="px-2 py-1 bg-gray-200 rounded"
                                            disabled={(item.quantity || 1) <= 1}
                                        >
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                        <Text className="px-2">{item.quantity || 1}</Text>
                                        <TouchableOpacity
                                            onPress={() =>
                                                updateQuantity(item.id, (item.quantity || 1) + 1)
                                            }
                                            className="px-2 py-1 bg-gray-200 rounded"
                                        >
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                                    <Ionicons name="trash-outline" size={24} color="red" />
                                </TouchableOpacity>
                            </View>
                        ))
                    )}
                </View>
                {state.items.length > 0 && (
                    <View className="mx-4 mb-3 gap-2 flex-row items-center border-gray-200">
                        <TextInput
                            placeholder="Enter promo code"
                            className="size-14 grow border border-gray-300 rounded-lg bg-white"
                            keyboardType="default"
                            value={promocode}
                            onChangeText={setPromocode}
                        />
                        <TouchableOpacity disabled={!promocode} className="bg-blue-500 rounded" onPress={() => applyPromoCode(promocode)}>
                            <Text className="p-4 text-white text-center font-bold">Apply</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>

            {state.items.length > 0 && (
                <View className="p-4 mt-3 h-34 border-t border-gray-200 bg-white">
                    <Text className="text-xl mb-4">
                        Summary Details
                    </Text>
                    {discount > 0 && (
                        <Text className="text-md text-gray-500 line-through">
                            Original Price: ${state.items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0).toFixed(2)}
                        </Text>
                    )}
                    <Text className="text-md mb-2">
                        Number of items: {totalItem} item/s
                    </Text>
                    <Text className="text-md mb-2">
                        Total: ${totalPrice.toFixed(2)}
                    </Text>
                    <TouchableOpacity
                        onPress={clearCart}
                        className="bg-red-500 rounded py-2 px-4"
                    >
                        <Text className="text-white text-center font-bold">Clear Cart</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}
