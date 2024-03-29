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


/**
 * Constants
 */

import { AppLayout, AppColors } from '../constants'


/**
 * <News />
 */

class News extends React.Component {

  /**
   * NOTE
   * 
   * This is just static screen.
   * There is no real data sources included!
   */


  render() {
    return (
      <View style={{flex: 1}}>
        <AppHeader screenTitle="F1 News" />

        <ScrollView style={{flex: 1}}>
          <View style={{flex: 1, margin: AppLayout.baseMargin}}>
            <TouchableOpacity style={{marginBottom: AppLayout.baseMargin}}>
              <Card
                title="WINNERS AND LOSERS - Russian Grand Priex edition"
              >
                <DisplayText style={styles.contentText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sollicitudin orci, ac suscipit lorem euismod ac. Ut aliquam libero in velit varius venenatis. Quisque cursus fermentum ...
                </DisplayText>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity style={{marginBottom: AppLayout.baseMargin}}>
              <Card
                title="Gasly hails strength of F1 helmet after debris incident in Russia"
              >
                <DisplayText style={styles.contentText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sollicitudin orci, ac suscipit lorem euismod ac. Ut aliquam libero in velit varius venenatis. Quisque cursus fermentum ...
                </DisplayText>
              </Card>
            </TouchableOpacity>
            
            <TouchableOpacity style={{marginBottom: AppLayout.baseMargin}}>
              <Card
                title="Hulkenberg - Renault package not competitive enough at the moment"
              >
                <DisplayText style={styles.contentText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sollicitudin orci, ac suscipit lorem euismod ac. Ut aliquam libero in velit varius venenatis. Quisque cursus fermentum ...
                </DisplayText>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity>
              <Card
                title="Merceders position switch 'no-brainer' - Vettel"
              >
                <DisplayText style={styles.contentText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sollicitudin orci, ac suscipit lorem euismod ac. Ut aliquam libero in velit varius venenatis. Quisque cursus fermentum ...
                </DisplayText>
              </Card>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  contentText: {
    fontSize: 12, 
    lineHeight: 16
  }
})


/**
 * Exports
 */

export default News
