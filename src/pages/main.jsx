import AboutBlock from "@/components/organisms/AboutBlock";
import GoalsBlock from "@/components/organisms/GoalsBlock";
import CasesBlock from "@/components/organisms/CasesBlock";
import ProsBlock from "@/components/organisms/ProsBlock";
import Questions from "@/components/organisms/Questions";
import Team from "@/components/organisms/Team";

export default function Main() {
  return (
    <>
      <AboutBlock />
      <GoalsBlock />
      <CasesBlock />
      <Team/>
      <ProsBlock />
      <Questions />
    </>
  );
}
