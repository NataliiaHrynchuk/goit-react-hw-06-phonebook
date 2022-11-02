import {Text} from './Text.styled';
import {Label} from './Label.styled';
import { Box } from './Box.styled';
import { getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';


export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const changeFilter = event => {
        dispatch(setFilter(event.currentTarget.value));
    };
    return(
    <Box
        display="flex"
        flexWrap="wrap"
        w="300px"
        gap="10px"
    >
        <Label htmlFor="id-filter"
        >
            Find contacts by name
        </Label>
        <Text
            type="text"
            name="filter"
            id="id-filter"
            value={filter}
            onChange={changeFilter}
        ></Text>
        </Box>
    )
}

    
