function convertToRupiah(target) {
  const formattedTarget = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(target);
  return formattedTarget;
}

function calculatePercentage(acc, target) {
  const accumulated = parseFloat(acc.replace(/[^0-9.-]+/g, ""));
  const targetAmount = parseFloat(target.replace(/[^0-9.-]+/g, ""));

  if (targetAmount === 0) {
    return 0;
  }

  const percentage = (accumulated / targetAmount) * 100;
  return percentage.toFixed(0);
}

export { convertToRupiah, calculatePercentage };
