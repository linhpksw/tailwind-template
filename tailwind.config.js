/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [
        {
            tailwindcss: {},
            autoprefixer: {},
        },
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/container-queries"),
    ],
};
