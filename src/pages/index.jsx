import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { Header } from 'components';
import { Layout } from 'layouts';
import GithubIcon from '../svg/github'

export const Button = styled.a`
  background: white;
  box-shadow: 0 2px #aaa;
  color: #555;
  border-radius: 4px;
  padding: 8px 12px;
  
  &:hover {
    background: #fcfcfc;
    box-shadow: 0 2px #666;
    cursor: pointer;
  }
  `;

export const Icon = styled.span`
    position: relative;
    top: 6px;
    `;

const Index = () => {
  return (
    <Layout>
      <Helmet title={'Turris CI'} />
      <Header title="Turris CI">
        <Button>
        <Icon>
          <GithubIcon />
        </Icon>
        Log in with Github</Button>
      </Header>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};
