import React from 'react'
import { 
  ScrollView, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions,
  Animated
} from 'react-native'

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

const FLAG_GRADIENT = {
  'spa': ['#000000', '#fae042'],
  'monza': ['#409247', '#ce2a37'],
  'marina_bay': ['#ed2939', '#ffffff'],
  'sochi': ['#ffffff', '#0239a6'],
  'suzuka': ['#ffffff', '#bd172c'],
  'hungaroring': ['#ce1926', '#3a8751'],
  'hockenheimring': ['#000000', '#dd1b00'],
  'silverstone': ['#00247b', '#d01a2c'],
  'red_bull_ring': ['#ed2939', '#ffffff'],
  'ricard': ['#002294', '#ffffff'],
  'villeneuve': ['#ee1e03', '#ffffff'],
  'monaco': ['#ce1926', '#ffffff'],
  'catalunya': ['#c5171e', '#fbc400'],
  'BAK': ['#3199c4', '#4dae64'],
  'shanghai': ['#df2911', '#fdd42f'],
  'bahrain': ['#ce1926', '#ffffff'],
  'albert_park': ['#05178c', '#fdfeff'],
  'rodriguez': ['#2a6848', '#ce1926'],
  'americas': ['#85323e', '#fdf4fa'],
  'interlagos': ['#469b38', '#ebe731'],
  'yas_marina': ['#469e4a', '#000000']
}


/**
 * <Schedule />
 */

class Schedule extends React.Component {

  state = {
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
      })

      this.setState({ races: chunkedResponse })

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

  onRacePressHandler(circuitId, circuitName) {
    this.props.navigation.navigate('Circuit', {
      circuitId,
      circuitName
    })
  }

  renderRacesList() {
    return this.state.races.map((singleChunk, index) => {
      const firstCircuitId = singleChunk[0].Circuit.circuitId
      const firstRaceName = singleChunk[0].raceName
      const secondCircuitId = singleChunk[1] && singleChunk[1].Circuit.circuitId
      const secondRaceName = singleChunk[1] && singleChunk[1].raceName

      return (
        <View 
          key={index}
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <TouchableOpacity
            onPress={this.onRacePressHandler.bind(this, firstCircuitId, firstRaceName)}
          >
            <Card 
              wrapperStyle={styles.gridItem}
              gradientColors={FLAG_GRADIENT[firstCircuitId]}
            >
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <View>
                  <DisplayBold style={{...styles.eventTitle, ...styles.textHighlight}}>{singleChunk[0].raceName}</DisplayBold>
                </View>
                <DisplayText style={{...styles.eventDate, ...styles.textHighlight}}>{singleChunk[0].date}</DisplayText>
              </View>
            </Card>
          </TouchableOpacity>
          
          {singleChunk[1] && 
            <TouchableOpacity
              onPress={this.onRacePressHandler.bind(this, secondCircuitId, secondRaceName)}
            >
              <Card 
                wrapperStyle={styles.gridItem}
                gradientColors={FLAG_GRADIENT[secondCircuitId]}
              >
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <View>
                    <DisplayBold style={{...styles.eventTitle, ...styles.textHighlight}}>{singleChunk[1].raceName}</DisplayBold>
                  </View>
                  <DisplayText style={{...styles.eventDate, ...styles.textHighlight}}>{singleChunk[1].date}</DisplayText>
                </View>
              </Card> 
            </TouchableOpacity>
          } 
        </View>
      )
    })
  }

  render() {
    return (
      <View style={styles.screen}>
        <AppHeader screenTitle="Schedule" />

        {this.state.races.length > 0 && 
        <ScrollView style={styles.mainContent} >
          <View style={styles.nextRaces}>
            <View style={{ ...styles.sectionTitle, marginHorizontal: AppLayout.screenMargin }}>
              <DisplayBold style={{fontSize: 16}}>2019 Up coming races</DisplayBold>
              <DisplayText style={{marginTop: 4, fontSize: 12}}>Don't miss any rasce. Stay up to date</DisplayText>
            </View>
            <Carousel snapToInterval={width/2 - (30 - AppLayout.screenMargin)}>
              <Card 
                gradientColors={FLAG_GRADIENT.rodriguez} 
                wrapperStyle={styles.carouselItem}
              >
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <View>
                    <DisplayBold style={{...styles.eventTitle, ...styles.textHighlight}}>Mexico grand prix 2019</DisplayBold>
                  </View>
                  <DisplayText style={{...styles.eventDate, ...styles.textHighlight}}>25 - 27 OCT</DisplayText>
                </View>
              </Card>
              <Card 
                gradientColors={FLAG_GRADIENT.americas}
                wrapperStyle={styles.carouselItem}
              >
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <View>
                    <DisplayBold style={{...styles.eventTitle, ...styles.textHighlight}}>USA grand prix 2019</DisplayBold>
                  </View>
                  <DisplayText style={{...styles.eventDate, ...styles.textHighlight}}>25 - 27 OCT</DisplayText>
                </View>
              </Card>
              <Card 
                gradientColors={FLAG_GRADIENT.interlagos}
                wrapperStyle={styles.carouselItem}
              >
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <View><DisplayBold style={{...styles.eventTitle, ...styles.textHighlight}}>Brazil grand prix 2019</DisplayBold></View>
                  </View>
                  <DisplayText style={{...styles.eventDate, ...styles.textHighlight}}>25 - 27 OCT</DisplayText>
                </View>
              </Card>
              <Card 
                gradientColors={FLAG_GRADIENT.yas_marina}
                wrapperStyle={styles.carouselItem}
              >
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <View><DisplayBold style={{...styles.eventTitle, ...styles.textHighlight}}>Abu Dabhi grand prix 2019</DisplayBold></View>
                  </View>
                  <DisplayText style={{...styles.eventDate, ...styles.textHighlight}}>25 - 27 OCT</DisplayText>
                </View>
              </Card>
            </Carousel>
          </View>
          
          <View style={styles.schedule}>
            <View style={styles.sectionTitle}>
              <DisplayBold style={{fontSize: 16}}>2019 Reaces Schedule</DisplayBold>
              <DisplayText style={{marginTop: 4, fontSize: 12}}>Check out season races schedule</DisplayText>
            </View>
            {this.renderRacesList()}
          </View>
        </ScrollView>
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
    marginTop: 20,
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
    elevation: 3
  },
  schedule: {
    flex: 1,
    marginTop: 30,
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
  textHighlight: {
    textShadowColor: AppColors.tabNavActiveItem, 
    textShadowOffset: {
      width: 1, 
      height: 1
    }, 
    textShadowRadius: 3
  },
  gridItem: {
    width: width/2 - AppLayout.screenMargin - AppLayout.screenMargin/2,
    maxWidth: width/2 - AppLayout.screenMargin - AppLayout.screenMargin/2,
    marginTop: AppLayout.screenMargin,
    height: 200,
    backgroundColor: AppColors.tabNavActiveItem
  }
})


/**
 * Exports
 */

export default Schedule
