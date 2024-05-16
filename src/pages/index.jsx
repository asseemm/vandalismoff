import Head from "next/head";
import DefaultLayout from "@/components/templates/defaultLayout";
import Main from "./main";
import About from "./about";

export default function Home() {
  return (
    <DefaultLayout>
      <Main />
    </DefaultLayout>
  );
}
  