import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import carDetail from './CarDetail';
import CarDetail from './CarDetail';

class Carlist extends Component {
    constructor () {
        super()

        this.state = {carList: []}
    }

    componentDidMount() {
        axios.get('https://jsonkeeper.com/b/MQJ4')
            .then((response) => {
                this.setState({carList: response.data})
            })
    }

    renderList = () => {
        return this.state.carList.map((brand) => {
            return <CarDetail key={ brand.model[0].name} brand={brand} />
        })
    }

    render () {
        return (
            <ScrollView>
                {this.renderList()}
            </ScrollView>
        )
    }
  
}

export default Carlist;