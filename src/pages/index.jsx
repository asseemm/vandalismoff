import Head from "next/head";
import DefaultLayout from "@/components/templates/defaultLayout";
import Main from "./main";
import Header from "@/components/organisms/Header";
import About from "./about";

export default function Home() {
  return (
    <DefaultLayout>
      <Header />
      <Main />
    </DefaultLayout>
  );
}
  