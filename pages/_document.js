import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt_BR">
        <Head />
        <body>
          <main className="d-flex flex-column min-h-full bg-gray-100">
            <div className="navbar sticky top-0 py-5 w-full mx-auto bg-white shadow">
              <div className="container mx-auto">
                <Link href='/'>
                  <a className="text-2xl font-semibold">MG Ferramentas</a>
                </Link>
              </div>
            </div>
            <div className="container mx-auto my-5 min-h-full">
              <Main />
            </div>
          </main>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument