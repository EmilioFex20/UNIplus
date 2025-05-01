import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => {
  if (!res.ok) throw new Error("No autenticado");
  return res.json();
});

export default function useUser() {
  const { data, error, isLoading, mutate } = useSWR("/api/user", fetcher);
  return {
    user: data,
    isLoading,
    isError: error,
    mutate,
  };
}