const defaultTheme = {
  components: {
    MuiTabs: {
      styleOverrides: {
        scrollButtons: {
          '&.Mui-disabled': { opacity: 0.3 },
        },
        scroller: {
          flexGrow: 1,
        },
        flexContainer: {
          justifyContent: 'space-between',
        },
      },
    },
  },
};

export default defaultTheme;
