import Head from "next/head";
import Image from "next/image";
import styled from 'styled-components';
import DefaultLayout from "@/components/templates/defaultLayout";
import AboutBlock from "@/components/organisms/AboutBlock";
import GoalsBlock from "@/components/organisms/GoalsBlock";
import CasesBlock from "@/components/organisms/CasesBlock";
import Questions from "@/components/organisms/Questions";

export default function Home() {
  return (
    <DefaultLayout>
      <AboutBlock />
      {/* <GoalsBlock />
      <CasesBlock /> */}
      <Questions></Questions>
    </DefaultLayout>
  );
}
