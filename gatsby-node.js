require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');
const {
  ABOUT,
} = require('./src/constants');

exports.onCreateWebpackConfig = ({
  stage,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    externals: {
      document: true,
      discus_config: true,
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === 'develop' || stage === 'develop-html',
      }),
    ],
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const about = path.resolve('./src/templates/About.jsx');

    resolve(
      graphql(`
        {
          allMarkdownRemark(limit: 10000) {
            edges {
              node {
                frontmatter {
                  path
                  category
                  tags
                  type
                  hide
                }
              }
            }
          }
        }
      `).then(({ errors, data: { allMarkdownRemark: { edges } } }) => {
        if (errors) {
          console.log(errors);
          reject(errors);
        }

        // Create blog posts pages.
        edges.forEach(({ node: { frontmatter: { path, type, hide } } }) => {
          if (hide !== true) {
            let component = null;
            if (type === ABOUT) {
              component = about;
            }

            if (component !== null) {
              createPage({
                path,
                component,
                context: {},
              });
            }
          }
        });
      })
    );
  });
};

