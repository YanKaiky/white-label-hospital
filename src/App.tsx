import { AppThemeProvider } from "./contexts";
import AppRoutes from "./routes";

const App = () => {
  return (
    <AppThemeProvider>
      <AppRoutes />
    </AppThemeProvider>
  );
}

export default App;
