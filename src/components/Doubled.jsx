// example 1
let desiredGames = ['football','' , 'basketball','', 'tennis']

export const games =  (desiredGames) => {
const updatedGames = [...desiredGames , 'baseball','rugby']
return updatedGames
};

export {desiredGames};


// example 2
export const baseData = 10;
export const data = (baseData) => {
    return baseData * 2;
};


