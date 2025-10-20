import { FlatList, View, Text, Modal, TouchableOpacity, Pressable, Image, ToastAndroid } from 'react-native';
import ProductLists from './(productLists)/ProductLists';
import { useCart } from '@/src/Context/AppContext';
import { Product } from '@/src/types/Product';
import { useState } from 'react';
import style from './style';

export default function ProductScreen() {
  const { addToCart } = useCart();
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      productName: 'Headphones',
      description: 'High-quality noise-cancelling over-ear headphones with long battery life.',
      price: 199.99,
      image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
    },
    {
      id: 2,
      productName: 'Smartwatch',
      description: 'Water-resistant smartwatch with heart-rate monitor and GPS tracking.',
      price: 149.99,
      image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
    },
    {
      id: 3,
      productName: 'Speaker',
      description: 'Portable Bluetooth speaker with deep bass and 12-hour playtime.',
      price: 89.99,
      image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
    },
    {
      id: 4,
      productName: 'Tracker',
      description: 'Lightweight fitness tracker to monitor steps, sleep, and calories burned.',
      price: 59.99,
      image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
    }
  ];

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    ToastAndroid.show(`${product.productName} added to cart!`, ToastAndroid.SHORT);
    closeModal();
  };

  const openModalView = (product: Product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  return (
    <View className={`${openModal ? 'opacity-50' : 'bg-white'}`}>
      <FlatList
        className='h-screen'
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="w-1/2 p-2">
            <ProductLists products={[item]} openModal={openModalView} />
          </View>
        )}
        contentContainerStyle={{ padding: 8 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        animationType="slide"
        transparent
        visible={openModal}
        onRequestClose={closeModal}
      >
        <Pressable style={style.modalOverlay} onPress={closeModal} />
        <View style={style.bottomModal}>
          <Image
            source={{ uri: selectedProduct?.image }}
            className='w-full h-64 rounded-md mb-4'
            resizeMode="cover"
          />
          <View className='flex-row justify-between items0-center mb-2'>
            <Text className="text-2xl font-bold">
              {selectedProduct?.productName}
            </Text>
            <Text className="text-2xl font-semibold">${selectedProduct?.price.toFixed(2)}</Text>
          </View>
          <Text className="mb-4">{selectedProduct?.description}</Text>
          <TouchableOpacity style={style.modalButton} onPress={() => handleAddToCart(selectedProduct!)}>
            <Text className="text-white font-bold text-center">Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
