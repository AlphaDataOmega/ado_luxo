// IndividualUniversalProfile.sol
// SPDX-License-Identifier: MIT

import "@lukso/lsp-smart-contracts/contracts/UniversalProfile.sol";

pragma solidity ^0.8.0;

contract IndividualUniversalProfile is UniversalProfile {

    constructor() UniversalProfile(msg.sender) {
        // ..
    }
}