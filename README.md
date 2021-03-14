# Notify Discord Action

## Example usage

```yaml
  - id: discord
    name: Notify discord
    uses: palevoo/notify-discord-action@v1
    with:
      content: "`${{ job.status }}` deployment of [commit](https://github.com/${{ github.repository }}/commit/${{ github.sha }}) to **${{ github.repository }}**  by `@${{ github.actor }}`"
      discord_webhook_url: ${{ secrets.DISCORD_WEBHOOK_URL }}
```

On fail to send message, only gives a warning, further github actions context and expressions can be found [here](https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions)
