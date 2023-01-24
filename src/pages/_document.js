import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta charset="utf-8" />
          <meta name="description" content="I am a recent graduate in web development with front-end skills, specializing in the use of modern tools such as HTML, CSS and JavaScript. My portfolio showcases my experience in creating visually appealing and user-friendly designs, optimizing page load speed, and implementing accessibility standards. I am seeking opportunities to apply my knowledge in team projects and continue growing as a developer. Some of the keywords that I used in this description include 'front-end developer', 'HTML', 'CSS', 'JavaScript', 'visually appealing design', 'speed optimization', 'accessibility standards', 'growth opportunities'. These keywords will help search engines understand the content of my portfolio and make it easier for potential clients to find me when searching for a developer with my skill set."></meta>
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
