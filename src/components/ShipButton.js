import React from 'react';
import PropTypes from 'prop-types';

const ShipButton = ({shipCount, onClick, disabled, ship}) => {

    return (
        <tr>
            <td>
                <button type="button" disabled={disabled} className="btn align-middle"
                        style={{backgroundColor:"lightgray", borderColor:"darkgray"}}
                        id={ship.id} onClick={onClick}>
                    {ship.name}
                </button>
            </td>
            <td className="align-middle">
                {shipCount}
            </td>
        </tr>
    );
};

ShipButton.propTypes = {
    shipCount: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    ship: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })
};

export default ShipButton;