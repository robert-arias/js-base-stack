import { useState, useEffect } from 'react';
import { apiRequest } from './services/api/apiService';

function App() {
  const [message, setMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let _message = await apiRequest();
      if (_message) {
        console.log(_message);
        setMessage(_message.data.message);
      } else {
        setMessage('There has been an error with the backend connection');
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      { message && <div> { message } </div>  }
    </div>
  );
}

export default App;
