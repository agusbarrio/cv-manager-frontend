import {
  Card as CardMaterial,
  CardActions,
  CardContent,
  Divider,
  Stack,
} from '@mui/material';
import { useMemo } from 'react';
import Truncate from '../Truncate';

function Card({ children, actions, title, ...props }) {
  const showTopDivider = useMemo(() => !!title, [title]);
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
      {children && <CardContent>{children}</CardContent>}
      {!!showBottomDivider && <Divider></Divider>}
      {!!actions && <CardActions>{actions}</CardActions>}
    </CardMaterial>
  );
}

export default Card;
