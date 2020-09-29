import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial115086Navigator from '../features/Tutorial115086/navigator';
import NotificationList115058Navigator from '../features/NotificationList115058/navigator';
import Settings115057Navigator from '../features/Settings115057/navigator';
import Settings115049Navigator from '../features/Settings115049/navigator';
import UserProfile115047Navigator from '../features/UserProfile115047/navigator';
import UserProfile115016Navigator from '../features/UserProfile115016/navigator';
import Tutorial115015Navigator from '../features/Tutorial115015/navigator';
import NotificationList114987Navigator from '../features/NotificationList114987/navigator';
import Settings114986Navigator from '../features/Settings114986/navigator';
import Settings114978Navigator from '../features/Settings114978/navigator';
import UserProfile114976Navigator from '../features/UserProfile114976/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial115086: { screen: Tutorial115086Navigator },
NotificationList115058: { screen: NotificationList115058Navigator },
Settings115057: { screen: Settings115057Navigator },
Settings115049: { screen: Settings115049Navigator },
UserProfile115047: { screen: UserProfile115047Navigator },
UserProfile115016: { screen: UserProfile115016Navigator },
Tutorial115015: { screen: Tutorial115015Navigator },
NotificationList114987: { screen: NotificationList114987Navigator },
Settings114986: { screen: Settings114986Navigator },
Settings114978: { screen: Settings114978Navigator },
UserProfile114976: { screen: UserProfile114976Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
