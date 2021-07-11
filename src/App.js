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


const providerViewKey = 'https://eth-mainnet.alchemyapi.io/v2/FWe3jQwzdHAOmCEys_jrrXL3GNnpMAMg';

function App() {
    const [provider, setProvider] = useState(
      new ethers.providers.JsonRpcProvider(providerViewKey)
    );
    const [signer, setSigner] = useState();
    const [account, setAccount] = useState();


    async function connectOnClick() {
      if (typeof window.ethereum === undefined) {
        alert('This website requires the Metamask Extension. Head to https://metamask.io/ to install it!')
      } else {
        const _provider = new ethers.providers.Web3Provider(window.ethereum);
        const [_account] = await _provider.send("eth_requestAccounts", []);
        const _signer = _provider.getSigner();
        setProvider(_provider);
        setAccount(_account);
        setSigner(_signer);
      }
    };

    return (
        <Router>
            <Header connectButtonOnClick={connectOnClick} />
            <center>
            <p>{
              account ?
              `Connected to ${account.slice(0, 6)}...${account.slice(38)}`
              : ''
            }</p>
            </center>

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
            <center>
              <p>This site is a work in progress. It is without warranty and any user assumes all risks, whatever they may be!</p>
            </center>
        </Router>
    );
}

export default App;
