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

    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler(e, id) {
    console.log(e)
    console.log("KLIKNUTOOO!")
    console.log(id)
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

          <Carousel snapToInterval={width - (80 - AppLayout.screenMargin)}>
            <TouchableOpacity onPress={this.onClickHandler}>
              <Card wrapperStyle={{...styles.carouselItem, ...styles.driverCard }}>
                <View style={{position: 'absolute', height: 300, width: 300, overflow: 'hidden', top: -120, left: -100}}>
                  <Image 
                    style={{flex: 1, width: undefined, height: undefined}}
                    source={require('../assets/images/drivers/vettel/helmet.png')}
                    resizeMode='contain'
                  />
                </View>
                <View style={{position: 'absolute', width: 46, height: 46, borderRadius: 46, backgroundColor: AppColors.white, justifyContent: 'center', alignItems: 'center', right: 18, top: 18}}>
                  <DisplayBold style={{fontSize: 22, color: AppColors.redCandy}}>1</DisplayBold>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <View><DisplayBold style={{marginRight: 6}}>Sebastian</DisplayBold></View>
                    <View><DisplayBold style={{textTransform: 'uppercase'}}>vettel</DisplayBold></View>
                  </View>
                  <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.redCandy}}>401 Points</DisplayText>
                </View>
              </Card>
            </TouchableOpacity>
            <Card wrapperStyle={{...styles.carouselItem, ...styles.driverCard }}>
              <View style={{position: 'absolute', height: 300, width: 300, overflow: 'hidden', top: -120, left: -100}}>
                <Image 
                  style={{flex: 1, width: undefined, height: undefined}}
                  source={require('../assets/images/drivers/hamilton/helmet.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{position: 'absolute', width: 46, height: 46, borderRadius: 46, backgroundColor: AppColors.white, justifyContent: 'center', alignItems: 'center', right: 18, top: 18}}>
                <DisplayBold style={{fontSize: 22, color: AppColors.redCandy}}>2</DisplayBold>
              </View>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <View><DisplayBold style={{marginRight: 6}}>Lewis</DisplayBold></View>
                  <View><DisplayBold style={{textTransform: 'uppercase'}}>Hamilton</DisplayBold></View>
                </View>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.redCandy}}>401 Points</DisplayText>
              </View>
            </Card>
            <Card wrapperStyle={{...styles.carouselItem, ...styles.driverCard }}>
              <View style={{position: 'absolute', height: 300, width: 300, overflow: 'hidden', top: -120, left: -100}}>
                <Image 
                  style={{flex: 1, width: undefined, height: undefined}}
                  source={require('../assets/images/drivers/bottas/helmet.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{position: 'absolute', width: 46, height: 46, borderRadius: 46, backgroundColor: AppColors.white, justifyContent: 'center', alignItems: 'center', right: 18, top: 18}}>
                <DisplayBold style={{fontSize: 22, color: AppColors.redCandy}}>3</DisplayBold>
              </View>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <View><DisplayBold style={{marginRight: 6}}>Valtteri</DisplayBold></View>
                  <View><DisplayBold style={{textTransform: 'uppercase'}}>Bottas</DisplayBold></View>
                </View>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.redCandy}}>401 Points</DisplayText>
              </View>
            </Card>
            <Card wrapperStyle={{...styles.carouselItem, ...styles.driverCard }}>
              <View style={{position: 'absolute', height: 300, width: 300, overflow: 'hidden', top: -120, left: -100}}>
                <Image 
                  style={{flex: 1, width: undefined, height: undefined}}
                  source={require('../assets/images/drivers/leclerc/helmet.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{position: 'absolute', width: 46, height: 46, borderRadius: 46, backgroundColor: AppColors.white, justifyContent: 'center', alignItems: 'center', right: 18, top: 18}}>
                <DisplayBold style={{fontSize: 22, color: AppColors.redCandy}}>4</DisplayBold>
              </View>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <View><DisplayBold style={{marginRight: 6}}>Charles</DisplayBold></View>
                  <View><DisplayBold style={{textTransform: 'uppercase'}}>Leclerc</DisplayBold></View>
                </View>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.redCandy}}>401 Points</DisplayText>
              </View>
            </Card>
            <Card wrapperStyle={{...styles.carouselItem, ...styles.driverCard }}>
              <View style={{position: 'absolute', height: 300, width: 300, overflow: 'hidden', top: -120, left: -100}}>
                <Image 
                  style={{flex: 1, width: undefined, height: undefined}}
                  source={require('../assets/images/drivers/verstappen/helmet.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{position: 'absolute', width: 46, height: 46, borderRadius: 46, backgroundColor: AppColors.white, justifyContent: 'center', alignItems: 'center', right: 18, top: 18}}>
                <DisplayBold style={{fontSize: 22, color: AppColors.redCandy}}>5</DisplayBold>
              </View>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <View><DisplayBold style={{marginRight: 6}}>Max</DisplayBold></View>
                  <View><DisplayBold style={{textTransform: 'uppercase'}}>Verstappen</DisplayBold></View>
                </View>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.redCandy}}>401 Points</DisplayText>
              </View>
            </Card>
          </Carousel>

          <CardTouchable 
            iconName="md-calendar" 
            iconSize={22}
            iconColor={AppColors.redCandy}
            cardTitle="Schedule"
            cardDescription="Don't miss any event!"
            onPress={this.onClickHandler}
          />

          <CardTouchable 
            iconName="md-trophy" 
            iconSize={22}
            iconColor={AppColors.redCandy}
            cardTitle="Standings"
            cardDescription="Check out current liderboard status!"
          />

          <CardTouchable 
            iconName="ios-stats" 
            iconSize={22}
            iconColor={AppColors.redCandy}
            cardTitle="Results"
            cardDescription="Check last race results!"
          />

          <Carousel snapToInterval={width - (80 - AppLayout.screenMargin)}>
            <Card wrapperStyle={styles.carouselItem}>
              <View style={{position: 'absolute', height: 200, overflow: 'hidden', bottom: -20, left: -88}}>
                <Image 
                  style={{width: 300, height: undefined, aspectRatio: 1}}
                  source={require('../assets/images/cars/ferrari.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase', color: AppColors.ferrari}}>1 Ferrari</DisplayBold>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.redCandy}}>401 Points</DisplayText>
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
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase', color: AppColors.mercedes}}>2 Mercedes</DisplayBold>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.redCandy}}>391 Points</DisplayText>
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
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase', color: AppColors.alfaRomeo}}>3 Alfa Romeo</DisplayBold>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.redCandy}}>354 Points</DisplayText>
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
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase', color: AppColors.redBull}}>4 Red Bull</DisplayBold>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.redCandy}}>326 Points</DisplayText>
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
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase', color: AppColors.mcLaren}}>5 McLaren</DisplayBold>
                <DisplayText style={{marginTop: 6, fontSize: 12, textTransform: 'uppercase', color: AppColors.redCandy}}>289 Points</DisplayText>
              </View>
            </Card>
          </Carousel>

          <CardTouchable 
            iconName="ios-flask" 
            iconSize={22}
            iconColor={AppColors.redCandy}
            cardTitle="Technology"
            cardDescription="Formula 1 technology improvements!"
          />

          <CardTouchable 
            iconName="ios-paper" 
            iconSize={22}
            iconColor={AppColors.redCandy}
            cardTitle="News"
            cardDescription="Check out latest news!"
          />

          <CardTouchable 
            style={{marginBottom: AppLayout.screenMargin}}
            iconName="md-information-circle" 
            iconSize={22}
            iconColor={AppColors.redCandy}
            cardTitle="Formula 1"
            cardDescription="Learn more about Formula 1!"
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
  },
  driverCard: {
    height: 188
  }
})


/**
 * Exports
 */

export default Home
