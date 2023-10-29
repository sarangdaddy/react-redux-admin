export const formatDateToLocalTimezone = (date: Date): string => {
  const offset = date.getTimezoneOffset();
  const adjustedDate = new Date(date.getTime() - offset * 60 * 1000);
  const formattedDate = adjustedDate.toISOString().split('T')[0];

  return formattedDate;
};
