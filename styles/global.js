import { StyleSheet } from 'react-native';

export const palette = {
  dark1: '#52734D',
  dark2: '#91C788',
  light1: '#FEFFDE',
  light2: '',
};

export const globalStyles = StyleSheet.create({
  header: {
    backgroundColor: palette.dark1,
  },
  headerText: {
    color: '#FFF',
    fontFamily: 'nunito-bold',
  },
  tabBarStyle: {
    height: 60,
    backgroundColor: palette.dark1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEE',
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'nunito-bold',
  },
  defaultText: {
    fontSize: 18,
    fontFamily: 'nunito',
  },
});

export const navBarStyles = {
  headerStyle: globalStyles.header,
  headerTitleStyle: globalStyles.headerText,
  tabBarStyle: globalStyles.tabBarStyle,
  tabBarShowLabel: false,
};
