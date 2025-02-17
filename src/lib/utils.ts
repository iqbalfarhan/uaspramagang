import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string): string {
  return name
    .split(" ") // Pisahkan berdasarkan spasi
    .filter((word) => word.length > 0) // Pastikan tidak ada string kosong
    .map((word) => word[0].toUpperCase()) // Ambil huruf pertama & uppercase
    .slice(0, 2) // Ambil hanya 2 huruf pertama
    .join(""); // Gabungkan hasilnya
}

export function getAvatarLink(name: string): string {
  return `https://api.dicebear.com/7.x/pixel-art/svg?seed=${name}`;
}

export function formatTanggal(isoDate: string) {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.toLocaleString("id", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
