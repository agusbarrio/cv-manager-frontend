import { default as ConfirmDialogCore } from '../../../../../../../core/components/dialogs/ConfirmDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import CORE_TEXTS from '../../../../constants/texts';
function ConfirmDialog({ closeButtonProps, confirmButtonProps, ...props }) {
  const { translate } = useLocale();
  return (
    <ConfirmDialogCore
      closeButtonProps={{
        children: translate(CORE_TEXTS.GENERIC_CLOSE),
        ...closeButtonProps,
      }}
      confirmButtonProps={{
        children: translate(CORE_TEXTS.GENERIC_CONFIRM),
        ...confirmButtonProps,
      }}
      {...props}
    />
  );
}

export default ConfirmDialog;
