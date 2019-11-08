import React from 'react'
import { ScrollView, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'

import { DisplayBold, DisplayText } from '../components/AppText'
import Card from '../components/Card'

import { AppLayout, AppColors } from '../constants'
import { constructorCarImage } from '../utils/imagesCollection'

const { width } = Dimensions.get('window')


/**
 * <Team />
 */

class Team extends React.Component {

  onDriverPressHandler(driverData) {
    this.props.navigation.navigate('Driver', {
      driverData,
    })
  }

  render() {
    const { navigation } = this.props
    const constructorData = navigation.getParam('constructorData')

    return (
      <View style={styles.screen}>
        <ScrollView>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image 
              source={constructorCarImage[constructorData.Constructor.constructorId]}
              resizeMode='contain'
              style={{ width: width-80, height: width/2 }}
            />
          </View>

          <View style={styles.constructorInfo}>
            <View style={{marginTop: 26, justifyContent: 'center', alignItems: 'center'}}>
              <DisplayBold style={{fontSize: 18, textTransform: 'uppercase'}}>
                {constructorData.Constructor.name}
              </DisplayBold>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 14, marginHorizontal: AppLayout.screenMargin}}>
              <Card wrapperStyle={styles.teamStat}>
                <View style={{flex: 1}}>
                  <DisplayText style={{fontSize: 12, lineHeight: 16}}>Championship Position</DisplayText>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <DisplayBold style={{fontSize: 36, color: AppColors.redCandy}}>{constructorData.position}</DisplayBold>
                </View>
              </Card>
              <Card wrapperStyle={styles.teamStat}>
                <View style={{flex: 1}}>
                  <DisplayText style={{fontSize: 12, lineHeight: 16}}>Championship Points</DisplayText>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <DisplayBold style={{fontSize: 36, color: AppColors.redCandy}}>{constructorData.points}</DisplayBold>
                </View>
              </Card>
            </View>
            <View style={styles.constructorData}>
              <View style={{marginBottom: 6}}>
                <DisplayBold>Team informations</DisplayBold>
                <DisplayText style={styles.sectionTitleDesc}>Interesting facts about team</DisplayText>
              </View>
              <View style={styles.teamInfoContent}>
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
                    <DisplayText style={{marginBottom: 2}}>Sebastian Vettel</DisplayText>
                    <DisplayText style={{fontSize: 12, color: '#87939c'}}>Driver</DisplayText>
                  </View>
                  <View style={{marginBottom: 14}}>
                    <DisplayText style={{marginBottom: 2}}>Charles Leclerc</DisplayText>
                    <DisplayText style={{fontSize: 12, color: '#87939c'}}>Driver</DisplayText>
                  </View>
                  <View style={{marginBottom: 14}}>
                    <DisplayText style={{marginBottom: 2}}>Matia Bonnito</DisplayText>
                    <DisplayText style={{fontSize: 12, color: '#87939c'}}>Team Boss</DisplayText>
                  </View>
                  <View style={{marginBottom: 14}}>
                    <DisplayText style={{marginBottom: 2}}>Hamburg, Germany</DisplayText>
                    <DisplayText style={{fontSize: 12, color: '#87939c'}}>Headquarters</DisplayText>
                  </View>
                  <View>
                    <DisplayText style={{marginBottom: 2}}>46</DisplayText>
                    <DisplayText style={{fontSize: 12, color: '#87939c'}}>Staff members</DisplayText>
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
  cardBackground: {
    position: 'absolute',
    width: 100,
    height: 100,
    top: -50,
    left: -30,
    transform: [
      {rotate: '20deg'}
    ]
  },
  standing: {
    width: 40, 
    marginRight: 10, 
    justifyContent: 'center', 
    alignItems: 'center'
  },  
  constructorInfo: {
    flex: 1,
    backgroundColor: AppColors.grayBlue,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  teamStat: {
    width: width/2 - AppLayout.screenMargin - AppLayout.screenMargin/2,
    maxWidth: width/2 - AppLayout.screenMargin - AppLayout.screenMargin/2,
    height: 120,
    backgroundColor: AppColors.gunmetal
  },
  constructorData: {
    paddingTop: 26,
    paddingHorizontal: AppLayout.screenMargin,
    marginTop: AppLayout.screenMargin,
    flex: 1,
    backgroundColor: AppColors.gunmetal,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  teamInfoContent: {
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

export default Team
