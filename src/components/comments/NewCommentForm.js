import { useRef, useEffect } from "react";
import useHttp from "../hooks/use-http";
import { addComment } from "../lib/api";

import classes from "./NewCommentForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = props => {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);
  const { quoteId, onAddedComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = event => {
    event.preventDefault();

    const enteredComment = commentTextRef.current.value;

    // send comment to server
    if (commentTextRef.current.value) {
      sendRequest({ commentData: { text: enteredComment }, quoteId });
    }
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}

      {status !== "pending" && (
        <div className={classes.control} onSubmit={submitFormHandler}>
          <label htmlFor="comment">Your Comment</label>
          <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
        </div>
      )}

      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
