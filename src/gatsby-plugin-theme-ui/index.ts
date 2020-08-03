import { Theme } from 'theme-ui'

const rem = (pixels: number): string => `${pixels / 16}rem`

const theme: Theme = {
  colors: {
    white: '#FFFFFF',
    black: '000000',
    text: '#1A1B1F',
    background: '#FFFFFF',
    primary: '#663399',
    secondary: 'rgba(26, 27, 31, 0.6)',
    muted: '#F4F4F4',
    quoteBorder: '#E2E2E2'
  },
  fonts: {
    body: '"Montserrat", sans-serif',
    heading: 'inherit'
  },
  fontSizes: [
    rem(12),
    rem(14),
    rem(16),
    rem(20),
    rem(24),
    rem(30),
    rem(36),
    rem(44),
    rem(64)
  ],
  fontWeights: {
    body: 400,
    heading: 400,
    medium: 500,
    bold: 600
  },
  space: [
    0,
    rem(5),
    rem(10),
    rem(15),
    rem(20),
    rem(30),
    rem(45),
    rem(50),
    rem(100)
  ],
  sizes: {
    container: 1200
  },
  lineHeights: {
    body: 1.75,
    heading: 1.4
  },
  text: {
    default: {
      margin: 0,
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    header: {
      margin: 0,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    },
    h1: {
      fontSize: 7
    },
    h2: {
      fontSize: 6
    },
    h3: {
      fontSize: 5
    },
    h4: {
      fontSize: 4
    },
    h5: {
      fontSize: 3
    },
    h6: {
      fontSize: 2
    },
    p: {
      color: 'secondary'
    },
    jumbo: {
      fontSize: 8
    },
    siteTitle: {
      fontSize: [rem(16), rem(18)]
    },
    visuallyHidden: {
      position: 'absolute',
      opacity: 0,
      pointerEvents: 'none'
    }
  },
  layout: {
    header: {
      height: [rem(65), rem(85), null, rem(105)],
      backgroundColor: 'white',
      boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)'
    },
    navigation: {
      position: ['fixed', null, null, 'static'],
      top: [rem(65), rem(85), null, 0],
      left: 0,
      width: ['100%'],
      backgroundColor: ['rgba(0, 0, 0, 0.75)', null, null, 'transparent']
    }
  },
  images: {
    logo: {
      width: [rem(24), null, rem(28)],
      height: [rem(24), null, rem(28)]
    }
  },
  buttons: {
    menu: {
      padding: 0,
      width: rem(36),
      height: rem(36)
    },
    close: {
      padding: 0,
      width: rem(36),
      height: rem(36)
    }
  },
  styles: {
    root: {
      variant: 'text.default'
    },
    h1: {
      variant: 'text.h1'
    },
    h2: {
      variant: 'text.h2'
    },
    h3: {
      variant: 'text.h3'
    },
    h4: {
      variant: 'text.h4'
    },
    h5: {
      variant: 'text.h5'
    },
    h6: {
      variant: 'text.h6'
    },
    p: {
      variant: 'text.p'
    },
    a: {
      color: 'primary'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    }
  }
}

export default theme
