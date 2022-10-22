import { RoutesConfig } from "../src/components/route/Routes";
import Header from "./components/header/Header";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      justifyContent="space-between"
      style={{
        backgroundColor: "#1f1f1f",
        color: "#f8f8f8",
        width: "100%",
      }}
    >
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <RoutesConfig />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}

export default App;
