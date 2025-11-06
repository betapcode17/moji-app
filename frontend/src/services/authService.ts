import api from "@/lib/axios";

export const authService = {
  SignUp: async (
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    const res = await api.post(
      "/auth/signup",
      {
        username,
        password,
        email,
        firstName,
        lastName,
      },
      {
        withCredentials: true,
      }
    );

    return res.data;
  },
  SignIn: async (username: string, password: string) => {
    const res = await api.post(
      "/auth/signin",
      {
        username,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return res.data; //access token
  },
  SignOut: async () => {
    const res = await api.post("/auth/signout", {}, { withCredentials: true });
    return res.data;
  },
  fetchMe: async () => {
    try {
      const res = await api.get("/users/me");
      console.log("User info:", res.data);
      return res.data;
    } catch (err) {
      console.error("Lỗi khi fetchMe:", err);
    }
  },
  refresh: async () => {
    const res = await api.post("/auth/refresh", { withCredentials: true });
    return res.data.accessToken;
  },
};
