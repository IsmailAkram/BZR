const CURRENCY_FORMATTER = new Intl.NumberFormat("en-us", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0,
});

export function formatCurrency(amount: number) {
  return CURRENCY_FORMATTER.format(amount);
}

const NUMBER_FORMATTER = new Intl.NumberFormat("en-us");

export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number);
}
