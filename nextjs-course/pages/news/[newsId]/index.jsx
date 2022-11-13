import React from "react";
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;

  return <h3>The Detail Page</h3>;
};

export default DetailPage;
