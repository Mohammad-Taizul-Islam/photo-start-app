import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>PhotoStar</title>
        <meta name="description" content="Photo gallery built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">PhotoStar</h1>
      </header>
      <main className="p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
