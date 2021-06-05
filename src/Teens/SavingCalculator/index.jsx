import React, { useState } from 'react';
import './style.css';

const SavingCalculator = () => {
    const [goal, setGoal] = useState(1000);
    const [ammountNow, setAmmountNow] = useState(100);
    const [ammountLeft, setAmmountLeft] = useState('');

    const [years, setYears] = useState('');
    const [months, setMonths] = useState('');
    const [monthlyPay, setMonthlyPay] = useState(0);

    const calculateMonthlyAmmount = () => {
        setAmmountLeft(goal - ammountNow);
        if (years) {
            setMonthlyPay((goal - ammountNow) / years / 12);
        } else if (months) {
            setMonthlyPay((goal - ammountNow) / months);
        } else {
            setMonthlyAmmount((goal - ammountNow) / years);
        }
    };

    return (
        <>
            <div className="calculator-box">
                <span className="input-calc">
                    <label>
                        Kolik chci našetřit
                        <input
                            value={goal}
                            onChange={(event) => {
                                setGoal(event.target.value);
                            }}
                            type="text"
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
                                setAmmountNow(event.target.value);
                            }}
                            type="text"
                        />
                        Kč
                    </label>
                </span>
                <span className="input-calc">
                    <label>
                        Kolik ještě potřebuji
                        <input
                            disabled={true}
                            value={ammountLeft}
                            type="text"
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
                                setYears(event.target.value);
                            }}
                            type="text"
                        />
                        let
                        <input
                            value={months}
                            onChange={(event) => {
                                setMonths(event.target.value);
                            }}
                            type="text"
                        />
                        měsíců
                    </label>
                </span>
                <button onClick={calculateMonthlyAmmount}>Spočítej</button>

                <div>
                    {' '}
                    Musíš odložit {monthlyPay}
                    Kč měsíčně, aby sis našetřil {goal} Kč a mohl si koupit
                    vysněnou věc.
                </div>
            </div>
        </>
    );
};

export default SavingCalculator;
