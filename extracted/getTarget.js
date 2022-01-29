module.exports = () => {
    const targets = ['PROD', 'DEV', 'TETHYS', 'LOCAL', 'ATLAS', 'GU_ONBOARDING_QA'];
    let target = process.env.TARGET;

    while (!targets.includes(target)) {
        target = require('readline-sync').question(
            "\tPlease enter target: 'PROD' | 'DEV' | 'TETHYS' | 'LOCAL' | 'ATLAS' | 'GU_ONBOARDING_QA': "
        );
    }
    process.env.TARGET = target;
    return process.env.TARGET;
};
