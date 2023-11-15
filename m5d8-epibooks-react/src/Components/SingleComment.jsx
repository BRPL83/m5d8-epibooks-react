import { Button, ListGroup } from 'react-bootstrap';

const SingleComment = ({ comment, onDeleteComment }) => {
  const deleteComment = async (id) => {
    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + id, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmYzY4M2IzOTczNDAwMTRkNWU4OGEiLCJpYXQiOjE2OTg4NzgyNzAsImV4cCI6MTcwMDA4Nzg3MH0.avLIxyi8gko2sZcLABEzkS_rV-vn0VgaWg-lGucXBcE',
        },
      });

      if (response.ok) {
        alert("Review successfully removed");
        onDeleteComment(id);
      } else {
        throw new Error('Your review was not deleted, please try again!');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button variant="danger" className="ms-2" onClick={() => deleteComment(comment._id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;