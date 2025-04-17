import { OneSignal } from 'react-native-onesignal'

export function tagUserInfoCreate(){
  OneSignal.User.addTags({
    user_name: "Rodrigo",
    user_email: "rodrigo@email.com"
  })
}

export function tagCartUpdate(itemsCount: string) {
  OneSignal.User.addTag("car_items_count", itemsCount)
}