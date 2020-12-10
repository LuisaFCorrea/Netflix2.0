import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './../screen/Home';
import More from './../screen/More';
import ToBeDone from './../screen/ToBeDone'
import {translate} from '../languages/utils'

const Tab = createBottomTabNavigator();

export default class Tabs extends React.Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: 'black',
          inactiveBackgroundColor: 'black',
          style: {
            backgroundColor: 'black',
            borderTopColor: 'transparent',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: translate('home'),
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarLabel: translate('more'),
          }}
        />
        <Tab.Screen
          name="Search"
          component={ToBeDone}
          options={{
            tabBarLabel: translate('search') ,
          }}
        />
        <Tab.Screen
          name="UpComing"
          component={ToBeDone}
          options={{
            tabBarLabel: translate('soon'),
          }}
        />
        <Tab.Screen
          name="Downloads"
          component={ToBeDone}
          options={{
            tabBarLabel: translate('downloads'),
          }}
        />
      </Tab.Navigator>
    );
  }
}
