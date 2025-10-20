import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  productItem: {
    borderRadius: 12,
    padding: 8,
    flexGrow: 1,
    backgroundColor: '#bebebeff',
    width: '100%'
  },
  productImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 8
  },
  productName: {
    fontSize: 14
  },
  description: {
    fontSize: 14
  },
  price: {
    fontSize: 14
  },
  viewBtn: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 12,
    marginTop: 'auto'
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff'
  }
});
