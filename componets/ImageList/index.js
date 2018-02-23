import React, {Component} from 'react'
import {Image, FlatList, Text, StyleSheet} from 'react-native'

class ImageList extends Component {

    renderItem = ({ item }) => {
        return (
            <Image
                source={{uri: item.userImageURL}}
                resizeMode={'cover'}
                style={{width: '50%', height: 150}}
            />
        )
    }

    render() {
        const {imageArr: { hits }} = this.props
        return (
            <FlatList
                numColumns={2}
                keyExtractor={item => item.id}
                data={hits}
                renderItem={this.renderItem}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap'
        // paddingTop: 10,
        // backgroundColor: '#fff',
        // alignItems: 'center'
    }
});

export default ImageList
