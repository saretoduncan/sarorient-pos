'use client'
import { useState, useEffect } from "react";
export default function PaymentMethod() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => {
    setSelectedOption(() => "cash");
  }, []);
  return (
    <>
      <div className="flex space-x-2">
        <div className="space-x-1">
          <input
            type="radio"
            id="cash"
            name="payment"
            value="cash"
            defaultChecked={selectedOption === "cash"}
            onChange={handleOptionChange}
          />
          <label htmlFor="cash">Cash</label>
        </div>
        <div className="space-x-1">
          <input
            type="radio"
            id="mpesa"
            name="payment"
            value="mpesa"
            checked={selectedOption === "mpesa"}
            onChange={handleOptionChange}
          />
          <label htmlFor="mpesa">M-pesa</label>
        </div>
      </div>
    </>
  );
}
