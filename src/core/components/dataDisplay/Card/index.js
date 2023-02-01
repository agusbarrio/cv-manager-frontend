import {
  Box,
  Card as CardMaterial,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { useMemo } from 'react';
import Truncate from '../Truncate';

function Card({ children, actions, title, ...props }) {
  const showTopDivider = useMemo(
    () => !!title && !!children,
    [children, title]
  );
  const showBottomDivider = useMemo(
    () => !!children && !!actions,
    [children, actions]
  );
  return (
    <CardMaterial {...props}>
      {!!title && (
        <Stack padding={2}>
          <Truncate variant="h5">{title}</Truncate>
        </Stack>
      )}
      {showTopDivider && <Divider></Divider>}
      <CardContent>{children}</CardContent>
      {!!showBottomDivider && <Divider></Divider>}
      {!!actions && <CardActions>{actions}</CardActions>}
    </CardMaterial>
  );
}

export default Card;
