import React, { Component } from 'react';

class ShipButton extends Component {
    shipName = this.props.ship.name;
    friendlyName = this.props.ship.friendlyName;

    render() {
        const shipCount = this.props.shipCount;
        return (
            <tr>
                <td>
                    <button type="button" disabled={this.props.disabled} className="btn align-middle btn-light" name={this.shipName} onClick={this.props.onClick}>
                        {this.friendlyName}
                    </button>
                </td>
                <td className="align-middle">
                    {shipCount}
                </td>
            </tr>
        );
    }
}

export default ShipButton;