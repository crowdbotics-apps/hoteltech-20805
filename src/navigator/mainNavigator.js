import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Feed5115169Navigator from '../features/Feed5115169/navigator';
import Maps7115167Navigator from '../features/Maps7115167/navigator';
import Dashboard18115166Navigator from '../features/Dashboard18115166/navigator';
import UserProfile9115165Navigator from '../features/UserProfile9115165/navigator';
import CalendarView1115129Navigator from '../features/CalendarView1115129/navigator';
import SignUp22115128Navigator from '../features/SignUp22115128/navigator';
import Camera3115127Navigator from '../features/Camera3115127/navigator';
import UserProfile115087Navigator from '../features/UserProfile115087/navigator';
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
Feed5115169: { screen: Feed5115169Navigator },
Maps7115167: { screen: Maps7115167Navigator },
Dashboard18115166: { screen: Dashboard18115166Navigator },
UserProfile9115165: { screen: UserProfile9115165Navigator },
CalendarView1115129: { screen: CalendarView1115129Navigator },
SignUp22115128: { screen: SignUp22115128Navigator },
Camera3115127: { screen: Camera3115127Navigator },
UserProfile115087: { screen: UserProfile115087Navigator },
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
