// import { NavUser } from "@/components/sibebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import CreateNewChat from "../chat/CreateNewChat";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="bg-gradient-primary"
            >
              <a href="">
                <div className="flex w-full items-center justify-between px-2">
                  <h1 className="text-xl font-bold text-white">Moji</h1>
                  <div className="flex items-center gap-2">
                    <Sun className="size-4 text-white/80"></Sun>
                    <Switch
                      checked={true}
                      onCheckedChange={() => {}}
                      className="data-[state=checked]:bg-background/80"
                    />
                    <Moon className="size-4 text-white/80"></Moon>
                  </div>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      {/* Content */}
      <SidebarContent>
        {/* new chat */}
        <SidebarGroup>
          <SidebarGroupContent>
            <CreateNewChat></CreateNewChat>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* group chat */}
        <SidebarGroup>
          <SidebarGroupContent></SidebarGroupContent>
        </SidebarGroup>
        {/* Direct message */}
        <SidebarGroup></SidebarGroup>
      </SidebarContent>
      {/* Footer */}
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
    </Sidebar>
  );
}
