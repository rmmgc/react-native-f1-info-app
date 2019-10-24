import { Platform } from "react-native";

const DEFAULT_FONT = 'helvetica'
const DISPLAY_FONT = 'f1-display-font'
const SECONDARY_FONT = Platform.OS === 'android' ? 'basis' : 'helvetica';

export default {
  default: DEFAULT_FONT,
  basis: SECONDARY_FONT,
  display: DISPLAY_FONT
}