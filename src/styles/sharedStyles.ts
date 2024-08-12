// For code maintainability and reusability

const palette = {
  white: '#ffffff',
  grey: {
    100: '#f7f7f7',
    200: '#efefef',
    300: '#dbdbdb',
    400: '#9b9b9b',
    500: '#666666',
    600: '#333333',
  },
  accent: {
    orange: 'rgb(199 87 36)',
    beige: '#efeae5',
  },
  opacity: {
    shadow: 'rgba(0, 0, 0, 0.5)',
  },
  component: {
    button: 'rgb(217,83,39)',
  },
}

export const sharedStyles = {
  palette: {
    ...palette,
    text: {
      primary: palette.grey[600],
      secondary: palette.grey[500],
      inverted: palette.white,
    },
  },

  text: {
    xs: 'clamp(0.64rem, 0.05vi + 0.63rem, 0.67rem)',
    sm: 'clamp(0.8rem, 0.16vi + 0.77rem, 0.89rem)',
    base: 'clamp(1rem, 0.33vi + 0.94rem, 1.19rem)',
    md: 'clamp(1.25rem, 0.59vi + 1.14rem, 1.58rem)',
    lg: 'clamp(1.56rem, 0.97vi + 1.38rem, 2.11rem)',
    xl: 'clamp(1.95rem, 1.53vi + 1.67rem, 2.81rem)',
  },

  size: {
    birdie: 'clamp(2.5rem, 4.44vi + 1.67rem, 5rem)',
  },

  shadow: {
    elevated: `0 12px 10px -10px ${palette.opacity.shadow}`,
    pressed: `0 5px 10px -5px ${palette.opacity.shadow}`,
  },
}
