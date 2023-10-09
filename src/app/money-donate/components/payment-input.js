import React from 'react'

function PaymentInput() {
  return (
    <div className="flex flex-col">
      <select
        id=""
        className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected value="">Pilih Metode</option>
        <option value="Bri">Bri</option>
        <option value="BCA">BCA</option>
        <option value="Mandiri">Mandiri</option>
        <option value="BNI">BNI</option>
      </select>
    </div>
  );
}

export default PaymentInput;