import { useState } from "react";
import { ReactNotes } from "../Pages/React Notes/ReactNotes";
import { ReactInterview } from "../Pages/React Interview/ReactInterview";
import { TanStackNotes } from "../Pages/TanStack Notes/TanStackNotes";
import { FrontendInterview } from "../Pages/Frontend Interview/FrontendInterview";
import { ReduxNotes } from "../Pages/Redux Notes/ReduxNotes";
import { PythonNotesData } from "../Pages/Python Notes/PythonNotesData";
import { SQLNotes } from "../Pages/SQL Notes/SQLNotes";

export const AppLayout = () => {
  const [activeTab, setActiveTab] = useState("react");

  return (
    <div className="layout-section">
      <div className="layout-display">
        <button
          onClick={() => setActiveTab("react")}
          className={activeTab === "react" ? "active-tab" : "dective-tab"}
        >
          React
        </button>
        <button
          onClick={() => setActiveTab("tanstack")}
          className={activeTab === "tanstack" ? "active-tab" : "dective-tab"}
        >
          TanStack
        </button>
        <button
          onClick={() => setActiveTab("redux")}
          className={activeTab === "redux" ? "active-tab" : "dective-tab"}
        >
          Redux
        </button>
        <button
          onClick={() => setActiveTab("react-int")}
          className={activeTab === "react-int" ? "active-tab" : "dective-tab"}
        >
          React Interview
        </button>
        <button
          onClick={() => setActiveTab("front-int")}
          className={activeTab === "front-int" ? "active-tab" : "dective-tab"}
        >
          Frontend Interview
        </button>
        <button
          onClick={() => setActiveTab("python")}
          className={activeTab === "python" ? "active-tab" : "dective-tab"}
        >
          Python
        </button>
        <button
          onClick={() => setActiveTab("mysql")}
          className={activeTab === "mysql" ? "active-tab" : "dective-tab"}
        >
          MySQL
        </button>
      </div>

      {activeTab === "react" && <ReactNotes />}
      {activeTab === "tanstack" && <TanStackNotes />}
      {activeTab === "redux" && <ReduxNotes />}
      {activeTab === "react-int" && <ReactInterview />}
      {activeTab === "front-int" && <FrontendInterview />}
      {activeTab === "python" && <PythonNotesData />}
      {activeTab === "mysql" && <SQLNotes />}
    </div>
  );
};
