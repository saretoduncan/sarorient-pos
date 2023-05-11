"use client";
import { usePaymentMethodStore } from "@/store";
import { useState, useEffect } from "react";
export default function PaymentMethod() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const setIsMpesa = usePaymentMethodStore(
    (state) => state.togglePaymentMethod
  );
  const onStart = () => {
    setSelectedOption("cash");
    // setIsMpesa(false);
  };
  useEffect(() => {
    onStart();
  }, []);

  useEffect(() => {
    if (selectedOption === "cash") {
      setIsMpesa(false);
    } else if (selectedOption === "mpesa") {
      setIsMpesa(true);
    }
  }, [selectedOption]);

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
