import React, { useState } from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';

const BeAMember = () => {
    const [selectedMembership, setSelectedMembership] = useState("");
    const [selectedPayment, setSelectedPayment] = useState("");

    const membershipOptions = [
        { id: "general", label: "Membership Fee", price: 0, tag: "" },
        { id: "yearly1", label: "Membership Fee", price: 120, tag: "Yearly" },
        { id: "yearly2", label: "Membership Fee", price: 10, tag: "12 Installment" },
        { id: "life1", label: "Membership Fee", price: 500, tag: "Upfront" },
        { id: "life2", label: "Membership Fee", price: 100, tag: "5 Installment" },
    ];

    const paymentMethods = [
        { id: "zelle", label: "Zelle (Scan to Pay)", logo: "/zelle.png" },
        { id: "square", label: "Square | Credit/Debit Card Checkout", logo: "/square.png" },
        { id: "stripe", label: "Stripe | Credit/Debit Card Checkout", logo: "/stripe.png" },
        { id: "venmo", label: "Venmo (Scan to Pay)", logo: "/venmo.png" },
        { id: "paypal", label: "Paypal | Credit/Debit Card Checkout", logo: "/paypal.png" },
        { id: "cash", label: "Cash", icon: <FaMoneyBillAlt className="text-green-600 text-xl" /> },
        { id: "wire", label: "Wire Transfer", logo: "/bank.png" },
    ];

    return (
        <div className='my-10 container md:mx-auto'>
            <div className='bg-white p-5 rounded-xl'>
                <h2 className='text-3xl font-semibold'>Complete your payment</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 my-5">
                {/* Section 1: Membership */}
                <div className="bg-white shadow-md rounded-xl p-6 col-span-4">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-3">1. Select Your Membership</h2>
                    <h3 className="font-medium text-lg mb-2">Membership Fee</h3>

                    <div className="space-y-3">
                    {membershipOptions.map((option) => (
                        <label
                        key={option.id}
                        className={`flex justify-between items-center rounded-lg p-4 cursor-pointer transition ${
                            selectedMembership === option.id
                            ? "border-x border-b border-primary text-primary font-semibold"
                            : "border border-gray-300"
                        }`}
                        >
                        <div className="flex items-center space-x-3">
                            <input
                            type="checkbox"
                            name="membership"
                            value={option.id}
                            checked={selectedMembership === option.id}
                            onChange={() => setSelectedMembership(option.id)}
                            className="checkbox"
                            />
                            <span>
                            {option.label}{" "}
                            {option.tag && (
                                <span className="badge badge-primary badge-sm ml-2">
                                {option.tag}
                                </span>
                            )}
                            </span>
                        </div>
                        <span>{option.price.toFixed(2)} $</span>
                        </label>
                    ))}
                    </div>

                    {/* Cost Breakdown */}
                    <div className="mt-6 pt-4 text-sm">
                        <h2 className='text-lg font-semibold pb-3'>Cost Breakdown</h2>
                        <div className="flex justify-between border-t py-2">
                            <span>Membership Fee ({selectedMembership})</span>
                            <span>
                            {membershipOptions.find((o) => o.id === selectedMembership)?.price || 0} $
                            </span>
                        </div>
                        <div className="flex justify-between font-semibold mt-2 border-t py-2">
                            <span>Total Pay</span>
                            <span>
                            {membershipOptions.find((o) => o.id === selectedMembership)?.price || 0} $
                            </span>
                        </div>
                    </div>
                </div>

                {/* Section 2: Payment */}
                <div className="bg-white shadow-md rounded-xl p-6 col-span-4 lg:col-span-3">
                    <h2 className="text-2xl font-semibold mb-4">2. Payment Method</h2>
                    <div className="space-y-3">
                        {paymentMethods.map((method) => (
                            <button
                            key={method.id}
                            onClick={() => setSelectedPayment(method.id)}
                            className={`w-full flex items-center justify-between border rounded-lg p-4 transition ${
                                selectedPayment === method.id
                                ? "border-primary text-primary font-semibold"
                                : "border-gray-300"
                            }`}
                            >
                            <span className='text-lg'>{method.label}</span>
                            {method.logo ? (
                                <img src={method.logo} alt={method.label} className="h-6" />
                            ) : (
                                method.icon
                            )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeAMember;