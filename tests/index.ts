import * as assert from 'uvu/assert';
import {STAKING_ADDRESSES} from '../src/constants';
import {describe, get} from './setup/env';

describe('/', (it) => {
  it('/', async () => {
    const {statusCode, data, headers} = await get('/');

    assert.is(statusCode, 200);
    assert.is(data, 'Refer to https://github.com/thehoneypot/honey-api for documentation.');
    assert.is(headers['cache-control'], 'public,s-maxage=31536000,immutable');
  });
});

describe('/honey', (it) => {
  it('/honey/tvl', async () => {
    const {statusCode, data, headers} = await get('/honey/tvl');

    assert.is(statusCode, 200);
    assert.match(data, /^[.?\d]+/);
    assert.is(headers['cache-control'], 'public,s-maxage=30');
  });

  it('/honey/total-volume', async () => {
    const {statusCode, data, headers} = await get('/honey/total-volume');

    assert.is(statusCode, 200);
    assert.match(data, /^[.?\d]+/);
    assert.is(headers['cache-control'], 'public,s-maxage=30');
  });

  it('/honey/total-supply', async () => {
    const {statusCode, data, headers} = await get('/honey/total-supply');

    assert.is(statusCode, 200);
    assert.is(data, '538000000000000000000000000');
    assert.is(headers['cache-control'], 'public,s-maxage=31536000,immutable');
  });

  it('/honey/total-supply-whole', async () => {
    const {statusCode, data, headers} = await get('/honey/total-supply-whole');

    assert.is(statusCode, 200);
    assert.is(data, '538000000');
    assert.is(headers['cache-control'], 'public,s-maxage=31536000,immutable');
  });

  it('/honey/circulating-supply', async () => {
    const {statusCode, data, headers} = await get('/honey/circulating-supply');

    assert.is(statusCode, 200);
    assert.match(data, /^\d+/);
    assert.is(headers['cache-control'], 'public,s-maxage=30');
  });

  it('/honey/circulating-supply-whole', async () => {
    const {statusCode, data, headers} = await get('/honey/circulating-supply-whole');

    assert.is(statusCode, 200);
    assert.match(data, /^\d+/);
    assert.is(headers['cache-control'], 'public,s-maxage=30');
  });

  it('/honey/community-treasury', async () => {
    const {statusCode, data, headers} = await get('/honey/community-treasury');

    assert.is(statusCode, 200);
    assert.match(data, /^\d+/);
    assert.is(headers['cache-control'], 'public,s-maxage=30');
  });

  it('/honey/community-treasury-whole', async () => {
    const {statusCode, data, headers} = await get('/honey/community-treasury-whole');

    assert.is(statusCode, 200);
    assert.match(data, /^\d+/);
    assert.is(headers['cache-control'], 'public,s-maxage=30');
  });
});

describe('/honey', (it) => {
  it('/honey/addresses', async () => {
    const {statusCode, data, headers} = await get('/honey/addresses');

    assert.is(statusCode, 200);
    assert.match(data, /^[.?\d]+/);
    assert.is(headers['cache-control'], 'public,s-maxage=30');
  });

  it('/honey/transaction-average', async () => {
    const {statusCode, data, headers} = await get('/honey/transaction-average');

    assert.is(statusCode, 200);
    assert.match(data, /^[.?\d]+/);
    assert.is(headers['cache-control'], 'public,s-maxage=30');
  });

  // TODO: it('/honey/transaction-median', async () => {
  //   const {statusCode, data, headers} = await get('/honey/transaction-median');

  //   assert.is(statusCode, 200);
  //   assert.match(data, /^[.?\d]+/);
  //   assert.is(headers['cache-control'], "public,s-maxage=30")
  // });

  void Promise.all(
    STAKING_ADDRESSES.map((stakingAddress) => {
      it(`/honey/apr/${stakingAddress}`, async () => {
        const {statusCode, data, headers} = await get(`/honey/apr/${stakingAddress}`);

        assert.is(statusCode, 200);
        assert.ok(data.swapFeeApr !== undefined);
        assert.ok(data.stakingApr !== undefined);
        assert.ok(data.combinedApr !== undefined);
        assert.is(headers['content-type'], 'application/json;charset=utf-8');
      });
    }),
  );
});
