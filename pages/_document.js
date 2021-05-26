import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charset="UTF-8"/>
            <meta name="description" content="lms" />
            <meta name="keywords" content="lms" />
            <meta name="author" content="FutureTal"/>
            <link rel="icon" type="image/png" href="/static/assets/images/favicon/favicon.png" />

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous"/>
            <link href="/static/assets/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" />
            <link href="/static/assets/css/main.css" rel="stylesheet" type="text/css"/>
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