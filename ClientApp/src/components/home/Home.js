import React from 'react';
import Button from '../button/Button';
import Radio from '../radio/Radio';
import './home.css';

class Home extends React.Component {
    render () {
        return (
            <div className="row">
                <div id="body-outline" className="container col-6">
                    <p style={{ marginTop: "5px", fontWeight: "700" }}>Select the Type</p>
                    <hr />
                    <Radio value="security" label="Security Group"/>
                    <hr />
                    <Radio value="mailbox" label="Team Mailbox"/>
                    <hr/>
                    <div className="row" style={{ marginBottom: "15px" }}>
                        <div className="col-sm-6 text-right">
                            <Button value="Search"/>
                        </div>
                        <div className="col-sm-6 text-left">
                            <Button value="Browse"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;