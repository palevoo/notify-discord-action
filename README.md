# Notify Discord Action

## Usage

```yaml
  - id: discord
    name: The job has finished
    uses: palevoo/notify-discord-action@v1
    with:
      content: "Deploy action finished with status: ${{ job.status }}!"
      discord_webhook_url: ${{ secrets.DISCORD_WEBHOOK_URL }}
```

