import NotFound from "./NotFound";
import ServicePageTemplate from "../components/ServicePageTemplate";
import { servicePagesByKey } from "../data/servicePages";
import BeaverPatchFormPage from "../modules/beaver-patch/BeaverPatchFormPage";

type ServicePageProps = {
  serviceKey: string;
};

export default function ServicePage({ serviceKey }: ServicePageProps) {
  const service = servicePagesByKey[serviceKey];

  if (!service) {
    return <NotFound />;
  }

  if (serviceKey === "publicSafety") {
    return <BeaverPatchFormPage />;
  }

  return <ServicePageTemplate service={service} />;
}
