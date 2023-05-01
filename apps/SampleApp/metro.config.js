/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const getWorkspaces = require('get-yarn-workspaces');

async function getConfig(appDir, options = {}) {
  //Get all the workspa e
  const workspaces = getWorkspaces(appDir);

  console.log("workspaces", workspaces);

  //Filter all the unnessary paths
  const watchFolders = [
    path.resolve(appDir, 'node_modules'),
    ...workspaces.filter(
      workPath =>
        !workPath
          .split('/')
          .pop()
          .match(/[.].*|src|dist|packages|components/) &&
        !workPath.match('node_modules/'),
    ),
  ];


  console.log("watchFolders", watchFolders);
  return {
    watchFolders,
    resetCache: true,
    resolver: {
      nodeModulesPaths: watchFolders,
      disableHierarchicalLookup: false
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
  };
}

module.exports = (async () => await getConfig(__dirname))();

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
// };
