//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "22896342434";
global.owner = process.env.OWNER_NUMBER || "22896342434";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEs5dFl2a1JGVEdVMGFjSkJ3MVVSZ2tWY0x5SWdLbk5Cb1pmTEd3K2JFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1pRcHp5eVRJMitXRm9SMHVQODFhQWJZUFA5RFZVMTF6RXUwTUJzL2gyWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRFdTbmNJcmJKbjJWWDRsakF1WGQwMWlTNVJsbFV1MDNRcm9kYUZEY0VRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnT3kyZTFpb1BJbnZUV0UzT2puUTFjZ240TnpqWC9yUEdMeTRQeVVIeEYwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZFWnM0cDM2QURsR2hDcmZuTW41SHQ5THMzZnNlcTR5UE1uaTZET3JrMk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd5NDJKNmNqRTZtWU0vbHFtcW9BbEUvbGllTEtlWjZiR0N1TmFZS05seTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUlpS3p2eER0VnVPMUFuZ1l0LzJUTmFra1VRNUZlV2JEUWIzaWk5ek0xYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVldJZDdoRTlPN0JNc3IrUEc4ekdkK0xWcmUzMDVyakNNdUROdUQyQWpsdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5DdllYZzJrY3hRcG5RckNMV1E4ZDdpTnBYbzh5TDlJa2tOcUNsMzI1T3pjemcxVXpRRHVsZWJPNC9zaGxlUmFaa2VZYzBBNHI0VVRsWG9taFJhUENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJ6V3dqYTcrY1g3ZENNeVhCZUt2MFVuNkZIVktqNUtYbElFTXpSODhsdVQ0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1QXZoWkxUS1RtVzF4Q0l1Q1c2TDRnIiwicGhvbmVJZCI6IjY4YmQ0MGUxLTIyODEtNGMyMy1hMjhiLTI3MjdlODlmZjMwZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOS2JoazBTS1FmWjZTNnlMRHN1MmxPMGVBeDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FQUktnSmtERWhmUHBheHc1dlJlUWk3NDJrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkMxS0IzN0tZIiwibWUiOnsiaWQiOiIyMjg5NjM0MjQzNDo4MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLjgJRPRyBDSEFNUOOAlSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFdQOFBvRkVML0lnTGNHR0JrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQU83Zk1ETksvL0RBTzJPOFVMZ2h2TCtGNWJ3TFVoVHVxNTdOS282b1FWUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiamwrekc3L1pnUUJtdzlKOVZ4NXB1V1pSQW9ZZmFFdE5jNHU0aC8yRmUvZzB4ckplZHNoRVdkMGx1NXVQTDQvT2lSMndsWXJHcEVOaFJqdWxHa05NQVE9PSIsImRldmljZVNpZ25hdHVyZSI6ImF4UENsTVBhOUlhZmJEaXZUNjlJazFlQzVqMjZ1UUpmSm13NStoZ3AvaXhjR3d5YWtUUnk3a2Q4WGVSOUdIU1FwZmtlb3ZWRXVvVnFWODhKRWFRRkJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI4OTYzNDI0MzQ6ODJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUR1M3pBelN2L3d3RHRqdkZDNElieS9oZVc4QzFJVTdxdWV6U3FPcUVGVSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTk2NTM4OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEYXUifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ";",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
