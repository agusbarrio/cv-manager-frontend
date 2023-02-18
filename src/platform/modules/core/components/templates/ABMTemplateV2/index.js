import Icon from '../../../../../../core/components/dataDisplay/Icon';
import { Backdrop, Box, Button, CircularProgress, Stack } from '@mui/material';
import CORE_TEXTS from '../../../constants/texts';
import useLocale from '../../../../../../core/contexts/LocaleContext/useLocale';
import { useMemo, useRef } from 'react';
import { useCallback } from 'react';
import _ from 'lodash';
import useDialog from '../../../../../../core/contexts/DialogContext/useDialog';
import AddEntityDialog from '../../contents/dialogs/AddEntityDialog';
import useService from '../../../hooks/useService';
import { useEffect } from 'react';
import DeleteAllEntitiesDialog from '../../contents/dialogs/DeleteAllEntitiesDialog';
import EditableInfoCardV2 from '../../contents/cards/EditableInfoCardV2';
import PropTypes from 'prop-types';

function ABMTemplateV2({
  add,
  deleteAll,
  getAll,
  deleteOne,
  editOne,
  columnWidth = '17.5rem',
  viewOne,
}) {
  const { translate } = useLocale();
  const { openDialog } = useDialog();
  const controllsRef = useRef(null);
  const controllsHeight = useMemo(() => {
    return !!controllsRef?.current
      ? controllsRef.current.getBoundingClientRect().height
      : 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controllsRef?.current]);

  //Get data
  const getAllService = useMemo(() => getAll?.service, [getAll?.service]);
  const getAllFormat = useMemo(() => getAll?.format, [getAll?.format]);

  const {
    value: entities,
    loading,
    runService: getData,
  } = useService({
    service: getAllService,
    format: getAllFormat,
    defaultValue: [],
  });

  useEffect(() => {
    if (_.isFunction(getData)) getData();
  }, [getData]);

  //Add entity
  const addService = useMemo(() => add?.service, [add?.service]);
  const addForm = useMemo(() => add?.form, [add?.form]);

  const showAddEntityButton = useMemo(() => {
    return _.isFunction(addService) && _.isFunction(addForm);
  }, [addService, addForm]);

  const handleClickAdd = useCallback(() => {
    openDialog(AddEntityDialog, {
      onAdd: getData,
      service: addService,
      form: addForm,
    });
  }, [openDialog, getData, addService, addForm]);

  //Delete all entities
  const deleteAllService = useMemo(
    () => deleteAll?.service,
    [deleteAll?.service]
  );

  const showDeleteAllButton = useMemo(
    () => entities?.length > 0,
    [entities?.length]
  );

  const handleClickDeleteAll = useCallback(() => {
    openDialog(DeleteAllEntitiesDialog, {
      onDelete: getData,
      service: deleteAllService,
    });
  }, [openDialog, getData, deleteAllService]);

  //Edit one entity
  const editOneProps = useMemo(
    () => ({
      ...editOne,
      onEdit: getData,
    }),
    [editOne, getData]
  );

  //Delete one entity
  const deleteOneProps = useMemo(
    () => ({
      ...deleteOne,
      onDelete: getData,
    }),
    [deleteOne, getData]
  );

  //View one entity
  const getCardTitle = useCallback(
    (entity) => {
      if (_.isFunction(viewOne?.displayTitle))
        return viewOne.displayTitle(entity);
      return null;
    },
    [viewOne]
  );

  const getCardItems = useCallback(
    (entity) => {
      if (_.isFunction(viewOne?.displayCardItems))
        return viewOne.displayCardItems(entity);
      return null;
    },
    [viewOne]
  );

  const getMoreInfoDialogItems = useCallback(
    (entity) => {
      if (_.isFunction(viewOne?.displayMoreInfoDialogItems))
        return viewOne.displayMoreInfoDialogItems(entity);
      return null;
    },
    [viewOne]
  );

  const displayMoreInfoDialogItems = useMemo(
    () => viewOne?.displayMoreInfoDialogItems,
    [viewOne?.displayMoreInfoDialogItems]
  );
  return (
    <Stack height={1}>
      <Stack direction="row" spacing={2} padding={1} ref={controllsRef}>
        {showAddEntityButton && (
          <Button
            variant="contained"
            startIcon={<Icon>add</Icon>}
            onClick={handleClickAdd}
          >
            {translate(CORE_TEXTS.GENERIC_ADD)}
          </Button>
        )}
        {showDeleteAllButton && (
          <Button
            variant="contained"
            startIcon={<Icon>delete</Icon>}
            color="error"
            onClick={handleClickDeleteAll}
          >
            {translate(CORE_TEXTS.GENERIC_DELETE_ALL)}
          </Button>
        )}
      </Stack>
      <Box
        justifyContent={'center'}
        position="relative"
        height={`calc(100% - ${controllsHeight}px)`}
        p={1}
        sx={{ overflowY: 'scroll' }}
        display="grid"
        gridTemplateColumns={`repeat(auto-fill, ${columnWidth})`}
        gridAutoRows="min-content"
        gap={1}
      >
        <Backdrop
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={loading}
        >
          <CircularProgress></CircularProgress>
        </Backdrop>
        {entities.map((entity) => (
          <EditableInfoCardV2
            key={entity.id}
            title={getCardTitle(entity)}
            cardItems={getCardItems(entity)}
            moreInfoDialogItems={getMoreInfoDialogItems(entity)}
            entity={entity}
            edit={editOneProps}
            delete={deleteOneProps}
          ></EditableInfoCardV2>
        ))}
      </Box>
    </Stack>
  );
}

ABMTemplateV2.propTypes = {
  add: PropTypes.shape({
    service: PropTypes.func,
    form: PropTypes.elementType,
  }),
  deleteAll: PropTypes.shape({ service: PropTypes.func }),
  getAll: PropTypes.shape({ service: PropTypes.func, format: PropTypes.func }),
  deleteOne: PropTypes.shape({ service: PropTypes.func }),
  editOne: PropTypes.shape({
    service: PropTypes.func,
    form: PropTypes.elementType,
  }),
  viewOne: PropTypes.shape({
    displayTitle: PropTypes.func,
    displayMoreInfoDialogItems: PropTypes.func,
    displayCardItems: PropTypes.func,
  }),
  columnWidth: PropTypes.string,
};

export default ABMTemplateV2;
