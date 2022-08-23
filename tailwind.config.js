/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        "fontGrey" : "#999999",
        "nameFontColor" : "#3D195B",
        "teamFontColor" : "#3D195B36",
        "borderItemColor" : "#EFEFEF",
        "borderSearchBoxColor" : "#E4E4E4",
        "detailListBoxColor1" : "#04F5EC",
        "detailListBoxColor2" : "#03FBB8",
        "searchIconColor" : "#3D195B45",
        "headerBackgroundColor" : "#3D195B",
        "placeholderColor" : "#3D195B"
      },
      fontSize : {
        "11" : "11px",
        "10" : "10px",
        "9" : "9px"
      },
      spacing : {
        "50px" : "50px",
        "20px" : "20px",
        "10px" : "10px",
        "1px" : "1px"
      }
    },
  },
  plugins: [require("daisyui")],
}
