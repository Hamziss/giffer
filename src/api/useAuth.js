import { useMutation } from "@tanstack/react-query";


export const useAuth = () => {
  return useMutation({
    mutationFn: async (accessToken) => {

      const res = await fetch("https://discord.com/api/users/@me", {
        headers: {
          Authorization: "Bearer " + accessToken,
        }
      }
      ).then(async (res) => await res.json())


      // save the user in our db
      const user = await fetch("https://vivacious-gold-veil.cyclic.app/auth", {
        body: JSON.stringify(res),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      }).then(async (res) => await res.json())

      // save user in local storage
      localStorage.setItem("user", JSON.stringify(user))
      return user
    },
  })
};
