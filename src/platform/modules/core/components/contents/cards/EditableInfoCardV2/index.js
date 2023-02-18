import { Stack } from '@mui/material';
import { useMemo } from 'react';
import Card from '../../../../../../../core/components/dataDisplay/Card';
import DataLine from '../../../../../../../core/components/dataDisplay/DataLine';
import ButtonIcon from '../../../../../../../core/components/inputs/ButtonIcon';
import _ from 'lodash';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import CORE_TEXTS from '../../../../constants/texts';
import { useCallback } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import EditEntityDialog from '../../dialogs/EditEntityDialog';
import DeleteEntityDialog from '../../dialogs/DeleteEntityDialog';
import MoreInfoEntityDialog from '../../dialogs/MoreInfoEntityDialog';
function EditableInfoCardV2({
  title,
  cardItems = [],
  moreInfoDialogItems = [],
  edit,
  delete: deleteProps,
  entity,
  ...props
}) {
  const { translate } = useLocale();
  const { openDialog } = useDialog();

  //Edit
  const onEdit = useMemo(() => edit?.onEdit, [edit?.onEdit]);
  const editService = useMemo(() => edit?.service, [edit?.service]);
  const editForm = useMemo(() => edit?.form, [edit?.form]);

  const handleClickEdit = useCallback(() => {
    openDialog(EditEntityDialog, {
      onEdit: onEdit,
      service: editService,
      form: editForm,
      entity,
    });
  }, [openDialog, onEdit, editForm, editService, entity]);

  //Delete
  const onDelete = useMemo(
    () => deleteProps?.onDelete,
    [deleteProps?.onDelete]
  );
  const deleteService = useMemo(
    () => deleteProps?.service,
    [deleteProps?.service]
  );

  const handleClickDelete = useCallback(() => {
    openDialog(DeleteEntityDialog, {
      onDelete,
      service: deleteService,
      entity,
    });
  }, [onDelete, deleteService, entity, openDialog]);

  //More info
  const handleClickMoreInfo = useCallback(() => {
    openDialog(MoreInfoEntityDialog, { items: moreInfoDialogItems });
  }, [openDialog, moreInfoDialogItems]);

  const actions = useMemo(
    () => (
      <>
        {moreInfoDialogItems && (
          <ButtonIcon
            onClick={handleClickMoreInfo}
            color="success"
            tooltip={translate(CORE_TEXTS.GENERIC_MORE_INFO)}
          >
            manage_search
          </ButtonIcon>
        )}
        <ButtonIcon
          onClick={handleClickEdit}
          color="primary"
          tooltip={translate(CORE_TEXTS.GENERIC_EDIT)}
        >
          edit
        </ButtonIcon>
        <ButtonIcon
          onClick={handleClickDelete}
          color="error"
          tooltip={translate(CORE_TEXTS.GENERIC_DELETE)}
        >
          delete
        </ButtonIcon>
      </>
    ),
    [
      handleClickEdit,
      handleClickDelete,
      handleClickMoreInfo,
      moreInfoDialogItems,
      translate,
    ]
  );

  return (
    <Card
      title={title}
      actions={actions}
      {...props}
      sx={{ width: '17.5rem', ...props.sx }}
    >
      {_.isArray(cardItems) && (
        <Stack>
          {cardItems.map((item, index) => {
            const cardRenderProps = _.get(item, 'renderProps', {});
            const CardRender = _.get(item, 'render', (props) => (
              <DataLine line={1} {...props} />
            ));
            return <CardRender key={index} {...cardRenderProps} />;
          })}
        </Stack>
      )}
    </Card>
  );
}

export default EditableInfoCardV2;
