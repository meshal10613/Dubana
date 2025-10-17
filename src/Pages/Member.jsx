import React from 'react';
import { getFromLocalStorage } from '../Hooks/LocalHost';

const Member = () => {
    const data = getFromLocalStorage();
    console.log(data)
    return (
        <div className='my-10 container md:mx-auto space-y-5'>
            <div className='bg-white px-10 py-5 rounded-xl'>
                <h2 className='text-3xl font-semibold'>Our Valueable Members</h2>
            </div>
            <div className='bg-white px-10 py-5 rounded-xl overflow-x-auto'>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Payment Type</th>
                            <th>Payment Method</th>
                            <th>Fee</th>
                            <th>Extra Charges</th>
                            <th>Total Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((payment, index) => (
                                <tr key={index + 1}>
                                    <td>{payment?.type}</td>
                                    <td>{payment?.paymentMethod}</td>
                                    <td>${payment?.fee}</td>
                                    <td>${payment?.pFee}</td>
                                    <td>${(payment?.fee + payment?.pFee)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Member;