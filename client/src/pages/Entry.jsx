import { Navbar } from "../components/Navbar.jsx";
import { useState } from "react";
import { useItems } from "../hooks/useItems.jsx";
import "../styles/Entry.scss";

export const Entry = () => {
    const MAX_TITLE_LENGTH = 15;
    const MAX_CONTENT_LENGTH = 800;
    const [entry, setEntry] = useState("");
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");
    const { postItem } = useItems();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!entry.trim() || !title.trim()) {
            setError("Both title and content are required.");
            return;
        }

        postItem({ content: entry, title: title });
        setEntry("");
        setTitle("");
        setError("");
    };

    const handleEntryChange = (e) => {
        setEntry(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    return (
        <div className="entry">
            <div className="entry-content-wrapper">
                <div className="entry-content">
                    <div className="navigation">
                        <Navbar />
                    </div>
                    <div className="entry-form-wrapper">
                        <form onSubmit={handleSubmit} className="entry-form">
                            <input

                                type="text"
                                value={title}
                                onChange={handleTitleChange}
                                placeholder="Subject"
                                className="entry-title"
                                maxLength={MAX_TITLE_LENGTH}
                            />
                            <textarea
                                value={entry}
                                onChange={handleEntryChange}
                                placeholder="What's on your mind?"
                                className="entry-post"
                                maxLength={MAX_CONTENT_LENGTH}
                            />
                            <button type="submit" className="entry-btn">Submit</button>
                            {error && <p className="error-message">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}