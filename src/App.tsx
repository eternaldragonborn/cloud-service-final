import { Container, Divider, Tab, Tabs, Stack } from "@mui/material";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [item, setItem] = useState<"table" | "chart">("chart");

  return (
    <div className="App">
      <Stack sx={{ pb: 1 }} direction="column">
        <Container className="App-header">
          <Tabs value={item} onChange={(_, value) => setItem(value)}>
            <Tab component={Link} to="/" label="比較圖表" value="chart" />
            <Tab component={Link} to="/table" label="各區數據" value="table" />
          </Tabs>
        </Container>
        <Divider />
      </Stack>

      <Outlet />
    </div>
  );
}

export default App;
