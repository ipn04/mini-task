import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  titleContainer: {
    paddingTop: 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cartBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: 'red',
    borderRadius: 7,
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 14
  },
  productContainer: {
    gap: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
});
