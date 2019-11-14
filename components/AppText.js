import React from "react"
import { Text, StyleSheet } from "react-native"


/**
 * Constants 
 */

import { AppColors, AppFonts } from "../constants"


/**
 * Export Text based components
 */

export function BaseText({ style, ...props }) {
  return (
    <Text style={[styles.text, style]} {...props}>
      {props.children}
    </Text>
  )
}

export function DisplayText({ style, ...props }) {
  return (
    <Text style={[styles.displayText, style]} {...props}>
      {props.children}
    </Text>
  )
}

export function DisplayBold({ style, ...props }) {
  return (
    <Text style={[styles.displayBold, style]} {...props}>
      {props.children}
    </Text>
  )
}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  text: {
    fontFamily: AppFonts.default,
    color: AppColors.textTitle,
    fontSize: 14
  },
  displayText: {
    fontFamily: AppFonts.display,
    color: AppColors.textTitle,
    fontSize: 14,
  },
  displayBold: {
    fontFamily: AppFonts.displayBold,
    color: AppColors.textTitle,
    fontSize: 14
  }
})
