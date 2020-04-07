import React from 'react';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import About from '~/components/About';

const AboutTemplate = (props) => (
  <Layout {...props}>
    <About {...props} />
  </Layout>
);

export default AboutTemplate;

export const pageQuery = graphql`
  query AboutQuery ($path: String!) {
    site {
      siteMetadata {
        title
        author
        homepage
      }
    }
    about: markdownRemark (
      frontmatter: { path: { eq: $path } }
    ) {
      id
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
