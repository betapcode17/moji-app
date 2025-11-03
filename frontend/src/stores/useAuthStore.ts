import { create } from "zustand";

import { toast } from "sonner";
import { authService } from "@/services/authService";
import type { AuthState } from "@/types/store";

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  user: null,
  loading: false, //xử lý api

  signUp: async (username, password, email, firstname, lastname) => {
    try {
      set({ loading: true });
      await authService.SignUp(username, password, email, firstname, lastname);
      toast.success(
        "Đăng ký thành công! Bạn sẽ được chuyển sang trang đăng nhập"
      );
    } catch (error) {
      console.error(error);
      toast.error("Đăng ký thành công");
      set({ loading: false });
    }
  },
}));
