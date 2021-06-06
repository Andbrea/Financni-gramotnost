import React, { useEffect, useState } from 'react';
import './style.css';

const SavingCalculator = () => {
    const [goal, setGoal] = useState('');
    const [ammountNow, setAmmountNow] = useState('');
    const [ammountLeft, setAmmountLeft] = useState('');

    const [years, setYears] = useState('');
    const [months, setMonths] = useState('');
    const [result, setResult] = useState('');

    const calculateMonthlyAmmount = () => {
        let localMonthlyPay = 0;
        if (months && years) {
            const monthsTotal = years * 12 + months;
            localMonthlyPay = (goal - ammountNow) / monthsTotal;
        } else if (years) {
            localMonthlyPay = (goal - ammountNow) / years / 12;
        } else if (months) {
            localMonthlyPay = (goal - ammountNow) / months;
        }
        setResult(
            <>
                Musíš odložit <strong>{localMonthlyPay.toFixed(2)} Kč</strong>{' '}
                měsíčně po dobu {years * 12 + months} měsíců, aby sis našetřil{' '}
                {goal} Kč a mohl si koupit vysněnou věc.
            </>,
        );
    };

    useEffect(() => {
        if (goal && ammountNow) {
            setAmmountLeft(goal - ammountNow);
        } else {
            setAmmountLeft('');
        }
    }, [goal, ammountNow]);

    return (
        <>
            <div className="calculator-box">
                <span className="input-calc">
                    <label>
                        Kolik chci našetřit
                        <input
                            value={goal}
                            onChange={(event) => {
                                setGoal(Number(event.target.value));
                            }}
                            type="number"
                        />
                        Kč
                    </label>
                </span>
                <span className="input-calc">
                    <label>
                        Kolik už mám našetřeno
                        <input
                            value={ammountNow}
                            onChange={(event) => {
                                setAmmountNow(Number(event.target.value));
                            }}
                            type="number"
                        />
                        Kč
                    </label>
                </span>
                <span className="input-calc">
                    <label>
                        Kolik ještě potřebuji
                        <input
                            disabled={true}
                            value={ammountNow === 0 ? goal : ammountLeft}
                            type="number"
                        />
                        Kč
                    </label>
                </span>
                <span className="input-calc">
                    <label>
                        Jak dlouho chci šetřit
                        <input
                            value={years}
                            onChange={(event) => {
                                setYears(Number(event.target.value));
                            }}
                            type="number"
                        />
                        let
                        <input
                            value={months}
                            onChange={(event) => {
                                setMonths(Number(event.target.value));
                            }}
                            type="number"
                        />
                        měsíců
                    </label>
                </span>
                <button onClick={calculateMonthlyAmmount}>Spočítej</button>

                <div>{result}</div>
            </div>
        </>
    );
};

export default SavingCalculator;
