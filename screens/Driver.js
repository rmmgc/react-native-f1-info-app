import React from 'react'
import { View, StyleSheet, Dimensions, Image, Animated } from 'react-native'

import { DisplayBold, DisplayText } from '../components/AppText'
import Card from '../components/Card'
import AppActivityIndicator from '../components/AppActivityIndicator'

import { AppLayout, AppColors } from '../constants'
import { driverProfileImage } from '../utils/imagesCollection'
import { simulateServerResponse } from '../mock/index'

const { width } = Dimensions.get('window')


/**
 * <Driver />
 */

class Driver extends React.Component {

  state = {
    isAnimationOver: false,
    driverInfo: null
  }

  fadeOut = new Animated.Value(1)
  fadeIn = new Animated.Value(0)

  async componentDidMount() {
    const { navigation } = this.props
    const driverData = navigation.getParam('driverData')

    let response = await simulateServerResponse('drivers', driverData.Driver.driverId)

    this.setState({ driverInfo: response })

    Animated.parallel([
      Animated.timing(this.fadeOut, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true
        }
      ),
      Animated.timing(this.fadeIn, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true
        }
      ),
    ]).start(() => {
      this.setState({ isAnimationOver: true })
    })
  }

  render() {
    const { navigation } = this.props
    const driverData = navigation.getParam('driverData')

    return (
      <View style={styles.screen}>
        {!this.state.isAnimationOver && <AppActivityIndicator fadeOut={this.fadeOut} />}

        {this.state.driverInfo &&
          <Animated.ScrollView style={{opacity: this.fadeIn}}>
            <View>
              <Image 
                source={driverProfileImage[driverData.Driver.driverId]}
                resizeMode='contain'
                style={{ width: width, height: width }}
              />
            </View>

            <View style={styles.driverInfo}>
              <View style={{marginTop: 26, justifyContent: 'center', alignItems: 'center'}}>
                <DisplayBold style={{fontSize: 26, marginBottom: 4}}>
                  {this.state.driverInfo.permanentNumber}
                </DisplayBold>
                <DisplayBold style={{fontSize: 18}}>
                  {this.state.driverInfo.firstName} {this.state.driverInfo.lastName}
                </DisplayBold>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 14, marginHorizontal: AppLayout.baseMargin}}>
                <Card wrapperStyle={styles.driverStat}>
                  <View style={{flex: 1}}>
                    <DisplayText style={{fontSize: 12, lineHeight: 16}}>Championship Position</DisplayText>
                  </View>
                  <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <DisplayBold style={{fontSize: 36, color: AppColors.strongRed}}>{driverData.position}</DisplayBold>
                  </View>
                </Card>
                <Card wrapperStyle={styles.driverStat}>
                  <View style={{flex: 1}}>
                    <DisplayText style={{fontSize: 12, lineHeight: 16}}>Championship Points</DisplayText>
                  </View>
                  <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <DisplayBold style={{fontSize: 36, color: AppColors.strongRed}}>{driverData.points}</DisplayBold>
                  </View>
                </Card>
              </View>
              <View style={styles.driverData}>
                <View style={{marginBottom: 6}}>
                  <DisplayBold>Driver informations</DisplayBold>
                  <DisplayText style={styles.sectionTitleDesc}>Interesting facts about driver</DisplayText>
                </View>
                <View style={styles.driverInfoContent}>
                  <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 }}
                  >
                    <View style={{flex: 1, marginRight: AppLayout.baseMargin}}>
                      <DisplayBold style={{marginBottom: 2, fontSize: 22}}>
                       {this.state.driverInfo.championships}
                      </DisplayBold>
                      <DisplayText style={{fontSize: 12, color: AppColors.textCaption}}>Championships</DisplayText>
                    </View>
                    <View style={{flex: 1}}>
                      <DisplayBold style={{marginBottom: 2, fontSize: 22}}>
                        {this.state.driverInfo.podiums}
                      </DisplayBold>
                      <DisplayText style={{fontSize: 12, color: AppColors.textCaption}}>Total Podiums</DisplayText>
                    </View>
                  </View>
                  <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 }}
                  >
                    <View style={{flex: 1, marginRight: AppLayout.baseMargin}}>
                      <DisplayBold style={{marginBottom: 2, fontSize: 22}}>
                        {this.state.driverInfo.grandPrix}
                      </DisplayBold>
                      <DisplayText style={{fontSize: 12, color: AppColors.textCaption}}>Total Grad Prix</DisplayText>
                    </View>
                    <View style={{flex: 1}}>
                      <DisplayBold style={{marginBottom: 2, fontSize: 22}}>
                        {this.state.driverInfo.points}
                      </DisplayBold>
                      <DisplayText style={{fontSize: 12, color: AppColors.textCaption}}>Total Points</DisplayText>
                    </View>
                  </View>
                  <View
                    style={{marginTop: 30, marginBottom: 14 }}
                  >
                    <View style={{marginBottom: 14}}>
                      <DisplayText style={{marginBottom: 2}}>
                        {this.state.driverInfo.birthPlace}
                      </DisplayText>
                      <DisplayText style={{fontSize: 12, color: AppColors.textCaption}}>Place of Birth</DisplayText>
                    </View>
                    <View>
                      <DisplayText style={{marginBottom: 2}}>
                        {this.state.driverInfo.birthDate}
                      </DisplayText>
                      <DisplayText style={{fontSize: 12, color: AppColors.textCaption}}>Date of Birth</DisplayText>
                    </View>
                  </View>
                </View>
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
  driverInfo: {
    flex: 1,
    backgroundColor: AppColors.backgroundMain,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -40
  },
  driverStat: {
    width: width/2 - AppLayout.baseMargin - AppLayout.baseMargin/2,
    maxWidth: width/2 - AppLayout.baseMargin - AppLayout.baseMargin/2,
    height: 120
  },
  driverData: {
    paddingTop: 26,
    paddingHorizontal: AppLayout.baseMargin,
    marginTop: AppLayout.baseMargin,
    flex: 1,
    backgroundColor: AppColors.backgroundLight,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  driverInfoContent: {
    marginVertical: AppLayout.baseMargin
  },
  sectionTitleDesc: {
    marginTop: 4, 
    fontSize: 12, 
    color: AppColors.textCaption
  }
})


/**
 * Exports
 */

export default Driver
