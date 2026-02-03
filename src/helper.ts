export const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'short',
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

export const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});