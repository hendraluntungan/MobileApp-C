import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Transaction = ({tanggal, keterangan, color = '#D9435E', jumlah}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>{tanggal}</Text>
        <Text style={styles.text2}>{keterangan}</Text>
      </View>
      <Text style={styles.text3(color)}>{jumlah}</Text>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
  },
  text1: {
    fontSize: 14,
  },
  text2: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
  text3: color => ({
    fontSize: 16,
    fontFamily: 'Poppins-Black',
    color: color,
  }),
});
