import { Theme } from 'theme-ui'

export const rem = (pixels: number): string => `${pixels / 16}rem`
export const column = (columns: number): string => `${(columns / 12) * 100}%`

const theme: Theme = {
  colors: {
    white: '#FFF',
    whiteHover: '#EAEAEA',
    black: '#000',
    text: '#1A1B1F',
    background: '#FFF',
    primary: '#663399',
    primaryHover: '#48226F',
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
    rem(60),
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
    heading: {
      margin: 0,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    },
    h1: {
      fontSize: [6, null, null, 7]
    },
    h2: {
      fontSize: [5, null, null, 6]
    },
    h3: {
      fontSize: [3, null, null, 4]
    },
    p: {
      color: 'secondary'
    },
    headingLink: {
      color: 'inherit',
      textDecoration: 'none'
    },
    largeText: {
      fontSize: [2, null, null, 3],
      color: 'secondary'
    },
    label: {
      display: 'block',
      fontSize: 0,
      fontWeight: 'medium',
      textTransform: 'uppercase',
      color: 'secondary'
    },
    jumbo: {
      fontSize: [7, null, null, 8]
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
  images: {
    logo: {
      width: [rem(24), null, rem(28)],
      height: [rem(24), null, rem(28)]
    }
  },
  links: {
    footer: {
      color: 'primary',
      fontWeight: 'medium',
      textDecoration: 'none'
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
    },
    primary: {
      display: 'inline-flex',
      alignItems: 'center',
      height: rem(44),
      paddingLeft: rem(20),
      paddingRight: rem(20),
      color: 'white',
      fontSize: 0,
      textTransform: 'uppercase',
      textDecoration: 'none',
      backgroundColor: 'primary',
      transition: 'background-color 0.25s',
      '&:hover': {
        backgroundColor: 'primaryHover'
      }
    },
    primaryLarge: {
      variant: 'buttons.primary',
      height: [rem(44), null, null, rem(58)],
      paddingLeft: [rem(20), null, null, rem(40)],
      paddingRight: [rem(20), null, null, rem(40)],
      fontSize: [0, null, null, 1]
    },
    lightLarge: {
      variant: 'buttons.primary',
      height: [rem(44), null, null, rem(58)],
      paddingLeft: [rem(20), null, null, rem(40)],
      paddingRight: [rem(20), null, null, rem(40)],
      fontSize: [0, null, null, 1],
      color: 'black',
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: 'whiteHover'
      }
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
    },
    hr: {
      marginTop: [7, null, null, 8],
      borderColor: 'muted'
    }
  }
}

export default theme
