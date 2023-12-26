import "@styles/globals.css";
import { inter, lusitana } from '@styles/fonts';
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: {
    template: '%s | Promptopia',
    default: 'Promptopia',
  },
  description: 'Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body className={`${lusitana.className} antialiased`}>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
