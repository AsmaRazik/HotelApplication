import React, { Component, Fragment } from 'react';
import axios from 'axios';

const rurl = "https://developerfunnel.herokuapp.com/hotellist";

class RoomFilter extends Component {
    roomFilter = (event) => {
        let roomNumber = event.target.value;
        let triptype = sessionStorage.getItem('tripid')
        let roomurl;
        if (roomNumber == '') {
            roomurl = `${rurl}/${triptype}`
        } else {
            roomurl = `${rurl}/${triptype}?roomtype=${roomNumber}`
        }

        axios.get(roomurl)
            .then((response) => { this.props.roomperType(response.data) })
    }



    render() {
        return (
            <Fragment>
                <center>Room Type</center>
                <div onChange={this.roomFilter}>


                    <label className="radio">
                        <input type="radio" value="" name="room" />All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="room" />Deluxe Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="room" />Premiere Rooms
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="room" />Travel
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="room" />Semi Deluxe Room
                    </label>
                </div>
            </Fragment>

        )
    }
}

export default RoomFilter;