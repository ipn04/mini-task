import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import ProductLists from './(productLists)/ProductLists';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useRouter } from 'expo-router';

import style from './style';

export default function ProductScreen() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<number[]>([]);

  console.log('Cart Items:', cartItems);
  const products = [
    {
      id: 1,
      productName: 'Product 1',
      description: 'Description for Product 1',
      price: 142.0,
      image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
    },
    {
      id: 2,
      productName: 'Product 2',
      description: 'Description for Product 2',
      price: 99.99,
      image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
    },
    {
      id: 3,
      productName: 'Product 3',
      description: 'Description for Product 3',
      price: 75.0,
      image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
    },
    {
      id: 4,
      productName: 'Product 4',
      description: 'Description for Product 4',
      price: 50.0,
      image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
    }
  ];

  const handleAddToCart = (productId: number) => {
    setCartItems(prev => {
      if (prev.includes(productId)) return prev;
      return [...prev, productId];
    });
  };

  const redirectToCart = () => {
    router.push('./(cart)');
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    >
      <ThemedView style={style.titleContainer}>
        <ThemedText type="title">Products</ThemedText>
        <TouchableOpacity onPress={redirectToCart}>
          <Ionicons name="cart-outline" size={24} color="#FFF" />
          {cartItems.length > 0 ? (
            <ThemedView style={style.cartBadge}>
              <ThemedText style={style.cartBadgeText}>{cartItems.length}</ThemedText>
            </ThemedView>
          ) : (
            <ThemedView style={style.cartBadge}>
              <ThemedText style={style.cartBadgeText}>0</ThemedText>
            </ThemedView>
          )}
        </TouchableOpacity>
      </ThemedView>
      <ThemedView style={style.productContainer}>
        <ProductLists products={products} onAddToCart={handleAddToCart} />
      </ThemedView>
    </ParallaxScrollView>
  );
}