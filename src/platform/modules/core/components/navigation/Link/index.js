import LinkCore from '../../../../../../core/components/navigation/Link';
import { Link as LinkRouter } from 'react-router-dom';

function Link({ ...props }) {
  return <LinkCore component={LinkRouter} {...props}></LinkCore>;
}

export default Link;
