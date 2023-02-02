import { default as AlertDialogCore } from '../../../../../../../core/components/dialogs/AlertDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import CORE_TEXTS from '../../../../constants/texts';
function AlertDialog({ ...props }) {
  const { translate } = useLocale();
  return (
    <AlertDialogCore
      closeButtonText={translate(CORE_TEXTS.GENERIC_CLOSE)}
      {...props}
    />
  );
}

export default AlertDialog;
