import { default as ConfirmDialogCore } from '../../../../../../../core/components/dialogs/ConfirmDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import CORE_TEXTS from '../../../../constants/texts';
function ConfirmDialog({ ...props }) {
  const { translate } = useLocale();
  return (
    <ConfirmDialogCore
      closeButtonText={translate(CORE_TEXTS.GENERIC_CLOSE)}
      confirmButtonText={translate(CORE_TEXTS.GENERIC_CONFIRM)}
      {...props}
    />
  );
}

export default ConfirmDialog;
