// const [message, setMessage] = useState("");
// useEffect(() => {
//   fetch('/api/hello')
//     .then(response => response.text())
//     .then(message => {
//       setMessage(message);
//     });
// }, [])
//  static contextType = ThemeContext;
// <ThemeContext.Provider value="dark">
// <Toolbar/>
// </ThemeContext.Provider>

import React from 'react';
import Head from './Components/Head';
import Tab from './Components/Tab';
import Main from './Components/Main';
import "./App.scss";

class App extends React.Component {
  render() {
      
    return (      
      <div id="App">
        {/* 헤더   */}
        <header>
          <Head />
        </header>
        {/* 탭   */}
        <Tab />
        {/* 콘테이너   */}
        <main id="container">
          <Main/>    
        </main>
      </div>
    );
  }
}

export default App