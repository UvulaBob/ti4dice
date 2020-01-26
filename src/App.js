import React, {useState} from 'react';
import ShipButton from './components/ShipButton';
import ResultItem from './components/ResultItem';
import ShipDefinitions from './lib/ShipDefinitions';
import ModifierCheckbox from './components/ModifierCheckbox';
import ModifierDefinitions from './lib/ModifierDefinitions';

const App = () => {
    const [fleet, setFleet] = useState(
        {
            "carrier": [],
            "cruiser": [],
            "destroyer": [],
            "dreadnought": [],
            "fighter": [],
            "warsun": []
        }
    );

    const [combatStarted, setCombatStarted] = useState(false);
    const [activeModifierIds, setActiveModifierIds] = useState([]);

    const handleModifierCheckboxChange = (e) => {
        let updatedActiveModifierIds = Object.assign([], activeModifierIds);
        if (updatedActiveModifierIds.includes(e.target.id)) {
            updatedActiveModifierIds.splice(activeModifierIds.indexOf(e.target.id), 1);
        } else {
            updatedActiveModifierIds.push(e.target.id);
        }
        setActiveModifierIds(updatedActiveModifierIds);
    };

    const handleShipButtonClick = (e) => {
        const shipId = e.target.id;
        const newFleet = Object.assign({}, fleet);
        newFleet[shipId].push(ShipDefinitions[shipId]);
        setFleet(newFleet);
    };

    const handleRollDiceButtonClick = () => {
        setCombatStarted(true);
    };


    let resultItems = [];
    if (combatStarted) {
        resultItems =  Object.keys(fleet).filter((shipType) => {
            return fleet[shipType].length > 0;
        }).map((shipType) => {
            return <ResultItem key={shipType} activeModifierIds={activeModifierIds}
                               ship={ShipDefinitions[shipType]} shipCount={fleet[shipType].length}/>
        })
    }

    const shipButtons = Object.keys(fleet).map((shipId) =>
        <ShipButton key={shipId} shipCount={fleet[shipId].length} disabled={combatStarted} onClick={handleShipButtonClick} ship={ShipDefinitions[shipId]} />
    );

    const modifierCheckboxes = Object.keys(ModifierDefinitions).map((modifierId =>
        <ModifierCheckbox key={modifierId} disabled={combatStarted} onChange={handleModifierCheckboxChange} id={modifierId}/>)
    );

    return (
        <div className="App">
            <div className="container-fluid">
                <div className="jumbotron jumbotron-fluid text-center">
                    <h1 className="display-1">Twilight Imperium 4 Dice Roller</h1>
                    <h6>This totally didn't take more time to code than all the time that will ever be spent rolling dice.</h6>
                </div>
                <div className="row">
                    <div className="col border">
                        <div className="row">
                            <h1><u>Fleet</u></h1>
                        </div>
                        <div className="row">
                            <table style={{width: "auto"}} className="table table-borderless table-sm">
                                <tbody>
                                    {shipButtons}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col border">
                        <div className="row">
                            <h1><u>Results</u></h1>
                        </div>
                        {resultItems}
                    </div>
                    <div className="col border">
                        <div className="row">
                            <h1><u>Modifiers</u></h1>
                        </div>
                        <div className="row">
                            <table style={{width: "auto"}} className="table table-borderless table-sm">
                                <tbody>
                                  {modifierCheckboxes}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <button type="button" className="btn btn-success border" disabled={combatStarted} onClick={handleRollDiceButtonClick}>Roll Dice</button>
                </div>
            </div>
        </div>
    );
};

export default App;
