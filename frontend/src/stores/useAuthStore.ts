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
      toast.error("Đăng ký thất bại");
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },
  signIn: async (username, password) => {
    try {
      set({ loading: true });
      const { accessToken } = await authService.SignIn(username, password);
      set({ accessToken });
      await get().fetchMe();
      toast.success("Chào mừng bạn quay lại với moji");
    } catch (error) {
      console.error(error);
      toast.error("Đăng nhập thất bại");
    } finally {
      set({ loading: false });
    }
  },
  SignOut: async () => {
    try {
      set({ loading: true });
      get().clearState();
      await authService.SignOut();
      toast.success("Logout thành công");
    } catch (error) {
      console.error(error);
      toast.error("Lỗi xảy ra khi logout hãy thử lại");
    } finally {
      set({ loading: false });
    }
  },
  fetchMe: async () => {
    try {
      set({ loading: true });
      const user = await authService.fetchMe();
      set({ user });
      console.log(user.displayName);
    } catch (error) {
      console.error(error);
      set({ user: null, accessToken: null });
      toast.error("Lỗi xảy ra khi lấy thông tin người dùng");
    } finally {
      set({ loading: false });
    }
  },
  refresh: async () => {
    try {
      set({ loading: true });
      const { user, fetchMe } = get();
      const accessToken = await authService.refresh();
      set({ accessToken: accessToken });
      if (!user) {
        await fetchMe();
      }
    } catch (error) {
      console.error(error);
      get().clearState();
    } finally {
      set({ loading: false });
    }
  },
}));
