import React, {useEffect, useState} from 'react'
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileContext from './Context/profileContext'

import Tabs from './routes/Tabs'
import ProfileToEdit from './screen/ProfileToEdit'
import ChooseIcon from './screen/ChooseIcon'
import Camera from './screen/Camera'
import {configureLanguageToI18n} from './languages/utils'

const Stack = createStackNavigator();

const App = () => {

	//Notificação quando app ta aberto
	useEffect(() => {
		// Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp(remoteMessage => {
      Alert.alert(
        'Notification caused app to open from background state:',
        JSON.stringify(remoteMessage.notification),
      );
    });


    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  const [user, changeUser] = useState('Jose')
  console.log('user', user);
  configureLanguageToI18n()

	return (
    <ProfileContext.Provider value={{user, changeUser}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
          <Stack.Screen name="ProfileToEdit" component={ProfileToEdit} />
          <Stack.Screen name="ChooseIcon" component={ChooseIcon} />
          <Stack.Screen name="Camera" component={Camera} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    </ProfileContext.Provider>
  )
}

export default App
