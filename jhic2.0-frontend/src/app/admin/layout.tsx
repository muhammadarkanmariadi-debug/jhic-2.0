"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { LayoutDashboard, BookOpen, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [loading, user, pathname, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-main grid place-items-center text-text-muted font-semibold">
        Memuat...
      </div>
    );
  }

  if (!user) return null; // redirect handled by effect

  const navLink = (href: string, label: string, icon: React.ReactNode) => {
    const active = pathname.startsWith(href);
    return (
      <Link
        href={href}
        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-bold transition-colors ${
          active ? "bg-accent text-white" : "text-text-muted hover:bg-bg-main hover:text-accent"
        }`}
      >
        {icon}
        {label}
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-bg-main flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-border-light p-5 flex-col gap-4 hidden md:flex sticky top-0 h-screen">
        <div className="font-extrabold text-text-main text-lg px-3">Admin Panel</div>
        <nav className="space-y-1 flex-1">
          {navLink("/admin", "Dashboard", <LayoutDashboard className="w-4 h-4" />)}
          {navLink("/admin/program-umum", "Program Umum", <BookOpen className="w-4 h-4" />)}
        </nav>
        <div className="border-t border-border-light pt-4 px-3 space-y-3">
          <div>
            <div className="text-sm font-bold text-text-main truncate">{user.fullName}</div>
            <div className="text-xs text-text-muted">{user.roleName}</div>
          </div>
          <button
            type="button"
            onClick={() => {
              logout();
              router.push("/login");
            }}
            className="flex items-center gap-2 text-sm font-bold text-red-500 hover:bg-red-50 px-3 py-2 rounded-xl w-full"
          >
            <LogOut className="w-4 h-4" /> Keluar
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 p-6 md:p-10 min-w-0">{children}</div>
    </div>
  );
}
