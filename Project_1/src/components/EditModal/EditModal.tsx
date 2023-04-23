import { useState } from 'react';
import Styles from "./EditModal.module.scss";

const EditModal = ({ postId, postTitle, postBody, onSave, onCancel }: any) => {
    const [title, setTitle] = useState(postTitle);
    const [body, setBody] = useState(postBody);

    const handleSaveClick = () => {
        onSave(postId, title, body);
    };

    const handleCancelClick = () => {
        onCancel();
    };

    return (
        <div className={Styles.popup}>
            <div className={Styles.edit}>
                <h2>Edit Post</h2>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
                <label htmlFor="body">Body</label>
                <textarea id="body" value={body} onChange={e => setBody(e.target.value)}></textarea>
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
            </div>
        </div>
    );
};

export default EditModal