import React from 'react'
import { ScrollView, View, StyleSheet, Dimensions, Image } from 'react-native'

import { DisplayBold, DisplayText } from '../components/AppText'
import Card from '../components/Card'

import { AppLayout, AppColors } from '../constants'
import { driverProfileImage } from '../utils/imagesCollection'

const { width } = Dimensions.get('window')


/**
 * <Driver />
 */

class Driver extends React.Component {

  render() {
    const { navigation } = this.props
    const driverData = navigation.getParam('driverData')

    return (
      <View style={styles.screen}>
        <ScrollView>
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
                {driverData.Driver.permanentNumber}
              </DisplayBold>
              <DisplayBold style={{fontSize: 18}}>
                {driverData.Driver.givenName} {driverData.Driver.familyName}
              </DisplayBold>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 14, marginHorizontal: AppLayout.screenMargin}}>
              <Card wrapperStyle={styles.driverStat}>
                <View style={{flex: 1}}>
                  <DisplayText style={{fontSize: 12, lineHeight: 16}}>Championship Position</DisplayText>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <DisplayBold style={{fontSize: 36, color: AppColors.redCandy}}>{driverData.position}</DisplayBold>
                </View>
              </Card>
              <Card wrapperStyle={styles.driverStat}>
                <View style={{flex: 1}}>
                  <DisplayText style={{fontSize: 12, lineHeight: 16}}>Championship Points</DisplayText>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <DisplayBold style={{fontSize: 36, color: AppColors.redCandy}}>{driverData.points}</DisplayBold>
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
                  <View style={{flex: 1, marginRight: AppLayout.screenMargin}}>
                    <DisplayBold style={{marginBottom: 2, fontSize: 22}}>4</DisplayBold>
                    <DisplayText style={{fontSize: 12, color: '#87939c'}}>Championships</DisplayText>
                  </View>
                  <View style={{flex: 1}}>
                    <DisplayBold style={{marginBottom: 2, fontSize: 22}}>132</DisplayBold>
                    <DisplayText style={{fontSize: 12, color: '#87939c'}}>Total Podiums</DisplayText>
                  </View>
                </View>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 }}
                >
                  <View style={{flex: 1, marginRight: AppLayout.screenMargin}}>
                    <DisplayBold style={{marginBottom: 2, fontSize: 22}}>
                      2003
                    </DisplayBold>
                    <DisplayText style={{fontSize: 12, color: '#87939c'}}>First Grad Prix</DisplayText>
                  </View>
                  <View style={{flex: 1}}>
                    <DisplayBold style={{marginBottom: 2, fontSize: 22}}>
                      189
                    </DisplayBold>
                    <DisplayText style={{fontSize: 12, color: '#87939c'}}>Total Grad Prix</DisplayText>
                  </View>
                </View>
                <View
                  style={{marginTop: 30, marginBottom: 14 }}
                >
                  <View style={{marginBottom: 14}}>
                    <DisplayText style={{marginBottom: 2}}>Hamburg, Germany</DisplayText>
                    <DisplayText style={{fontSize: 12, color: '#87939c'}}>Place of Birth</DisplayText>
                  </View>
                  <View>
                    <DisplayText style={{marginBottom: 2}}>12.03.1992 (28 Age)</DisplayText>
                    <DisplayText style={{fontSize: 12, color: '#87939c'}}>Date of Birth</DisplayText>
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
    backgroundColor: AppColors.gunmetal
  },
  driverInfo: {
    flex: 1,
    backgroundColor: AppColors.gunmetal,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -40
  },
  driverStat: {
    width: width/2 - AppLayout.screenMargin - AppLayout.screenMargin/2,
    maxWidth: width/2 - AppLayout.screenMargin - AppLayout.screenMargin/2,
    height: 120
  },
  driverData: {
    paddingTop: 26,
    paddingHorizontal: AppLayout.screenMargin,
    marginTop: AppLayout.screenMargin,
    flex: 1,
    backgroundColor: AppColors.grayBlue,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  driverInfoContent: {
    marginVertical: AppLayout.screenMargin
  },
  sectionTitleDesc: {
    marginTop: 4, 
    fontSize: 12, 
    color: '#87939c'
  }
})


/**
 * Exports
 */

export default Driver
