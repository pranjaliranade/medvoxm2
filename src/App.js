
import './App.css';
import Header from './pages/Header.js';
/*import './pages/Profile'*/
//import Sidebar from './pages/Sidebar';

function App() {
  return (
    <div>
      <Header /> 
      {/*<Sidebar />*/}
      <h2>Welcome to the News Aggregator</h2>
      <p>Select a category or log in to view personalized news.</p>
      {/*user && <p>Welcome, {user.email}</p>*/}
      <h3>Your Reading History</h3>
      {/*<ul>
        {history.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>*/}
      
      <div className="home-buttons"> 
        <a href="/favorites"> 
        <button>Favorites</button> 
        </a> 
        <a href="/history"> 
        <button>History</button> 
        </a> 
        <a href="/subscription"> 
        <button>Subscription</button> 
        </a> 
      </div>
    </div>
  );
}

export default App;
