import React, { Component } from 'react';
import axios from 'axios';
import BookingDisplay from './BookingDisplay';

const burl = "https://developerfunnel.herokuapp.com/allBooking";

class ViewBooking extends Component {
    constructor() {
        super()

        this.state = {
            booking: ''
        }

    }
    

    render() {
        console.log(this.state.booking)
        return (
            <div className="container">
                <BookingDisplay bookdata={this.state.booking} />
            </div>
        )
    }
    
    async componentDidMount() {
        const response = await axios.get(burl);
        this.setState({ booking: response.data })
    }

}

export default ViewBooking