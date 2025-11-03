import api from "@/lib/axios";

export const authService = {
  SignUp: async (
    username: string,
    email: string,
    password: string,
    lastname: string,
    firstname: string
  ) => {
    const res = await api.post(
      "/auth/signup",
      {
        username,
        password,
        email,
        firstname,
        lastname,
      },
      {
        withCredentials: true,
      }
    );

    return res.data;
  },
};
