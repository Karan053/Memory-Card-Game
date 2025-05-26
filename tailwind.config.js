module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            keyframes: {
                "fade-in": {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },

                "move-up": {
                    from: { transform: "translateY(8rem)" },
                    to: { transform: "translateY(0)" },
                },
            },

            animation: {
                "fade-in": "fade-in 1.5s forwards",
                "move-up": "move-up 1s 2.5s forwards",
            },
        },
        fontFamily: {
            handwriting: ["Schoolbell", "cursive"],
        },
    },
    plugins: [],
};
