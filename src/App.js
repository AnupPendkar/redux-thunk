import "./App.css";
import { useEffect, useState } from "react";
import useStoreData from "./hooks/useStoreData";
import Page from "./components/Page";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  const [loading, setLoading] = useState(false);
  const storeData = useStoreData("http");

  useEffect(() => {
    setLoading(storeData?.loading);
  }, [storeData]);

  return (
    <div className="App">
      {loading && <CircularProgress />}
      <Page />
    </div>
  );
}

export default App;
