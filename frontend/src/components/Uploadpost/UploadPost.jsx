import Modal from "@material-ui/core/Modal";
import AddIcon from "@material-ui/icons/Add";
import './UploadPost.css';
import CloseIcon from "@material-ui/icons/Close";


export default function UploadPost({ open, handleClose }) {
    return (
        <Modal open={open} onClose={handleClose}>
            <div className="modal__container">
                <div className="modal__body">
                    <a href="#!" onClick={handleClose} className="close__uploadModal">
                        <CloseIcon />
                    </a>
                    <form onSubmit={console.log("submit")}>
                        <input
                            type="file"
                            id="file"
                            className="file"
                        />
                        <label htmlFor="file" className="file__placeholder">
                            <h4>
                                <AddIcon />
                            </h4>
                        </label>
                        <textarea
                            name="caption"
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Caption"
                            className="form__caption"
                        ></textarea>
                        <button type="submit" className="primary-insta-btn" >
                            Upload</button>
                    </form>
                </div>
            </div>
        </Modal>
    );
}