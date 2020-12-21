module.exports = (client,message) => {
    require('dotenv').config();
    const fetch = require('node-fetch');

    const spreadsheetId = process.env.SHEETS_ID;
    const apiKey = process.env.SHEETS_API;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?key=${apiKey}&fields=valueRanges(values)&ranges=Aktif%20Mentorluklar`;

    console.log(`[LOG: BOT] Logged in as ${client.user.tag}!`);
    client.user.setActivity('Mentors & Mentees', { type: 'WATCHING' })
        .then(presence => console.log(`[LOG: BOT] Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
 
    function peerLoop() {
        setTimeout(function() {  
            console.log('[LOG: BOT] Mentorship Programs Checked');
            if (1 < 2) {

                fetch(url)
                .then(res => res.json())
                .then(json => { 
                    json.valueRanges.map(function (data) { data.values.map(function (data2) {
                        
                        const peergh   = data2[2];
                        const peername = data2[2].slice(19).split("/");
                        const peerbutstr = JSON.stringify(peername[1]);
                        let guild = client.guilds.cache.get(process.env.GUILD_ID);
            
                        /*
                        console.log(peername[1] + "\n" + peergh + "\n") // proje isimleri ve linkleri çıktı alınır
                        const peername = data2[2]
                        .slice(19)   // https://github.com/ kısmı kesilir
                        .split("/"); // kullanıcı ad larından hemen sonra proje adı geldiği için "/"ı baz alara array'lara ayırdım
                        */            
                        //console.log(peerbutstr)
                        //console.log(typeof(peerbutstr))
                        //console.log(peerchannels)
                        
                        if (typeof(peerbutstr) == "string") {
            
                            let peerbutstrLower = peerbutstr.replace('"','').toLowerCase().replace('"','');
                            let npeerchannels  = client.channels.cache.find(c => c.name === peerbutstrLower)
            
                            if (npeerchannels != undefined) {
                                console.log("[LOG: BOT] Kanal zaten var")
                            } else {
                                guild.channels.create(peerbutstrLower, {
                                    type: 'text',
                                    topic: peergh,
                                    parent: process.env.GUILD_CAT
                                })
                                console.log("[LOG: BOT] Kanal oluşturuluyor: " + peerbutstrLower)
                            }
            
                        } else {
                            console.log("[LOG: BOT] Kanal adına yazılmaması gereken karakter içeriyor. Pass Geçildi")
                        }
                    })})
                })
                .catch(function(err) {
                    console.log(err)
                });

                peerLoop();
            }
        }, process.env.LOOP_TIME)   
    }
    peerLoop();

};