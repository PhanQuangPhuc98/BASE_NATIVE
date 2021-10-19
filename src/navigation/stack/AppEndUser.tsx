import {
  HomeScreen,
  LoginScreen,
  LogoutScreen,
  NotificationScreen,
  ResigterScreen,
  UserScreen,
} from '@screens';
import {SCREEN_ROUTER_APP} from '@utils';
const {HOME, LOGIN, LOGOUT, NOTIFICATION, RESIGTER, USER} = SCREEN_ROUTER_APP;
export default {
  [HOME]: HomeScreen,
  [NOTIFICATION]: NotificationScreen,
  [USER]: UserScreen,
};
