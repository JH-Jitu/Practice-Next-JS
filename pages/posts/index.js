import React from "react";
import useSWR from "swr";
import Link from "next/link";
import { Container, Post, Posts } from "../../modules/Container.styles";
import UseFetchingHook from "../../modules/Hooks/UseFetchingHook";

const posts = (props) => {
  const { data, error } = UseFetchingHook(
    "https://jsonplaceholder.typicode.com/posts",
    props
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

export async function getStaticProps(context) {
  const posts = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
