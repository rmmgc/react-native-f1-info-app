import React from 'react'
import { 
  ScrollView, 
  View, 
  StyleSheet, 
  TouchableOpacity
} from 'react-native'

/**
 * Custom components
 */

import AppHeader from '../components/AppHeader'
import { DisplayText } from '../components/AppText'
import Card from '../components/Card'
import Countdown from '../components/Countdown'
import Badge from '../components/Badge'

/**
 * Constants
 */

import { AppLayout, AppColors } from '../constants'


/**
 * <News />
 */

class News extends React.Component {

  render() {
    return (
      <View style={styles.screen}>
        <AppHeader screenTitle="News" />

        <ScrollView style={styles.mainContent} >
          <TouchableOpacity style={styles.baseMargin}>
            <Card 
              title="Mexico GP - 2019"
              contentStyle={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Countdown 
                days="02"
                hours="10"
                minutes="35"
              />
              <Badge data="27.11" />
            </Card>
          </TouchableOpacity>

          <Card
            title="WINNERS AND LOSERS - Russian Grand Priex edition"
            wrapperStyle={styles.baseMargin}
          >
            <DisplayText style={{fontSize: 12, lineHeight: 16}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sollicitudin orci, ac suscipit lorem euismod ac. Ut aliquam libero in velit varius venenatis. Quisque cursus fermentum ...
            </DisplayText>
          </Card>

          <Card
            title="Gasly hails strength of F1 helmet after debris incident in Russia"
            wrapperStyle={styles.baseMargin}
          >
            <DisplayText style={{fontSize: 12, lineHeight: 16}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sollicitudin orci, ac suscipit lorem euismod ac. Ut aliquam libero in velit varius venenatis. Quisque cursus fermentum ...
            </DisplayText>
          </Card>

          <Card
            title="Hulkenberg - Renault package not competitive enough at the moment"
            wrapperStyle={styles.baseMargin}
          >
            <DisplayText style={{fontSize: 12, lineHeight: 16}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sollicitudin orci, ac suscipit lorem euismod ac. Ut aliquam libero in velit varius venenatis. Quisque cursus fermentum ...
            </DisplayText>
          </Card>

          <Card
            title="Merceders position switch 'no-brainer' - Vettel"
            wrapperStyle={styles.baseMargin}
          >
            <DisplayText style={{fontSize: 12, lineHeight: 16}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sollicitudin orci, ac suscipit lorem euismod ac. Ut aliquam libero in velit varius venenatis. Quisque cursus fermentum ...
            </DisplayText>
          </Card>
        </ScrollView>
      </View>
    )
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
    flex: 1
  },
  baseMargin: {
    flex: 1,
    marginHorizontal: AppLayout.screenMargin
  },
})


/**
 * Exports
 */

export default News
