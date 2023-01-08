import { Box, Tab, Tabs as MaterialTabs, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';

function Tabs({
  tabs,
  initial = 0,
  tabsProps = {},
  sxContent = {},
  containerProps = {},
}) {
  const [value, setValue] = useState(initial);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { Component, renderProps } = useMemo(
    () => ({
      Component: tabs[value].render || React.Fragment,
      renderProps: tabs[value].renderProps || {},
    }),
    [value, tabs]
  );

  return (
    <Stack direction="column" width="100%" height="100%" {...containerProps}>
      <MaterialTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        {...tabsProps}
      >
        {tabs?.length &&
          tabs.map((tab, index) => (
            <Tab
              label={tab.label}
              value={index}
              key={`tab--${index}`}
              {...tab.props}
            />
          ))}
      </MaterialTabs>
      <Box sx={{ flexGrow: 1, ...sxContent }}>
        <Component {...renderProps} />
      </Box>
    </Stack>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired,
      renderProps: PropTypes.object,
      props: PropTypes.object,
    })
  ).isRequired,
  initial: PropTypes.number,
  sxTabsContainer: PropTypes.object,
  sxContentContainer: PropTypes.object,
  containerProps: PropTypes.object,
};

export default Tabs;
