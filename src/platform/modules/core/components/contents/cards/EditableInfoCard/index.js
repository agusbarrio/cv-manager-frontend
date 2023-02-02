import { Stack } from '@mui/material';
import { useMemo } from 'react';
import Card from '../../../../../../../core/components/dataDisplay/Card';
import DataLine from '../../../../../../../core/components/dataDisplay/DataLine';
import ButtonIcon from '../../../../../../../core/components/inputs/ButtonIcon';
import _ from 'lodash';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import CORE_TEXTS from '../../../../constants/texts';
function EditableInfoCard({
  title,
  items = [],
  onClickEdit,
  onClickDelete,
  onClickMoreInfo,
  ...props
}) {
  const { translate } = useLocale();
  const actions = useMemo(
    () => (
      <>
        {_.isFunction(onClickMoreInfo) && (
          <ButtonIcon
            onClick={onClickMoreInfo}
            color="success"
            tooltip={translate(CORE_TEXTS.GENERIC_MORE_INFO)}
          >
            manage_search
          </ButtonIcon>
        )}
        {_.isFunction(onClickEdit) && (
          <ButtonIcon
            onClick={onClickEdit}
            color="primary"
            tooltip={translate(CORE_TEXTS.GENERIC_EDIT)}
          >
            edit
          </ButtonIcon>
        )}
        {_.isFunction(onClickDelete) && (
          <ButtonIcon
            onClick={onClickDelete}
            color="error"
            tooltip={translate(CORE_TEXTS.GENERIC_DELETE)}
          >
            delete
          </ButtonIcon>
        )}
      </>
    ),
    [onClickEdit, onClickDelete, onClickMoreInfo, translate]
  );

  return (
    <Card
      title={title}
      actions={actions}
      {...props}
      sx={{ width: '17.5rem', ...props.sx }}
    >
      <Stack>
        {items.map((item, index) => (
          <DataLine
            label={item.label}
            value={item.value}
            key={index}
            line={1}
          />
        ))}
      </Stack>
    </Card>
  );
}

export default EditableInfoCard;
