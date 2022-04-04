import React from "react";
import useSWR from "swr";

const UseFetchingHook = (url) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};

export default UseFetchingHook;
