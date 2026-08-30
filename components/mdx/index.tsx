import type { ImgHTMLAttributes } from "react";
import { Accordion, AccordionGroup } from "./Accordion";
import { Note, Tip, Warning } from "./Callout";
import { Card, Cards } from "./Card";
import { Step, Steps } from "./Steps";
import { Video } from "./Video";
import { AlgorithmCatalog } from "../AlgorithmCatalog";
import { BrokerHeading } from "./BrokerHeading";
import { BrokerTable } from "./BrokerTable";
import { DashboardPagesTable } from "./DashboardPagesTable";
import { ContractSpecsTable } from "./ContractSpecsTable";
import { InstrumentTable } from "./InstrumentTable";
import {
  AlgorithmPills,
  AllPlatformPills,
  CfdPills,
  CopyTradePills,
  HyperliquidPills,
  FuturesPills,
  PlatformIcons,
  PlatformPills,
  WebhookPills,
} from "./PlatformPills";
import { WebhookPlatformTable } from "./WebhookPlatformTable";

function MdxImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const cutout = props.src === "/hex-logo.png" || String(props.className ?? "").includes("logo-cutout");
  return <img {...props} className={cutout ? "logo-cutout" : props.className} />;
}

export const mdxComponents = {
  img: MdxImage,
  Accordion,
  AccordionGroup,
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
  DashboardPagesTable,
  BrokerHeading,
  InstrumentTable,
  ContractSpecsTable,
  PlatformPills,
  PlatformIcons,
  CopyTradePills,
  WebhookPills,
  AlgorithmPills,
  AllPlatformPills,
  FuturesPills,
  CfdPills,
  HyperliquidPills,
  WebhookPlatformTable,
};
