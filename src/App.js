import {
    useState,
} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import { ethers } from 'ethers';

import Header from './components/Header';
import Home from './pages/Home';
import AavePortal from './pages/AavePortal';
import CompoundPortal from './pages/CompoundPortal';
import UniPortal from './pages/UniPortal';


let provider;
window.ethereum.enable()
.then(provider = new ethers.providers.Web3Provider(window.ethereum));
const signer = provider.getSigner();

function App() {
    // const [ chainId, setChainId ] = useState(31337);

    async function connectOnClick() {
        const _chainId = (await provider.getNetwork()).chainId;
        const address = await signer.getAddress();
        alert(`Connected to chainId: ${_chainId} with account: ${address}`);
        // if (_chainId != chainId) {
        //     alert(`Invalid chainId: ${_chainId}. Please connect to ${chainId}`);
        // } else {
        //     const address = await signer.getAddress();
        //     alert(`Connected to chainId: ${chainId} with account: ${address}`);
        // }
    };

    return (
        <Router>
            <Header connectButtonOnClick={connectOnClick} />

            <Switch>

                <Route exact path="/">
                    <Home provider={provider} />
                </Route>

                <Route path="/aave-portal">
                    <AavePortal provider={provider} signer={signer} />
                </Route>

                <Route path="/compound-portal">
                    <CompoundPortal provider={provider} signer={signer} />
                </Route>

                <Route path="/uni-portal">
                    <UniPortal provider={provider} signer={signer} />
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
