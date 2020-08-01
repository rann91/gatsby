import { Theme } from 'theme-ui'

const toRem = (pixels: number): string => `${pixels / 16}rem`

const heading = {
  margin: 0,
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading'
}

const body = {
  margin: 0,
  fontFamily: 'body',
  lineHeight: 'body',
  fontWeight: 'body'
}

const theme: Theme = {
  colors: {
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
    toRem(12),
    toRem(14),
    toRem(16),
    toRem(20),
    toRem(24),
    toRem(30),
    toRem(36),
    toRem(44),
    toRem(64)
  ],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 500
  },
  space: [
    0,
    toRem(5),
    toRem(10),
    toRem(15),
    toRem(20),
    toRem(30),
    toRem(45),
    toRem(50),
    toRem(100)
  ],
  lineHeights: {
    body: 1.75,
    heading: 1.4
  },
  text: {
    default: {
      color: 'text'
    },
    body: {
      ...body
    },
    h1: {
      ...heading,
      fontSize: 7
    },
    h2: {
      ...heading,
      fontSize: 6
    },
    h3: {
      ...heading,
      fontSize: 5
    },
    h4: {
      ...heading,
      fontSize: 4
    },
    h5: {
      ...heading,
      fontSize: 3
    },
    h6: {
      ...heading,
      fontSize: 2
    },
    p: {
      ...body,
      color: 'secondary'
    },
    jumbo: {
      ...heading,
      fontSize: 8
    }
  },
  styles: {
    root: {
      ...body
    },
    h1: {
      ...heading,
      fontSize: 7
    },
    h2: {
      ...heading,
      fontSize: 6
    },
    h3: {
      ...heading,
      fontSize: 5
    },
    h4: {
      ...heading,
      fontSize: 4
    },
    h5: {
      ...heading,
      fontSize: 3
    },
    h6: {
      ...heading,
      fontSize: 2
    },
    p: {
      ...heading,
      color: 'secondary'
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
