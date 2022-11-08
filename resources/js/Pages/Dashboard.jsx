import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Dashboard(props) {
  return (
    <>
      <DashboardLayout />
    </>
  );
}
