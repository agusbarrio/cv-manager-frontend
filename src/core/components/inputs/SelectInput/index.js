import {
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Skeleton,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';
import FormHelperError from '../Form/FormHelperError';
import _ from 'lodash';
import TextInputSkeleton from '../../dataDisplay/skeletons/TextInputSkeleton';

/**
 * Compontente que hace los TextInputs
 * @param {*} param0
 * @returns
 */
function SelectInput({
  children,
  variant = 'outlined',
  placeholder,
  placeholderProps,
  renderValue,
  errorMessage,
  label,
  helperText = null,
  inputProps = {},
  sx,
  list = [],
  loading,
  multiple,
  ...props
}) {
  const resultList = useMemo(() => {
    if (!!placeholder) {
      return [
        {
          value: '',
          children: placeholder,
          ...placeholderProps,
        },
        ...list,
      ];
    } else {
      return list;
    }
  }, [list, placeholder, placeholderProps]);
  const getItemFromValue = useCallback(
    (value) => {
      return resultList.find((item) => item?.value === value);
    },
    [resultList]
  );
  const renderValueHandler = useCallback(
    (selected) => {
      if (_.isArray(selected)) {
        if (selected.length === 0) return getItemFromValue('')?.children;
        const selectedItemsList = selected.map(getItemFromValue);

        return _.isFunction(renderValue)
          ? renderValue(selectedItemsList)
          : selectedItemsList.map((item) => item?.children).join(', ');
      } else {
        const selectedItem = getItemFromValue(selected);

        return _.isFunction(renderValue)
          ? renderValue(getItemFromValue(selectedItem))
          : selectedItem?.children;
      }
    },
    [getItemFromValue, renderValue]
  );

  return (
    <>
      {loading ? (
        <TextInputSkeleton></TextInputSkeleton>
      ) : (
        <FormControl sx={{ width: '100%', ...sx }} error={!!errorMessage}>
          <FormLabel>{label}</FormLabel>
          <Select
            multiple={multiple}
            displayEmpty={!!placeholder}
            variant={variant}
            inputProps={inputProps}
            renderValue={renderValueHandler}
            error={!!errorMessage}
            {...props}
          >
            {resultList.map((item, index) => (
              <MenuItem {...item} value={item.value} key={index}>
                {item.children}
              </MenuItem>
            ))}
          </Select>
          <FormHelperError
            errorMessage={errorMessage}
            helperText={helperText}
          />
        </FormControl>
      )}
    </>
  );
}
SelectInput.propTypes = {
  children: PropTypes.node,
  errorMessage: PropTypes.string,
  helperText: PropTypes.string,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  inputProps: PropTypes.object,
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  sx: PropTypes.object,
};

export default SelectInput;
