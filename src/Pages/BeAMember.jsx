import React, { useState } from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import zelle from '../assets/zelle.png';
import square from '../assets/square.png';
import stripe from '../assets/stripe.png';
import venmo from '../assets/venmo.png';
import paypal from '../assets/paypal.png';
import cash from '../assets/dollar.png';
import wire from '../assets/bankA.png';

const BeAMember = () => {
    const [selectedMembership, setSelectedMembership] = useState("");
    const [selectedPayment, setSelectedPayment] = useState("");
    const [selected, setSelected] = useState({
        type: "",
        fee: 0,
        pFee: 0,
        paymentMethod: ''
    });

    const handleSelected = (tag, money) => {
        setSelected({
            type: tag,
            fee: money,
            pFee: 0,
            paymentMethod: selected.paymentMethod
        });
    };

    const handlePayment = () => {
        const paymentDoc = {
            type: selected?.type,
            fee: selected?.fee,
            pFee: selected?.pFee,
            totalFee: selected?.fee + selected?.pFee,
            paymentMethod: selected.paymentMethod
        };
        console.log(paymentDoc);
    };

    console.log(selected);

    return (
        <div className='my-10 container md:mx-auto'>
            <div className='bg-white px-10 py-5 rounded-xl'>
                <h2 className='text-3xl font-semibold'>Complete your payment</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 my-5">
                {/* Section 1: Membership */}
                <div className="bg-white shadow-md rounded-xl px-10 py-5 col-span-4">
                    <h2 className="text-3xl font-semibold mb-4 border-b pb-3">1. Select Your Membership</h2>
                    <h3 className="font-medium text-2xl mb-2">Membership Fee</h3>

                    <div className="space-y-3">
                        <h2 className='text-lg font-semibold'>General Member</h2>
                        <div className='border border-gray-300 rounded-lg space-y-3 p-3'>
                            {/* General Member */}
                            <label
                            className={`flex justify-between items-center rounded-lg p-4 cursor-pointer transition ${
                                selectedMembership === "general"
                                ? "border-x border-b border-primary text-primary font-semibold"
                                : "border border-gray-300"
                            }`}
                            >
                            <div className="flex items-center space-x-3">
                                <input
                                type="checkbox"
                                name="membership"
                                value="general"
                                checked={selectedMembership === "general"}
                                onChange={() => {setSelectedMembership("general"), handleSelected("Free", 0)}}
                                className="checkbox"
                                />
                                <span className='text-lg font-semibold'>Membership Fee {" "} 
                                    <span className="badge badge-primary badge-sm ml-2">Free</span>
                                </span>
                            </div>
                            <span className='text-lg font-semibold'>0.00 $</span>
                            </label>
                        </div>

                        <h2 className='text-lg font-semibold'>Yearly Member</h2>
                        <div className='border border-gray-300 rounded-lg space-y-3 p-3'>
                            {/* Yearly Member - Yearly */}
                            <label
                                className={`flex justify-between items-center rounded-lg p-4 cursor-pointer transition ${
                                    selectedMembership === "yearly1"
                                    ? "border-x border-b border-primary text-primary font-semibold"
                                    : "border border-gray-300"
                                }`}
                                >
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        name="membership"
                                        value="yearly1"
                                        checked={selectedMembership === "yearly1"}
                                        onChange={() => {setSelectedMembership("yearly1"), handleSelected("Yearly", 120)}}
                                        className="checkbox"
                                    />
                                    <span className='text-lg font-semibold'>
                                        Membership Fee{" "}
                                    <span className="badge badge-primary badge-sm ml-2">Yearly</span>
                                    </span>
                                </div>
                                <span className='text-lg font-semibold'>120.00 $</span>
                            </label>

                            {/* Yearly Member - 12 Installment */}
                            <label
                                className={`flex justify-between items-center rounded-lg p-4 cursor-pointer transition ${
                                    selectedMembership === "yearly2"
                                    ? "border-x border-b  border-primary text-primary font-semibold"
                                    : "border border-gray-300"
                                }`}
                                >
                                <div className="flex items-center space-x-3">
                                    <input
                                    type="checkbox"
                                    name="membership"
                                    value="yearly2"
                                    checked={selectedMembership === "yearly2"}
                                    onChange={() => {setSelectedMembership("yearly2"), handleSelected("12 Installment", 10)}}
                                    className="checkbox"
                                    />
                                    <span className='text-lg font-semibold'>
                                    Membership Fee{" "}
                                    <span className="badge badge-primary badge-sm ml-2">
                                        12 Installment
                                    </span>
                                    </span>
                                </div>
                                <span className='text-lg font-semibold'>10.00 $</span>
                            </label>
                        </div>

                        <h2 className='text-lg font-semibold'>Life Member</h2>
                        <div className='border border-gray-300 rounded-lg space-y-3 p-3'>
                            {/* Life Member - Upfront */}
                            <label
                                className={`flex justify-between items-center rounded-lg p-4 cursor-pointer transition ${
                                    selectedMembership === "life1"
                                    ? "border-x border-b border-primary text-primary font-semibold"
                                    : "border border-gray-300"
                                }`}
                                >
                                <div className="flex items-center space-x-3">
                                    <input
                                    type="checkbox"
                                    name="membership"
                                    value="life1"
                                    checked={selectedMembership === "life1"}
                                    onChange={() => {setSelectedMembership("life1"), handleSelected("Upfront", 500)}}
                                    className="checkbox"
                                    />
                                    <span className='text-lg font-semibold'>
                                    Membership Fee{" "}
                                    <span className="badge badge-primary badge-sm ml-2">Upfront</span>
                                    </span>
                                </div>
                                <span className='text-lg font-semibold'>500.00 $</span>
                            </label>

                            {/* Life Member - 5 Installment */}
                            <label
                                className={`flex justify-between items-center rounded-lg p-4 cursor-pointer transition ${
                                    selectedMembership === "life2"
                                    ? "border-x border-b border-primary text-primary font-semibold"
                                    : "border border-gray-300"
                                }`}
                                >
                                <div className="flex items-center space-x-3">
                                    <input
                                    type="checkbox"
                                    name="membership"
                                    value="life2"
                                    checked={selectedMembership === "life2"}
                                    onChange={() => {setSelectedMembership("life2"), handleSelected("5 Installment", 100)}}
                                    className="checkbox"
                                    />
                                    <span className='text-lg font-semibold'>
                                    Membership Fee{" "}
                                    <span className="badge badge-primary badge-sm ml-2">
                                        5 Installment
                                    </span>
                                    </span>
                                </div>
                                <span className='text-lg font-semibold'>100.00 $</span>
                            </label>
                        </div>
                    </div>

                    {/* Cost Breakdown */}
                    <div className="">
                        <h2 className="font-medium text-2xl mt-5">Cost Breakdown</h2>
                        <div className="flex justify-between text-lg mt-4 border-t pt-4">
                            <span>Membership Fee</span>
                            <span>
                                {selected?.fee || 0}$
                            </span>
                        </div>
                        <div className="flex justify-between text-lg font-semibold mt-4 border-t pt-4">
                            <span>Total Pay</span>
                            <span>
                                {selected?.fee || 0}$
                            </span>
                        </div>
                    </div>
                </div>

                {/* Section 2: Payment */}
                <div className="bg-white shadow-md rounded-xl px-10 py-5 col-span-4 lg:col-span-3">
                    <h2 className="text-2xl font-semibold mb-4">2. Payment Method</h2>
                    <div className='space-y-3'>
                        {/* zelle */}
                        <button
                            onClick={() => setSelectedPayment("zelle")}
                            className={`w-full flex items-center justify-between border rounded-lg p-4 cursor-pointer transition 
                            ${
                                selectedPayment === "zelle"
                                ? "border-primary text-primary font-semibold"
                                : "border-gray-300"
                            }`}
                        >
                            <span className='text-lg'>Zelle (Scan to Pay)</span>
                            <img src={zelle} alt="Zelle (Scan to Pay)" className="h-5 lg:h-8" />
                        </button>
                        {/* square */}
                        <button
                            onClick={() => {
                                setSelectedPayment("square"), 
                                setSelected(prev => ({ ...prev, pFee: 3.5, paymentMethod: "Square" }))
                            }}
                            className={`w-full flex items-center justify-between border rounded-lg p-4 cursor-pointer transition 
                            ${
                                selectedPayment === "square"
                                ? "border-primary text-primary font-semibold"
                                : "border-gray-300"
                            }`}
                        >
                            <span className='text-lg'>Square | Credit/Debit Card Checkout</span>
                            <img src={square} alt="Square | Credit/Debit Card Checkout" className="h-5 lg:h-8" />
                        </button>
                        {/* stripe */}
                        <button
                            onClick={() => {
                                setSelectedPayment("stripe"),
                                setSelected(prev => ({ ...prev, pFee: 2.3, paymentMethod: "Stripe" }))
                            }}
                            className={`w-full flex items-center justify-between border rounded-lg p-4 cursor-pointer transition 
                            ${
                                selectedPayment === "stripe"
                                ? "border-primary text-primary font-semibold"
                                : "border-gray-300"
                            }`}
                        >
                            <span className='text-lg'>Stripe | Credit/Debit Card Checkout</span>
                            <img src={stripe} alt="Stripe | Credit/Debit Card Checkout" className="h-5 lg:h-8" />
                        </button>
                        {/* venmo */}
                        <button
                            onClick={() => {
                                setSelectedPayment("venmo"),
                                setSelected(prev => ({ ...prev, pFee: 4.2, paymentMethod: "Venmo" }))
                            }}
                            className={`w-full flex items-center justify-between border rounded-lg p-4 cursor-pointer transition 
                            ${
                                selectedPayment === "venmo"
                                ? "border-primary text-primary font-semibold"
                                : "border-gray-300"
                            }`}
                        >
                            <span className='text-lg'>Venmo (Scan to Pay)</span>
                            <img src={venmo} alt="Venmo (Scan to Pay)" className="h-5 lg:h-8" />
                        </button>
                        {/* paypal */}
                        <button
                            onClick={() => {
                                setSelectedPayment("paypal"),
                                setSelected(prev => ({ ...prev, pFee: 1.8, paymentMethod: "Paypal" }))
                            }}
                            className={`w-full flex items-center justify-between border rounded-lg p-4 cursor-pointer transition 
                            ${
                                selectedPayment === "paypal"
                                ? "border-primary text-primary font-semibold"
                                : "border-gray-300"
                            }`}
                        >
                            <span className='text-lg'>Venmo (Scan to Pay)</span>
                            <img src={paypal} alt="Venmo (Scan to Pay)" className="h-5 lg:h-8" />
                        </button>
                        {/* cash */}
                        <button
                            onClick={() => setSelectedPayment("cash")}
                            className={`w-full flex items-center justify-between border rounded-lg p-4 cursor-pointer transition 
                            ${
                                selectedPayment === "cash"
                                ? "border-primary text-primary font-semibold"
                                : "border-gray-300"
                            }`}
                        >
                            <span className='text-lg'>Cash</span>
                            <img src={cash} alt="Cash" className="h-5 lg:h-8" />
                        </button>
                        {/* wire */}
                        <button
                            onClick={() => setSelectedPayment("wire")}
                            className={`w-full flex items-center justify-between border rounded-lg p-4 cursor-pointer transition 
                            ${
                                selectedPayment === "wire"
                                ? "border-primary text-primary font-semibold"
                                : "border-gray-300"
                            }`}
                        >
                            <span className='text-lg'>Wire Transfer</span>
                            <img src={wire} alt="Wire Transfer" className="h-5 lg:h-8" />
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-white px-10 py-5 rounded-xl space-y-5'>
                <h2 className='text-3xl font-semibold'>Payment Summery</h2>
                <div className='flex items-center justify-between'>
                    <span>Selected Plan</span>
                    <span>{selected.type || ""}</span>
                </div>
                <div className='flex items-center justify-between'>
                    <span>Membership Fee (Installment)</span>
                    <span>{selected.fee || 0} $</span>
                </div>
                <div className='flex items-center justify-between'>
                    <span>Processing Fee</span>
                    <span>{selected?.pFee || 0} $</span>
                </div>
                <div className='divider'></div>
                <div className='flex items-center justify-between text-xl font-semibold'>
                    <span>Total Payable Ammount</span>
                    <span>{selected?.fee + selected?.pFee || 0} $</span>
                </div>
                <button onClick={handlePayment} className="btn btn-block btn-primary transition-all hover:btn-secondary rounded-lg">Pay Now</button>
            </div>
        </div>
    );
};

export default BeAMember;