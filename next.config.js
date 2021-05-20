
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['h9nWMgL3KT7o2EC7U4D2QA'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  