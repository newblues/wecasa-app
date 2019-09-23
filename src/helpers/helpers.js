export function formatPrice(price) {
  const formatedPrice = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(price / 100);
  return formatedPrice;
}

export function timeConvert(n) {
  const num = n;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  if (num <= 60) {
    return `${num}min`;
  }
  return `${rhours}h${rminutes}min`;
}
