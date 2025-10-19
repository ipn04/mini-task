import '../global.css';
import { Stack } from 'expo-router';
import { CartProvider } from '@/src/Context/AppContext';

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(product)" />
        <Stack.Screen name="(cart)" />
      </Stack>
    </CartProvider>
  );
}
