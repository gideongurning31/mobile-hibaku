import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeComponent from '../screens/HomeComponent';
import AboutComponent from '../screens/AboutComponent';
import ReviewDetailsComponent from '../screens/ReviewDetailComponent';

const HomeStack = createStackNavigator({
  Home: { screen: HomeComponent },
  About: { screen: AboutComponent },
  ReviewDetails: { screen: ReviewDetailsComponent },
});

export default createAppContainer(HomeStack);
