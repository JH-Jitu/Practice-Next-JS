import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

const SinglePost = () => {
  const router = useRouter();
  const { singlePost } = router.query;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  //   const { data, error } = useSWR(
  //     `https://jsonplaceholder.typicode.com/comments?postId=${singlePost}`,
  //     fetcher
  //   );

  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${singlePost && singlePost}`,
    fetcher
  );
  console.log(singlePost);

  console.log(data);

  return (
    <div>
      <h5>{data?.body}</h5>
      {/* <ul>
        {data?.map((comment) => {
          return (
            <li key={comment.id}>
              <b>{comment.name}</b>
              <small>{comment.body}</small>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default SinglePost;
