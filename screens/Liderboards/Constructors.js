import React from 'react'
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native'

import AppActivityIndicator from '../../components/AppActivityIndicator'
import Card from '../../components/Card'
import { DisplayBold, DisplayText } from '../../components/AppText'
import { AppLayout, AppColors } from '../../constants'


/**
 * <Constructors />
 */

class Constructors extends React.Component {

  state = {
    isAnimationOver: false,
    fadeOut: new Animated.Value(1),
    fadeIn: new Animated.Value(0)
  }

  constructorsStandings = this.props.constructorsStandings

  componentDidMount() {
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

  onConstrucotrPressHandler(constructorData) {
    this.props.navigation.navigate('Team', {
      constructorData,
    })
  }

  renderConstructorsList() {
    return this.constructorsStandings.map((constructor, index) => {
      const highlightColor = index < 3 ? AppColors.strongRed : AppColors.lightGray
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
        {!this.state.isAnimationOver && <AppActivityIndicator fadeOut={this.state.fadeOut} /> }

        {this.constructorsStandings.length > 0 && 
          <Animated.ScrollView style={{ ...styles.screen, opacity: this.state.fadeIn }} >
            {this.renderConstructorsList()}
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
