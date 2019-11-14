import React from 'react'
import { 
  View,
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native'


/**
 * Custom Components
 */

import Card from '../../components/Card'
import { DisplayBold, DisplayText } from '../../components/AppText'


/**
 * Constants
 */

import { AppLayout, AppColors } from '../../constants'


/**
 * <Constructors />
 */

class Constructors extends React.Component {

  /* Save constructors data passed via props */
  constructorStandings = this.props.constructorStandings


  /**
   * Event Handlers
   */

  /* Navigate to Team screen */

  onConstrucotrPressHandler(constructorData) {
    this.props.navigation.navigate('Team', {
      constructorData,
    })
  }


  /**
   * Render Functions
   */

  /* Render constructors list */
  renderConstructorsList() {
    return this.constructorStandings.map((constructor, index) => {
      const highlightColor = index < 3 ? AppColors.strongRed : AppColors.lightGrayBlue
      const itemKey = constructor.position
      const marginBottom = this.constructorStandings.length - 1 === index ? 0 : 14

      return(
        <TouchableOpacity
          key={itemKey}
          onPress={this.onConstrucotrPressHandler.bind(this, constructor)}
        >
          <Card 
            wrapperStyle={{borderRadius: 100, marginBottom}} 
            contentStyle={styles.cardContent}
          >
            <View 
              style={{...styles.cardBackground, backgroundColor: highlightColor}}
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
        {this.constructorStandings.length > 0 && 
          <ScrollView style={styles.screen} >
            <View style={{flex: 1, margin: AppLayout.baseMargin}}>
              {this.renderConstructorsList()}
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
