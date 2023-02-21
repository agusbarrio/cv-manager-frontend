import { Stack, Typography } from '@mui/material';
import _ from 'lodash';
import { Fragment } from 'react';

function DataList({ title, items = [], direction = 'row' }) {
  return (
    <Stack w="100%">
      <Typography variant="h6">{title}:</Typography>
      <Stack direction={direction} flexWrap="wrap" gap={1} width="100%">
        {items.map((item, index) => {
          const ItemComponent = _.get(item, 'render', Fragment);
          const itemProps = _.get(item, 'renderProps', {});
          return <ItemComponent {...itemProps} key={index} />;
        })}
      </Stack>
    </Stack>
  );
}

export default DataList;
