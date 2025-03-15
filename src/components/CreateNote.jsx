import React, { useState, useRef } from 'react';

export default function CreateNote() {
  const [notes, setNotes] = useState([]);
  const formRef = useRef(null);
  const [tagsText, setTagsText] = useState(""); // Tags için state

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formObj = Object.fromEntries(form);
    const id = crypto.randomUUID();

    const newNoteObj = {
      id,
      title: formObj.title,
      tags: tagsText
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ""),
      isArchived: false,
      lastEdited: new Date().toLocaleString(),
      note: formObj.note,
    };
    setNotes([newNoteObj, ...notes]);
    console.log(newNoteObj)
    e.target.reset();
    setTagsText("");
  }
  return (
    <>
      <div className="create-section">
        <div className="create-head-section">
          <div className="go-back-btn">
            <button onClick={() => window.history.back()}>
              <img src="/img/go-back-icon.svg" alt="Go Back Icon" />
              Go Back
            </button>
          </div>
          <div className="save-cancel-btns">
            <button className="cancel-btn">Cancel</button>
            <button className="save-btn" onClick={() => formRef.current.requestSubmit()}>Save Note</button>
          </div>
        </div>

        <div className="create-text-area">
          <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
            <div className="create-title">
              <input
                type="text"
                name='title'
                placeholder="Enter a title..."
              />
            </div>
            <div className="tags-time">
              <div className="tags">
                <div className="tags-icon">
                  <img src="/img/tags-icon.svg" alt="Tags Icon" />
                  <p>Tags</p>
                  <input
                    type="text"
                    value={tagsText}
                    onChange={(e) => setTagsText(e.target.value)}
                    placeholder="e.g. Work, Planning"
                  />
                </div>
              </div>
              <div className="time">
                <div className="time-icon">
                  <img src="/img/clock-icon.svg" alt="Clock Icon" />
                  <p>Last edited</p>
                </div>
                <div className="time-text">
                  <p>Not yet saved</p>
                </div>
              </div>
            </div>
            <textarea name='note' placeholder="Start typing your note here…"></textarea>
          </form>
        </div>
      </div>
    </>
  );
}
