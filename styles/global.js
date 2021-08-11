import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  header: {
    backgroundColor: '#52734D',
  },
  headerText: {
    color: '#FFF',
    fontFamily: 'nunito-bold',
  },
  tabBarStyle: {
    height: 60,
    backgroundColor: '#52734D',
  },
  container: {
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
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
