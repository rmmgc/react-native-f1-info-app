import React from 'react'
import { 
  ScrollView, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Image,
  Dimensions
} from 'react-native'

/**
 * Custom components
 */

import AppHeader from '../components/AppHeader'
import { DisplayBold, DisplayText } from '../components/AppText'
import Card from '../components/Card'
import CardTouchable from '../components/CardTouchable'
import Countdown from '../components/Countdown'
import Badge from '../components/Badge'
import Carousel from '../components/Carousel'


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

  constructor(props) {
    super(props)

    this.navigationHandler = this.navigationHandler.bind(this)
  }

  navigationHandler(routeName) {
    console.log("KLIKNUTOOO!")
    console.log(routeName)
    this.props.navigation.navigate(routeName)
  }

  render() {
    return (
      <View style={styles.screen}>
        <AppHeader screenTitle="Home" />

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

          <Carousel snapToInterval={width - (80 - AppLayout.baseMargin)}>
            <TouchableOpacity onPress={this.navigationHandler}>
              <Card wrapperStyle={{...styles.carouselItem }}>
                <View style={{position: 'absolute', height: 250, width: 250, overflow: 'hidden', top: -76, left: -90}}>
                  <Image 
                    style={{flex: 1, width: undefined, height: undefined}}
                    source={require('../assets/images/drivers/vettel/helmet.png')}
                    resizeMode='contain'
                  />
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                  <View style={{marginBottom: 15}}>
                    <DisplayBold style={{fontSize: 26,marginTop: 10, marginRight: 14}}>1</DisplayBold>
                  </View>
                  <View>
                    <DisplayBold style={{marginBottom: 2, fontSize: 12}}>Sebastian</DisplayBold>
                    <DisplayBold style={{textTransform: 'uppercase', fontSize: 16}}>vettel</DisplayBold>
                    <DisplayText style={{marginTop: 8, fontSize: 12, textTransform: 'uppercase', color: AppColors.strongRed}}>401 Points</DisplayText>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigationHandler}>
              <Card wrapperStyle={{...styles.carouselItem }}>
                <View style={{position: 'absolute', height: 250, width: 250, overflow: 'hidden', top: -76, left: -90}}>
                  <Image 
                    style={{flex: 1, width: undefined, height: undefined}}
                    source={require('../assets/images/drivers/hamilton/helmet.png')}
                    resizeMode='contain'
                  />
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                  <View style={{marginBottom: 15}}>
                    <DisplayBold style={{fontSize: 26,marginTop: 10, marginRight: 14}}>2</DisplayBold>
                  </View>
                  <View style={{}}>
                    <DisplayBold style={{marginBottom: 2, fontSize: 12}}>Lewis</DisplayBold>
                    <DisplayBold style={{textTransform: 'uppercase', fontSize: 16}}>hamilton</DisplayBold>
                    <DisplayText style={{marginTop: 8, fontSize: 12, textTransform: 'uppercase', color: AppColors.strongRed}}>401 Points</DisplayText>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigationHandler}>
              <Card wrapperStyle={{...styles.carouselItem }}>
                <View style={{position: 'absolute', height: 250, width: 250, overflow: 'hidden', top: -76, left: -90}}>
                  <Image 
                    style={{flex: 1, width: undefined, height: undefined}}
                    source={require('../assets/images/drivers/bottas/helmet.png')}
                    resizeMode='contain'
                  />
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                  <View style={{marginBottom: 15}}> 
                    <DisplayBold style={{fontSize: 26,marginTop: 10, marginRight: 14}}>3</DisplayBold>
                  </View>
                  <View style={{}}>
                    <DisplayBold style={{marginBottom: 2, fontSize: 12}}>Valtteri</DisplayBold>
                    <DisplayBold style={{textTransform: 'uppercase', fontSize: 16}}>bottas</DisplayBold>
                    <DisplayText style={{marginTop: 8, fontSize: 12, textTransform: 'uppercase', color: AppColors.strongRed}}>401 Points</DisplayText>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigationHandler}>
              <Card wrapperStyle={{...styles.carouselItem }}>
                <View style={{position: 'absolute', height: 250, width: 250, overflow: 'hidden', top: -76, left: -90}}>
                  <Image 
                    style={{flex: 1, width: undefined, height: undefined}}
                    source={require('../assets/images/drivers/leclerc/helmet.png')}
                    resizeMode='contain'
                  />
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                  <View style={{marginBottom: 15}}>
                    <DisplayBold style={{fontSize: 26,marginTop: 10, marginRight: 14}}>4</DisplayBold>
                  </View>
                  <View style={{}}>
                    <DisplayBold style={{marginBottom: 2, fontSize: 12}}>Charles</DisplayBold>
                    <DisplayBold style={{textTransform: 'uppercase', fontSize: 16}}>leclerc</DisplayBold>
                    <DisplayText style={{marginTop: 8, fontSize: 12, textTransform: 'uppercase', color: AppColors.strongRed}}>401 Points</DisplayText>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          </Carousel>

          <CardTouchable 
            iconName="md-calendar" 
            iconSize={22}
            iconColor={AppColors.strongRed}
            routeName="Schedule"
            cardTitle="Schedule"
            cardDescription="Don't miss any event!"
            onPress={this.navigationHandler}
          />

          <CardTouchable 
            iconName="md-trophy" 
            iconSize={22}
            iconColor={AppColors.strongRed}
            routeName="Liderboards"
            cardTitle="Standings"
            cardDescription="Check out current liderboard status!"
            onPress={this.navigationHandler}
          />

          <Carousel snapToInterval={width - (80 - AppLayout.baseMargin)}>
            <Card wrapperStyle={styles.carouselItem}>
              <View style={{position: 'absolute', height: 200, overflow: 'hidden', bottom: -20, left: -88}}>
                <Image 
                  style={{width: 300, height: undefined, aspectRatio: 1}}
                  source={require('../assets/images/cars/ferrari.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase'}}>1 Ferrari</DisplayBold>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.strongRed}}>401 Points</DisplayText>
              </View>
            </Card>
            <Card wrapperStyle={styles.carouselItem}>
              <View style={{position: 'absolute', height: 200, overflow: 'hidden', bottom: -20, left: -88}}>
                <Image 
                  style={{width: 300, height: undefined, aspectRatio: 1}}
                  source={require('../assets/images/cars/mercedes.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase'}}>2 Mercedes</DisplayBold>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.strongRed}}>391 Points</DisplayText>
              </View>
            </Card>
            <Card wrapperStyle={styles.carouselItem}>
              <View style={{position: 'absolute', height: 200, overflow: 'hidden', bottom: -20, left: -88}}>
                <Image 
                  style={{width: 300, height: undefined, aspectRatio: 1}}
                  source={require('../assets/images/cars/alfaromeo.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase'}}>3 Alfa Romeo</DisplayBold>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.strongRed}}>354 Points</DisplayText>
              </View>
            </Card>
            <Card wrapperStyle={styles.carouselItem}>
              <View style={{position: 'absolute', height: 200, overflow: 'hidden', bottom: -20, left: -88}}>
                <Image 
                  style={{width: 300, height: undefined, aspectRatio: 1}}
                  source={require('../assets/images/cars/redbull.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase'}}>4 Red Bull</DisplayBold>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.strongRed}}>326 Points</DisplayText>
              </View>
            </Card>
            <Card wrapperStyle={styles.carouselItem}>
              <View style={{position: 'absolute', height: 200, overflow: 'hidden', bottom: -20, left: -88}}>
                <Image 
                  style={{width: 300, height: undefined, aspectRatio: 1}}
                  source={require('../assets/images/cars/mclaren.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase'}}>5 McLaren</DisplayBold>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.strongRed}}>289 Points</DisplayText>
              </View>
            </Card>
          </Carousel>

          <CardTouchable 
            iconName="ios-stats" 
            iconSize={22}
            iconColor={AppColors.strongRed}
            routeName="Results"
            cardTitle="Results"
            cardDescription="Check last race results!"
            onPress={this.navigationHandler}
          />

          <CardTouchable 
            iconName="ios-paper" 
            iconSize={22}
            iconColor={AppColors.strongRed}
            routeName="News"
            cardTitle="News"
            cardDescription="Check out latest news!"
            onPress={this.navigationHandler}
          />

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
    marginHorizontal: AppLayout.baseMargin
  },

  carouselContainer: {
    flex: 1,
  },
  carouselInnerContainer: {
    marginHorizontal: AppLayout.baseMargin/2, 
    paddingRight: AppLayout.baseMargin
  },
  carouselItem: {
    width: width - 80,
    marginHorizontal: AppLayout.baseMargin/2,
    height: 120
  },
  driverCard: {
    height: 188
  }
})


/**
 * Exports
 */

export default Home
