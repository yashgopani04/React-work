import React from 'react'

function Inputbox({

    label,
    className = '',
    amount,
    onChangeamount,
    selectcurrency = 'ind',
    onChangecurrency,
    currencyOptions = [],
    amountDisable = false,
    currencyDisable = false

}) {

  return (

    <div className={`bg-white p-3 rounded-lg text-sm flexv ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                <input

                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={ (e) => onChangeamount && onChangeamount(Number(e.target.value))}

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectcurrency}
                    disabled={currencyDisable}
                    onChange={ (e) => onChangecurrency && onChangecurrency(e.target.value)}
                >

                {currencyOptions.map( (cur) => (

                    <option key={cur} value={cur}>
                    {cur}
                    </option>

                ))

                }
                                      
               </select>
            </div>
        </div>

  );
}

export default Inputbox