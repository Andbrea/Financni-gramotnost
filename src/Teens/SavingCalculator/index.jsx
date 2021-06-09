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
            <div className="calculator">
                <div className="calculator-box">
                    <div className="field-box">
                        <p className="field-title">
                            <strong>Kolik chci</strong>
                        </p>
                        <p className="field-input">
                            <input
                                value={goal}
                                onChange={(event) => {
                                    setGoal(Number(event.target.value));
                                }}
                                type="number"
                            />
                            &nbsp;Kč
                        </p>
                    </div>
                    <div className="field-box">
                        <p className="field-title">Kolik už mám našetřeno</p>
                        <p className="field-input">
                            <input
                                value={ammountNow}
                                onChange={(event) => {
                                    setAmmountNow(Number(event.target.value));
                                }}
                                type="number"
                            />
                            &nbsp;Kč
                        </p>
                    </div>
                    <div className="field-box">
                        <p className="field-title">Kolik ještě potřebuji</p>
                        <p className="field-input">
                            <input
                                disabled={true}
                                value={ammountNow === 0 ? goal : ammountLeft}
                                type="number"
                            />
                            &nbsp;Kč
                        </p>
                    </div>
                    <div className="field-box">
                        <p className="field-title">Jak dlouho chci šetřit</p>
                        <p className="field-input">
                            <span className="lastRow-mb">
                                <input
                                    value={years}
                                    onChange={(event) => {
                                        setYears(Number(event.target.value));
                                    }}
                                    type="number"
                                />
                                &nbsp;let
                            </span>
                            <br />
                            <input
                                value={months}
                                onChange={(event) => {
                                    setMonths(Number(event.target.value));
                                }}
                                type="number"
                            />
                            &nbsp;měsíců
                        </p>
                    </div>
                </div>
                <button
                    className="button-count"
                    onClick={calculateMonthlyAmmount}
                >
                    Spočítej
                </button>

                <div className="calc-result">{result}</div>
            </div>
        </>
    );
};

export default SavingCalculator;
