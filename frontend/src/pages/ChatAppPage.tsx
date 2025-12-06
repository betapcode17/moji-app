import ChatWindowLayout from "@/components/chat/ChatWindowLayout";
import { AppSidebar } from "@/components/sibebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
const ChatAppPage = () => {
  return (
    <SidebarProvider>
      <AppSidebar></AppSidebar>
      <div className="flex h-screen w-full">
        <ChatWindowLayout></ChatWindowLayout>
      </div>
    </SidebarProvider>
  );
};

export default ChatAppPage;
