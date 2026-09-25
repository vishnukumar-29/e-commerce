import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import InputAll from "./InputAll";
import SignCard from "./SignCard";

const Address = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get personal data either from route state or localStorage
  const personalData =
    location.state?.personalData ||
    JSON.parse(localStorage.getItem("personalInformation") || "null");

  const [formData, setFormData] = useState({
    addressLine1: "",
    addressLine2: "",
    postalCode: "",
    city: "",
    country: "India",
  });

  const [errors, setErrors] = useState({});

  const cities = [
    "Hisar",
    "Gurugram",
    "Delhi",
    "Chandigarh",
    "Mohali",
    "Rohtak",
    "Faridabad",
    "Panipat",
    "Karnal",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Address Line 1
    if (!formData.addressLine1.trim()) {
      newErrors.addressLine1 = "Address line 1 is required";
    } else if (formData.addressLine1.trim().length < 5) {
      newErrors.addressLine1 =
        "Please enter a valid address";
    }

    // Address Line 2 is optional
    // No validation required

    // Postal Code
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required";
    } else if (!/^[0-9]{6}$/.test(formData.postalCode)) {
      newErrors.postalCode =
        "Postal code must contain 6 digits";
    }

    // City
    if (!formData.city) {
      newErrors.city = "Please select your city";
    }

    // Country
    if (!formData.country) {
      newErrors.country = "Please select your country";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Save address information
    localStorage.setItem(
      "addressInformation",
      JSON.stringify(formData)
    );

    navigate("/proof-of-identity", {
      state: {
        personalData,
        addressData: formData,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f7f8fc] ">
      <div
        className="
          mx-auto
          flex min-h-screen
          max-md:flex-col
          max-w-[1200px]
          overflow-hidden
          rounded-[4px]
          bg-white
          shadow-sm
        "
      >
        {/* =================================
            LEFT SIGN CARD
        ================================= */}
        <div className="min-w-[44%]  ">
          <SignCard activeStep={2} />
        </div>

        {/* =================================
            RIGHT ADDRESS FORM
        ================================= */}
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
                mb-6
                text-[18px]
                font-semibold
                text-[#222]
                sm:text-[20px]
              "
            >
              Address Details
            </h1>

            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                {/* ================= ADDRESS LINE 1 ================= */}
                <InputAll
                  label="Address Line 1"
                  name="addressLine1"
                  placeholder="Enter address line 1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                  error={errors.addressLine1}
                  required
                />

                {/* ================= ADDRESS LINE 2 ================= */}
                <InputAll
                  label="Address Line 2 (Optional)"
                  name="addressLine2"
                  placeholder="Enter address line 2"
                  value={formData.addressLine2}
                  onChange={handleChange}
                  error={errors.addressLine2}
                />

                {/* ================= POSTAL CODE ================= */}
                <InputAll
                  label="Postal Code"
                  name="postalCode"
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter postal code"
                  value={formData.postalCode}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 6);

                    setFormData((prev) => ({
                      ...prev,
                      postalCode: value,
                    }));

                    setErrors((prev) => ({
                      ...prev,
                      postalCode: "",
                    }));
                  }}
                  error={errors.postalCode}
                  required
                />

                {/* ================= CITY ================= */}
                <InputAll
                  label="City"
                  name="city"
                  type="select"
                  value={formData.city}
                  onChange={handleChange}
                  error={errors.city}
                  required
                  rightElement={
                    <ChevronDown
                      size={14}
                      className="pointer-events-none text-[#aaa]"
                    />
                  }
                >
                  <option value="">Select City</option>

                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </InputAll>

                {/* ================= COUNTRY ================= */}
                <InputAll
                  label="Country"
                  name="country"
                  type="select"
                  value={formData.country}
                  onChange={handleChange}
                  error={errors.country}
                  required
                  rightElement={
                    <span className="text-sm">🇮🇳</span>
                  }
                >
                  <option value="India">India</option>
                  <option value="United Kingdom">
                    United Kingdom
                  </option>
                  <option value="United States">
                    United States
                  </option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </InputAll>
              </div>

              {/* ================= NEXT ================= */}
              <button
                type="submit"
                className="
                  mt-6
                  w-full
                  rounded-[4px]
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

export default Address;