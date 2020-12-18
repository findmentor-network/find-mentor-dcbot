module.exports = (client) => {
    const fetch = require('node-fetch');

    const spreadsheetId = '1x_W7Z2o_TGmEjL5cLTFbjO1R3KzQOqIhQKu9RQ4a_P4'
    const apiKey = 'AIzaSyA5el9Fo8rMSYkcMjUqLfJi4tDB5_n0bzY'
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?key=${apiKey}&fields=valueRanges(values)&ranges=Aktif%20Mentorluklar`

    console.log(`[LOG: READY] Logged in as ${client.user.tag}!`);
    client.user.setActivity('Mentors & Mentees', { type: 'WATCHING' })
        .then(presence => console.log(`[LOG: READY] Activity set to ${presence.activities[0].name}`))
        .catch(console.error);

    fetch(url)
    .then(res => res.json())
    .then(json => { 
        json.valueRanges.map(function (data) { data.values.map(function (data2) {
            const peergh   = data2[2]   // GitHub linkleri
            const peername = data2[2]
                            .slice(19)  // https://github.com/ kısmı kesilir
                            .split("/") // kullanıcı adlarından hemen sonra proje adı geldiği için "/"ı baz alara array'lara ayırdım

            console.log(peername[1] + "\n" + peergh + "\n") // proje isimleri ve linkleri çıktı alınır

        })}) 
    })
    .catch(function(err) {
        console.log(err)
    });
};