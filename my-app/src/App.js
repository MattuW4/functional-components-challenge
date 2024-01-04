import css from './App.module.css';
// import Sidebar from "./components/Sidebar";
import StatefulGreeting from "./components/StatefulGreeting";
import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";

function App() {
  return (
    <div className={css.App}>
      {/* <Sidebar /> */}
      <StatefulGreetingWithCallback />
    </div>
  );
}

export default App;