import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { pixApiKey as key } from '../../constants'
import ImageList from '../../componets/ImageList'

class Loadable extends Component {
    static navigationOptions = {
        title: 'Loadable',
        headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    };

    state = {
        images: []
    }

    componentDidMount() {
        const request = `https://pixabay.com/api/?key=${key}&q=yellow+flowers&image_type=photo`
        fetch(request, { method: 'GET'})
            .then(response => response.json())
            .then(data => {
                this.setState({ images: data })
            })
    }

    render() {
        return (
            <View>
                <Text>Hello</Text>
                <ImageList imageArr = { this.state.images } />
            </View>
        )
    }
}

export default Loadable
