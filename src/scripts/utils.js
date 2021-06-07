import { ethers } from 'ethers';


function formatValue(value) {
    return Number(Number(value).toFixed(0)).toLocaleString();
}

function aaveContract(provider) {
    return new ethers.Contract(
        '0xb7e383ef9b1e9189fc0f71fb30af8aa14377429e',
        [
            'function getVotingPowerAt(address user, uint256 blockNumber) public view returns (uint256)',
            'function submitVote(uint256 proposalId, bool support) external'
        ],
        provider
    );
}

function compoundContract(provider) {
    return new ethers.Contract(
        '0xc00e94cb662c3520282e6f5717214004a7f26888',
        ['function getCurrentVotes(address account) public view returns (uint96)'],
        provider
    );
}

function uniContract(provider) {
    return new ethers.Contract(
        '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
        ['function getCurrentVotes(address account) public view returns (uint96)'],
        provider
    );
}

function getPrices() {
    return fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=aave,compound-governance-token,uniswap&vs_currencies=usd'
    ).then((response) =>  response.json())
    .then(
        (data) => {
        const aavePrice = data['aave']['usd'];
        const compoundPrice = data['compound-governance-token']['usd'];
        const uniPrice = data['uniswap']['usd'];
        return { aavePrice, compoundPrice, uniPrice };
        }
    )
    .catch(
        (err) => {
            console.error(err);
        }
    );
}

async function getDelegates(provider) {
    const aave = aaveContract(provider);
    const compound = compoundContract(provider);
    const uni = uniContract(provider);

    const blockNumber = await provider.getBlockNumber();
    const aaveDelegates = Number(await aave.getVotingPowerAt(
        '0x47C125DEe6898b6CB2379bCBaFC823Ff3f614770', blockNumber
    ))/1e18;
    const compoundDelegates = Number(await compound.getCurrentVotes(
        '0x47C125DEe6898b6CB2379bCBaFC823Ff3f614770'
    ))/1e18;
    const uniDelegates = Number(await uni.getCurrentVotes(
        '0x47C125DEe6898b6CB2379bCBaFC823Ff3f614770'
    ))/1e18;
    return { aaveDelegates, compoundDelegates, uniDelegates };
}

async function getTableData(provider) {
    const { aavePrice, compoundPrice, uniPrice } = await getPrices();
    const {
        aaveDelegates,
        compoundDelegates,
        uniDelegates
    } = await getDelegates(provider);
    return [
        {
            delegation: `${formatValue(aaveDelegates)} AAVE`,
            value: `$ ${formatValue(aaveDelegates * aavePrice)}`
        },
        {
            delegation: `${formatValue(compoundDelegates)} COMP`,
            value: `$ ${formatValue(compoundDelegates * compoundPrice)}`
        },
        {
            delegation: `${formatValue(uniDelegates)} UNI`,
            value: `$ ${formatValue(uniDelegates * uniPrice)}`
        }
    ];
}

export {
    aaveContract,
    compoundContract,
    uniContract,
    getTableData
};
