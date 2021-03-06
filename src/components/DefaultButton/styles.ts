import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    paddingTop: 10,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: colors.mainOrange,
    height: 50,
    width: 300,
  },
  text: {
    fontSize: 20,
  },
});
