import React from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import Card from '../../components/Card'
import { DisplayBold, DisplayText } from '../../components/AppText'
import { AppLayout, AppColors } from '../../constants'


/**
 * <Constructors />
 */

class Constructors extends React.Component {

  constructorsStandings = this.props.constructorsStandings

  onConstrucotrPressHandler(constructorData) {
    this.props.navigation.navigate('Team', {
      constructorData,
    })
  }

  renderConstructorsList() {
    return this.constructorsStandings.map((constructor, index) => {
      const highlightColor = index < 3 ? AppColors.strongRed : AppColors.lightGrayBlue
      const itemKey = constructor.position
      const marginBottom = this.constructorsStandings.length - 1 === index ? 14 : 0

      return(
        <TouchableOpacity
          key={itemKey}
          onPress={this.onConstrucotrPressHandler.bind(this, constructor)}
        >
          <Card 
            wrapperStyle={{ ...styles.baseMargin, marginBottom }} 
            contentStyle={styles.cardContent}
          >
            <View 
              style={{ ...styles.cardBackground, backgroundColor: highlightColor }}
            ></View>

            <View style={styles.standing}>
              <DisplayBold style={{fontSize: 26}}>
                {constructor.position}
              </DisplayBold>
            </View>
            <View style={{flex: 1}}>
              <DisplayBold>
                {constructor.Constructor.name.toUpperCase()}
              </DisplayBold>
              <DisplayText style={{fontSize: 12, marginTop: 6}}>
                Wins {constructor.wins}
              </DisplayText>
            </View>
            <View style={{marginLeft: 14}}>
              <DisplayBold 
                style={{fontSize: 18, color: AppColors.strongRed, marginRight: 10}}
              >
                {constructor.points}
              </DisplayBold>
            </View>
          </Card>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.constructorsStandings.length > 0 && 
          <ScrollView style={styles.screen} >
            {this.renderConstructorsList()}
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
  },
  baseMargin: {
    flex: 1,
    marginHorizontal: AppLayout.baseMargin,
    borderRadius: 100
  },
  standing: {
    width: 40, 
    marginRight: 10, 
    justifyContent: 'center', 
    alignItems: 'center'
  },  
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center'
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
  }
})


/**
 * Exports
 */

export default Constructors
