import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { AmbulanceIcon, BellIcon, HelpCircleIcon, HistoryIcon, Home, Hospital, SettingsIcon } from "lucide-react"
import Link from "next/link"
  const items = [
    {
      title: "Home",
      url: "/home",
      icon: Home,
    },
    {
      title: "Ride",
      url: "/ride",
      icon: AmbulanceIcon,
    },
    {
      title: "Hospital",
      url: "/hospital",
      icon: Hospital,
    },
    {
      title: "RequestHistory",
      url: "/requesthistory",
      icon: HistoryIcon,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: BellIcon,
    },
    {
      title: "Help",
      url: "/help",
      icon: HelpCircleIcon,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: SettingsIcon,
    },
    
  ]
   
  export function AppSidebar() {

    return (
        <Sidebar collapsible="icon" >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }