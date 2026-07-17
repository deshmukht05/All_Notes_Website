import { useState } from "react";

export const SQLNotes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const BASE_URL = "https://drive.google.com/file/d/"
  const driveFileId = "1tI642I0Nv7Wn7GnOFKKzXIK4GiiSzzbc"

  return (
    <>
      <h1>MySQL Notes</h1>
      <div className="section-accordion">
        <div className="iframeWrapper-sql">
          {isLoading && (
            <p className="loading-text">
              Fetching document from Google Drive...
            </p>
          )}
          <iframe
            src={`${BASE_URL}${driveFileId}/preview`}
            allow="autoplay"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </>
  );
};
