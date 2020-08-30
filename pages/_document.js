import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charset="UTF-8"/>
            <meta name="description" content="Turing - IT Solutions and Corporate template by tempload." />
            <meta name="keywords" content="turing, startup, saas, agency, development, html, template, tempload" />
            <meta name="author" content="tempload"/>
            <link rel="icon" type="image/png" href="/static/assets/images/favicon/favicon.png" />

            <link href="/static/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
            <link href="/static/assets/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" />
            <link href="/static/assets/css/orangef9e3.css?v=1.1" rel="stylesheet" type="text/css" />
        </Head>
        <body className="d-flex flex-column min-vh-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument