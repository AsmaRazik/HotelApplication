import React, { Component } from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const lurl = "https://developerfunnel.herokuapp.com/location";
const hurl = "https://developerfunnel.herokuapp.com/hotels?city=";

class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            location: '',
            hotels: ''

        }
    }

    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item.city}>
                        {item.city_name}
                    </option>

                )
            }

            )
        }
    }

    handleChangeCity = (event) => {
        console.log(event.target.value)
        const cityid = event.target.value
        fetch(`${hurl}${cityid}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => { this.setState({ hotels: data }) })
        //.then((data) => { console.log(data) })
    }

    renderHotel = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item.id}>
                        {item.name} | {item.locality}
                    </option>
                )
            }

            )

        }
    }

    handleHotel =(event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }


    render() {
        console.log(">>>>>>>>>", this.state.location)
        console.log(">>>>>>>",this.state.hotels)
        return (

            <div className="imageContainer" >
                <div id='logo'>
                    <b>D!</b>
                </div>

                <div className='heading'> Plan Trip With Us</div>
                <div className="locationSelector">
                    <select onChange={this.handleChangeCity}>
                        <option>----SELECT CITY----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select onChange={this.handleHotel}>
                        <option>----SELECT HOTEL----</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>


        )
    }

    componentDidMount() {
        fetch(lurl, { Method: 'GET' })
            .then((res) => res.json())
            .then((data) => { this.setState({ location: data }) })
            .catch((err) => { })
    }
}

export default withRouter(Search);



