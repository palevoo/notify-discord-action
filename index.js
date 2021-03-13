const core = require('@actions/core');
const axios = require('axios');

async function run() {
  try {
    const content = core.getInput('content', { required: true })
    const discordWebhookUrl = core.getInput('discord_webhook_url', { required: true })

    core.info(`Sending message to discord ...`);

    const res = await axios({
      url: discordWebhookUrl,
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      data: JSON.stringify({
          content
      }),
    })
  
    core.info((new Date()).toTimeString());

    core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
