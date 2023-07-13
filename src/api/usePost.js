import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetPost = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return fetch("https://vivacious-gold-veil.cyclic.app/posts")
        .then(async (res) => await res.json())
    },
  });
};


export const useCreatePost = () => {
  return useMutation({
    mutationFn: (postNew) => {
      return fetch("https://vivacious-gold-veil.cyclic.app/posts/add", {
        body: JSON.stringify(postNew),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      })
    }
  })
}
export const useGetUserPost = (id) => {
  return useQuery({
    queryKey: ["posts", id],
    keepPreviousData: true,
    queryFn: async () => {
      return await fetch(`https://vivacious-gold-veil.cyclic.app/posts/${id}`)
        .then(async (res) => await res.json())
    },
  });
}