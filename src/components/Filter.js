import PropTypes from 'prop-types';
import {Text} from './Text.styled';
import {Label} from './Label.styled';
import {Box} from './Box.styled';


export const Filter = ({value, onChange}) => (
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
            value={value}
            onChange={onChange}
            ></Text>
        </Box>
)

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}