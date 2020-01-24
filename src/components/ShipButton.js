import React, {Component, Fragment} from 'react';

class ShipButton extends Component {
    shipName = this.props.ship.name;
    friendlyName = this.props.ship.friendlyName;

    render() {
        return (
            <Fragment>
                <button type="button" disabled={this.props.disabled} className="btn btn-light border shipSelectionButton" name={this.shipName} onClick={this.props.onClick}>
                    {this.friendlyName}
                </button>
            </Fragment>
        );
    }
}

export default ShipButton;