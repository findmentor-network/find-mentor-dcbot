# Find Mentor | Discord Bot
OpenSource discord bot for FindMentor Network discord server for moderating server, welcoming new users, giving role to users, making announcements and logging system.


## Create A Discord Bot
1. Go to [discord developer portal](https://discord.com/developers/applications)
2. Click "New Application" button at top right
3. Enter your bot name, it is up to you
4. After that,  you will see "Bot" section at sidebar
5. Click "Add Bot" then click "Yes, do it!" to confirmation message

 ## Adding test bot to your server
 1. Go to [discord developer portal](https://discord.com/developers/applications)
 2. Open you application
 3. Click "OAuth2" section at sidebar
 4. Scroll down and in scopes section click "bot" (2nd colmn, 2nd place)
 5. Then click "Administrator" in "BOT PERMISSIONS" section
 6. Copy the OAuth2 url, below in scopes section, and paste it into your browser.
 7. Select your server and click add! Bum!

## How to Run?
For runing the bot you need a `.env` file which includes `9` sections
```env
SHEETS_ID={spreadsheetId}
SHEETS_API={spreadsheetApiKey}
BOT_TOKEN={Your Test Bot Token}
```

```
# Install project dependencies
yarn install

# start with nodemon (npm i -g nodemon)
yarn run test
```

and that's it! Your bot is ready for serving you!
