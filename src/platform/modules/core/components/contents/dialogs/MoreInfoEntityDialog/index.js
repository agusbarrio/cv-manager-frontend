import { Stack } from '@mui/material';
import FullTextInfo from '../../../../../../../core/components/dataDisplay/FullTextInfo';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import AlertDialog from '../AlertDialog';
import CORE_TEXTS from '../../../../constants/texts';
import _ from 'lodash';
function MoreInfoEntityDialog({ open, items }) {
  const { translate } = useLocale();

  return (
    <AlertDialog open={open} title={translate(CORE_TEXTS.GENERIC_MORE_INFO)}>
      <Stack spacing={1}>
        {_.map(items, (item, index) => {
          const dialogRenderProps = _.get(item, 'renderProps', {});
          const DialogRender = _.get(item, 'render', FullTextInfo);
          return <DialogRender key={index} {...dialogRenderProps} />;
        })}
      </Stack>
    </AlertDialog>
  );
}

export default MoreInfoEntityDialog;
