const data = [
    {
        id: 0,
        startMessage: "Wishing you and your family a Diwali filled with love, laughter, and moments of pure bliss, ",
        endMessage: ". May your lives be adorned with happiness and prosperity.",
    },
    {
        id: 1,
        startMessage: "Wishing you a sparkling Diwali, ",
        endMessage: "! May this festival of lights bring joy, prosperity, and a renewed sense of hope to your life.",
    },
    {
        id: 2,
        startMessage: "Happy Diwali, ",
        endMessage: "! May the divine glow of Diyas illuminate your path and fill your heart with peace and happiness.",
    },
    {
        id: 3,
        startMessage: "Sending my warmest wishes to you, ",
        endMessage: ", on this auspicious occasion of Diwali! May the brightness of this festival bring endless moments of togetherness and celebrations with your loved ones.",
    },
    {
        id: 4,
        startMessage: "",
        endMessage: ", may this Diwali bring new beginnings, abundant blessings, and success in all your endeavors. Have a joyous and prosperous festival!",
    },

];

const getDiwaliMessage = (id = -1) => data[id === -1 ? Math.floor(Math.random() * data.length) : id];

export default getDiwaliMessage;
