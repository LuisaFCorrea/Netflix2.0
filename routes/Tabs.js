import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './../screen/Home';
import More from './../screen/More';
import ToBeDone from './../screen/ToBeDone'

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
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarLabel: 'More',
          }}
        />
        <Tab.Screen
          name="Search"
          component={ToBeDone}
          options={{
            tabBarLabel: 'Buscar',
          }}
        />
        <Tab.Screen
          name="UpComing"
          component={ToBeDone}
          options={{
            tabBarLabel: 'Em Breve',
          }}
        />
        <Tab.Screen
          name="Downloads"
          component={ToBeDone}
          options={{
            tabBarLabel: 'Downloads',
          }}
        />
      </Tab.Navigator>
    );
  }
}
