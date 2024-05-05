import Head from "next/head";
import Image from "next/image";
import styled from 'styled-components';
import DefaultLayout from "@/components/templates/defaultLayout";
import AboutBlock from "@/components/organisms/AboutBlock";
import GoalsBlock from "@/components/organisms/GoalsBlock";
import CasesBlock from "@/components/organisms/CasesBlock";

export default function Home() {
  return (
    <DefaultLayout>
      <AboutBlock />
      <GoalsBlock />
      <CasesBlock />
    </DefaultLayout>
  );
}
