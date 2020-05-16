import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    padding-bottom: 4vw;
  }
  .post-content {
    padding-top: 3rem;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                仕事やプライベートでの開発で、ハマったことや覚えておきたいことなどを書き留めています。
                とはいえ誰にでも役立つナレッジというよりは、自分にとって役立つものや、些細なものニッチなものが多いので、
                <strong>壁にでも話してろ</strong> というスコール先生の言葉を借りたブログタイトルになっています。
              </p>
              <p>
                FF8発売当時、中学二年生だったのでそれはもう影響されました。ブログタイトルにこんな言葉持ち出すのもそのせい。
              </p>
              <p>
                開発や技術関連の話だと Spring が好きで、気がつけば10年来の長い付き合いになっていました。
                JVM言語の経験が長く、今もお仕事ではそれらが中心になっています。
                Java (2005-), Kotlin (2016-), Spring Framework (2009-), Spring Boot (2013-)
              </p>
              <p>
                休日はコードを書いたり、ゲームをしたり、子どもと遊んだりしていて、万年筆を使ったり、集めたりするのも趣味になってきています。
                Pelikanの万年筆が好き、インクはセーラーの顔料インクシリーズが好きです。
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
