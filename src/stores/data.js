import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    data: [
      {
        id: "19441111",
        name: "滑鼠",
        cost: 200,
        description: "電競滑鼠rgb",
        image: "./mouse.jpg",
        num: 0,
      },
      {
        id: "219441111",
        name: "鍵盤",
        cost: 300,
        description: "老鍵盤",
        image: "./keyboard.jpg",
        num: 1,
      },
      {
        id: "212",
        name: "車車",
        cost: 699,
        description: "lowrider",
        image: "./lowrider.jpg",
        num: 2,
      },
      {
        id: "33030",
        name: "curry",
        cost: 10,
        description: "YUMMY",
        image: "./curry.jpg",
        num: 3,
      },
      {
        id: "234456",
        name: "RTX-4090",
        cost: 2000,
        description: "好貴的",
        image: "./rtx-4090.jpg",
        num: 4,
      },
      {
        id: "12350",
        name: "firebird",
        cost: 300,
        description: "經典老車車",
        image: "./pontiac-firebird.jpg",
        num: 5,
      },
      {
        id: "16782350",
        name: "貓貓",
        cost: 300,
        description: "貓貓笑你",
        image: "./cat.jpg",
        num: 6,
      },
      {
        id: "12350",
        name: "吉他",
        cost: 300,
        description: "Gibson les paul",
        image: "./guitar.png",
        num: 7,
      },
      {
        id: "12350",
        name: "拉麵",
        cost: 300,
        description: "真香警報",
        image: "./ramen.jpg",
        num: 8,
      },
      {
        id: "12350",
        name: "機機人",
        cost: 300,
        description: "掃地機機人",
        image: "./robot.jpg",
        num: 9,
      },
      {
        id: "12350",
        name: "特斯拉",
        cost: 300,
        description: "爆炸",
        image: "./tesla.jpeg",
        num: 10,
      },
    ],
  }),
});
