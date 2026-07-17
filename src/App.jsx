import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppLayout } from "./components/Layout/AppLayout";
import { ReactNotes } from "./components/Pages/React Notes/ReactNotes";
import DocumentWorkspace from "./components/Pages/DocumentWorkspace";

const App = () => {
  return (
    <div className="bg-gray-950 min-h-screen">
      <AppLayout />
      {/* <DocumentWorkspace /> */}
    </div>
  );
};

export default App;
