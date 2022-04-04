import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import UseFetchingHook from "../../modules/Hooks/UseFetchingHook";

const SinglePost = () => {
  const router = useRouter();
  const { singlePost } = router.query;

  const { data, error } = UseFetchingHook(
    `https://jsonplaceholder.typicode.com/comments?postId=${singlePost}`
  );

  const { data: postData, error: postError } = UseFetchingHook(
    `https://jsonplaceholder.typicode.com/posts/${singlePost}`
  );

  return (
    <div>
      <h5>{postData?.body}</h5>
      <ul>
        {data?.map((comment) => {
          return (
            <li key={comment.id}>
              <b>{comment.name}</b>
              <small>{comment.body}</small>
            </li>
          );
        })}
      </ul>

      <button>
        <Link passHref href="/">
          Go back to home
        </Link>
      </button>
    </div>
  );
};

export default SinglePost;
