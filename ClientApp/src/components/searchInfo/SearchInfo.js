import React from 'react';
import './searchInfo.css';

const SearchInfo = (props) => {
    return (
        <div className="row">
            <div className="col-6 text-center">
                <label>Group Name</label>
                <div id="displays">{props.name}</div>
            </div>
            <div className="col-6 text-center">
                <label>Location</label>
                <div id="displays">{props.location}</div>
            </div>
        </div>
    )
}

export default SearchInfo;