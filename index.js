import env from "dotenv";
env.config();
import Discord from "discord.js";
import fetch from "node-fetch";

const client = new Discord.Client();

const blitzPlayerBaseUrl = "https://valorant.iesdev.com/player";

const blitzTierMap = [
  "tier retrieval error",
  null,
  null,
  "iron 1",
  "iron 2",
  "iron 3",
  "bronze 1",
  "bronze 2",
  "bronze 3",
  "silver 1",
  "silver 2",
  "silver 3",
  "gold 1",
  "gold 2",
  "gold 3",
  "plat 1",
  "plat 2",
  "plat 3",
];

const snarkyRemark = (tier) =>
  tier >= 15 ? "so, yes, surprisingly" : "so no, unsurprisingly";

client.once("ready", () => {
  console.log("Ready!");
});

client.login(process.env.DISCORD_TOKEN);

client.on("message", async (message) => {
  if (message.content.toLowerCase() === "is raman plat yet") {
    const data = await fetch(`${blitzPlayerBaseUrl}/koshaku-ont`);
    const parsedData = await data.json();
    const blitzTier = parsedData.ranks.competitive.tier || 0;
    const rank = blitzTierMap[blitzTier];
    message.channel.send(
      `Raman is currently ${rank} ${snarkyRemark(blitzTier)}`
    );
  }
  if (message.content === "lame") {
    message.channel.send("why me?");
  }
});
