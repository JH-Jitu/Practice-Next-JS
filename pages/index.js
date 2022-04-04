import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Post, Posts } from "../modules/Container.styles";

export default function Home() {
  return (
    <>
      <Container>
        <h1>Hello World</h1>
        <Link passHref href="/posts">
          <button>Click me to see the posts</button>
        </Link>
      </Container>
    </>
  );
}
