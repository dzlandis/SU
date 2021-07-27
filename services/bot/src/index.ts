import { Knub } from 'knub';
import { Client, Options } from 'discord.js';

(async () => {
  const client = new Client({
    intents: 5639,
    partials: ['GUILD_MEMBER', 'REACTION', 'MESSAGE', 'CHANNEL', 'USER'],
    makeCache: Options.cacheWithLimits({
      PresenceManager: 0,
      ApplicationCommandManager: 0,
    }),
  });

  const bot = new Knub(client, {
    options: {
      logFn: (level, args) =>
        process.stdout.write(`[${level.toUpperCase()}] ${args}\n`),
    },
  });

  bot.initialize();
  await client.login(process.env.BOT_TOKEN);
})();
