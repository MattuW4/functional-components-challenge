import css from './App.module.css';
// import Sidebar from "./components/Sidebar";
import StatefulGreeting from "./components/StatefulGreeting";
import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState"; 

function App() {
  return (
    <div className={css.App}>
      {/* <Sidebar /> */}
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;