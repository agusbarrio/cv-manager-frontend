import { Chip as ChipMaterial } from '@mui/material';

function Chip({ color = 'primary', ...props }) {
  return <ChipMaterial color={color} {...props} />;
}

export default Chip;
