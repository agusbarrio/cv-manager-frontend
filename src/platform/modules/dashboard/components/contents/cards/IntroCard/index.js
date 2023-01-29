import { Typography } from '@mui/material';
import Card from '../../../../../../../core/components/dataDisplay/Card';

function IntroCard({ intro }) {
  return (
    <Card title={intro.headLine}>
      <Typography variant="body2">{intro.firstName}</Typography>
      <Typography variant="body2">{intro.lastName}</Typography>
      <Typography variant="body2">{intro.birthday}</Typography>
      <Typography variant="body2">{intro.about}</Typography>
    </Card>
  );
}

export default IntroCard;
