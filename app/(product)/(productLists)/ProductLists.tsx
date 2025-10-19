import React from 'react'
import { Text, View } from 'react-native';
import style from './style';
import { TouchableOpacity, Image } from 'react-native';

export interface Product {
    id: number;
    productName: string;
    description: string;
    price: number;
    image: string;
}

interface ProductProps {
    products: Product[];
    openModal: (product: Product) => void;
}

function ProductLists({ products, openModal }: ProductProps) {
    return (
        <>
            {products.map(product => (
                <View key={product.id} style={style.productItem}>
                    <Image
                        source={{ uri: product.image }}
                        style={style.productImage}
                        resizeMode="cover"
                    />
                    <View className='flex-row justify-between mb-1'>
                        <Text className='font-semibold' style={style.productName}>
                            {product.productName}
                        </Text>
                        <Text className='font-semibold' style={style.price}>
                            ${product.price}
                        </Text>
                    </View>
                    <Text className='mb-2 truncate' numberOfLines={1} ellipsizeMode='tail' style={style.description}>
                        {product.description}
                    </Text>
                    <TouchableOpacity onPress={() => openModal(product)} style={style.viewBtn}>
                        <View className='flex-row items-center justify-center gap-2'>
                            <Text className='font-bold' style={style.buttonText}>View Product</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </>
    )
}

export default ProductLists