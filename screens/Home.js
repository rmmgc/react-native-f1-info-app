import React from 'react'
import { 
  ScrollView, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Image
} from 'react-native'
import dayjs from 'dayjs'


/**
 * Custom Components
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
import { driverHelmetImage, constructorCarImage } from '../utils/imagesCollection'


/**
 * <Home />
 */

class Home extends React.Component {

  constructor(props) {
    super(props)

    this.navigationHandler = this.navigationHandler.bind(this)
  }

  /* Drivers and constructors data */
  driverStandings = this.props.screenProps.driverStandings
  constructorStandings = this.props.screenProps.constructorStandings


  /**
   * Event Handlers
   */

  navigationHandler(routeName) {
    this.props.navigation.navigate(routeName)
  }

  onDriverPressHandler(driverData) {
    this.props.navigation.navigate('Driver', {driverData})
  }

  onConstructorPressHandler(constructorData) {
    this.props.navigation.navigate('Team', {constructorData})
  }


  /**
   * Render Functions
   */

  renderCountdownTimer() {
    const { screenProps } = this.props

    let endDate = null
    let badgeData = null
    let raceName = ''

    screenProps.seasonRaces.some(race => {
      var raceDate = dayjs(`${race.date}T${race.time}`)
      if(raceDate.isAfter(dayjs())) {
        raceName = race.raceName
        endDate = raceDate
        badgeData = raceDate.format('DD.MM')

        return true
      }
    })
    
    return (
      <TouchableOpacity style={{margin: AppLayout.baseMargin}}>
        <Card 
          title={raceName}
          contentStyle={{flexDirection: 'row', alignItems: 'center'}}
        >
          <Countdown endDate={endDate} />
          <Badge data={badgeData} />
        </Card>
      </TouchableOpacity>
    )
  }

  renderDrivers() {
    return this.driverStandings.map((driverData, index) => {
      /* Render first 5 items */
      if(index < 5) {
        return (
          <TouchableOpacity 
            key={driverData.Driver.driverId}
            onPress={this.onDriverPressHandler.bind(this, driverData)}
          >
            <Card wrapperStyle={styles.carouselItem}>
              <View style={styles.driverHelmet}>
                <Image 
                  style={{flex: 1, width: undefined, height: undefined}}
                  source={driverHelmetImage[driverData.Driver.driverId]}
                  resizeMode='contain'
                />
              </View>
              <View style={styles.driverInfo}>
                <View style={{marginBottom: 15}}>
                  <DisplayBold style={styles.driverRank}>
                    {driverData.position}
                  </DisplayBold>
                </View>
                <View>
                  <DisplayBold style={{marginBottom: 2, fontSize: 12}}>
                    {driverData.Driver.givenName}
                  </DisplayBold>
                  <DisplayBold style={{textTransform: 'uppercase', fontSize: 16}}>
                    {driverData.Driver.familyName}
                  </DisplayBold>
                  <DisplayText style={styles.points}>
                    {driverData.points} Points
                  </DisplayText>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        )
      }
    })
  }

  renderConstructors() {
    return this.constructorStandings.map((constructorData, index) => {
      /* Render first 5 items */
      if(index < 5) {
        return (
          <TouchableOpacity 
            key={constructorData.Constructor.constructorId}
            onPress={this.onConstructorPressHandler.bind(this, constructorData)}
          >
            <Card wrapperStyle={styles.carouselItem}>
              <View style={styles.carImage}>
                <Image 
                  style={{width: 300, height: undefined, aspectRatio: 1}}
                  source={constructorCarImage[constructorData.Constructor.constructorId]}
                  resizeMode='contain'
                />
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase'}}>
                  {constructorData.position} {constructorData.Constructor.name}
                </DisplayBold>
                <DisplayText style={styles.points}>
                  {constructorData.points} Points
                </DisplayText>
              </View>
            </Card>
          </TouchableOpacity>
        )
      }
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <AppHeader screenTitle="Home" />

        <ScrollView>
          {this.renderCountdownTimer()}

          <Carousel snapToInterval={AppLayout.deviceWidth - (80 - AppLayout.baseMargin)}>
            {this.renderDrivers()}
          </Carousel>

          <View style={{margin: AppLayout.baseMargin}}>
            <CardTouchable 
              style={{marginBottom: AppLayout.baseMargin}}
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
          </View>

          <Carousel snapToInterval={AppLayout.deviceWidth - (80 - AppLayout.baseMargin)}>
            {this.renderConstructors()}
          </Carousel>

          <View style={{margin: AppLayout.baseMargin}}>

            <CardTouchable 
              iconName="ios-paper" 
              iconSize={22}
              iconColor={AppColors.strongRed}
              routeName="News"
              cardTitle="News"
              cardDescription="Check out latest news!"
              onPress={this.navigationHandler}
            />
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
  carouselItem: {
    width: AppLayout.deviceWidth - 80,
    marginHorizontal: AppLayout.baseMargin/2,
    height: 120
  },
  driverHelmet: {
    position: 'absolute',
    height: 250, 
    width: 250, 
    overflow: 'hidden',
    top: -76, 
    left: -90
  },
  driverInfo: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    alignItems: 'center'
  },
  driverRank: {
    fontSize: 26, 
    marginTop: 10, 
    marginRight: 14
  },
  points: {
    marginTop: 8, 
    fontSize: 12, 
    textTransform: 'uppercase', 
    color: AppColors.strongRed
  },
  carImage: {
    position: 'absolute', 
    height: 200, 
    overflow: 'hidden', 
    bottom: -20, 
    left: -88
  }
})


/**
 * Exports
 */

export default Home
