import React, { useEffect, useState } from 'react';

export default function AllNotes() {
  const [notesData, setNotesData] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then((response) => response.json())
      .then((data) => setNotesData(data));
  }, []);

  const handleNewNoteClick = () => {
    window.location.hash = '/create-note';
  };

  return (
    <div className="all-notes">
      {notesData.length > 0 ? (
        <ul>
          {notesData.map((note, i) => (
            <li key={i}>
              <h2>{note.title}</h2>
              <div className='tags'>
                {note.tags.map((tag, i) => (
                  <p key={i}>
                    {tag}
                  </p>
                ))}
              </div>
              <span>{note.time}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Veriler yükleniyor...</p>
      )}
      <div className="new-note-icon">
        <img
          src="/img/plus-icon.svg"
          alt="Plus Section Icon"
          onClick={handleNewNoteClick}
        />
      </div>
    </div>
  );
}
