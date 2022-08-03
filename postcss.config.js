module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// const tailwindcss = require("tailwindcss");
// module.exports = {
//     plugins: [
//         tailwindcss("./tailwind.config.js"),
//         require("autoprefixer")
//     ]
// };