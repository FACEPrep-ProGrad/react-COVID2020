import React, { Component } from 'react'
import { FiClock, FiSearch } from "react-icons/fi";

export default class Search extends Component {
    render() {
        return (
            <div className="search">
                <h2>Search your state</h2>
                <div className="input">
                    <FiSearch />
                    <input type="text" placeholder="Goa" id="" />
                </div>
                <p>22 Oct, 12:07 AM IST <FiClock /></p>
                <div className="tally">
                    <div className="data">
                        <h3>Confirmed</h3>
                        <h1>77,05,072</h1>
                    </div>
                    <div className="data">
                        <h3>Active</h3>
                        <h1>7,15,316</h1>
                    </div>
                    <div className="data">
                        <h3>Recovered</h3>
                        <h1>68,71,820</h1>
                    </div>
                    <div className="data">
                        <h3>Deceased</h3>
                        <h1>1,16,653</h1>
                    </div>
                </div>
            </div>
        )
    }
}
