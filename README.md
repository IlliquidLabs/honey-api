# Honey API

API for querying key values for Honey and the HONEY token

## Development

[Wrangler](https://developers.cloudflare.com/workers/cli-wrangler) is used for a local development server. This is effectively a proxy-service that (nearly) replicates the Cloudflare Worker runtime.

Anyone can develop this repository locally. Fill in `account_id` in the `wrangler.toml` file. This value may (and should) be your own personal `account_id`.

## Location

The API is available at `https://api.thehoneypot.finance`

## Methods

All methods accept a GET request.

### Honey TVL

Get the total value locked in Honey in USD.

Endpoint: `/honey/tvl`

Example call: `curl --location --request GET 'https://api.thehoneypot.finance/honey/tvl'`

### Honey Volume

Get the total lifetime volume of swaps on Honey in USD.

Endpoint: `/honey/total-volume`

Example call: `curl --location --request GET 'https://api.thehoneypot.finance/honey/total-volume'`

### HONEY Total Supply

Get the total lifetime supply of HONEY. HONEY is a hard-capped asset and this value will never increase.

#### 18 Decimal Denomination

The HONEY token has 18 decimals. Query the total supply denominated in units of "wei." With this method, a result of 1 HONEY would return the value `1000000000000000000`.

Endpoint: `/honey/total-supply`

Example call: `curl --location --request GET 'https://api.thehoneypot.finance/honey/total-supply'`

#### Whole Token Denomination

The HONEY token has 18 decimals. Query the total supply denominated in units of whole HONEY. With this method, a result of 1 HONEY would return the value `1`.

Endpoint: `/honey/total-supply-whole`

Example call: `curl --location --request GET 'https://api.thehoneypot.finance/honey/total-supply-whole'`

### HONEY Circulating Supply

Get the current circulating supply of HONEY. This value is calculated to be the total supply of HONEY minus the locked, unvested HONEY and also excludes the locked Honey community treasury.

#### 18 Decimal Denomination

The HONEY token has 18 decimals. Query the circulating supply denominated in units of "wei." With this method, a result of 1 HONEY would return the value `1000000000000000000`.

Endpoint: `/honey/circulating-supply`

Example call: `curl --location --request GET 'https://api.thehoneypot.finance/honey/circulating-supply'`

#### Whole Token Denomination

The HONEY token has 18 decimals. Query the circulating supply denominated in units of whole HONEY. With this method, a result of 1 HONEY would return the value `1`.

Endpoint: `/honey/circulating-supply-whole`

Example call: `curl --location --request GET 'https://api.thehoneypot.finance/honey/circulating-supply-whole'`

### Honey Community Treasury Supply

Get the current HONEY supply of the Honey Community Treasury.

#### 18 Decimal Denomination

The HONEY token has 18 decimals. Query the balance denominated in units of "wei." With this method, a result of 1 HONEY would return the value `1000000000000000000`.

Endpoint: `/honey/community-treasury`

Example call: `curl --location --request GET 'https://api.thehoneypot.finance/honey/community-treasury'`

#### Whole Token Denomination

The HONEY token has 18 decimals. Query the circulating supply denominated in units of whole HONEY. With this method, a result of 1 HONEY would return the value `1`.

Endpoint: `/honey/community-treasury-whole`

Example call: `curl --location --request GET 'https://api.thehoneypot.finance/honey/community-treasury-whole'`

### Honey Number of Address

Get the total lifetime number of unique address to transact on Honey.

Endpoint: `/honey/addresses`

Example call: `curl --location --request GET 'https://api.thehoneypot.finance/honey/addresses'`

### Honey Average Swap Size

Get the average size of each swap on Honey in USD.

Endpoint: `/honey/transaction-average`

Example call: `curl --location --request GET 'https://api.thehoneypot.finance/honey/transaction-average'`

### Honey Median Swap Size

Get the median size of each swap on Honey in USD.

Endpoint: `/honey/transaction-median`

Example call: `curl --location --request GET 'https://api.thehoneypot.finance/honey/transaction-median'`

### Honey Average Percentage Reward Rate

Get the HONEY Reward Rate of the inputted StakingRewards contract address.
Refer to [constants.ts](./src/constants.ts) to find the supported contract addresses.

Endpoint: `/honey/apr/{address}`

Example call: `curl --location --request GET 'https://api.thehoneypot.finance/honey/apr/0x417c02150b9a31bcacb201d1d60967653384e1c6'`
