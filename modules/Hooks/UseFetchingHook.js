import React from "react";
import useSWR from "swr";

const UseFetchingHook = (url, fromGetStatic) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    url,
    fetcher,
    fromGetStatic && {
      initialData: fromGetStatic,
      revalidateOnMount: true,
    }
  );

  return { data, error };
};

export default UseFetchingHook;
