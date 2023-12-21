import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (term) => {
    console.log("this is a term", term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
