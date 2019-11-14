import React from 'react'
import { 
  View, 
  StyleSheet, 
  Image, 
  Animated 
} from 'react-native'


/**
 * Custom Components
 */

import { DisplayBold, DisplayText } from '../components/AppText'
import Card from '../components/Card'
import AppActivityIndicator from '../components/AppActivityIndicator'


/**
 * Constants
 */

import { AppLayout, AppColors } from '../constants'


/**
 * Utils and Mock data
 */

import { driverProfileImage } from '../utils/imagesCollection'
import { simulateServerResponse } from '../mock/index'


/**
 * <Driver />
 */

class Driver extends React.Component {

  state = {
    isAnimationOver: false,
    driverInfo: null
  }

  /* Animated values */
  fadeOut = new Animated.Value(1)
  fadeIn = new Animated.Value(0)

  async componentDidMount() {
    const { navigation } = this.props
    const driverData = navigation.getParam('driverData')

    /* Simulated server response */
    let response = await simulateServerResponse('drivers', driverData.Driver.driverId)

    this.setState({ driverInfo: response })

    /* Start animation when Component is mounted */
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
            {/* PROFILE IMAGE */}
            <Image 
              source={driverProfileImage[driverData.Driver.driverId]}
              resizeMode='contain'
              style={{width: AppLayout.deviceWidth, height: AppLayout.deviceWidth}}
            />
            {/* ----- */}

            <View style={styles.driverInfoContainer}>
              {/* NUMBER AND NAME */}
              <View style={styles.nameBox}>
                <DisplayBold style={{fontSize: 26, marginBottom: 4}}>
                  {this.state.driverInfo.permanentNumber}
                </DisplayBold>
                <DisplayBold style={{fontSize: 18, textTransform: 'uppercase'}}>
                  {this.state.driverInfo.firstName} {this.state.driverInfo.lastName}
                </DisplayBold>
              </View>
              {/* -----*/}

              {/* CHAMPIONSHIP STANDINGS */}
              <View style={styles.championshipStandings}>
                <Card wrapperStyle={styles.championshipStat}>
                  <View style={{flex: 1}}>
                    <DisplayText style={{fontSize: 12, lineHeight: 16}}>
                      Championship Position
                    </DisplayText>
                  </View>
                  <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <DisplayBold style={{fontSize: 36, color: AppColors.strongRed}}>
                      {driverData.position}
                    </DisplayBold>
                  </View>
                </Card>
                <Card wrapperStyle={styles.championshipStat}>
                  <View style={{flex: 1}}>
                    <DisplayText style={{fontSize: 12, lineHeight: 16}}>
                      Championship Points
                    </DisplayText>
                  </View>
                  <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <DisplayBold style={{fontSize: 36, color: AppColors.strongRed}}>
                      {driverData.points}
                    </DisplayBold>
                  </View>
                </Card>
              </View>
              {/* ----- */}

              {/* ADDITIONAL INFORMATIONS */}
              <View style={styles.additionalInfo}>
                {/* Title */}
                <View style={{marginTop: AppLayout.baseMargin * 2}}>
                  <DisplayBold>Statistic</DisplayBold>
                  <DisplayText style={styles.sectionTitleDesc}>
                    Some interesting facts
                  </DisplayText>
                </View>
                {/* -----*/}

                {/* Data */}
                <View style={{marginTop: AppLayout.baseMargin * 1.5}}>
                  <View style={styles.additionalInfoRow} >
                    <View style={{flex: 1, marginRight: AppLayout.baseMargin}}>
                      <DisplayBold style={{marginBottom: 2, fontSize: 22}}>
                       {this.state.driverInfo.championships}
                      </DisplayBold>
                      <DisplayText style={{fontSize: 12, color: AppColors.textCaption}}>
                        Championships
                      </DisplayText>
                    </View>
                    <View style={{flex: 1}}>
                      <DisplayBold style={{marginBottom: 2, fontSize: 22}}>
                        {this.state.driverInfo.podiums}
                      </DisplayBold>
                      <DisplayText style={{fontSize: 12, color: AppColors.textCaption}}>
                        Total Podiums
                      </DisplayText>
                    </View>
                  </View>
                  <View style={styles.additionalInfoRow} >
                    <View style={{flex: 1, marginRight: AppLayout.baseMargin}}>
                      <DisplayBold style={{marginBottom: 2, fontSize: 22}}>
                        {this.state.driverInfo.grandPrix}
                      </DisplayBold>
                      <DisplayText style={{fontSize: 12, color: AppColors.textCaption}}>
                        Total Grad Prix
                      </DisplayText>
                    </View>
                    <View style={{flex: 1}}>
                      <DisplayBold style={{marginBottom: 2, fontSize: 22}}>
                        {this.state.driverInfo.points}
                      </DisplayBold>
                      <DisplayText style={{fontSize: 12, color: AppColors.textCaption}}>
                        Total Points
                      </DisplayText>
                    </View>
                  </View>
                </View>
                {/* ----- */}

                {/* Title */}
                <View style={{marginTop: AppLayout.baseMargin * 2}}>
                  <DisplayBold>Additional informations</DisplayBold>
                  <DisplayText style={styles.sectionTitleDesc}>
                    Other infromations about driver
                  </DisplayText>
                </View>
                {/* -----*/}
              
                {/* Data */}
                <View style={{marginVertical: AppLayout.baseMargin * 1.5}} >
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
                {/* ----- */}
              </View>
              {/* ----- */}
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
  driverInfoContainer: {
    flex: 1,
    backgroundColor: AppColors.backgroundMain,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -40
  },
  nameBox: {
    marginTop: AppLayout.baseMargin * 2, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  championshipStandings: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: AppLayout.baseMargin * 2, 
    marginHorizontal: AppLayout.baseMargin
  },
  championshipStat: {
    width: AppLayout.deviceWidth/2 - AppLayout.baseMargin - AppLayout.baseMargin/2,
    maxWidth: AppLayout.deviceWidth/2 - AppLayout.baseMargin - AppLayout.baseMargin/2,
    height: 120
  },
  additionalInfo: {
    paddingHorizontal: AppLayout.basePadding,
    marginTop: AppLayout.baseMargin,
    flex: 1,
    backgroundColor: AppColors.backgroundLight,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  additionalInfoRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: AppLayout.baseMargin
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
