import React from "react"
import { Text, StyleSheet } from "react-native"
import { AppColors, AppFonts } from "../constants"

export function Text(props) {
  return (
    <Text style={[styles.text, props.style]} {...props}>
      {props.children}
    </Text>
  )
}

export function HeaderTitle(props) {
  return (
    <Text style={[styles.headerTitle, props.style]} {...props}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: AppFonts.default,
    color: AppColors.whiteFlash,
    fontSize: 14
  },
  headerTitle: {
    fontFamily: AppFonts.display,
    color: AppColors.whiteFlash,
    fontSize: 14,
    textTransform: 'uppercase'
  }
})
