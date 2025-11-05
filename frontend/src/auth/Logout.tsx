import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import React from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const { SignOut } = useAuthStore();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await SignOut();
      navigate("/signin");
    } catch (error) {
      console.error(error);
    }
  };
  return <Button onClick={handleLogout}>Logout</Button>;
};

export default Logout;
