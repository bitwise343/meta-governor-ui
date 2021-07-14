import { ethers } from 'ethers';


function uniContract(provider) {
    return new ethers.Contract(
        '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
        [
            'function getCurrentVotes(address account) public view returns (uint96)',
            'function proposalCount() public view returns (uint);'
        ],
        provider
    );
}


    'function quorumVotes() public pure returns (uint);',
    'function proposalThreshold() public pure returns (uint);',


    function proposalMaxOperations() public pure returns (uint) { return 10; } // 10 actions
    function votingDelay() public pure returns (uint) { return 1; } // 1 block
    function votingPeriod() public pure returns (uint) { return 5_760; } // ~1 day in blocks (assuming 15s blocks)
