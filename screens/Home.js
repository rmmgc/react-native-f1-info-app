import React from 'react'
import { 
  ScrollView, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Image 
} from 'react-native'


/**
 * Custom components
 */

import AppHeader from '../components/AppHeader'
import { DisplayText, BaseText } from '../components/AppText'
import Card from '../components/Card'
import Countdown from '../components/Countdown'
import Badge from '../components/Badge'


/**
 * Constants
 */

import { AppLayout, AppColors } from '../constants'


/**
 * <Home />
 */

class Home extends React.Component {

  render() {
    return (
      <View style={styles.screen}>
        <AppHeader />
        <ScrollView style={styles.mainContent} >
          <TouchableOpacity style={{ flex: 1 }}>
            <Card 
              title="Mexico GP - 2019"
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Countdown 
                days="02"
                hours="10"
                minutes="35"
              />
              <Badge data="27.11" />
            </Card>
          </TouchableOpacity>

          <View style={{ flex: 1, marginTop: 14 }}>
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 4 }}>
              <View style={{ flex: 1, height: 50, backgroundColor: AppColors.grayBlue, marginRight: 4}}>

              </View>
              <View style={{ flex: 1, height: 50, backgroundColor: AppColors.grayBlue}}>
                
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, height: 50, backgroundColor: AppColors.grayBlue, marginRight: 4}}>

              </View>
              <View style={{ flex: 1, height: 50, backgroundColor: AppColors.grayBlue}}>
                
              </View>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  mainContent: {
    margin: AppLayout.screenMargin,
    flex: 1
  }
})


/**
 * Exports
 */

export default Home
