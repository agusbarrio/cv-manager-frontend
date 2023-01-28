import { Box, Tab, Tabs as MaterialTabs, Stack, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';

function Tabs({
  tabs = [],
  initial = 0,
  tabsProps = {},
  sxContent = {},
  containerProps = {},
  showDivider,
  dividerProps = {},
}) {
  const [value, setValue] = useState(initial);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { Component, renderProps } = useMemo(
    () => ({
      Component: tabs[value]?.render || React.Fragment,
      renderProps: tabs[value]?.renderProps || {},
    }),
    [value, tabs]
  );

  return (
    <Stack
      direction="column"
      width="100%"
      height="100%"
      spacing={1}
      {...containerProps}
    >
      <MaterialTabs value={value} onChange={handleChange} {...tabsProps}>
        {tabs?.length &&
          tabs.map((tab, index) => (
            <Tab value={index} key={`tab--${index}`} {...tab.props} />
          ))}
      </MaterialTabs>
      {showDivider && <Divider {...dividerProps} />}
      <Box sx={{ flexGrow: 1, ...sxContent }}>
        <Component {...renderProps} />
      </Box>
    </Stack>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      render: PropTypes.func.isRequired,
      renderProps: PropTypes.object,
      props: PropTypes.object,
    })
  ).isRequired,
  initial: PropTypes.number,
  sxTabsContainer: PropTypes.object,
  sxContentContainer: PropTypes.object,
  containerProps: PropTypes.object,
  showDivider: PropTypes.bool,
  dividerProps: PropTypes.object,
};

export default Tabs;
