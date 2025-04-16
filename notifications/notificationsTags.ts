import { OneSignal } from 'react-native-onesignal'

export function tagUserEmailCreat(email: string){
  OneSignal.User.removeTag("user_email")
}