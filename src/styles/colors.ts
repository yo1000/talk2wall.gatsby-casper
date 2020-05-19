export const colors = {
  blue: '#3eb0ef',
  green: '#a4d037',
  purple: '#ad26b4',
  yellow: '#fecd35',
  red: '#f05230',
  darkgrey: '#15171A',
  midgrey: '#738a94',
  lightgrey: '#c5d2d9',
  whitegrey: '#e5eff5',
  pink: '#fa3a57',
  brown: '#a3821a',

  /*
  FF8 Colors

  White     : #ededed / rbg(237, 237, 237)
  (Shadow)  : #414131 / rbg( 65,  65,  49)
  Gray      : rgb()
  (Shadow)  : rbg()
  Dark Blue : #9494a4 / rgb(148, 148, 164)
  (Shadow)  : #313131 / rbg( 49,  49,  49)
  Red       : #ff1818 / rgb(254,  24,  24)
  (Shadow)  : #202020 / rbg( 32,  32,  32)
  Yellow    : #dede08 / rgb(222, 222,   8)
  (Shadow)  : #292929 / rgb( 41,  41,  41)
  Green     : #00ff00 / rgb(  0, 255,   0)
  (Shadow)  : #393931 / rbg( 57,  57,  49)
  Blue      : #6ab4ee / rgb(106, 180, 238)
  (Shadow)  : #292929 / rgb( 41,  41,  41)

  Balloon Left  : #3c3c3c / rgb( 60,  60,  60)
  Balloon Right : #616161 / rgb( 97,  97,  97)

  Balloon Border Left  : #747474 / rgb(116, 116, 116)
  Balloon Border Right : #313131 / rgb( 49,  49,  49)
  */

  border: {
    balloon: {
      left: '#747474',
      top: '#747474',
      right: '#313131',
      bottom: '#313131',
    },
  },

  background: {
    standard: {
      color: '#0d1523',
    },
    ballon: {
      color: 'linear-gradient(to right, #3c3c3c, #616161)',
    },
    balloonGlassy: {
      color: 'linear-gradient(to right, rgba(27, 27, 27, .5), rgba(51, 51, 51, .5))',
    },
  },

  foreground: {
    standard: {
      color: 'rgba(237, 237, 237, .5)',
      shadow: 'rgba( 65,  65,  49, .5)',
    },
    header: {
      color: '#ededed',
      shadow: '#414131',
    },
    link: {
      color: '#6ab4ee',
      shadow: '#292929',
    },
    code: {
      color: '#dede08',
      shadow: '#292929',
    },
    meta: {
      color: '#9494a4',
      shadow: '#313131',
    },
  },
};
