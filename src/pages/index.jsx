import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { Header } from 'components';
import { Layout } from 'layouts';
import GithubIcon from '../svg/github';

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
  const { GITHUB_TURRIS_CLIENT_ID } = process.env;
  return (
    <Layout>
      <Helmet title={'Turris CI'} />
      <Header title="Turris CI">
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_TURRIS_CLIENT_ID}`}
        >
          <Icon>
            <GithubIcon />
          </Icon>
          Log in with Github
        </Button>
      </Header>
    </Layout>
  );
};

export default Index;
