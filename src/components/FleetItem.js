import React, {Component, Fragment} from 'react';

class FleetItem extends Component {
    ship = this.props.ship;
    render() {
        return (
            <Fragment>
                <li>{this.props.ship.friendlyName + "s: " + this.props.shipCount}</li>
            </Fragment>
        );
    }
}

export default FleetItem;