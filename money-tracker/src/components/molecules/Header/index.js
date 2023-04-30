import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconBack} from '../../../assets';
import React from 'react';
import Gap from '../../atoms/Gap';

const Header = ({title, onBack, subtitle}) => {
  return (
    <View>
      <View>
        <View style={styles.container}>
          {onBack && (
            <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
              <View style={styles.back}>
                <IconBack />
              </View>
            </TouchableOpacity>
          )}
          <Gap width={26} />
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: 24,
    paddingVertical: 38,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: 'black',
  },
  back: {
    padding: 10,
  },
  subtitle: {},
});
