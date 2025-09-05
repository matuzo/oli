import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary('config.mjs');

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
