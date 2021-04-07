import Head from 'next/head'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Michael Henger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <main className="container">

      <nav>
        <div className="logo">
          <h3>Michael Hegner</h3>
          </div>
        </nav>

        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                </div>
                <div className="col-6">
                  <h1>Michael Hegner</h1>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="row">
                <div className="col-12"> 
                  <h2>My Work</h2>
                  <div className="row">
                  <div className="col-4">
                  </div>
                  <div className="col-4">
                  </div>
                  <div className="col-4">
                  </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
      </main>
    </div>
  )
}
