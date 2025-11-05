import { create } from "zustand";

import { toast } from "sonner";
import { authService } from "@/services/authService";
import type { AuthState } from "@/types/store";

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  user: null,
  loading: false, //xử lý api

  clearState: () => {
    set({ accessToken: null, user: null, loading: false });
  },
  signUp: async (username, password, email, firstName, lastName) => {
    try {
      set({ loading: true });
      await authService.SignUp(username, password, email, firstName, lastName);
      toast.success(
        "Đăng ký thành công! Bạn sẽ được chuyển sang trang đăng nhập"
      );
    } catch (error) {
      console.error(error);
      toast.error("Đăng nhập thành công");
      set({ loading: false });
    }
  },
  signIn: async (username, password) => {
    try {
      set({ loading: true });
      const { accessToken } = await authService.SignIn(username, password);
      set({ accessToken });
      toast.success("Chào mừng bạn quay lại với moji");
    } catch (error) {
      console.error(error);
      toast.error("Đăng nhập thất bại");
      set({ loading: false });
    }
  },
  SignOut: async () => {
    try {
      get().clearState();
      await authService.SignOut();
      toast.success("Logout thành công");
    } catch (error) {
      console.error(error);
      toast.error("Lỗi xảy ra khi logout hãy thử lại");
    }
  },
}));
