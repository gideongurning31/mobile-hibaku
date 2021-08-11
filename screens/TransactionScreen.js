import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { globalStyles, palette } from '../styles/global';

function TransactionScreen() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} style={styles.modal} animationType="slide">
        <View style={styles.modal}>
          <Text style={globalStyles.defaultText}>COMING SOON!</Text>
          <Fontisto name="close-a" size={24} style={styles.iconButton} onPress={() => setModalOpen(false)} />
        </View>
      </Modal>
      <Fontisto name="shopping-basket-add" size={24} style={styles.iconButton} onPress={() => setModalOpen(true)} />
      <Text style={globalStyles.defaultText}>TRANSAKSI BERLANGSUNG</Text>
    </View>
  );
}

export default TransactionScreen;

const styles = StyleSheet.create({
  modal: {
    flex: 0.5,
    margin: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconButton: {
    margin: 20,
    padding: 15,
    color: palette.light1,
    borderColor: palette.light1,
    backgroundColor: palette.dark2,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
