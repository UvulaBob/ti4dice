import React from 'react';

const ShipButton = (props) => {
    const{id, name} = props.ship;
    const {shipCount, onClick, disabled} = props;

    return (
        <tr>
            <td>
                <button type="button" disabled={disabled} className="btn align-middle"
                        style={{backgroundColor:"lightgray", borderColor:"darkgray"}}
                        id={id} onClick={onClick}>
                    {name}
                </button>
            </td>
            <td className="align-middle">
                {shipCount}
            </td>
        </tr>
    );
};

export default ShipButton;