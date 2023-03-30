/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        logoNav: "url('/images/logo.svg')",
        logoButtonnMenu: "url(/images/icon-menu.svg)",
        logoClose: "url(/images/icon-close-menu.svg)",
        imageBgMobile: "url('/images/image-hero-mobile.png')",
        imageBgDesktop: "url('/images/image-hero-desktop.png')",
        clientDatabiz: "url('/images/client-databiz.svg')",
        audioFile: "url('/images/client-audiophile.svg')",
        meet: "url('/images/client-meet.svg')",
        marker: "url('/images/client-maker.svg')",
        todoList: "url('images/icon-todo.svg')",
      },
      fontFamily: {
        Epilogue: "'Epilogue', sans-serif",
      },
    },

    screens: {
      "350px": "350px",
      "400px": "400px",
      "445px": "445px",
      "450px": "450px",
      "465px": "465px",
      "520px": "520px",
      "588px": "588px",
      "600px": "600px",
      "650px": "650px",
      "700px": "700px",
      "750px": "750px",
      "800px": "800px",
      "850px": "850px",
      "862px": "862px",
      "900px": "900px",
      "950px": "950px",
      "1000px": "1000px",
      "1050px": "1050px",
      "1100px": "1100px",
      "1150px": "1150px",
      "1200px": "1200px",
      "1250px": "1250px",
      "1300px": "1300px",
      "1350px": "1350px",
      "1400px": "1400px",
      "970px": "970px",
    },
  },
  plugins: [],
};