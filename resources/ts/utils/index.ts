import { usePage } from "@inertiajs/inertia-react";

export type colorsType = "blue-gray" | "gray" | "brown" | "deep-orange" | "orange" | "amber" | "yellow" | "lime" | "light-green" | "green" | "teal" | "cyan" | "light-blue" | "blue" | "indigo" | "deep-purple" | "purple" | "pink" | "red";

export function getQuery() {
  return (usePage().props.value.ziggy as any).query;
}
