import { lighten, setLightness, darken, setSaturation } from 'polished';
import * as React from 'react';
import styled from '@emotion/styled';
import RehypeReact from 'rehype-react';

import { colors } from '../styles/colors';
import { styles } from '../styles/styles';

export const PostFullContent = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 70px 100px 0;
  min-height: 230px;
  font-size: 2rem;
  line-height: 1.6em;
  ${styles.foreground(colors.foreground.standard, '1px')};

  background-size: cover;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  transition: all 0.5s ease;

  ${styles.background(colors.background.ballon)};
  ${styles.border(colors.border.balloon, 6)};
  position:relative;
  
  @media (max-width: 1170px) {
    padding: 5vw 7vw 0;
  }
  @media (max-width: 800px) {
    font-size: 1.9rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  dl,
  pre,
  blockquote,
  .post-full-comments,
  .footnotes {
    min-width: 100%;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 1.5em;
  }

  li:before {
    display: inline-block;
    position: absolute;
    width: 2em;
    word-break: break-word;
    background: url(/img/yubi.png) left 0 top .525em no-repeat;
    background-size: 1.4em;
    content: '';
    height: 1.6em;
    line-height: 0;
    left: 5em;
  }

  .post-content>p:first-child {
    font-size: 1.25em;
    line-height: 1.5em;
  }
  
  li {
    word-break: break-word;
  }

  li p {
    margin: 0;
  }

  a {
    ${styles.foreground(colors.foreground.link, '1px')};
    word-break: break-word;
  }

  a:hover {
    text-decoration: none;
  }

  strong,
  em {
    ${styles.foreground(colors.foreground.header, '2px')};
  }

  small {
    display: inline-block;
    line-height: 1.6em;
  }

  li:first-child {
    margin-top: 0;
  }

  .gatsby-resp-image-link {
    box-shadow: none;
  }

  img,
  video {
    display: block;
    margin: 1.5em auto;
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1040px) {
    img,
    video {
      width: 100%;
    }
  }

  img[src$='#full'] {
    max-width: none;
    width: 100vw;
  }

  img + br + small {
    display: block;
    margin-top: -3em;
    margin-bottom: 1.5em;
    text-align: center;
  }

  /* Override third party iframe styles */
  iframe {
    margin: 0 auto !important;
  }

  blockquote {
    margin: 0 0 1.5em;
    padding: 0 1.5em;
    border-left: #3eb0ef 3px solid;
  }

  blockquote p {
    margin: 0 0 1em 0;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    font-style: italic;
  }

  blockquote p:last-child {
    margin-bottom: 0;
  }

  code {
    padding: 0 5px 2px;
    font-size: 0.8em;
    line-height: 1em;
    ${styles.foreground(colors.foreground.code, '1px')};
    border-radius: 3px;
    font-weight: 600;
  }

  p code {
    word-break: break-all;
  }

  pre {
    overflow-x: auto;
    /* for syntax highlighting */
    padding: 20px;
    max-width: 100%;
    font-size: 1.4rem;
    line-height: 1.5em;
    border-radius: 5px;

    border: ${darken('0.01', colors.darkgrey)} 1px solid;
    color: ${colors.whitegrey};
    background: ${darken('0.03', colors.darkgrey)};
  }

  pre code {
    border: none;
    font-weight: 400;
    text-shadow: ${colors.foreground.code.shadow} 1px 1px;

    padding: 0;
    font-size: inherit;
    line-height: inherit;
    background: transparent;
  }

  pre code :not(span) {
    color: inherit;
  }

  /* .fluid-width-video-wrapper { */
  .gatsby-resp-iframe-wrapper {
    margin: 1.5em 0 3em;
  }

  hr {
    margin: 4vw 0;
  }

  hr:after {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    display: block;
    margin-left: -10px;
    width: 1px;
    height: 30px;
    /* background: color(var(--lightgrey) l(+10%)); */
    background: ${lighten('0.1', colors.lightgrey)};
    box-shadow: #fff 0 0 0 5px;
    transform: rotate(45deg);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${styles.foreground(colors.foreground.header, '1px')};
    display: inline-block;
  }

  h1,
  h2 {
    ${styles.foreground(colors.foreground.header, '2px')};
    margin: .5em 0 .4em;
    line-height: 1.25em;
    font-weight: 600;
  }

  h1 {
    font-size: 4.2rem;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2.8rem;
    }
  }

  h2 {
    font-size: 3.2rem;
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 2.6rem;
    }
  }

  h3,
  h4 {
    margin: .5em 0 .2em;
    font-size: 2.5rem;
    font-weight: 600;
  }

  h3 {
    line-height: 1.3em;
  }

  @media (max-width: 500px) {
    h3,
    h4 {
      font-size: 2.2rem;
    }
  }

  h5 {
    display: block;
    margin: .5em 0;
    padding: .4em 1em .9em;
    border: 0;
    color: ${colors.foreground.link.color};
    font-size: 3.2rem;
    line-height: 1.35em;
    text-align: center;
  }
  @media (min-width: 1180px) {
    h5 {
      max-width: 1060px;
    }
  }
  @media (max-width: 500px) {
    h5 {
      padding: 0 0 0.5em;
      font-size: 2.2rem;
    }
  }

  h6 {
    margin: .5em 0 .2em;
    font-size: 2.3rem;
    font-weight: 700;
  }
  @media (max-width: 500px) {
    h6 {
      font-size: 2rem;
    }
  }

  /* Tables */
  table {
    display: inline-block;
    overflow-x: auto;
    margin: 0.5em 0 2.5em;
    max-width: 100%;
    width: auto;
    border-spacing: 0;
    border-collapse: collapse;
    font-size: 1.6rem;
    white-space: nowrap;
    vertical-align: top;
  }

  table {
    -webkit-overflow-scrolling: touch;
    background: radial-gradient(ellipse at left, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 0
        center,
      radial-gradient(ellipse at right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 100% center;
    background-attachment: scroll, scroll;
    background-size: 10px 100%, 10px 100%;
    background-repeat: no-repeat;
  }

  table td:first-child {
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 20px 100%;
    background-repeat: no-repeat;
  }

  table td:last-child {
    background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-position: 100% 0;
    background-size: 20px 100%;
    background-repeat: no-repeat;
  }

  table th {
    color: ${colors.darkgrey};
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.2px;
    text-align: left;
    text-transform: uppercase;
    /* background-color: color(var(--whitegrey) l(+4%)); */
    background-color: ${lighten('0.04', colors.whitegrey)};
  }

  table th,
  table td {
    padding: 6px 12px;
    /* border: color(var(--whitegrey) l(-1%) s(-5%)) 1px solid; */
    border: ${setSaturation('0.05', darken('0.01', colors.whitegrey))} 1px solid;
  }

  @media (max-width: 500px) {
    padding: 0 1.5rem;
    :before {
      display: none;
    }
    :after {
      display: none;
    }
  }

  /* Start Syntax Highlighting */
  /* Taken from overreacted https://github.com/gaearon/overreacted.io/blob/942b41555f5e5ccbb5f93f6c26142cd90b314236/src/utils/global.css#L68 */
  code[class*='language-'],
  pre[class*='language-'] {
    background: none;
    font-feature-settings: normal;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    overflow: auto;
    padding: 1.3125rem;
  }

  pre[class*='language-']::-moz-selection {
    /* Firefox */
    background: hsl(207, 4%, 16%);
  }

  pre[class*='language-']::selection {
    /* Safari */
    background: hsl(207, 4%, 16%);
  }

  /* Text Selection colour */
  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    border-radius: 0.3em;
    background: var(--inlineCode-bg);
    color: var(--inlineCode-text);
    padding: 0.15em 0.2em 0.05em;
    white-space: normal;
  }

  .token.attr-name {
    color: rgb(173, 219, 103);
    font-style: italic;
  }

  .token.comment {
    color: rgb(128, 147, 147);
  }

  .token.string,
  .token.url {
    color: rgb(173, 219, 103);
  }

  .token.variable {
    color: rgb(214, 222, 235);
  }

  .token.number {
    color: rgb(247, 140, 108);
  }

  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: rgb(130, 170, 255);
  }

  .token.punctuation {
    color: rgb(199, 146, 234);
  }

  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
    font-style: 'italic';
  }

  .token.class-name {
    color: rgb(255, 203, 139);
  }

  .token.tag,
  .token.operator,
  .token.keyword {
    color: #ffa7c4;
  }

  .token.boolean {
    color: rgb(255, 88, 116);
  }

  .token.property {
    color: rgb(128, 203, 196);
  }

  .token.namespace {
    color: rgb(178, 204, 214);
  }

  pre[data-line] {
    padding: 1em 0 1em 3em;
    position: relative;
  }

  .gatsby-highlight-code-line {
    background-color: hsla(207, 95%, 15%, 1);
    display: block;
    margin-left: -5.90625rem;
    margin-right: -1.3125rem;
    padding-left: 5.90625rem;
  }

  .gatsby-highlight {
    margin: 1.5em 0;
    
    ${styles.background(colors.background.balloonGlassy)};
    ${styles.border(colors.border.balloon, 4)};
    position:relative;
  
    -webkit-overflow-scrolling: touch;
    overflow: auto;

    pre {
      border: 0;
    }
  }

  pre[class*='language-'].line-numbers {
    position: static;
    height: 100%;
    padding-left: 6rem;

    .line-numbers-rows {
      height: 100%;
      background: #2f2f2f;

      padding: 1.3125rem 0;
      width: 4.59375rem !important;
      border-right: 2px ${colors.border.balloon.left} solid;
    }
  }

  .gatsby-highlight pre[class*='language-'] {
    float: left;
    min-width: 100%;
  }
  /* End Syntax Highlighting */
`;

const renderAst = new RehypeReact({
  createElement: React.createElement,
  // components: { 'interactive-counter': Counter },
  components: {},
}).Compiler;

const Ast = ({ ast, ...props }: any) => {
  ast.properties = props;
  return renderAst(ast);
};

export interface PostContentProps {
  htmlAst: any;
}

const PostContent: React.FC<PostContentProps> = ({ htmlAst }) => {
  return (
    <PostFullContent className="post-full-content">
      {/* TODO: this will apply the class when rehype-react is published https://github.com/rhysd/rehype-react/pull/11 */}
      <Ast className="post-content" ast={htmlAst} />
    </PostFullContent>
  );
};

export default PostContent;
