import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: 20, paddingLeft: 30 }}>
        <SearchFilter />
      </div>
      <div style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
