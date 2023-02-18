import { Box, Tab, Tabs as MaterialTabs, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { useCallback } from 'react';
import _ from 'lodash';
function NavTabs({ tabs = [], navigate, ...props }) {
  const initialValue = useMemo(() => {
    const initialPath = window.location.pathname;
    const index = tabs.findIndex((tab) => tab.path === initialPath);
    return index >= 0 ? index : 0;
  }, [tabs]);

  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback(
    (event, newValue) => {
      setValue(newValue);
      if (_.isFunction(navigate) && !!tabs?.[newValue]?.path)
        navigate(tabs[newValue].path);
    },
    [navigate, tabs]
  );

  return (
    <MaterialTabs value={value} onChange={handleChange} {...props}>
      {tabs?.length &&
        tabs.map((tab, index) => (
          <Tab value={index} key={`tab--${index}`} {...tab.props} />
        ))}
    </MaterialTabs>
  );
}

NavTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      props: PropTypes.object,
    })
  ).isRequired,
  initial: PropTypes.number,
  navigate: PropTypes.func,
};

export default NavTabs;
