const data = [
    {
        id: 1,
        startMessage: "Happy birthday, ",
        endMessage: "! May this special day bring you joy, laughter, and countless precious moments to cherish throughout the year.",
    },
    {
        id: 2,
        startMessage: "Wishing you a fantastic birthday, ",
        endMessage: "! May your day be filled with love, happiness, and all the things that make you smile.",
    },
    {
        id: 3,
        startMessage: "Happy birthday to a truly wonderful person, ",
        endMessage: "! May your day be as remarkable and extraordinary as you are.",
    },
    {
        id: 4,
        startMessage: "Sending you warmest birthday wishes, ",
        endMessage: "! May this new chapter of your life be filled with amazing adventures, endless opportunities, and dreams come true.",
    },
    {
        id: 5,
        startMessage: "",
        endMessage: ", happy birthday! May this day mark the beginning of an incredible journey full of success, prosperity, and fulfillment in every aspect of your life.",
    }
    ,
    {
        id: 6,
        startMessage: "Wishing a fabulous birthday to an incredible individual like you, ",
        endMessage: "! May the coming year be filled with happiness, good health, and remarkable achievements.",
    }, {
        id: 7,
        startMessage: "Happy birthday, ",
        endMessage: "! May your special day be surrounded by loved ones, delightful surprises, and beautiful memories that will last a lifetime.",
    },
    {
        id: 8,
        startMessage: "Warmest birthday wishes to a dear friend like you, ",
        endMessage: "! May your day be as bright and wonderful as you have made my life.",
    },
    {
        id: 9,
        startMessage: "Happy birthday, ",
        endMessage: "! May this day bring you an abundance of love, laughter, and all the things that make your heart sing.",
    },
    {
        id: 10,
        startMessage: "Sending heartfelt birthday wishes to an amazing person, ",
        endMessage: "! May this year be your best one yet, filled with love, success, and endless blessings.",
    }
];

const getBirthdayMessage = () => data[Math.floor(Math.random() * data.length)];

export default getBirthdayMessage;
