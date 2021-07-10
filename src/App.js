import {
    useState,
    useEffect
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


function App() {
    const [provider, setProvider] = useState(
      new ethers.providers.Web3Provider(window.ethereum)
    );
    const [signer, setSigner] = useState();
    const [account, setAccount] = useState();

    useEffect(() => {
      setProvider(new ethers.providers.Web3Provider(window.ethereum));
    }, [])

    async function connectOnClick() {
      const [_account] = await provider.send("eth_requestAccounts", []);
      setAccount(_account);
      const _signer = provider.getSigner();
      setSigner(_signer);
    };

    return (
        <Router>
            <Header connectButtonOnClick={connectOnClick} />
            <center>
            <p>{account ? `Connected to ${account.slice(0, 6)}...${account.slice(38)}` : ''}</p>
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
              <p>This unfunded site is a friggin work in progress! It is without warranty and user assumes all risks, whatever they may be!</p>
            </center>
        </Router>
    );
}

export default App;
