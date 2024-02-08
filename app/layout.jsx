import "@styles/style.css";

export const metadata = {
  title: "Vidyarthiadda | Find the best college in the city",
  description: "Find top colleges in the city, with 100% guaranteed placemenent.",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          {children}
        </main> 
    </body>
  </html>
);

export default RootLayout;
