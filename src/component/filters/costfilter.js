import React, { Component, Fragment } from 'react';
import axios from 'axios';

const curl = "https://developerfunnel.herokuapp.com/hotellist";

class CostFilter extends Component {
    costFilter = (event) => {
        let cost = (event.target.value).split(',');
        let lcost = Number(cost[0])
        let hcost = Number(cost[1])
            let triptype = sessionStorage.getItem('tripid')
        let costurl;
        if (cost == '') {
            costurl = `${curl}/${triptype}`
        } else {
            costurl = `${curl}/${triptype}?hcost=${hcost}&lcost=${lcost}`
        }

        axios.get(costurl)
            .then((response) => { this.props.roomperCost(response.data) })
    }



    render() {
        return (
            <Fragment>
                <center>Cost Filter</center>
                <div onChange={this.costFilter}>


                    <label className="radio">
                        <input type="radio" value="" name="cost" />All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000,3000" name="cost" />Rs 1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3001,6000" name="cost" />Rs 3001-6000
                    </label>
                    <label className="radio">
                        <input type="radio" value="6001,10000" name="cost" />Rs 6001-10000
                    </label>
                    <label className="radio">
                        <input type="radio" value="10001,15000" name="cost" />Rs 10001-15000
                    </label>
                </div>
            </Fragment>

        )
    }
}

export default CostFilter;