import {BigNumber} from '@ethersproject/bignumber';

export const GRAPH_URL = 'https://api.thegraph.com/subgraphs/name/thehoneypot/honey-dex';
export const RPC_URL = 'https://arb1.arbitrum.io/rpc';

export const ZERO = BigNumber.from('0');
export const ONE_TOKEN = BigNumber.from('1000000000000000000');
export const TOTAL_SUPPLY = ONE_TOKEN.mul(538_000_000);

export const HONEY_ADDRESS = '0xdE31e75182276738B0c025daa8F80020A4F2fbFE';
export const WETH_ADDRESS = '0x82af49447d8a07e3bd95bd0d56f35241523fbab1';
export const WETH_HONEY_ADDRESS = '0xfC1aCF07202f6fac951947427b79284d86a965d2';
export const FACTORY_ADDRESS = 'NOT SET';
export const COMMUNITY_TREASURY_ADDRESS = 'NOT SET';

// https://github.com/thehoneypot/interface/blob/master/src/state/stake/hooks.ts
export const STAKING_ADDRESSES = [
  '0xf85CD66461088284480a455D2B2933E69B789BAF', //Masterchef
  '0x36cac50F3F3aA643B01618189eeF94c613b347fE' //Single Staking Addresses
];

export const ERC20_ABI = [
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{type: 'uint256', name: '', internalType: 'uint256'}],
    name: 'balanceOf',
    inputs: [{type: 'address', name: '', internalType: 'address'}],
    constant: true,
  },
];
export const STAKING_REWARDS_ABI = [
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{type: 'address', name: '', internalType: 'contract IERC20'}],
    name: 'stakingToken',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{type: 'uint256', name: '', internalType: 'uint256'}],
    name: 'rewardRate',
    inputs: [],
  },
];
export const PAIR_ABI = [
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{type: 'address', name: '', internalType: 'address'}],
    name: 'token0',
    inputs: [],
    constant: true,
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{type: 'address', name: '', internalType: 'address'}],
    name: 'token1',
    inputs: [],
    constant: true,
  },
];
