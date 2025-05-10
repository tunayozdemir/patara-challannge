import Navbar from "../features/home/Header";
import '@/styles/Home.module.css'

import { LoginPage } from "@/components/templates";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <LoginPage />
      </main>
    </>
  );
}
