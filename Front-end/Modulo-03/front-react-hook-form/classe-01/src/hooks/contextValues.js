import { useState } from "react";

export default function useContextStates() {
  const [newCommentResponse, setNewCommentResponse] = useState();
  const [findCommentResponse, setFindCommentResponse] = useState({});
  const [deleteResponse, setDeleteResponse] = useState(false);
  const [updateResponse, setUpdateResponse] = useState(false);

  const onSubmitPost = async (data) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        body: data.commentary,
        userId: data.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.status === 201) {
      setNewCommentResponse(true);
    }
  };

  const onSubmitGet = async (data) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${data.findId}`
    );
    const responseData = await response.json();
    setFindCommentResponse(responseData);
  };

  const onSubmitDelete = async (data) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${data.delete}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 200) {
      setDeleteResponse(true);
    }
  };

  const onSubmitUpdate = async (data) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${data.commentId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: data.commentId,
          title: data.title,
          body: data.commentary,
          userId: data.userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    console.log(response);
    if (response.status === 201) {
      setUpdateResponse(true);
    }
  };

  return {
    newCommentResponse,
    findCommentResponse,
    deleteResponse,
    onSubmitPost,
    setNewCommentResponse,
    onSubmitGet,
    onSubmitDelete,
    onSubmitUpdate,
  };
}
