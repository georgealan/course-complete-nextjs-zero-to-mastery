import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <p>Copyright 2021 KodyWeb</p>
      </footer>
    </div>
  );
}

export default MyApp
