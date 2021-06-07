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
window.ethereum.enable().then(provider = new ethers.providers.Web3Provider(window.ethereum));
const signer = provider.getSigner();

function App() {
    const [ chainId, setChainId ] = useState(31337);

    async function connectOnClick() {
        const _chainId = (await provider.getNetwork()).chainId;
        if (_chainId != chainId) {
            alert(`Invalid chainId: ${_chainId}. Please connect to chainId: ${chainId}`);
        } else {
            alert(`Connected to chainId: ${chainId} with account: ${await signer.getAddress()}`);
        }
    };

    return (
        <Router>
            <Header connectButtonOnClick={connectOnClick} />

            <Switch>
            <Route exact path="/">
                <Home provider={provider}/>
            </Route>

            <Route path="/aave-portal">
                <AavePortal provider={provider} signer={signer}/>
            </Route>

            <Route path="/compound-portal">
                <CompoundPortal />
            </Route>

            <Route path="/uni-portal">
                <UniPortal />
            </Route>



            </Switch>
        </Router>
    );
}

export default App;
