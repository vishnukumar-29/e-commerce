import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

import InputAll from "./InputAll";
import SignCard from "./SignCard";

const Personal = () => {
  const navigate = useNavigate();

  /* =====================================================
     FORM DATA
  ===================================================== */

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
    dateOfBirth: "",
    university: "",
  });

  /* =====================================================
     ERRORS
  ===================================================== */

  const [errors, setErrors] = useState({});

  /* =====================================================
     PASSWORD VISIBILITY
  ===================================================== */

  const [showPassword, setShowPassword] = useState(false);

  /* =====================================================
     UNIVERSITIES
  ===================================================== */

  const universities = [
    "CRM Jat College",
    "Guru Jambheshwar University",
    "Chaudhary Devi Lal University",
    "Maharshi Dayanand University",
    "Other",
  ];

  /* =====================================================
     HANDLE INPUT CHANGE
  ===================================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear only the error for the field being edited
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* =====================================================
     HANDLE MOBILE NUMBER
  ===================================================== */

  const handleMobileChange = (e) => {
    const value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 10);

    setFormData((prev) => ({
      ...prev,
      mobileNumber: value,
    }));

    setErrors((prev) => ({
      ...prev,
      mobileNumber: "",
    }));
  };

  /* =====================================================
     VALIDATION
  ===================================================== */

  const validateForm = () => {
    const newErrors = {};

    /* ================= FIRST NAME ================= */

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (
      !/^[A-Za-z\s]+$/.test(formData.firstName.trim())
    ) {
      newErrors.firstName =
        "Only letters are allowed";
    }

    /* ================= LAST NAME ================= */

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (
      !/^[A-Za-z\s]+$/.test(formData.lastName.trim())
    ) {
      newErrors.lastName =
        "Only letters are allowed";
    }

    /* ================= EMAIL ================= */

    if (!formData.email.trim()) {
      newErrors.email =
        "Email address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email.trim()
      )
    ) {
      newErrors.email =
        "Enter a valid email address";
    }

    /* ================= PASSWORD ================= */

    if (!formData.password) {
      newErrors.password =
        "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters";
    } else if (
      !/(?=.*[A-Za-z])(?=.*\d)/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain letters and numbers";
    }

    /* ================= MOBILE ================= */

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber =
        "Mobile number is required";
    } else if (
      !/^[0-9]{10}$/.test(
        formData.mobileNumber
      )
    ) {
      newErrors.mobileNumber =
        "Mobile number must contain 10 digits";
    }

    /* ================= DATE OF BIRTH ================= */

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth =
        "Date of birth is required";
    } else {
      const selectedDate = new Date(
        formData.dateOfBirth
      );

      const today = new Date();

      // Remove time so today's date is valid
      today.setHours(0, 0, 0, 0);

      if (selectedDate > today) {
        newErrors.dateOfBirth =
          "Date of birth cannot be in the future";
      }
    }

    /* ================= UNIVERSITY ================= */

    if (!formData.university) {
      newErrors.university =
        "Please select your university";
    }

    /* ================= SET ERRORS ================= */

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =====================================================
     SUBMIT FORM
  ===================================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    // Stop if validation fails
    if (!isValid) {
      return;
    }

    /*
     * Save personal information.
     *
     * sessionStorage is used because the signup flow
     * needs this information on Address, Verification
     * and Confirmation pages.
     */
    sessionStorage.setItem(
      "personalData",
      JSON.stringify(formData)
    );

    /* Go to Address page */
    navigate("/address");
  };

  /* =====================================================
     UI
  ===================================================== */

  return (
    <div className="min-h-screen bg-[#f7f8fc] ">
      <div
        className="
          mx-auto min-h-screen
          flex max-md:flex-col
          max-w-[1200px]
          overflow-hidden
          rounded-[4px]
          bg-white
          shadow-sm
        "
      >
        {/* =================================================
            LEFT SIGN CARD
        ================================================= */}

        <div className="min-w-[44%] ">
          <SignCard currentStep={1} />
        </div>

        {/* =================================================
            RIGHT FORM
        ================================================= */}

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
            {/* =================================================
                TITLE
            ================================================= */}

            <h1
              className="
                mb-6
                text-[18px]
                font-semibold
                text-[#222]
                sm:text-[20px]
              "
            >
              Personal Information
            </h1>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              noValidate
            >
              {/* =================================================
                  FIRST / LAST NAME
              ================================================= */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-x-6
                  gap-y-4
                  sm:grid-cols-2
                "
              >
                {/* First Name */}

                <InputAll
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  required
                />

                {/* Last Name */}

                <InputAll
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  required
                />

                {/* Email */}

                <InputAll
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />

                {/* Password */}

                <InputAll
                  label="Password"
                  name="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  required
                  rightElement={
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          (prev) => !prev
                        )
                      }
                      className="
                        text-gray-400
                        transition
                        hover:text-gray-600
                      "
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={15} />
                      ) : (
                        <Eye size={15} />
                      )}
                    </button>
                  }
                />

                {/* Mobile Number */}

                <InputAll
                  label="Mobile Number"
                  name="mobileNumber"
                  type="tel"
                  placeholder="Enter mobile number"
                  value={formData.mobileNumber}
                  onChange={handleMobileChange}
                  error={errors.mobileNumber}
                  required
                  rightElement={
                    <span className="text-base">
                      🇮🇳
                    </span>
                  }
                />

                {/* Date of Birth */}

                <InputAll
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  placeholder="Enter date of birth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  error={errors.dateOfBirth}
                  required
                  rightElement={
                    <CalendarDays
                      size={15}
                      className="text-gray-400"
                    />
                  }
                />

                {/* University */}

                <div className="sm:col-span-2">
                  <InputAll
                    label="University Name"
                    name="university"
                    type="select"
                    value={formData.university}
                    onChange={handleChange}
                    error={errors.university}
                    required
                    rightElement={
                      <ChevronDown
                        size={15}
                        className="text-gray-400"
                      />
                    }
                  >
                    <option value="">
                      Enter university name
                    </option>

                    {universities.map(
                      (university) => (
                        <option
                          key={university}
                          value={university}
                        >
                          {university}
                        </option>
                      )
                    )}
                  </InputAll>
                </div>
              </div>

              {/* =================================================
                  NEXT BUTTON
              ================================================= */}

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

              {/* =================================================
                  PRIVACY INFORMATION
              ================================================= */}

              <p
                className="
                  mt-3
                  text-center
                  text-[8px]
                  leading-[12px]
                  text-[#777]
                "
              >
                🔒 Your personal data will be used to
                verify your identity and support in
                renting and make your experience
                secured throughout this website, and
                for other purposes described in our{" "}
                <span className="text-[#4561e8]">
                  privacy policy
                </span>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;