import type { ImgHTMLAttributes } from "react";
import { Note, Tip, Warning } from "./Callout";
import { Card, Cards } from "./Card";
import { Step, Steps } from "./Steps";
import { Video } from "./Video";
import { AlgorithmCatalog } from "../AlgorithmCatalog";
import { BrokerTable } from "./BrokerTable";

function MdxImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const cutout = props.src === "/hex-logo.png" || String(props.className ?? "").includes("logo-cutout");
  return <img {...props} className={cutout ? "logo-cutout" : props.className} />;
}

export const mdxComponents = {
  img: MdxImage,
  Note,
  Tip,
  Warning,
  Card,
  Cards,
  Step,
  Steps,
  Video,
  AlgorithmCatalog,
  BrokerTable,
};
