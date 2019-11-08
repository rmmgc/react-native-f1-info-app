import React from 'react'
import { ScrollView, View, StyleSheet, Dimensions, Image } from 'react-native'

import { DisplayBold, DisplayText } from '../components/AppText'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

import { AppLayout, AppColors } from '../constants'
import { trackLayoutImage } from '../utils/imagesCollection'

const { width } = Dimensions.get('window')

const MOCK_DATA = [
  {
    name: "Free Practice 1",
    date: {
      day: '15',
      month: 'March',
    },
    time: {
      hours: {
        value: '11',
        unit: 'hours'
      },
      minutes: {
        value: '00',
        unit: 'minutes'
      }
    }
  },
  {
    name: "Free Practice 2",
    date: {
      day: '15',
      month: 'March',
    },
    time: {
      hours: {
        value: '16',
        unit: 'hours'
      },
      minutes: {
        value: '00',
        unit: 'minutes'
      }
    }
  },
  {
    name: "Free Practice 3",
    date: {
      day: '16',
      month: 'March',
    },
    time: {
      hours: {
        value: '12',
        unit: 'hours'
      },
      minutes: {
        value: '00',
        unit: 'minutes'
      }
    }
  },
  {
    name: "Qualifying session",
    date: {
      day: '15',
      month: 'March',
    },
    time: {
      hours: {
        value: '15',
        unit: 'hours'
      },
      minutes: {
        value: '00',
        unit: 'minutes'
      }
    }
  },
  {
    name: "Race",
    date: {
      day: '17',
      month: 'March',
    },
    time: {
      hours: {
        value: '15',
        unit: 'hours'
      },
      minutes: {
        value: '10',
        unit: 'minutes'
      }
    }
  }
]

/**
 * <Race />
 */

class Race extends React.Component {

  renderEventSchedule() {
    return MOCK_DATA.map(event => {
      return (
        <Card 
          key={event.name}
          wrapperStyle={styles.carouselItem} 
        >
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginRight: 20, alignItems: 'center'}}>
              <DisplayBold style={styles.scheduleInfo}>{event.date.day}</DisplayBold>
              <DisplayText style={styles.scheduleDesc}>{event.date.month}</DisplayText>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <View style={{marginRight: 10, alignItems: 'center'}}>
                <DisplayBold style={styles.scheduleInfo}>{event.time.hours.value}</DisplayBold>
                <DisplayText style={styles.scheduleDesc}>{event.time.hours.unit}</DisplayText>
              </View>
              <View style={{alignItems: 'center'}}>
                <DisplayBold style={styles.scheduleInfo}>{event.time.minutes.value}</DisplayBold>
                <DisplayText style={styles.scheduleDesc}>{event.time.minutes.unit}</DisplayText>
              </View>
            </View>
          </View>
          <View style={{marginTop: 14}}>
            <DisplayBold style={{textTransform: 'uppercase'}}>{event.name}</DisplayBold>
          </View>
        </Card>
      )
    })
  }

  render() {
    const { navigation } = this.props
    const circuitData = navigation.getParam('circuitData')
    return (
      <View style={styles.screen}>
        <ScrollView style={{flex: 1}} > 
                   
          <View style={{marginHorizontal: AppLayout.screenMargin}}>
            <Image 
              source={trackLayoutImage[circuitData.circuitId]}
              resizeMode='contain'
              style={{height: 280, flex: 1, width: null}}
            />
          </View>

          <View style={styles.raceInfo}>
            <View style={styles.raceInfoSection}>
              <View style={{marginBottom: 6}}>
                <DisplayBold>Race event schedule</DisplayBold>
                <DisplayText style={styles.sectionTitleDesc}>Scheduled race weekend events</DisplayText>
              </View>
            </View>

            <Carousel snapToInterval={width - (80 - AppLayout.screenMargin)}>
              {this.renderEventSchedule()}
            </Carousel>

            <View style={styles.raceInfoSection}>
              <View style={{marginBottom: 6}}>
                <DisplayBold>{circuitData.circuitName}</DisplayBold>
                <DisplayText style={styles.sectionTitleDesc}>Important circuit informations</DisplayText>
              </View>
              <View style={styles.circuitInfoContent}>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 }}
                >
                  <View style={{flex: 1}}>
                    <DisplayBold style={{marginBottom: 2, fontSize: 22}}>1996</DisplayBold>
                    <DisplayText style={{fontSize: 12, color: AppColors.textCaption}}>First Grand Prix</DisplayText>
                  </View>
                  <View style={{flex: 1}}>
                    <DisplayBold style={{marginBottom: 2, fontSize: 22}}>58</DisplayBold>
                    <DisplayText style={{fontSize: 12, color: AppColors.textCaption}}>Number of laps</DisplayText>
                  </View>
                </View>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 }}
                >
                  <View style={{flex: 1}}>
                    <DisplayBold style={{marginBottom: 2, fontSize: 22}}>
                      5.303 <DisplayText>km</DisplayText>
                    </DisplayBold>
                    <DisplayText style={{fontSize: 12, color: AppColors.textCaption}}>Circuit Length</DisplayText>
                  </View>
                  <View style={{flex: 1}}>
                    <DisplayBold style={{marginBottom: 2, fontSize: 22}}>
                      307.574 <DisplayText>km</DisplayText>
                    </DisplayBold>
                    <DisplayText style={{fontSize: 12, color: AppColors.textCaption}}>Race Distance</DisplayText>
                  </View>
                </View>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 }}
                >
                  <View style={{flex: 1}}>
                    <DisplayBold style={{marginBottom: 2, fontSize: 22}}>1.24.125</DisplayBold>
                    <DisplayText style={{fontSize: 12, color: AppColors.textCaption}}>Fastest Lap</DisplayText>
                  </View>
                </View>
              </View>
            </View>
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
  screen: {
    flex: 1,
    backgroundColor: AppColors.backgroundMain
  },
  raceInfoSection: {
    marginTop: 30,
    marginHorizontal: AppLayout.screenMargin
  },
  sectionTitleDesc: {
    marginTop: 4, 
    fontSize: 12, 
    color: AppColors.textCaption
  },
  carouselItem: {
    width: width - 80,
    marginHorizontal: AppLayout.screenMargin/2,
    backgroundColor: AppColors.backgroundMain
  },
  raceInfo: {
    flex: 1,
    backgroundColor: AppColors.backgroundLight,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  scheduleInfo: {
    fontSize: 36,
    color: AppColors.strongRed
  },
  scheduleDesc: {
    fontSize: 10, 
    textTransform: 'uppercase'
  },
  circuitInfoContent: {
    marginTop: 14,
    marginBottom: 14
  }
})


/**
 * Exports
 */

export default Race
