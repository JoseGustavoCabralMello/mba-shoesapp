import { OneSignal } from 'react-native-onesignal'

export function tagUserInfoCreate(){
  OneSignal.User.removeTag("user_email")
}