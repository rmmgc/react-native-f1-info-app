import React from "react"
import { Text, StyleSheet } from "react-native"
import { AppColors, AppFonts } from "../constants"

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

export function Heading1({ style, ...props }) {
  return (
    <Text style={[styles.h1, style]} {...props}>
      {props.children}
    </Text>
  )
}

export function CardTitle({ style, ...props }) {
  return (
    <Text style={[styles.cardTitle, style]} {...props}>
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
  displayText: {
    fontFamily: AppFonts.display,
    color: AppColors.whiteFlash,
    fontSize: 14
  },
  h1: {
    fontFamily: AppFonts.display,
    color: AppColors.whiteFlash,
    fontSize: 26
  },
  cardTitle: {
    fontFamily: AppFonts.display,
    color: AppColors.whiteFlash,
    fontSize: 13,
    textTransform: 'uppercase'
  }
})
