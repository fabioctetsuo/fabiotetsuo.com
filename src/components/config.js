export const customAwesomegrid = {
  mediaQuery: 'only screen',
  columns: {
    xs: 4,
    sm: 8,
    md: 8,
    lg: 12,
    xl: 12,
  },
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 15,
    lg: 25,
    xl: 25,
  },
  container: {
    xs: 'full', // 'full' = max-width: 100%
    sm: 'full', // 'full' = max-width: 100%
    md: 'full', // 'full' = max-width: 100%
    lg: 90, // max-width: 1440px
    xl: 90, // max-width: 1440px
  },
  breakpoints: {
    xs: 1,
    sm: 48, // 768px
    md: 64, // 1024px
    lg: 90, // 1440px
    xl: 120, // 1920px
  },
}

const theme = {
  components: {
    button: {
      padding: '8px 16px',
      fontFamily: 'Open Sans',
      fontSize: '14px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      lineHeight: '16px',
      boxSizing: 'border-box',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '18px',

      types: {
        primary: {
          boxShadow: '0 0 8px 0 rgba(88, 194, 180, 0.16)',
          backgroundColor: {
            enabled: '#6A5ACD',
            hover: '#9789EB',
            pressed: '#8070E3',
            focused: '#9789EB',
            disabled: '#E6E6F0',
          },
          borderColor: {
            focused: '#6A5ACD',
          },
          textColor: {
            enabled: '#FFF',
            hover: '#FFF',
            pressed: '#FFF',
            focused: '#FFF',
            disabled: '#82828A',
          },
        },
        secondary: {
          boxShadow: '0 0 8px 0 rgba(88, 194, 180, 0.16)',
          backgroundColor: {
            enabled: 'transparent',
            hover: 'rgba(151, 137, 235, 0.5)',
            pressed: 'rgba(106, 90, 205, 0.5)',
            focused: 'rgba(151, 137, 235, 0.6)',
            disabled: 'transparent',
          },
          borderColor: {
            enabled: '#6A5ACD',
            hover: '#6A5ACD',
            pressed: '#6A5ACD',
            focused: '#6A5ACD',
            disabled: '#D3D3E2',
          },
          textColor: {
            enabled: '#41414A',
            hover: '#41414A',
            pressed: '#41414A',
            focused: '#41414A',
            disabled: '#A9A9B8',
          },
        },
        text: {
          boxShadow: 'none',
          backgroundColor: {
            enabled: 'transparent',
            hover: 'rgba(173, 162, 242, 0.5)',
            pressed: 'rgba(173, 162, 242, 0.6)',
            focused: 'transparent',
            disabled: 'transparent',
          },
          borderColor: {
            focused: '#6A5ACD',
          },
          textColor: {
            enabled: '#6A5ACD',
            hover: '#6A5ACD',
            pressed: '#6A5ACD',
            focused: '#6A5ACD',
            disabled: '#A9A9B8',
          },
        },
      },
    },
  },
};

export default theme;