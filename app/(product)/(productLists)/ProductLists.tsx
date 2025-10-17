import React from 'react'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view';
import style from './style';
import { TouchableOpacity, Image } from 'react-native';

interface productProps {
    products: {
        id: number;
        productName: string;
        description: string;
        price: number;
        image: string;
    }[];
    // eslint-disable-next-line no-unused-vars
    onAddToCart: (id: number) => void;
}

function ProductLists({ products, onAddToCart }: productProps) {
    return (
        <>
            {products.map(product => (
                <ThemedView key={product.id} style={style.productItem}>
                    <Image
                        source={{ uri: product.image }}
                        style={style.productImage}
                        resizeMode="cover"
                    />
                    <ThemedView style={style.productHeader}>
                        <ThemedText style={style.productName} type="default">
                            {product.productName}
                        </ThemedText>
                        <ThemedText style={style.price} type="default">
                            ${product.price}
                        </ThemedText>
                    </ThemedView>
                    <ThemedText style={style.description} type="default">
                        {product.description}
                    </ThemedText>
                    <TouchableOpacity onPress={() => onAddToCart(product.id)} style={style.addBtn}>
                        <ThemedText style={style.buttonText}>Add To Cart</ThemedText>
                    </TouchableOpacity>
                </ThemedView>
            ))}
        </>
    )
}

export default ProductLists