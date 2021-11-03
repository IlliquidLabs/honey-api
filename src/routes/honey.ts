import type {Handler} from 'worktop';
import {send} from 'worktop/response';
import * as QUERIES from '../utils/queries';
import * as gql from '../utils/gql';
import {getHONEYBalance} from '../utils/calls';
import {
  TOTAL_SUPPLY,
  ONE_TOKEN,
  COMMUNITY_TREASURY_ADDRESS,
} from '../constants';

// GET /honey/tvl
export const tvl: Handler = async function () {
  const result = await gql.request(QUERIES.FACTORY);

  const text = Number.parseFloat(result.pangolinFactories[0].totalLiquidityUSD).toFixed(2);

  return send(200, text, {
    'Cache-Control': 'public,s-maxage=30',
  });
};

// GET /honey/total-volume
export const volume: Handler = async function () {
  const result = await gql.request(QUERIES.FACTORY);

  const text = Number.parseFloat(result.pangolinFactories[0].totalVolumeUSD).toFixed(2);

  return send(200, text, {
    'Cache-Control': 'public,s-maxage=30',
  });
};

// GET /honey/total-supply
export const supply: Handler = async function () {
  const text = TOTAL_SUPPLY.toString();
  return send(200, text, {
    'Cache-Control': 'public,s-maxage=31536000,immutable',
  });
};

// GET /honey/total-supply-whole
export const supplyWhole: Handler = async function () {
  const text = TOTAL_SUPPLY.div(ONE_TOKEN).toString();
  return send(200, text, {
    'Cache-Control': 'public,s-maxage=31536000,immutable',
  });
};

// GET /honey/circulating-supply
export const circulating: Handler = async function () {
  const text = TOTAL_SUPPLY.sub(await getHONEYBalance(TREASURY_VESTER_ADDRESS))
    .sub(await getHONEYBalance(COMMUNITY_TREASURY_ADDRESS))
    .toString();

  return send(200, text, {
    'Cache-Control': 'public,s-maxage=30',
  });
};

// GET /honey/circulating-supply-whole
export const circulatingWhole: Handler = async function () {
  const text = TOTAL_SUPPLY.sub(await getHONEYBalance(TREASURY_VESTER_ADDRESS))
    .sub(await getHONEYBalance(COMMUNITY_TREASURY_ADDRESS))
    .div(ONE_TOKEN)
    .toString();

  return send(200, text, {
    'Cache-Control': 'public,s-maxage=30',
  });
};

// GET /honey/community-treasury
export const treasury: Handler = async function () {
  const text = (await getHONEYBalance(COMMUNITY_TREASURY_ADDRESS)).toString();

  return send(200, text, {
    'Cache-Control': 'public,s-maxage=30',
  });
};

// GET /honey/community-treasury-whole
export const treasuryWhole: Handler = async function () {
  const text = (await getHONEYBalance(COMMUNITY_TREASURY_ADDRESS)).div(ONE_TOKEN).toString();

  return send(200, text, {
    'Cache-Control': 'public,s-maxage=30',
  });
};
