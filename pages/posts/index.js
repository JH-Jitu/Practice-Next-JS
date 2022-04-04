import React from "react";
import useSWR from "swr";
import Link from "next/link";
import { Container, Post, Posts } from "../../modules/Container.styles";

const posts = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return (
    <Container>
      <Posts>
        {data?.map((post) => {
          return (
            <Post key={post.id}>
              <h5>{post.title}</h5>
              <small>Post NO : {post.id}</small>
              <small>User ID : {post.userId}</small>
              <p>{post.body}</p>
              <Link passHref href={`/posts/${post.id}`}>
                <button>See Details</button>
              </Link>
            </Post>
          );
        })}
      </Posts>
    </Container>
  );
};

export default posts;
