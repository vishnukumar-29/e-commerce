import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  CreditCard,
  Contact,
  BriefcaseBusiness,
} from "lucide-react";

import InputAll from "./InputAll";
import SignCard from "./SignCard";

const IdentityType = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get previous step data
  const personalData =
    location.state?.personalData ||
    JSON.parse(
      localStorage.getItem("personalInformation") || "null"
    );

  const addressData =
    location.state?.addressData ||
    JSON.parse(
      localStorage.getItem("addressInformation") || "null"
    );

  const [formData, setFormData] = useState({
    issuingCountry: "",
    documentType: "",
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const countries = [
    "India",
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
  ];

  const documents = [
    {
      value: "id-card",
      label: "ID Card",
      icon: CreditCard,
    },
    {
      value: "passport",
      label: "Passport",
      icon: Contact,
    },
    {
      value: "driving-license",
      label: "Driving License",
      icon: BriefcaseBusiness,
    },
  ];

  const handleCountryChange = (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      issuingCountry: value,
    }));

    setErrors((prev) => ({
      ...prev,
      issuingCountry: "",
    }));
  };

  const handleDocumentChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      documentType: value,
    }));

    setErrors((prev) => ({
      ...prev,
      documentType: "",
    }));
  };

  const handlePrivacyChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      privacyAccepted: e.target.checked,
    }));

    setErrors((prev) => ({
      ...prev,
      privacyAccepted: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.issuingCountry) {
      newErrors.issuingCountry =
        "Please select document issuing country";
    }

    if (!formData.documentType) {
      newErrors.documentType =
        "Please select a document type";
    }

    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted =
        "Please accept the information policy";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const identityData = {
      issuingCountry: formData.issuingCountry,
      documentType: formData.documentType,
      privacyAccepted: formData.privacyAccepted,
    };

    localStorage.setItem(
      "identityInformation",
      JSON.stringify(identityData)
    );

    navigate("/verification", {
      state: {
        personalData,
        addressData,
        identityData,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f7f8fc] ">
      <div
        className="
          mx-auto
          flex
          min-h-screen max-md:flex-col
          max-w-[1200px]
          overflow-hidden
          rounded-[4px]
          bg-white
          shadow-sm
        "
      >
        {/* ================= LEFT SIGN CARD ================= */}
        <div className="min-w-[44%] ">
          <SignCard activeStep={3} />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div
          className="
            flex
            w-full
            flex-col
            justify-center
            px-5
            py-8
            sm:px-10
            lg:w-[58%]
            lg:px-16
            xl:px-20
          "
        >
          <div className="w-full max-w-[560px]">
            <h1
              className="
                mb-7
                text-[18px]
                font-semibold
                text-[#222]
                sm:text-[20px]
              "
            >
              Proof Identity
            </h1>

            <form onSubmit={handleSubmit} noValidate>
              {/* ================= COUNTRY ================= */}
              <div className="mb-5">
                <InputAll
                  label="Select Document issuing country"
                  name="issuingCountry"
                  type="select"
                  value={formData.issuingCountry}
                  onChange={handleCountryChange}
                  error={errors.issuingCountry}
                  required
                  rightElement={
                    <ChevronDown
                      size={15}
                      className="text-[#aaa]"
                    />
                  }
                >
                  <option value="">Select country</option>

                  {countries.map((country) => (
                    <option
                      key={country}
                      value={country}
                    >
                      {country}
                    </option>
                  ))}
                </InputAll>
              </div>

              {/* ================= DOCUMENT TYPE ================= */}
              <div>
                <p className="mb-3 text-[10px] text-[#999]">
                  Select document type
                  <span className="ml-2 inline-block w-16 border-t border-[#ddd] align-middle" />
                </p>

                <div className="space-y-2">
                  {documents.map((document) => {
                    const Icon = document.icon;

                    const selected =
                      formData.documentType ===
                      document.value;

                    return (
                      <button
                        key={document.value}
                        type="button"
                        onClick={() =>
                          handleDocumentChange(
                            document.value
                          )
                        }
                        className={`
                          flex
                          h-[40px]
                          w-full
                          items-center
                          justify-between
                          rounded-[6px]
                          px-3
                          transition-all
                          duration-200
                          ${
                            selected
                              ? "bg-[#eef1ff]"
                              : "bg-[#f7f8fc]"
                          }
                          hover:bg-[#eef1ff]
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            size={16}
                            strokeWidth={1.7}
                            className="text-[#222]"
                          />

                          <span className="text-[11px] font-medium text-[#333]">
                            {document.label}
                          </span>
                        </div>

                        {/* Radio */}
                        <span
                          className={`
                            flex
                            h-[13px]
                            w-[13px]
                            items-center
                            justify-center
                            rounded-full
                            border
                            ${
                              selected
                                ? "border-[#4561e8]"
                                : "border-[#4561e8]"
                            }
                          `}
                        >
                          {selected && (
                            <span className="h-[7px] w-[7px] rounded-full bg-[#4561e8]" />
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {errors.documentType && (
                  <p className="mt-2 text-[9px] text-red-500">
                    {errors.documentType}
                  </p>
                )}
              </div>

              {/* ================= PRIVACY CHECKBOX ================= */}
              <div className="mt-4">
                <label className="flex cursor-pointer items-start gap-2">
                  <input
                    type="checkbox"
                    checked={formData.privacyAccepted}
                    onChange={handlePrivacyChange}
                    className="
                      mt-[1px]
                      h-[13px]
                      w-[13px]
                      shrink-0
                      cursor-pointer
                      appearance-none
                      rounded-[2px]
                      border
                      border-[#d5d5d5]
                      bg-white
                      checked:border-[#4561e8]
                      checked:bg-[#4561e8]
                    "
                  />

                  <span className="text-[9px] leading-[13px] text-[#999]">
                    This information is used for identity
                    verification only, and will be kept private
                    by Student Hub
                  </span>
                </label>

                {errors.privacyAccepted && (
                  <p className="mt-1 text-[9px] text-red-500">
                    {errors.privacyAccepted}
                  </p>
                )}
              </div>

              {/* ================= NEXT ================= */}
              <button
                type="submit"
                className="
                  mt-7
                  w-full
                  rounded-[5px]
                  bg-[#4561e8]
                  px-5
                  py-2.5
                  text-[12px]
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#354ed0]
                  hover:shadow-md
                  active:scale-[0.99]
                "
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityType;