import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    Box,
    Text,
    Flex
} from 'rebass'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            recentBoxes: [],
            allBoxes: [],
            recentActivity: []
        }
    }

    render() {
        return (
                <Flex height={'100%'} >
                    <Box
                        p={3}
                        width={1/6}
                        color='black'
                        bg='black'>
                        Flex
                    </Box>
                    <Box
                        p={3}
                        width={4/6}
                        color='red'
                        bg='red'>
                        Box
                    </Box>
                    <Box
                        p={3}
                        width={1/6}
                        color='black'
                        bg='black'>
                        Box
                    </Box>
                </Flex>


        )
    }

}

export default Dashboard
const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Dashboard />, wrapper) : false;
