import { navBarStyles } from '../styles/global';

export const routeIcon = {
  Home: 'home',
  Commodity: 'shopping-store',
  Transaction: 'shopping-basket',
  Settings: 'spinner-cog',
};

export const tabOptions = (menuTitle, badge) => {
  let options = { ...navBarStyles, title: 'HIBAKU '.concat(menuTitle) };
  if (badge && parseInt(badge) > 0) {
    options['tabBarBadge'] = parseInt(badge);
  }
  return options;
};
