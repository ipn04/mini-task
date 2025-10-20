import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cartBadgeContainer: {
    position: 'relative'
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
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
    lineHeight: 14
  },
  modalOverlay: {
    flex: 1
  },
  bottomModal: {
    backgroundColor: '#ffffffff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  modalButton: {
    backgroundColor: 'green',
    paddingVertical: 18,
    borderRadius: 10
  }
});
