import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  productItem: {
    backgroundColor: '#3a3b3c',
    borderRadius: 12,
    padding: 8,
    width: 160
  },
  productImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 8
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#DDD'
  },
  productName: {
    fontSize: 12
  },
  description: {
    fontSize: 12,
    marginBottom: 4
  },
  price: {
    fontSize: 12,
    color: 'green'
  },
  addBtn: {
    backgroundColor: '#007BFF',
    padding: 8,
    borderRadius: 12,
    marginTop: 'auto'
  },
  buttonText: {
    textAlign: 'center'
  }
});
