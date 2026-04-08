import { FormEvent, useMemo, useState } from "react";
import Header from "../../components/layout/Header";
import { useTranslation } from "../../contexts/TranslationContext";

type BeaverPatchFormData = {
  firstName: string;
  lastName: string;
  middleName: string;
  details: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  province: string;
  postalCode: string;
  incidentSummary: string;
  priority: "low" | "medium" | "high";
};

type DriverData = {
  surname: string;
  license: string;
  dob: string;
};

type VehicleData = {
  plate: string;
  vin: string;
  owner: string;
};

const initialFormData: BeaverPatchFormData = {
  firstName: "",
  lastName: "",
  middleName: "",
  details: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  province: "",
  postalCode: "",
  incidentSummary: "",
  priority: "medium",
};

const initialDriverData: DriverData = {
  surname: "",
  license: "",
  dob: "",
};

const initialVehicleData: VehicleData = {
  plate: "",
  vin: "",
  owner: "",
};

const TOTAL_STEPS = 4;

export default function BeaverPatchFormPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<BeaverPatchFormData>(initialFormData);
  const [driverData, setDriverData] = useState<DriverData>(initialDriverData);
  const [vehicleData, setVehicleData] = useState<VehicleData>(initialVehicleData);
  const [isDriverDialogOpen, setIsDriverDialogOpen] = useState(false);
  const [isVehicleDialogOpen, setIsVehicleDialogOpen] = useState(false);
  const [statusKey, setStatusKey] = useState("beaverPatch.form.status.idle");
  const [currentStep, setCurrentStep] = useState(1);

  const progressPercent = Math.round((currentStep / TOTAL_STEPS) * 100);

  const summaryItems = useMemo(
    () => [
      {
        label: t("beaverPatch.form.summary.primaryContact"),
        value:
          formData.firstName || formData.lastName
            ? `${formData.firstName} ${formData.middleName} ${formData.lastName}`.replace(/\s+/g, " ").trim()
            : t("beaverPatch.form.empty.primaryContact"),
      },
      {
        label: t("beaverPatch.form.summary.address"),
        value:
          formData.addressLine1 || formData.city
            ? `${formData.addressLine1} ${formData.city} ${formData.province} ${formData.postalCode}`.replace(/\s+/g, " ").trim()
            : t("beaverPatch.form.empty.address"),
      },
      {
        label: t("beaverPatch.form.summary.incident"),
        value: formData.incidentSummary ? formData.incidentSummary : t("beaverPatch.form.empty.incident"),
      },
      {
        label: t("beaverPatch.form.summary.driver"),
        value: driverData.surname ? driverData.surname : t("beaverPatch.form.empty.driver"),
      },
      {
        label: t("beaverPatch.form.summary.vehicle"),
        value: vehicleData.plate ? vehicleData.plate : t("beaverPatch.form.empty.vehicle"),
      },
    ],
    [
      driverData.surname,
      formData.addressLine1,
      formData.city,
      formData.firstName,
      formData.incidentSummary,
      formData.lastName,
      formData.middleName,
      formData.postalCode,
      formData.province,
      t,
      vehicleData.plate,
    ],
  );

  const validateContactStep = () => {
    if (!formData.firstName || !formData.lastName) {
      setStatusKey("beaverPatch.form.validation.contactRequired");
      return false;
    }

    return true;
  };

  const validateAddressStep = () => {
    if (!formData.addressLine1 || !formData.city || !formData.postalCode) {
      setStatusKey("beaverPatch.form.validation.addressRequired");
      return false;
    }

    return true;
  };

  const validateIncidentStep = () => {
    if (!formData.incidentSummary) {
      setStatusKey("beaverPatch.form.validation.incidentRequired");
      return false;
    }

    if (formData.incidentSummary.length < 10) {
      setStatusKey("beaverPatch.form.validation.summaryMin");
      return false;
    }

    return true;
  };

  const goToNextStep = () => {
    let isValid = true;

    if (currentStep === 1) {
      isValid = validateContactStep();
    }

    if (currentStep === 2) {
      isValid = validateAddressStep();
    }

    if (currentStep === 3) {
      isValid = validateIncidentStep();
    }

    if (!isValid) {
      return;
    }

    setStatusKey("beaverPatch.form.status.idle");
    setCurrentStep((previous) => Math.min(previous + 1, TOTAL_STEPS));
  };

  const goToPreviousStep = () => {
    setStatusKey("beaverPatch.form.status.idle");
    setCurrentStep((previous) => Math.max(previous - 1, 1));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateContactStep() || !validateAddressStep() || !validateIncidentStep()) {
      return;
    }

    setStatusKey("beaverPatch.form.status.saved");
  };

  const resetForm = () => {
    if (!window.confirm(t("beaverPatch.form.dialogs.resetConfirm"))) {
      return;
    }

    setFormData(initialFormData);
    setDriverData(initialDriverData);
    setVehicleData(initialVehicleData);
    setStatusKey("beaverPatch.form.status.reset");
    setCurrentStep(1);
    setIsDriverDialogOpen(false);
    setIsVehicleDialogOpen(false);
  };

  const stepLabel = t(`beaverPatch.form.steps.step${currentStep}`);

  return (
    <>
      <Header />
      <main className="service-page beaverpatch-form-page">
        <section className="service-hero">
          <div className="container">
            <h1>
              <span className="accent-blue">{t("beaverPatch.form.pageTitle.primary")}</span>{" "}
              <span className="accent-orange">{t("beaverPatch.form.pageTitle.secondary")}</span>
            </h1>
            <p>{t("beaverPatch.form.pageDescription")}</p>
          </div>
        </section>

        <section className="service-section">
          <div className="container beaverpatch-form-layout">
            <form className="service-detail-card beaverpatch-form" onSubmit={handleSubmit}>
              <div className="beaverpatch-stepper">
                <p className="beaverpatch-stepper-label">
                  {t("beaverPatch.form.steps.progress", "Step")}: {currentStep}/{TOTAL_STEPS} — {stepLabel}
                </p>
                <div className="beaverpatch-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progressPercent}>
                  <span className="beaverpatch-progress-fill" style={{ width: `${progressPercent}%` }} />
                </div>
              </div>

              {currentStep === 1 ? (
                <>
                  <div className="beaverpatch-form-header">
                    <h2>
                      <span className="accent-blue">{t("beaverPatch.form.sections.primaryContact.title")}</span>
                    </h2>
                    <p>{t("beaverPatch.form.sections.primaryContact.helper")}</p>
                  </div>

                  <div className="beaverpatch-grid beaverpatch-grid-3">
                    <label className="contact-form-label" htmlFor="firstName">
                      {t("beaverPatch.form.fields.firstName.label")}
                      <input
                        id="firstName"
                        className="contact-form-field"
                        value={formData.firstName}
                        onChange={(event) => setFormData((previous) => ({ ...previous, firstName: event.target.value }))}
                        placeholder={t("beaverPatch.form.fields.firstName.placeholder")}
                        required
                      />
                    </label>

                    <label className="contact-form-label" htmlFor="middleName">
                      {t("beaverPatch.form.fields.middleName.label")}
                      <input
                        id="middleName"
                        className="contact-form-field"
                        value={formData.middleName}
                        onChange={(event) => setFormData((previous) => ({ ...previous, middleName: event.target.value }))}
                        placeholder={t("beaverPatch.form.fields.middleName.placeholder")}
                      />
                    </label>

                    <label className="contact-form-label" htmlFor="lastName">
                      {t("beaverPatch.form.fields.lastName.label")}
                      <input
                        id="lastName"
                        className="contact-form-field"
                        value={formData.lastName}
                        onChange={(event) => setFormData((previous) => ({ ...previous, lastName: event.target.value }))}
                        placeholder={t("beaverPatch.form.fields.lastName.placeholder")}
                        required
                      />
                    </label>
                  </div>

                  <label className="contact-form-label" htmlFor="details">
                    {t("beaverPatch.form.fields.details.label")}
                    <textarea
                      id="details"
                      className="contact-form-field contact-form-textarea"
                      value={formData.details}
                      onChange={(event) => setFormData((previous) => ({ ...previous, details: event.target.value }))}
                      placeholder={t("beaverPatch.form.fields.details.placeholder")}
                      rows={4}
                    />
                  </label>
                </>
              ) : null}

              {currentStep === 2 ? (
                <>
                  <div className="beaverpatch-form-header">
                    <h2>
                      <span className="accent-orange">{t("beaverPatch.form.sections.address.title")}</span>
                    </h2>
                    <p>{t("beaverPatch.form.sections.address.helper")}</p>
                  </div>

                  <div className="beaverpatch-grid beaverpatch-grid-2">
                    <label className="contact-form-label" htmlFor="addressLine1">
                      {t("beaverPatch.form.fields.addressLine1.label")}
                      <input
                        id="addressLine1"
                        className="contact-form-field"
                        value={formData.addressLine1}
                        onChange={(event) => setFormData((previous) => ({ ...previous, addressLine1: event.target.value }))}
                        placeholder={t("beaverPatch.form.fields.addressLine1.placeholder")}
                        required
                      />
                    </label>
                    <label className="contact-form-label" htmlFor="addressLine2">
                      {t("beaverPatch.form.fields.addressLine2.label")}
                      <input
                        id="addressLine2"
                        className="contact-form-field"
                        value={formData.addressLine2}
                        onChange={(event) => setFormData((previous) => ({ ...previous, addressLine2: event.target.value }))}
                        placeholder={t("beaverPatch.form.fields.addressLine2.placeholder")}
                      />
                    </label>
                    <label className="contact-form-label" htmlFor="city">
                      {t("beaverPatch.form.fields.city.label")}
                      <input
                        id="city"
                        className="contact-form-field"
                        value={formData.city}
                        onChange={(event) => setFormData((previous) => ({ ...previous, city: event.target.value }))}
                        placeholder={t("beaverPatch.form.fields.city.placeholder")}
                        required
                      />
                    </label>
                    <label className="contact-form-label" htmlFor="province">
                      {t("beaverPatch.form.fields.province.label")}
                      <input
                        id="province"
                        className="contact-form-field"
                        value={formData.province}
                        onChange={(event) => setFormData((previous) => ({ ...previous, province: event.target.value }))}
                        placeholder={t("beaverPatch.form.fields.province.placeholder")}
                      />
                    </label>
                    <label className="contact-form-label" htmlFor="postalCode">
                      {t("beaverPatch.form.fields.postalCode.label")}
                      <input
                        id="postalCode"
                        className="contact-form-field"
                        value={formData.postalCode}
                        onChange={(event) => setFormData((previous) => ({ ...previous, postalCode: event.target.value }))}
                        placeholder={t("beaverPatch.form.fields.postalCode.placeholder")}
                        required
                      />
                    </label>
                  </div>
                </>
              ) : null}

              {currentStep === 3 ? (
                <>
                  <div className="beaverpatch-form-header">
                    <h2>
                      <span className="accent-blue">{t("beaverPatch.form.sections.incident.title")}</span>
                    </h2>
                    <p>{t("beaverPatch.form.sections.incident.helper")}</p>
                  </div>

                  <div className="beaverpatch-grid beaverpatch-grid-2">
                    <label className="contact-form-label" htmlFor="priority">
                      {t("beaverPatch.form.fields.priority.label")}
                      <select
                        id="priority"
                        className="contact-form-field"
                        value={formData.priority}
                        onChange={(event) =>
                          setFormData((previous) => ({
                            ...previous,
                            priority: event.target.value as BeaverPatchFormData["priority"],
                          }))
                        }
                      >
                        <option value="low">{t("beaverPatch.form.fields.priority.options.low")}</option>
                        <option value="medium">{t("beaverPatch.form.fields.priority.options.medium")}</option>
                        <option value="high">{t("beaverPatch.form.fields.priority.options.high")}</option>
                      </select>
                    </label>

                    <label className="contact-form-label" htmlFor="incidentSummary">
                      {t("beaverPatch.form.fields.incidentSummary.label")}
                      <textarea
                        id="incidentSummary"
                        className="contact-form-field contact-form-textarea"
                        value={formData.incidentSummary}
                        onChange={(event) => setFormData((previous) => ({ ...previous, incidentSummary: event.target.value }))}
                        placeholder={t("beaverPatch.form.fields.incidentSummary.placeholder")}
                        rows={4}
                        required
                      />
                    </label>
                  </div>

                  <div className="beaverpatch-tools">
                    <button className="border-gradient-button" type="button" onClick={() => setIsDriverDialogOpen(true)}>
                      {t("beaverPatch.form.tools.driver.open")}
                    </button>
                    <button className="border-gradient-button" type="button" onClick={() => setIsVehicleDialogOpen(true)}>
                      {t("beaverPatch.form.tools.vehicle.open")}
                    </button>
                  </div>
                </>
              ) : null}

              {currentStep === 4 ? (
                <div className="beaverpatch-review">
                  <div className="beaverpatch-form-header">
                    <h2>
                      <span className="accent-orange">{t("beaverPatch.form.sections.review.title")}</span>
                    </h2>
                    <p>{t("beaverPatch.form.sections.review.helper")}</p>
                  </div>
                  <ul>
                    {summaryItems.map((item) => (
                      <li key={item.label}>
                        <strong>{item.label}:</strong> {item.value}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <p className="beaverpatch-status" aria-live="polite">
                {t(statusKey)}
              </p>

              <div className="beaverpatch-actions">
                <button className="border-gradient-button" type="button" onClick={resetForm}>
                  {t("beaverPatch.form.buttons.reset")}
                </button>

                {currentStep > 1 ? (
                  <button className="border-gradient-button" type="button" onClick={goToPreviousStep}>
                    {t("beaverPatch.form.buttons.back")}
                  </button>
                ) : null}

                {currentStep < TOTAL_STEPS ? (
                  <button className="border-gradient-button" type="button" onClick={goToNextStep}>
                    {t("beaverPatch.form.buttons.next")}
                  </button>
                ) : (
                  <button className="border-gradient-button" type="submit">
                    {t("beaverPatch.form.buttons.submit")}
                  </button>
                )}
              </div>
            </form>

            <aside className="service-detail-card beaverpatch-summary">
              <h2>
                <span className="accent-orange">{t("beaverPatch.form.summary.title")}</span>
              </h2>
              <p>{t("beaverPatch.form.summary.helper")}</p>
              <ul>
                {summaryItems.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}:</strong> {item.value}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {isDriverDialogOpen ? (
          <div className="beaverpatch-dialog-backdrop" role="presentation">
            <div
              className="service-detail-card beaverpatch-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="driverDialogTitle"
            >
              <h2 id="driverDialogTitle">
                <span className="accent-blue">{t("beaverPatch.form.tools.driver.title")}</span>
              </h2>
              <p>{t("beaverPatch.form.tools.driver.helper")}</p>
              <label className="contact-form-label" htmlFor="driverSurname">
                {t("beaverPatch.form.tools.driver.fields.surname.label")}
                <input
                  id="driverSurname"
                  className="contact-form-field"
                  value={driverData.surname}
                  onChange={(event) => setDriverData((previous) => ({ ...previous, surname: event.target.value }))}
                  placeholder={t("beaverPatch.form.tools.driver.fields.surname.placeholder")}
                />
              </label>
              <label className="contact-form-label" htmlFor="driverLicense">
                {t("beaverPatch.form.tools.driver.fields.license.label")}
                <input
                  id="driverLicense"
                  className="contact-form-field"
                  value={driverData.license}
                  onChange={(event) => setDriverData((previous) => ({ ...previous, license: event.target.value }))}
                  placeholder={t("beaverPatch.form.tools.driver.fields.license.placeholder")}
                />
              </label>
              <label className="contact-form-label" htmlFor="driverDob">
                {t("beaverPatch.form.tools.driver.fields.dob.label")}
                <input
                  id="driverDob"
                  className="contact-form-field"
                  type="date"
                  value={driverData.dob}
                  onChange={(event) => setDriverData((previous) => ({ ...previous, dob: event.target.value }))}
                />
              </label>
              <div className="beaverpatch-actions">
                <button className="border-gradient-button" type="button" onClick={() => setIsDriverDialogOpen(false)}>
                  {t("beaverPatch.form.dialogs.close")}
                </button>
                <button className="border-gradient-button" type="button" onClick={() => setIsDriverDialogOpen(false)}>
                  {t("beaverPatch.form.dialogs.confirm")}
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {isVehicleDialogOpen ? (
          <div className="beaverpatch-dialog-backdrop" role="presentation">
            <div
              className="service-detail-card beaverpatch-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="vehicleDialogTitle"
            >
              <h2 id="vehicleDialogTitle">
                <span className="accent-orange">{t("beaverPatch.form.tools.vehicle.title")}</span>
              </h2>
              <p>{t("beaverPatch.form.tools.vehicle.helper")}</p>
              <label className="contact-form-label" htmlFor="vehiclePlate">
                {t("beaverPatch.form.tools.vehicle.fields.plate.label")}
                <input
                  id="vehiclePlate"
                  className="contact-form-field"
                  value={vehicleData.plate}
                  onChange={(event) => setVehicleData((previous) => ({ ...previous, plate: event.target.value }))}
                  placeholder={t("beaverPatch.form.tools.vehicle.fields.plate.placeholder")}
                />
              </label>
              <label className="contact-form-label" htmlFor="vehicleVin">
                {t("beaverPatch.form.tools.vehicle.fields.vin.label")}
                <input
                  id="vehicleVin"
                  className="contact-form-field"
                  value={vehicleData.vin}
                  onChange={(event) => setVehicleData((previous) => ({ ...previous, vin: event.target.value }))}
                  placeholder={t("beaverPatch.form.tools.vehicle.fields.vin.placeholder")}
                />
              </label>
              <label className="contact-form-label" htmlFor="vehicleOwner">
                {t("beaverPatch.form.tools.vehicle.fields.owner.label")}
                <input
                  id="vehicleOwner"
                  className="contact-form-field"
                  value={vehicleData.owner}
                  onChange={(event) => setVehicleData((previous) => ({ ...previous, owner: event.target.value }))}
                  placeholder={t("beaverPatch.form.tools.vehicle.fields.owner.placeholder")}
                />
              </label>
              <div className="beaverpatch-actions">
                <button className="border-gradient-button" type="button" onClick={() => setIsVehicleDialogOpen(false)}>
                  {t("beaverPatch.form.dialogs.close")}
                </button>
                <button className="border-gradient-button" type="button" onClick={() => setIsVehicleDialogOpen(false)}>
                  {t("beaverPatch.form.dialogs.confirm")}
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </>
  );
}
