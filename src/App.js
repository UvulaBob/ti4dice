import React, {Component} from 'react';
import ShipButton from './components/ShipButton';
import FleetItem from './components/FleetItem';
import ResultItem from './components/ResultItem';
import ShipDefinitions from './lib/ShipDefinitions';
import ModifierCheckbox from './components/ModifierCheckbox';

class App extends Component {
    state = {
        fleet: {
            "carrier": [],
            "cruiser": [],
            "destroyer": [],
            "dreadnought": [],
            "fighter": [],
            "warsun": []
        },
        combatStarted: false
    };

    activeModifierIds = [];

    handleModifierCheckboxChange = (e) => {
        if (this.activeModifierIds.includes(e.target.id)) {
            this.activeModifierIds = this.activeModifierIds.filter((activeModifier) => { return activeModifier !== e.target.id});
        } else {
            this.activeModifierIds.push(e.target.id);
        }
    };


    handleShipButtonClick = (e) => {
        if (this.state.combatStarted) {
            return;
        }
        const shipName = e.target.name;
        const newState = Object.assign({}, this.state);
        newState.fleet[shipName].push(ShipDefinitions[shipName]);
        this.setState(newState);
    };

    handleRollDiceButtonClick = () => {
        this.setState({combatStarted: true});
    };

    render() {
        const resultItems = [];
        if (this.state.combatStarted) {
            for (let shipType in this.state.fleet) {
                const shipCount = this.state.fleet[shipType].length;
                if (shipCount > 0) {
                    resultItems.push(<ResultItem key={resultItems.length - 1}  activeModifierIds={this.activeModifierIds} ship={ShipDefinitions[shipType]} shipCount={shipCount} />);
                }
            }
        }

        const shipButtons = [];
        for (let shipType in this.state.fleet) {
            shipButtons.push(<ShipButton key={shipType + "_button"} disabled={this.state.combatStarted} onClick={this.handleShipButtonClick} ship={ShipDefinitions[shipType]} />);
        }

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
                                {shipButtons}
                            </div>
                            <div className="row">
                                <ul style={{listStyleType:"none", margin:"0", padding:"0"}}>
                                    <FleetItem ship={ShipDefinitions["carrier"]} shipCount={this.state.fleet.carrier.length}/>
                                    <FleetItem ship={ShipDefinitions["cruiser"]} shipCount={this.state.fleet.cruiser.length}/>
                                    <FleetItem ship={ShipDefinitions["destroyer"]} shipCount={this.state.fleet.destroyer.length}/>
                                    <FleetItem ship={ShipDefinitions["dreadnought"]} shipCount={this.state.fleet.dreadnought.length}/>
                                    <FleetItem ship={ShipDefinitions["fighter"]} shipCount={this.state.fleet.fighter.length}/>
                                    <FleetItem ship={ShipDefinitions["warsun"]} shipCount={this.state.fleet.warsun.length}/>
                                </ul>
                            </div>
                        </div>
                        <div className="col border">
                            <div className="row">
                                <h1><u>Results</u></h1>
                            </div>
                            <div className="row">
                                <ul style={{listStyleType:"none", margin:"0", padding:"0"}}>
                                    {resultItems}
                                </ul>
                            </div>
                        </div>
                        <div className="col border">
                            <div className="row">
                                <h1><u>Modifiers</u></h1>
                            </div>
                            <ModifierCheckbox onChange={this.handleModifierCheckboxChange} id="upgradedCruisers" friendlyText="Upgraded Cruisers" modifier="+1"/>
                            <ModifierCheckbox onChange={this.handleModifierCheckboxChange} id="upgradedDestroyers" friendlyText="Upgraded Destroyers" modifier="+1"/>
                            <ModifierCheckbox onChange={this.handleModifierCheckboxChange} id="upgradedFighters" friendlyText="Upgraded Fighters" modifier="+1"/>
                            <ModifierCheckbox onChange={this.handleModifierCheckboxChange} id="moraleBoost" friendlyText="Morale Boost" modifier="+1"/>
                            <ModifierCheckbox onChange={this.handleModifierCheckboxChange} id="fighterPrototype" friendlyText="Fighter Prototype" modifier="+1"/>
                            <ModifierCheckbox onChange={this.handleModifierCheckboxChange} id="l1z1xDreadnought" friendlyText="L1Z1X: Super Dreadnought II" modifier="+1"/>
                            <ModifierCheckbox onChange={this.handleModifierCheckboxChange} id="naaluCrystalFighter1" friendlyText="Naalu: Crystal Fighter I" modifier="+1"/>
                            <ModifierCheckbox onChange={this.handleModifierCheckboxChange} id="naaluCrystalFighter2" friendlyText="Naalu: Crystal Fighter II" modifier="+1"/>
                            <ModifierCheckbox onChange={this.handleModifierCheckboxChange} id="sardakkUnrelenting" friendlyText="Sardakk N'orr: Unrelenting" modifier="+1"/>
                            <ModifierCheckbox onChange={this.handleModifierCheckboxChange} id="jolNarFragile" friendlyText="Jol-Nar: Fragile" modifier="-1"/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <button type="button" className="btn btn-success border" disabled={this.state.combatStarted} onClick={this.handleRollDiceButtonClick}>Roll Dice</button>
                    </div>
                </div>
            </div>
            );
    }
}

export default App;
