import { BrowserRouter, Route, Routes } from "react-router";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ChatAppPage from "./pages/ChatAppPage";
import { Toaster } from "sonner";
import ProtectedRoute from "./auth/ProtectedRoute";
function App() {
  return (
    <>
      {/* Thông báo */}
      <Toaster></Toaster>
      <BrowserRouter>
        <Routes>
          {/* public route */}
          <Route path="/signin" element={<SignInPage></SignInPage>}></Route>
          <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
          {/* protected route */}
          <Route element={<ProtectedRoute></ProtectedRoute>}>
            <Route path="/" element={<ChatAppPage></ChatAppPage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
