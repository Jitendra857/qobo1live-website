import type { Metadata } from "next";
import ChildSafetyStandards from "@/src/components/ChildSafetyStandards";

export const metadata: Metadata = {
  title: "Child Safety Standards - Qobo1Live",
  description:
    "Qobo1Live Child Safety Standards, Zero Tolerance Policy against Child Sexual Abuse and Exploitation (CSAE/CSAM), and Reporting Procedures.",
};

export default function Page() {
  return <ChildSafetyStandards />;
}
