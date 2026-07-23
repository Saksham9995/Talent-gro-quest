import {
  LayoutDashboard,
  GraduationCap,
  ClipboardCheck,
  Trophy,
  FolderKanban,
  Award,
  Bell,
  User as UserIcon,
  Settings,
  Users,
  BarChart3,
  School,
  FileText,
  MessageSquare,
  Calendar,
  BookOpen,
  Shield,
  type LucideIcon,
} from "lucide-react";
import type { AppRole } from "@/hooks/use-auth";

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const ROLE_LABEL: Record<AppRole, string> = {
  student: "Student",
  parent: "Parent",
  teacher: "Teacher",
  mentor: "Mentor",
  school_admin: "School Admin",
  super_admin: "Super Admin",
};

export const ROLE_NAV: Record<AppRole, NavItem[]> = {
  student: [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard },
    { id: "programmes", label: "My Programmes", icon: GraduationCap },
    { id: "assessments", label: "Assessments", icon: ClipboardCheck },
    { id: "challenges", label: "Challenges", icon: Trophy },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "profile", label: "Profile", icon: UserIcon },
    { id: "settings", label: "Settings", icon: Settings },
  ],
  parent: [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard },
    { id: "children", label: "Child Progress", icon: Users },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "profile", label: "Profile", icon: UserIcon },
  ],
  teacher: [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard },
    { id: "students", label: "Assigned Students", icon: Users },
    { id: "reviews", label: "Project Reviews", icon: FolderKanban },
    { id: "feedback", label: "Feedback", icon: MessageSquare },
    { id: "assessments", label: "Assessments", icon: ClipboardCheck },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "profile", label: "Profile", icon: UserIcon },
  ],
  mentor: [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard },
    { id: "students", label: "Assigned Students", icon: Users },
    { id: "reviews", label: "Project Reviews", icon: FolderKanban },
    { id: "feedback", label: "Feedback", icon: MessageSquare },
    { id: "assessments", label: "Assessments", icon: ClipboardCheck },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "profile", label: "Profile", icon: UserIcon },
  ],
  school_admin: [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard },
    { id: "students", label: "Students", icon: GraduationCap },
    { id: "teachers", label: "Teachers", icon: Users },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "events", label: "Events", icon: Calendar },
    { id: "profile", label: "Profile", icon: UserIcon },
  ],
  super_admin: [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard },
    { id: "users", label: "Users", icon: Users },
    { id: "schools", label: "Schools", icon: School },
    { id: "programmes", label: "Programmes", icon: GraduationCap },
    { id: "challenges", label: "Challenges", icon: Trophy },
    { id: "events", label: "Events", icon: Calendar },
    { id: "blogs", label: "Blogs", icon: BookOpen },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "settings", label: "Settings", icon: Shield },
  ],
};
