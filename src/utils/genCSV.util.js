const { donateFoodList } = require("@/models/donate_db");

function convertToCSV(data) {
  const header = Object.keys(data[0]).join(",");
  const rows = data.map((item) => Object.values(item).join(","));
  return `${header}\n${rows.join("\n")}`;
}

const csvData = convertToCSV(donateFoodList);
console.log(csvData);
