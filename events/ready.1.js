require("dotenv").config();

const fetch = require("node-fetch"),
  conf = require("../dc_conf.json"),
  spreadsheetId = process.env.SHEETS_ID,
  apiKey = process.env.SHEETS_API,
  url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?key=${apiKey}&fields=valueRanges(values)&ranges=Aktif%20Mentorluklar`;

module.exports = (client) => {
  console.log()
  // Check New Mentoship Projects
  function peerLoop() {
    setTimeout(function () {
      console.log("[LOG: BOT] Mentorship Programs Checked");
      if (1 < 2) {
        fetch(url).then((res) => res.json()).then((json) => {
          json.valueRanges.map(function (data) {
            data.values.map(function (data2) {

              const peergh = data2[2],
                peername = data2[2].slice(19).split("/"),
                peerbutstr = JSON.stringify(peername[1]),
                guild = client.guilds.cache.get(conf.ids.id_guild);

              if (typeof peerbutstr == "string") {

                let peerbutstrLower = peerbutstr.replace('"', "").toLowerCase().replace('"', ""),
                  npeerchannels = client.channels.cache.find((c) => c.name === peerbutstrLower);

                if (npeerchannels != undefined) { console.log("[LOG: BOT] Channel Already Exist"); } else {
                  guild.channels.create(peerbutstrLower, { type: "text", topic: peergh, parent: conf.ids.id_prcat, });
                  console.log("[LOG: BOT] Channel Creating: " + peerbutstrLower);
                }
              } else { console.log("[LOG: BOT] Something is wrong. Passed") }
            });
          });
        }).catch(function (err) { console.log(err); });
        peerLoop();
      }
    }, conf.loopTime);
  }
  console.log()
  peerLoop();

};
