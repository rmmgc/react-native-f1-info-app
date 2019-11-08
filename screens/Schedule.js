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

import AppActivityIndicator from '../components/AppActivityIndicator'
import AppHeader from '../components/AppHeader'
import { DisplayBold, DisplayText } from '../components/AppText'
import Card from '../components/Card'
import Carousel from '../components/Carousel'


/**
 * Constants
 */

import { AppLayout, AppColors } from '../constants'

const { width } = Dimensions.get('window')

/**
 * <Schedule />
 */

class Schedule extends React.Component {

  state = {
    nextRaces: [],
    races: [],
    isAnimationOver: false,
    fadeOut: new Animated.Value(1),
    fadeIn: new Animated.Value(0)
  }

  async componentDidMount() {
    try {
      let response = await fetch('https://ergast.com/api/f1/current.json')
      response = await response.json()

      // Extract data from response
      response = response.MRData.RaceTable.Races

      let chunkedResponse = []
      let scheduledRaces = []
      let singleChunk = []
      response.forEach((race, index) => {
        if(singleChunk.length < 2)
          singleChunk.push(race)
        else {
          chunkedResponse.push(singleChunk)
          singleChunk = []
          singleChunk.push(race)

          if(response.length - 1 === index)
            chunkedResponse.push(singleChunk)
        }

        if(dayjs(race.date).isAfter(dayjs()))
          scheduledRaces.push(race)
      })

      this.setState({ races: chunkedResponse })
      this.setState({ nextRaces: scheduledRaces })

      Animated.parallel([
        Animated.timing(this.state.fadeOut, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
          }
        ),
        Animated.timing(this.state.fadeIn, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true
          }
        ),
      ]).start(() => {
        this.setState({ isAnimationOver: true })
      })
    } 
    catch (error) {
      console.error(error);
    }
  }

  onRacePressHandler(circuitData, raceName) {
    this.props.navigation.navigate('Race', {
      circuitData,
      raceName
    })
  }

  renderRacesListItem(race, carousel = false) {
    if(!race)
      return
    
    const circuitData   = race.Circuit
    const raceName      = race.raceName
    const eventStartDay = dayjs(race.date).subtract(2, 'days').format('DD')
    const eventEndDay   = dayjs(race.date).format('DD')
    const eventMonth    = dayjs(race.date).format('MMM').toUpperCase()
    const cardStyle     = carousel 
                          ? styles.carouselItem 
                          : styles.gridItem
    const gradient      = carousel 
                          ? [AppColors.gunmetal, AppColors.redCandy]  
                          : [AppColors.grayBlue, AppColors.redCandy]

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

  renderNextRacesList() {
    return this.state.nextRaces.map(race => {
      return this.renderRacesListItem(race, true)
    })
  }

  renderRacesList() {
    return this.state.races.map((singleChunk, index) => {
      return (
        <View 
          key={index}
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
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

        {!this.state.isAnimationOver && <AppActivityIndicator style={{top: 80}} fadeOut={this.state.fadeOut} />}

        {this.state.races.length > 0 &&
          <Animated.ScrollView style={{...styles.mainContent, opacity: this.state.fadeIn}} >          
            {this.state.nextRaces.length > 0 && 
              <View style={{ ...styles.nextRaces }}>
                <View style={{ ...styles.sectionTitle, marginHorizontal: AppLayout.screenMargin }}>
                  <DisplayBold>2019 Up coming races</DisplayBold>
                  <DisplayText style={{marginTop: 4, fontSize: 12, color: '#87939c'}}>Don't miss any rasce. Stay up to date</DisplayText>
                </View>
                <Carousel snapToInterval={width/2 - (30 - AppLayout.screenMargin)}>
                {this.renderNextRacesList()}
                </Carousel>
              </View>
            }

            <View style={{ ...styles.schedule }}>
              <View style={styles.sectionTitle}>
                <DisplayBold>2019 Reaces Schedule</DisplayBold>
                <DisplayText style={{marginTop: 4, fontSize: 12, color: '#87939c'}}>Check out season races schedule</DisplayText>
              </View>
              {this.renderRacesList()}
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
    backgroundColor: AppColors.gunmetal
  },
  mainContent: {
    flex: 1
  },
  baseMargin: {
    flex: 1,
    marginHorizontal: AppLayout.screenMargin
  },
  sectionTitle: {
    marginTop: 26,
    marginBottom: 6
  },
  carouselContainer: {
    flex: 1,
  },
  carouselInnerContainer: {
    marginHorizontal: AppLayout.screenMargin/2, 
    paddingRight: AppLayout.screenMargin
  },
  carouselItem: {
    width: width/2 - 30,
    marginHorizontal: AppLayout.screenMargin/2,
    height: 200,
  },
  schedule: {
    flex: 1,
    marginTop: 32,
    backgroundColor: AppColors.grayBlue,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: AppLayout.screenMargin
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
    width: width/2 - AppLayout.screenMargin - AppLayout.screenMargin/2,
    maxWidth: width/2 - AppLayout.screenMargin - AppLayout.screenMargin/2,
    marginTop: AppLayout.screenMargin,
    height: 200  
  }
})


/**
 * Exports
 */

export default Schedule
