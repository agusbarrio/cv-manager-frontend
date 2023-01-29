import {
  Card as CardMaterial,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';
import { useMemo } from 'react';

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
      {!!title && <CardHeader title={title}></CardHeader>}
      {showTopDivider && <Divider></Divider>}
      <CardContent>{children}</CardContent>
      {!!showBottomDivider && <Divider></Divider>}
      {!!actions && <CardActions>{actions}</CardActions>}
    </CardMaterial>
  );
}

export default Card;
