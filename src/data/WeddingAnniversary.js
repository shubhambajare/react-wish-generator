const data = [
    {
        id: 1,
        startMessage: "Happy anniversary, ",
        endMessage: "! Wishing you both a day filled with love, laughter, and beautiful memories as you celebrate another year of togetherness.",
    },
    {
        id: 2,
        startMessage: "Congratulations on reaching another milestone in your journey of love, ",
        endMessage: "! May your anniversary be a reminder of the beautiful bond you share and the wonderful years ahead.",
    },
    {
        id: 3,
        startMessage: "",
        endMessage: ", on your special day, I celebrate the love and commitment you both have shown. May your anniversary be a reflection of the amazing journey you've embarked on together.",
    },
    {
        id: 4,
        startMessage: "Wishing a very happy anniversary to the most incredible couple I know, ",
        endMessage: "! Your love inspires us all, and I hope your day is as special as your love story.",
    },
    {
        id: 5,
        startMessage: "Happy anniversary, ",
        endMessage: "! May the love you share continue to grow stronger with each passing year. Here's to a lifetime of happiness and cherished moments.",
    }
];

const getWeddingAnniversaryMessage = () => data[Math.floor(Math.random() * data.length)];

export default getWeddingAnniversaryMessage;
