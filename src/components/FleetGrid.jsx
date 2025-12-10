import React from 'react';
import BoatCard from './BoatCard';
import fleetData from '../data/fleet.json';

const FX_RATE_USD_TO_CAD = 1.35;

export default function FleetGrid({ currency, onBook }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetData.map((boat) => (
                <BoatCard
                    key={boat.id}
                    boat={boat}
                    currency={currency}
                    rate={FX_RATE_USD_TO_CAD}
                    onBook={onBook}
                />
            ))}

            <div className="col-span-full text-center mt-8">
                <p className="text-sm text-gray-400 italic">
                    * Prices shown in {currency}. Taxes & fees extra.
                    {currency === 'CAD' && ` Estimated conversion rate: 1 USD = ${FX_RATE_USD_TO_CAD} CAD.`}
                </p>
            </div>
        </div>
    );
}
