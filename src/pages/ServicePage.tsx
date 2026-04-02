import NotFound from "./NotFound";
import ServicePageTemplate from "../components/ServicePageTemplate";
import { servicePagesByKey } from "../data/servicePages";
import CallCardPage from "../modules/call-cards/CallCardPage";
import { beaverPatchCalls, beaverPatchConfig } from "../data/call-cards/beaverPatch";

type ServicePageProps = {
  serviceKey: string;
};

export default function ServicePage({ serviceKey }: ServicePageProps) {
  const service = servicePagesByKey[serviceKey];

  if (!service) {
    return <NotFound />;
  }

  if (serviceKey === "publicSafety") {
    return <CallCardPage config={beaverPatchConfig} calls={beaverPatchCalls} />;
  }

  return <ServicePageTemplate service={service} />;
}
