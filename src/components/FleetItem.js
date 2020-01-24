import React, {Component, Fragment} from 'react';

class FleetItem extends Component {
    render() {
        return (
            <Fragment>
                <li>{this.props.ship.friendlyName + "s: " + this.props.shipCount}</li>
            </Fragment>
        );
    }
}

export default FleetItem;