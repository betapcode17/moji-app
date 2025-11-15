import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect, useState, useCallback } from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const { accessToken, user, refresh, fetchMe, loading } = useAuthStore();
  const [starting, setStarting] = useState(true);

  const init = useCallback(async () => {
    try {
      // Có thể xảy ra khi reload trang
      if (!accessToken) {
        await refresh();
      }

      if (accessToken && !user) {
        await fetchMe();
      }
    } catch (err) {
      console.error("Auth init failed:", err);
    } finally {
      setStarting(false);
    }
  }, [accessToken, user, refresh, fetchMe]);

  useEffect(() => {
    init();
  }, [init]);

  // Nếu chưa có token thì chuyển hướng luôn
  if (!accessToken && !starting) {
    return <Navigate to="/signin" replace />;
  }

  // Hiển thị màn hình chờ khi đang tải
  if (starting || loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Đang tải trang...
      </div>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
