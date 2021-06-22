import Header from "./Header";
import ContentList from "./ContentList";
import { useFetchContent } from "../hooks/useFetchContent";
import "./App.css";
import { useEffect} from "react";
import Button from "./Button";

const App = () => {
  const [ content, fetchData, fetchMore] = useFetchContent();
  useEffect(()=> {
    fetchData()
  },[])
  return (
    <div className="App">
      <Header onSearch={fetchData} />
      <h1 >Simple content list</h1>
      <ContentList content={content} />
      <Button onClick={fetchMore}>Fetch More</Button>
      {/* TODO: Put FetchMoreButton component here */}
    </div>
  );
};

export default App;
