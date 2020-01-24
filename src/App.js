import React, {Component} from 'react';
import ShipButton from './components/ShipButton';
import FleetItem from './components/FleetItem';
import ResultItem from './components/ResultItem';
import ShipDefinitions from './lib/ShipDefinitions';

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

    handleShipButtonClick = (e) => {
        if (this.state.combatStarted) {
            return;
        }
        const shipName = e.target.name;
        const newState = Object.assign({}, this.state);
        newState.fleet[shipName].push(ShipDefinitions[shipName]);
        this.setState(newState);
    };

    handleRollDiceButtonClick = (e) => {
        this.setState({combatStarted: true});
    };

    render() {
        const resultItems = [];
        if (this.state.combatStarted) {
            for (let shipType in this.state.fleet) {
                const shipCount = this.state.fleet[shipType].length;
                if (shipCount > 0) {
                    resultItems.push(<ResultItem key={resultItems.length - 1 } ship={ShipDefinitions[shipType]} shipCount={shipCount} />);
                }
            }
        }

        const shipButtons = [];
        for (let shipType in this.state.fleet) {
            shipButtons.push(<ShipButton key={shipType + "_button"}disabled={this.state.combatStarted} onClick={this.handleShipButtonClick} ship={ShipDefinitions[shipType]} />);
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
                                <h2><u>Your Fleet</u></h2>
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
                            <div className="row">
                                <button type="button" className="btn btn-success border" disabled={this.state.combatStarted} onClick={this.handleRollDiceButtonClick}>Roll Dice</button>
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
                            <div className="row">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="upgradedCruisers" />
                                    <label className="form-check-label" htmlFor="upgradedCruisers">
                                        Upgraded Cruisers
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="upgradedDestroyers" />
                                    <label className="form-check-label" htmlFor="upgradedDestroyers">
                                        Upgraded Destroyers
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="upgradedFighters" />
                                    <label className="form-check-label" htmlFor="upgradedFighters">
                                        Upgraded Fighters
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="l1z1xDreadnought" />
                                    <label className="form-check-label" htmlFor="l1z1xDreadnought">
                                        L1Z1X: Super Dreadnought II
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="naaluCrystalFighter1" />
                                    <label className="form-check-label" htmlFor="naaluCrystalFighter1">
                                        Naalu: Crystal Fighter I
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="naaluCrystalFighter2" />
                                    <label className="form-check-label" htmlFor="naaluCrystalFighter2">
                                        Naalu: Crystal Fighter II
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="jolNarFragile" />
                                    <label className="form-check-label" htmlFor="jolNarFragile">
                                        Jol-Nar: Fragile
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="sardakkUnrelenting" />
                                    <label className="form-check-label" htmlFor="sardakkUnrelenting">
                                        Sardakk N'orr: Unrelenting
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="fighterPrototype" />
                                    <label className="form-check-label" htmlFor="fighterPrototype">
                                        Fighter Prototype
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="moraleBoost" />
                                    <label className="form-check-label" htmlFor="moraleBoost">
                                        Morale Boost
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default App;
