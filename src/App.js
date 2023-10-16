import {Outlet} from 'react-router-dom';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Capstone Project</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Helmet application" />
            </Helmet>
      <Outlet/>
    </div>
  );
}

export default App;
