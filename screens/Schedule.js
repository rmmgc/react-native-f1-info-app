import React from 'react'
import { 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions,
  Animated
} from 'react-native'
import dayjs from 'dayjs'

/**
 * Custom components
 */

import AppHeader from '../components/AppHeader'
import { DisplayBold, DisplayText } from '../components/AppText'
import Card from '../components/Card'
import Carousel from '../components/Carousel'


/**
 * Constants
 */

import { AppLayout, AppColors } from '../constants'


/**
 * <Schedule />
 */

class Schedule extends React.Component {

  state = {
    nextRaces: [],
    races: []
  }

  /* Animated value for screen animation */
  screenAnimatedValue = new Animated.Value(0)


  componentDidMount() {
    const { screenProps } = this.props

    let chunkedData = []
    let singleChunk = []
    let scheduledRaces = []

    /* Manipulate data source */
    screenProps.seasonRaces.forEach((race, index) => {
      if(singleChunk.length < 2)
        singleChunk.push(race)
      else {
        chunkedData.push(singleChunk)
        singleChunk = []
        singleChunk.push(race)

        if(screenProps.seasonRaces.length - 1 === index)
          chunkedData.push(singleChunk)
      }

      /* Check if there is next scheduled races */
      if(dayjs(race.date).isAfter(dayjs()))
        scheduledRaces.push(race)
    })

    this.setState({ 
      races: chunkedData,
      nextRaces: scheduledRaces
    })

    /* Start animation when Component is mounted */
    Animated.timing(this.screenAnimatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start()
  }


  /**
   * Event Handlers
   */

  onRacePressHandler(circuitData, raceName) {
    this.props.navigation.navigate('Race', {
      circuitData,
      raceName
    })
  }


  /**
   * Render Functions
   */

  /* Render single race */ 
  renderRacesListItem(race, carousel = false) {
    if(!race) 
      return
    
    const circuitData = race.Circuit
    const raceName = race.raceName
    const eventStartDay = dayjs(race.date).subtract(2, 'days').format('DD')
    const eventEndDay = dayjs(race.date).format('DD')
    const eventMonth = dayjs(race.date).format('MMM').toUpperCase()

    const cardStyle = carousel 
                      ? styles.carouselItem 
                      : styles.gridItem
    const gradient =  carousel 
                      ? [AppColors.darkBlue, AppColors.strongRed]  
                      : [AppColors.grayBlue, AppColors.strongRed]

    return (
      <TouchableOpacity
        key={circuitData.circuitId}
        onPress={this.onRacePressHandler.bind(this, circuitData, raceName)}
      >
        <Card 
          wrapperStyle={cardStyle}
          gradientColors={gradient}
        >
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View>
              <DisplayBold style={styles.eventTitle}>{raceName}</DisplayBold>
            </View>
            <DisplayText style={styles.eventDate}>
              {`${eventStartDay} - ${eventEndDay} ${eventMonth}`}
            </DisplayText>
          </View>
        </Card>
      </TouchableOpacity>
    )
  }

  /* Render next scheduled races */ 
  renderNextRacesList() {
    return this.state.nextRaces.map(race => {
      return this.renderRacesListItem(race, true)
    })
  }

  /* Render season race list */ 
  renderRacesList() {
    return this.state.races.map((singleChunk, index) => {
      let marginValue = index > 0 ? AppLayout.baseMargin : 0

      return (
        <View 
          key={index}
          style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: marginValue}}
        >
          {singleChunk.map(race => {
            return this.renderRacesListItem(race)
          })}
        </View>
      )
    })
  }

  render() {
    return (
      <View style={styles.screen}>
        <AppHeader screenTitle="Schedule" />

        {this.state.races.length > 0 &&
          <Animated.ScrollView 
            style={{
              opacity: this.screenAnimatedValue,
              transform: [
                {perspective: 1000},
                {translateY: this.screenAnimatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [30, 0]
                })}
              ]
            }} 
          >          
            {this.state.nextRaces.length > 0 && 
              <View style={{...styles.viewSection, paddingTop: 0}}>
                <View style={{marginHorizontal: AppLayout.baseMargin}}>
                  <DisplayBold>2019 Up coming races</DisplayBold>
                  <DisplayText style={styles.sectionCaptionText}>
                    Don't miss any rasce. Stay up to date
                  </DisplayText>
                </View>
                <Carousel 
                  style={{marginTop: AppLayout.baseMargin}}
                  snapToInterval={AppLayout.deviceWidth/2 - (30 - AppLayout.baseMargin)}
                >
                  {this.renderNextRacesList()}
                </Carousel>
              </View>
            }

            <View style={{ ...styles.viewSection, ...styles.schedule }}>
              <View>
                <DisplayBold>2019 Reaces Schedule</DisplayBold>
                <DisplayText style={styles.sectionCaptionText}>
                  Check out season races schedule
                </DisplayText>
              </View>
              <View style={{marginVertical: AppLayout.baseMargin}}>
                {this.renderRacesList()}
              </View>
            </View>
          </Animated.ScrollView>
        }
      </View>
    )
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.backgroundMain
  },
  viewSection: {
    marginTop: AppLayout.baseMargin * 2,
    paddingTop: AppLayout.basePadding * 2
  },
  sectionCaptionText: {
    marginTop: 4, 
    fontSize: 12, 
    color: AppColors.textCaption
  },
  carouselItem: {
    width: AppLayout.deviceWidth/2 - 30,
    marginHorizontal: AppLayout.baseMargin/2,
    height: 200,
  },
  schedule: {
    flex: 1,
    backgroundColor: AppColors.backgroundLight,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: AppLayout.baseMargin
  },
  eventTitle: {
    textTransform: 'uppercase', 
    lineHeight: 18,
  },
  eventDate: {
    marginTop: 6, 
    fontSize: 12, 
    textTransform: 'uppercase'
  },
  gridItem: {
    width: AppLayout.deviceWidth/2 - AppLayout.baseMargin - AppLayout.baseMargin/2,
    maxWidth: AppLayout.deviceWidth/2 - AppLayout.baseMargin - AppLayout.baseMargin/2,
    height: 200  
  }
})


/**
 * Exports
 */

export default Schedule
