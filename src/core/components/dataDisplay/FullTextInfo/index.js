import { Stack, Typography } from '@mui/material';

function FullTextInfo({ title, children }) {
  return (
    <Stack>
      <Typography variant="h6">{title}:</Typography>
      {children && (
        <Typography variant="body1" sx={{ overflowWrap: 'break-word' }}>
          {children}
        </Typography>
      )}
    </Stack>
  );
}

export default FullTextInfo;
