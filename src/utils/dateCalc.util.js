function calculateDaysRemaining(dateExpired) {
  const currentDate = new Date();
  const expirationDate = new Date(dateExpired);

  const differenceInMilliseconds = expirationDate - currentDate;

  const differenceInDays = Math.ceil(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  return differenceInDays;
}

function calculateTotalDays(dateCreated, dateExpired) {
  const startDate = new Date(dateCreated);
  const endDate = new Date(dateExpired);

  const differenceInMilliseconds = endDate - startDate;

  const differenceInDays = Math.ceil(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  return differenceInDays;
}

export { calculateDaysRemaining, calculateTotalDays };
