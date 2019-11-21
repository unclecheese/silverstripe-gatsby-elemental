const buildElemental = require('./buildElemental');

exports.sourceNodes = async (gatsbyData, pluginOptions) => {  
    await buildElemental(gatsbyData, pluginOptions);
};
  