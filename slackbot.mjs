const BOT_TOKEN = 'xoxb-3283762546769-3256668558775-ybGj5JakskcT3ehBDXEn222a';
const SIGNING_SECRET = 'ff993d58d8c31fc0078ad4943e69ae7b';
const APP_LEVEL_TOKEN =
  'xapp-1-A037SHTTQUE-3622496147891-f70fb3b751d8260ec07beeeef0decc2dfc80f977dd02ab1899e8487fb6a3b047';

import slackBolt from '@slack/bolt';
const { App } = slackBolt;

const app = new App({
  token: BOT_TOKEN, //INSERT YOUR BOT USER OAUTH TOKEN (Find in the Oauth  & Permissions tab)
  signingSecret: SIGNING_SECRET, // INSERT SIGNING SECRET (Find in Basic Information Tab)
  socketMode: true,
  appToken: APP_LEVEL_TOKEN, // INSERT SOCKET TOKEN (Token from the App-level Token that we created)
});

app.command("/square", async ({ command, ack, say }) => {
  try {
    await ack();
    let txt = command.text // The inputted parameters
    if(isNaN(txt)) {
        say(txt + " is not a number")
    } else {
        say(txt + " squared = " + (parseFloat(txt) * parseFloat(txt)))
    }
  } catch (error) {
    console.log("err")
    console.error(error);
  }
});

app.message("hello", async ({ command, say }) => { // Replace hello with the message
  try {
    say("Hi! Thanks for PM'ing me!");
  } catch (error) {
      console.log("err")
    console.error(error);
  }
});


app.start(3000);
