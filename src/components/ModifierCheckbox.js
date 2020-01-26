import React from 'react';
import PropTypes from 'prop-types';

const ModifierCheckbox = ({disabled, onChange, modifier}) => {

    const modifierText = modifier.value === 1 ? "+1" : "-1";
    const modifierColor = modifier.value === 1 ? "green" : "red";

    return (
        <tr>
            <td>
                <div className="form-check">
                    <input disabled={disabled} onChange={onChange} type="checkbox" className="form-check-input" id={modifier.id} />
                    <label className="form-check-label" htmlFor={modifier.id}>
                        {modifier.name}
                    </label>
                </div>
            </td>
            <td>
                <b><span style={{color: modifierColor}}>({modifierText})</span></b>
            </td>
        </tr>
    );
};

ModifierCheckbox.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    modifier: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }),
};

export default ModifierCheckbox;