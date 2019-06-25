import React from 'react';
import './searchInfo.css';

const SearchInfo = (props) => {
    return (
        <div className="row">
            <div className="col-6 text-center">
                <label>Group Name</label>
                <div className="display">{props.name}</div>
            </div>
            <div className="col-6 text-center">
                <label>Display Location</label>
                <div className="display">{props.location}</div>
            </div>
        </div>
    )
}

export default SearchInfo;