import Head from "next/head";
import Image from "next/image";
import styled from 'styled-components';
import DefaultLayout from "@/components/templates/defaultLayout";
import AboutBlock from "@/components/organisms/AboutBlock";

export default function Home() {
  return (
    <DefaultLayout>
      <AboutBlock/>
    </DefaultLayout>
  );
}
