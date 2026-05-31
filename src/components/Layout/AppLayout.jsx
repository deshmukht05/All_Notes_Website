import { useState } from "react";
import { ReactNotes } from "../Pages/React Notes/ReactNotes";
import { ReactInterview } from "../Pages/React Interview/ReactInterview";
import { TanStackNotes } from "../Pages/TanStack Notes/TanStackNotes";
import { FrontendInterview } from "../Pages/Frontend Interview/FrontendInterview";

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
          onClick={() => setActiveTab("react-int")}
          className={activeTab === "react-int" ? "active-tab" : "dective-tab"}
        >
          React Interview
        </button>
        <button
          onClick={() => setActiveTab("tanstack")}
          className={activeTab === "tanstack" ? "active-tab" : "dective-tab"}
        >
          TanStack
        </button>
        <button
          onClick={() => setActiveTab("front-int")}
          className={activeTab === "front-int" ? "active-tab" : "dective-tab"}
        >
          Frontend Interview
        </button>
      </div>

      {activeTab === "react" && <ReactNotes />}
      {activeTab === "react-int" && <ReactInterview />}
      {activeTab === "tanstack" && <TanStackNotes />}
      {activeTab === "front-int" && <FrontendInterview />}

    </div>
  );
};
