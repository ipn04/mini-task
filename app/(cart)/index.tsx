import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

// import style from './style';

export default function CartScreen() {

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        >
            <ThemedView>
                {/* <ThemedText type="title">Products</ThemedText> */}
            </ThemedView>
        </ParallaxScrollView>
    );
}