const teamColors = {
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

const colors = {
  gunmetal: '#1D2329',
  grayBlue: '#2C343A',
  whiteFlash: '#EDF2F4',
  redPhantone: '#EF233C',
  redCandy: '#D90429',
  ...teamColors
}

const fontSizes = {
  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  cpation: 12
}

const layoutSizes = {
  baseMargin: 14,
  headerTopPadding: 30,
  cardPadding: 14
}

export { 
  colors, 
  fontSizes, 
  layoutSizes 
}
