import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createGoogleCalendarLink({
  title,
  description,
  location,
  startDate,
  durationHours = 2,
}: {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  durationHours?: number;
}) {
  const pad = (n: number) => String(n).padStart(2, "0");

  const formatDate = (date: Date) => {
    return (
      date.getFullYear() +
      pad(date.getMonth() + 1) +
      pad(date.getDate()) +
      "T" +
      pad(date.getHours()) +
      pad(date.getMinutes()) +
      pad(date.getSeconds())
    );
  };

  const start = formatDate(startDate);

  const endDate = new Date(
    startDate.getTime() + durationHours * 60 * 60 * 1000
  );
  const end = formatDate(endDate);

  console.log("START:", start);
  console.log("END:", end);

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${start}/${end}&details=${encodeURIComponent(
    description
  )}&location=${encodeURIComponent(location)}`;
}