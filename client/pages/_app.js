import 'bootstrap/dist/css/bootstrap.css';



const main = ({ Component, pageProps }) => {
  return (
    <div>
      <h1>Header!</h1>
      <Component {...pageProps} />
    </div>
  );
};

export default main;