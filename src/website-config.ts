export interface WebsiteConfig {
  author: string;
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * full url, no username
   */
  github?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;

  copies: CopyConfig[];
}

export interface CopyConfig {
  url: string;
  title: string;
}

const config: WebsiteConfig = {
  author: 'yo1000',
  title: 'talk2wall',
  description: '',
  coverImage: 'img/blog-cover.png',
  logo: 'img/talk2wall.svg',
  lang: 'ja',
  siteUrl: 'https://www.yo1000.com',
  twitter: 'https://twitter.com/yoichi_kikuchi',
  github: 'https://github.com/yo1000',
  showSubscribe: false,
  mailchimpAction: 'https://',
  mailchimpName: '',
  mailchimpEmailFieldName: '',
  googleSiteVerification: 'GoogleCode',
  footer: '',
  copies: [
    {
      url: '/',
      title: `Copyright (C) 2017-${new Date().getFullYear()} yo1000 | YO!CHI KIKUCHI`,
    },
    {
      url: 'https://www.jp.square-enix.com/ffviii/guideline.html',
      title: 'Copyright (C) 1999, 2019 SQUARE ENIX CO., LTD. All Rights Reserved.',
    },
  ]
};

export default config;
