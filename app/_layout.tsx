import '../global.css';
import { Stack } from 'expo-router';
import { CartProvider } from '@/src/Context/AppContext';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <CartProvider>
      <SafeAreaProvider>
        <StatusBar style="light" backgroundColor="#000" translucent={false} />
        <SafeAreaView
          className="flex-1"
          edges={['bottom']}
        >
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: '#000' }
            }}
          >
            <Stack.Screen name="(product)" />
            <Stack.Screen name="(cart)" />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </CartProvider>
  );
}
