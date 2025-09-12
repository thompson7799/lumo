export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
  return date.toLocaleDateString('en-GB', options);
}

export const getDateRange = (start: string, end: string) => {
  if (start === end || !end) {
    return formatDate(start);
  }
  const startDate = new Date(start);
  const endDate = new Date(end);
  if (startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear()) {
    return `${startDate.getDate()} - ${formatDate(end)}`;
  }
  return `${formatDate(start)} - ${formatDate(end)}`;
}

export const formatHours = (hours: number) => {
  if (hours < 10) {
    const formatted = hours.toFixed(1);
    return formatted.endsWith('.0') ? formatted.slice(0, -2) : formatted;
  }
  return Math.round(hours).toString();
}