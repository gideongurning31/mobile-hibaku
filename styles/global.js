import { StyleSheet } from 'react-native';

export const palette = {
  dark1: '#52734D',
  dark2: '#91C788',
  light1: '#FEFFDE',
  light2: '#DDFFBC',
  canvas: '#DEDEDE'
};

export const globalStyles = StyleSheet.create({
  header: {
    backgroundColor: palette.dark1
  },
  headerText: {
    color: palette.canvas,
    fontFamily: 'nunito-bold'
  },
  tabBarStyle: {
    height: 60,
    backgroundColor: palette.dark1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.canvas
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'nunito-bold'
  },
  defaultText: {
    fontSize: 18,
    fontFamily: 'nunito'
  }
});

export const navBarStyles = {
  headerStyle: globalStyles.header,
  headerTitleStyle: globalStyles.headerText,
  tabBarStyle: globalStyles.tabBarStyle,
  tabBarShowLabel: false
};
