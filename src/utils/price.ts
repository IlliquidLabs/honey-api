export async function getHoneyPrice() {
  const _ = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=honey-pot-beekeepers&vs_currencies=usd',
  );

  const {
    'honey-pot-beekeepers': {usd},
  } = await _.json();

  return usd;
}
