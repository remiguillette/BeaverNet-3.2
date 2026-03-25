import NotFound from "./NotFound";
import ServicePageTemplate from "../components/ServicePageTemplate";
import { servicePagesByKey } from "../data/servicePages";

type ServicePageProps = {
  serviceKey: string;
};

export default function ServicePage({ serviceKey }: ServicePageProps) {
  const service = servicePagesByKey[serviceKey];

  if (!service) {
    return <NotFound />;
  }

  return <ServicePageTemplate service={service} />;
}
