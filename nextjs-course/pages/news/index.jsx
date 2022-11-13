import React, { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h2>The News Page</h2>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS is a great framework
          </Link>
        </li>
        <li>
          <Link href="/news/something-else">Something else</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
