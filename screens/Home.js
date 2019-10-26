import React from 'react'
import { 
  ScrollView, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Image,
  Dimensions
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

/**
 * Custom components
 */

import AppHeader from '../components/AppHeader'
import { DisplayBold, BaseText, DisplayText } from '../components/AppText'
import Card from '../components/Card'
import Countdown from '../components/Countdown'
import Badge from '../components/Badge'


/**
 * Constants
 */

import { AppLayout, AppColors } from '../constants'

const { width } = Dimensions.get('window')
const CARUSEL_CARD_WIDTH = width - 56

/**
 * <Home />
 */

class Home extends React.Component {

  componentDidMount() {
		setTimeout(() => { 
      this.scrollView.scrollTo({x: -30}) 
    }, 1)
	}

  render() {
    return (
      <View style={styles.screen}>
        <AppHeader />
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

          <ScrollView 
            ref={(scrollView) => { this.scrollView = scrollView }}
            style={styles.carouselContainer}
            contentContainerStyle={styles.carouselInnerContainer}
            horizontal
            decelerationRate={0}
            snapToInterval={width - (80 - AppLayout.screenMargin)}
            snapToAlignment={"center"}
            showsHorizontalScrollIndicator={false}
          >
            <Card wrapperStyle={styles.carouselItem}>
              <View style={{position: 'absolute', height: 200, overflow: 'hidden', bottom: -20, left: -88}}>
                <Image 
                  style={{width: 300, height: undefined, aspectRatio: 1}}
                  source={require('../assets/cars/ferrari.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase'}}>1 Ferrari</DisplayBold>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.redCandy}}>401 Points</DisplayText>
              </View>
            </Card>
            <Card wrapperStyle={styles.carouselItem}>
              <View style={{position: 'absolute', height: 200, overflow: 'hidden', bottom: -20, left: -88}}>
                <Image 
                  style={{width: 300, height: undefined, aspectRatio: 1}}
                  source={require('../assets/cars/mercedes.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase'}}>2 Mercedes</DisplayBold>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.redCandy}}>391 Points</DisplayText>
              </View>
            </Card>
            <Card wrapperStyle={styles.carouselItem}>
              <View style={{position: 'absolute', height: 200, overflow: 'hidden', bottom: -20, left: -88}}>
                <Image 
                  style={{width: 300, height: undefined, aspectRatio: 1}}
                  source={require('../assets/cars/alfaromeo.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase'}}>3 Alfa Romeo</DisplayBold>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.redCandy}}>354 Points</DisplayText>
              </View>
            </Card>
            <Card wrapperStyle={styles.carouselItem}>
              <View style={{position: 'absolute', height: 200, overflow: 'hidden', bottom: -20, left: -88}}>
                <Image 
                  style={{width: 300, height: undefined, aspectRatio: 1}}
                  source={require('../assets/cars/redbull.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase'}}>4 Red Bull</DisplayBold>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.redCandy}}>326 Points</DisplayText>
              </View>
            </Card>
            <Card wrapperStyle={styles.carouselItem}>
              <View style={{position: 'absolute', height: 200, overflow: 'hidden', bottom: -20, left: -88}}>
                <Image 
                  style={{width: 300, height: undefined, aspectRatio: 1}}
                  source={require('../assets/cars/mclaren.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase'}}>5 McLaren</DisplayBold>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.redCandy}}>289 Points</DisplayText>
              </View>
            </Card>
          </ScrollView>

          <View style={styles.baseMargin}>

            <TouchableOpacity style={{ flex: 1 }}>
              <Card 
                title="Drivers"
              >
                
              </Card>
            </TouchableOpacity>

            <View style={{height: 500}}></View>
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
    flex: 1
  },
  baseMargin: {
    flex: 1,
    marginHorizontal: AppLayout.screenMargin
  },
  carouselContainer: {
    flex: 1,
  },
  carouselInnerContainer: {
    marginHorizontal: AppLayout.screenMargin/2, 
    paddingRight: AppLayout.screenMargin
  },
  carouselItem: {
    width: width - 80,
    marginHorizontal: AppLayout.screenMargin/2,
    height: 120
  }
})


/**
 * Exports
 */

export default Home
