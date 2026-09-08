const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const compact = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export function formatUsd(cents: number): string {
  return usd.format(cents / 100);
}

export function formatCompact(n: number): string {
  return compact.format(n);
}

export function formatDate(iso: string): string {
  return dateFmt.format(new Date(iso));
}

export function hashHue(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i += 1) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return h % 360;
}
