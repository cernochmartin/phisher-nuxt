module.exports = {
  tailwindcss: {
    cssPath: false,
    configPath: 'tailwind.config.ts',
    config: {},
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        blue: { primary: '#3b82f6', secondary: '#06b6d4' },
        green: { primary: '#059669', secondary: '#22c55e'},
        gray: { light: '#d1d5db', dark: '#292524'},
      },
    },
  },
}