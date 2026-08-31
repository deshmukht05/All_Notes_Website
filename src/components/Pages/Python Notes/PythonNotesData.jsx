import { useState } from "react";
import pythonNotes from "../../../api/pythonNotes.json";

export const PythonNotesData = () => {
  const [notes] = useState(pythonNotes);
  const [isLoading, setIsLoading] = useState(true);
  const DRIVE_BASE_URL = "https://drive.google.com/file/d";

  return (
    <>
      <h1>Python Notes</h1>
      <ul>
        <div className="section-accordion">
          {notes.map((curEle) => {
            const { title, tags, driveFileId, id } = curEle;
            return (
              <li key={id}>
                <div className="topic-grid">
                  <p className="accordion-question">{title}</p>
                  <p className="accordian-tags">{tags}</p>
                </div>
                <div className="iframeWrapper">
                  {isLoading && (
                    <p className="loading-text">
                      Fetching document from Google Drive...
                    </p>
                  )}
                  <iframe
                    src={`${DRIVE_BASE_URL}/${driveFileId}/preview`}
                    allow="autoplay"
                    title={title}
                    loading="lazy"
                    onLoad={() => setIsLoading(false)}
                  />
                </div>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
};
