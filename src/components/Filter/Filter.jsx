import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../store/sliceFilter';
import { filterSelector } from '../../store/selectors';
import { Box, Input, useTheme } from '@chakra-ui/react';

const Filter = () => {
  const theme = useTheme()
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const filtered = ({ target: { value } }) => {
    dispatch(addFilter(value));
   }
  return (
    <Box style={{fontSize: theme.fonts.sizes.medium, marginBottom: '12px'}}>
        Filter contacts by name
        <Input type="text" value={filter} onChange={filtered} />
    </Box>
  )
}

export default Filter
