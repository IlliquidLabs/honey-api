import {Router} from 'worktop';
import * as CORS from 'worktop/cors';
import * as Cache from 'worktop/cache';
import {send} from 'worktop/response';
import * as Honey from './routes/thehoneypot';
import * as HONEY from './routes/honey';

const API = new Router();

API.prepare = CORS.preflight({
  origin: true,
  headers: ['Cache-Control', 'Content-Type'],
  methods: ['GET'],
});

API.add('GET', '/', () => {
  const text = 'Refer to https://github.com/thehoneypot/honey-api for documentation.';

  return send(200, text, {
    'Cache-Control': 'public,s-maxage=31536000,immutable',
  });
});

API.add('GET', '/honey/tvl', HONEY.tvl);
API.add('GET', '/honey/total-volume', HONEY.volume);
API.add('GET', '/honey/total-supply', HONEY.supply);
API.add('GET', '/honey/total-supply-whole', HONEY.supplyWhole);
API.add('GET', '/honey/circulating-supply', HONEY.circulating);
API.add('GET', '/honey/circulating-supply-whole', HONEY.circulatingWhole);
API.add('GET', '/honey/community-treasury', HONEY.treasury);
API.add('GET', '/honey/community-treasury-whole', HONEY.treasuryWhole);

API.add('GET', '/honey/addresses', Honey.addresses);
API.add('GET', '/honey/transaction-average', Honey.average);
// API.add('GET', '/honey/transaction-median', Honey.median);
API.add('GET', '/honey/apr/:address', Honey.apr);

Cache.listen(async (event) => {
  return API.run(event.request, event);
});
