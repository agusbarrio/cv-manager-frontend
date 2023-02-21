import { Box, Skeleton } from '@mui/material';

function TextInputSkeleton() {
  return (
    <Box sx={{ height: '5rem', width: '100%' }}>
      <Skeleton
        variant="rectangular"
        sx={{ width: '30%', height: '1rem', my: '0.25rem', borderRadius: 0.5 }}
      ></Skeleton>
      <Skeleton
        variant="rectangular"
        sx={{ width: '100%', height: '3.5rem', borderRadius: 0.5 }}
      ></Skeleton>
    </Box>
  );
}

export default TextInputSkeleton;
