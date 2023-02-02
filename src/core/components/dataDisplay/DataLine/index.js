import { Stack, Typography } from '@mui/material';
import Truncate from '../Truncate';

function DataLine({ label, value, line }) {
  return (
    <Stack direction="row" spacing={2} w={1}>
      <Typography
        variant="body2"
        fontWeight="bold"
        sx={{ minWidth: 'max-content' }}
      >
        {label}:
      </Typography>
      <Truncate line={line} variant="body2">
        {value}
      </Truncate>
    </Stack>
  );
}

export default DataLine;
