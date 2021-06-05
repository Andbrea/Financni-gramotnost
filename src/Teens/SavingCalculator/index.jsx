import React from 'react';

const SavingCalculator = () => {
    return (
        <>
            <form>
                <label>
                    Kolik chci našetřit
                    <input type="text" />
                    Kč
                </label>
                <label>
                    Kolik už mám našetřeno
                    <input type="text" />
                    Kč
                </label>
                <label>
                    Kolik ještě potřebuji
                    <input type="text" />
                    Kč
                </label>
            </form>
        </>
    );
};

export default SavingCalculator;
