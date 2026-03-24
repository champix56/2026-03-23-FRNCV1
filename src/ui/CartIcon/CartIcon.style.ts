import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  cartIconContainer: {
    position: 'absolute',
    right: 0,
    top: -3,
    backgroundColor: 'blue',
    borderRadius: 6,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  icon: { width: 30, height: 30 },
});
