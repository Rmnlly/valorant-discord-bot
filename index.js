import env from "dotenv";
env.config();
import Discord from "discord.js";
// const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.login(process.env.DISCORD_TOKEN);

client.on("message", (message) => {
  if (message.content === "lame") {
    message.channel.send("why me?");
  }
});
