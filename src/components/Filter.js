import React, {Component} from 'react';
import {Text} from './Text.styled';
import {Label} from './Label.styled';
import {Box} from './Box.styled';


class Filter extends Component {
    state = {
        message: ''
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({message: event.currentTarget.value});
        this.props.onChange(this.state.message);
    }

    render() {
        return (
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
                    value={this.state.message}
                    onChange={this.handleChange}
                    ></Text>
                </Box>
        )
    }
}

export default Filter;