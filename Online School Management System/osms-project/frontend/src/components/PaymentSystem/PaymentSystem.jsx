import React, { useState } from 'react';

const PaymentSystem = () => {
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [transactionStatus, setTransactionStatus] = useState('');

    const handlePayment = () => {
        // Logic for processing payment
        // This is a placeholder for actual payment processing logic
        if (amount) {
            setTransactionStatus('Payment successful!');
        } else {
            setTransactionStatus('Please enter a valid amount.');
        }
    };

    return (
        <div className="payment-system">
            <h2>Payment System</h2>
            <div>
                <label>
                    Amount:
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Payment Method:
                    <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <option value="Credit Card">Credit Card</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </label>
            </div>
            <button onClick={handlePayment}>Pay Now</button>
            {transactionStatus && <p>{transactionStatus}</p>}
        </div>
    );
};

export default PaymentSystem;