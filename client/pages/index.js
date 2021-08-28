import axios from 'axios';

const LandingPage = ({ currentUser }) => {

  // axios.get('/api/users/currentuser').catch((err) => {
  //   console.log(err.message);
  // });
  console.log(currentUser);
  return <h1>Landing Page</h1>
};

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    // are on the server
    // requests should be made to http://ingress-nginx.ingress-nginx.srv.xxxxxx
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        // send cookies along with all headers
        // along with the 'host: "ticketing.dev'
        // get sent to nginx to route the quest 
        // to the correct service
        headers: req.headers
      }
    );
    return data;
  } else {
    // we are on the browser
    // request can be made with a base url of ''
    const { data } = await axios.get('/api/users/currentuser');
    return data;
  }
  return {};
};

export default LandingPage;