export function getYearByTimezone(timezone: string) {
  const date = new Date(timezone);
  return date.getFullYear();
}
