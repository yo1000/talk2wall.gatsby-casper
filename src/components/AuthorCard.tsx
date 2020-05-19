import { Link } from 'gatsby';
import * as _ from 'lodash';
import * as React from 'react';
import styled from '@emotion/styled';

import { colors } from '../styles/colors';
import { styles } from '../styles/styles';
import { AuthorProfileImage } from '../styles/shared';

const AuthorCardSection = styled.section`
  display: flex;
`;

const AuthorCardName = styled.h4`
  margin: 8px 0 2px 0;
  padding: 0;
  font-size: 2rem;

  a {
    font-weight: 700;
    ${styles.foreground(colors.foreground.header, '1px')};
  }

  a:hover {
    text-decoration: none;
  }
`;

const AuthorCardContent = styled.section`
  p {
    margin: 0;
    line-height: 1.3em;
    ${styles.foreground(colors.foreground.header, '1px')};
  }
`;

export interface AuthorCardProps {
  author: any;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  return (
    <AuthorCardSection>
      {/* TODO: default avatar */}
      {/* TODO: author page url */}
      <img css={AuthorProfileImage} src={author.avatar.children[0].fixed.src} alt={author.id} />
      <AuthorCardContent>
        <AuthorCardName>
          <Link to={`/author/${_.kebabCase(author.id)}/`}>{author.id}</Link>
        </AuthorCardName>
        {author.bio ? (
          <p>{author.bio}</p>
        ) : (
          <p>
            Read <Link to={`/author/${_.kebabCase(author.id)}/`}>more posts</Link> by this author.
          </p>
        )}
      </AuthorCardContent>
    </AuthorCardSection>
  );
};

export default AuthorCard;
