import StyleDictionary from 'style-dictionary';
import { formats, transformGroups } from 'style-dictionary/enums';

const { cssVariables } = formats;

const globals = ['g-colors', 'text', 'spacing'];

function generateComponentFiles() {
  return [({
    // output the component tokens in the right folder and file e.g. components/button/button-vars.css
    destination: `_in/assets/css/third-party/oli/settings-tokens.css`,
    format: cssVariables,
    // only include the tokens that are inside this component token group
    filter: 'comp',
  })];
}

StyleDictionary.registerFilter({
  name: 'global',
  filter: (token) => globals.includes(token.path[0])
});

StyleDictionary.registerFilter({
  name: 'comp',
  filter: (token) => {
    return !globals.includes(token.path[0])
  }
});

export default {
  source: ['_in/_data/tokens/*.json'],
  platforms: {
    css: {
      transformGroup: transformGroups.css,
      prefix: 'oli',
      files: [
        {
          destination: '_in/assets/css/third-party/oli/global.css',
          format: cssVariables,
          // filter only the tokens that are inside the global object
          filter: 'global',
        },
        // dynamically generate file outputs for each component
        ...generateComponentFiles(),
      ],
    },
  },
};