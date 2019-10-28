const TEAM_COLORS = {
  ferrari: '#DC1B00',
  mercedes: '#57D2BE',
  redBull: '#1E40FF',
  renault: '#FFF502',
  haas: '#828282',
  mcLaren: '#F58604',
  racingPoint: '#F296C8',
  toroRoso: '#459BFF',
  alfaRomeo: '#9B0F00',
  williams: '#FFFFFF'
}

const THEME_COLORS = {
  gunmetal: '#1D2329',
  grayBlue: '#2C343A',
  whiteFlash: '#EDF2F4',
  redPhantone: '#EF233C',
  redCandy: '#de1c16',
  tabNavActiveItem: '#3C454C',
  white: '#FFFFFF',
  ...TEAM_COLORS
}

export default {
  ...THEME_COLORS
}