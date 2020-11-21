import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/Main';
import Footer from './Footer';
import Header from './Header';
import ListingApi from './Listing/ListingApi';
import HotelDetails from './hoteldetails/HotelDetails';
import PlaceBooking from './Booking/PlaceBooking';
import ViewBooking from './Booking/ViewBooking';


const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/list/:id" component={ListingApi}/>
                <Route path="/details/:id" component={HotelDetails}/>
                <Route path="/viewBooking" component={ViewBooking}/>
                <Route path="/booking/:id" component={PlaceBooking}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;