import { Stack } from '@mui/material';
import { useMemo } from 'react';
import Card from '../../../../../../../core/components/dataDisplay/Card';
import DataLine from '../../../../../../../core/components/dataDisplay/DataLine';
import ButtonIcon from '../../../../../../../core/components/inputs/ButtonIcon';

function EditableInfoCard({
  title,
  items = [],
  onClickEdit,
  onClickDelete,
  ...props
}) {
  const actions = useMemo(
    () => (
      <>
        <ButtonIcon onClick={onClickEdit} color="primary">
          edit
        </ButtonIcon>
        <ButtonIcon onClick={onClickDelete} color="error">
          delete
        </ButtonIcon>
      </>
    ),
    [onClickEdit, onClickDelete]
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
