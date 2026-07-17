import React, { useState } from 'react';
import pythonNotes from '../../api/pythonNotes.json'; 

export default function SimpleDocumentList() {
  const [notes] = useState(pythonNotes);
  const DRIVE_BASE_URL = "https://drive.google.com/file/d";

  return (
    <div style={styles.pageContainer}>
      {notes.map((note) => (
        <section key={note.id} style={styles.noteSection}>
          {/* Topic Name */}
          <h2 style={styles.topicHeading}>{note.title}</h2>
          
          {/* Embedded PDF Below the Heading */}
          <div style={styles.iframeWrapper}>
            <iframe
              src={`${DRIVE_BASE_URL}/${note.driveFileId}/preview`}
              style={styles.iframe}
              allow="autoplay"
              title={note.title}
              loading="lazy"
            />
          </div>
        </section>
      ))}
    </div>
  );
}


const styles = {
  pageContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'system-ui, sans-serif',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    gap: '60px' // Generous spacing between different topics
  },
  noteSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  topicHeading: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#111827',
    margin: 0,
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: '8px'
  },
  iframeWrapper: {
    width: '100%',
    height: '600px', // Standard height for comfortable inline reading
    borderRadius: '6px',
    border: '1px solid #e5e7eb',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none'
  }
};