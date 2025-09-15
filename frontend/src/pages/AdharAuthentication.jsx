import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function StepHeader({ index, title, active, done }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`h-8 w-8 flex items-center justify-center rounded-full text-sm font-semibold ${
          done
            ? "bg-[#328E6E] text-white"
            : active
            ? "border-2 border-white bg-[#67AE6E] text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        {done ? "✓" : index}
      </div>
      <div
        className={`text-sm font-medium ${
          active ? "text-white" : "text-inherit"
        }`}
      >
        {title}
      </div>
    </div>
  );
}

function Section({
  index,
  title,
  subtitle,
  children,
  disabled,
  active,
  onConfirm,
  confirmLabel = "Confirm & Continue",
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-white rounded-xl border border-gray-200 ${
        disabled ? "opacity-60" : "opacity-100"
      }`}
    >
      <div className="p-6">
        <div className="flex items-center gap-3">
          <motion.span
            layout
            animate={{ scale: active ? 1.05 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold ${
              active
                ? "bg-[#328E6E] text-white ring-2 ring-[#67AE6E]/40"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {index}
          </motion.span>
          <h3
            className={`text-lg font-semibold ${
              active ? "text-gray-900" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
        </div>
        {subtitle && <p className="mt-1 text-sm text-gray-600">{subtitle}</p>}
        <div
          className={`mt-6 space-y-4 ${
            disabled ? "pointer-events-none select-none" : ""
          }`}
        >
          {children}
        </div>
        {onConfirm && active && (
          <div className="mt-6">
            <button
              type="button"
              onClick={onConfirm}
              className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-white bg-[#328E6E] hover:bg-[#67AE6E] transition ${
                disabled ? "cursor-not-allowed opacity-70" : ""
              }`}
              disabled={disabled}
            >
              {confirmLabel}
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
}

export default function AdharAuthentication() {
  const navigate = useNavigate();
  const location = useLocation();
  const prefill = useMemo(() => {
    const state = (location && location.state) || {};
    return {
      fullName: state.fullName || "",
      email: state.email || "",
      phone: state.phoneNumber || "",
    };
  }, [location]);

  // Steps gating
  const [emailVerified, setEmailVerified] = useState(false);
  const [basicConfirmed, setBasicConfirmed] = useState(false);
  const [addressConfirmed, setAddressConfirmed] = useState(false);
  const [aadhaarConfirmed, setAadhaarConfirmed] = useState(false);

  // Forms state
  const [basic, setBasic] = useState({
    fullName: prefill.fullName,
    email: prefill.email,
    phone: prefill.phone,
  });
  const [address, setAddress] = useState({
    ward: "",
    town: "",
    district: "",
    state: "",
    country: "India",
    pincode: "",
  });
  const [aadhaar, setAadhaar] = useState({ number: "" });
  const [files, setFiles] = useState({ front: null, back: null });

  const handleChange = (setter) => (e) => {
    const { name, value } = e.target;
    setter((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (p) => /^[6-9]\d{9}$/.test(p);
  const validatePincode = (p) => /^\d{6}$/.test(p);
  const validateAadhaar = (n) => /^\d{12}$/.test(n.replace(/\s/g, ""));

  const onVerifyEmail = () => {
    // In real app, trigger backend email OTP; here, simulate success when format is valid
    if (!validateEmail(basic.email)) {
      alert("Please enter a valid email before verifying.");
      return;
    }
    setEmailVerified(true);
  };

  const onConfirmBasic = () => {
    if (!basic.fullName.trim()) return alert("Full name is required.");
    if (!validateEmail(basic.email)) return alert("Enter a valid email.");
    if (!validatePhone(basic.phone))
      return alert("Enter a valid 10-digit Indian phone number starting 6-9.");
    setBasicConfirmed(true);
  };

  const onConfirmAddress = () => {
    if (!address.ward.trim()) return alert("Ward/Colony is required.");
    if (!address.town.trim()) return alert("Village/Town is required.");
    if (!address.district.trim()) return alert("District is required.");
    if (!address.state.trim()) return alert("State is required.");
    if (address.country !== "India") return alert("Country must be India.");
    if (!validatePincode(address.pincode))
      return alert("Pincode must be 6 digits.");
    setAddressConfirmed(true);
  };

  const onConfirmAadhaar = () => {
    if (!validateAadhaar(aadhaar.number))
      return alert("Aadhaar number must be 12 digits.");
    setAadhaarConfirmed(true);
  };

  const onSubmitAll = (e) => {
    e.preventDefault();
    if (!files.front || !files.back)
      return alert("Please upload both front and back images of Aadhaar.");

    const payload = {
      basic,
      address,
      aadhaar,
      files: { front: files.front?.name, back: files.back?.name },
    };
    console.log("Submitting Aadhaar verification:", payload);
    alert(
      "Details submitted for verification. You'll be redirected to dashboard."
    );
    navigate("/dashboard");
  };

  // Compute which step is active to style the stepper card background
  const stepActive = {
    email: !emailVerified,
    basic: emailVerified && !basicConfirmed,
    address: basicConfirmed && !addressConfirmed,
    aadhaar: addressConfirmed && !aadhaarConfirmed,
    upload: aadhaarConfirmed,
  };

  const canSubmit =
    emailVerified &&
    basicConfirmed &&
    addressConfirmed &&
    aadhaarConfirmed &&
    files.front &&
    files.back;

  // Styled file upload
  const FileInput = ({ label, value, onChange }) => (
    <div>
      <label className="block text-sm text-gray-700">{label}</label>
      <label className="mt-1 block w-full cursor-pointer">
        <div className="flex items-center gap-3 rounded-md border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-3 hover:border-[#328E6E] hover:bg-[#F3FFF9] transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 011 1v7h3l-4 5-4-5h3V3a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          <div className="flex-1">
            <p className="text-sm text-gray-700">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
          </div>
          {value && (
            <span className="text-xs text-gray-600 truncate max-w-[40%]">
              {value.name}
            </span>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={onChange}
          className="sr-only"
        />
      </label>
      {value && (
        <div className="mt-2">
          <img
            src={URL.createObjectURL(value)}
            alt="preview"
            className="h-28 w-auto rounded border border-gray-200 object-contain bg-white"
          />
        </div>
      )}
    </div>
  );

  // Stepper animation variants
  const stepperVariants = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.05, delayChildren: 0.05 },
    },
  };
  const stepItem = { hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#328E6E] to-[#67AE6E]">
              Get Aadhaar Verified
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-3 text-base sm:text-lg text-gray-600"
          >
            Verify your identity to view and post issues in MyWard.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 h-1 w-28 origin-left rounded-full bg-[#67AE6E]"
          />
        </header>

        {/* Stepper */}
        <motion.div
          variants={stepperVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8"
        >
          <motion.div
            variants={stepItem}
            className={`rounded-xl p-4 border ${
              stepActive.email
                ? "bg-[#67AE6E] text-white border-[#67AE6E]"
                : "bg-white border-gray-200"
            }`}
          >
            <StepHeader
              index={1}
              title="Verify Email"
              active={stepActive.email}
              done={emailVerified}
            />
          </motion.div>
          <motion.div
            variants={stepItem}
            className={`rounded-xl p-4 border ${
              stepActive.basic
                ? "bg-[#67AE6E] text-white border-[#67AE6E]"
                : "bg-white border-gray-200"
            }`}
          >
            <StepHeader
              index={2}
              title="Basic Details"
              active={stepActive.basic}
              done={basicConfirmed}
            />
          </motion.div>
          <motion.div
            variants={stepItem}
            className={`rounded-xl p-4 border ${
              stepActive.address
                ? "bg-[#67AE6E] text-white border-[#67AE6E]"
                : "bg-white border-gray-200"
            }`}
          >
            <StepHeader
              index={3}
              title="Address"
              active={stepActive.address}
              done={addressConfirmed}
            />
          </motion.div>
          <motion.div
            variants={stepItem}
            className={`rounded-xl p-4 border ${
              stepActive.aadhaar
                ? "bg-[#67AE6E] text-white border-[#67AE6E]"
                : "bg-white border-gray-200"
            }`}
          >
            <StepHeader
              index={4}
              title="Aadhaar Number"
              active={stepActive.aadhaar}
              done={aadhaarConfirmed}
            />
          </motion.div>
          <motion.div
            variants={stepItem}
            className={`rounded-xl p-4 border ${
              stepActive.upload
                ? "bg-[#67AE6E] text-white border-[#67AE6E]"
                : "bg-white border-gray-200"
            }`}
          >
            <StepHeader
              index={5}
              title="Upload Aadhaar"
              active={stepActive.upload}
              done={false}
            />
          </motion.div>
        </motion.div>

        <form onSubmit={onSubmitAll} className="space-y-6">
          {/* Email Verification */}
          <Section
            index={1}
            title="Email Verification"
            subtitle="We sent an email with a verification link/OTP. Click verify when done."
            disabled={false}
            active={stepActive.email}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={basic.email}
                  onChange={handleChange(setBasic)}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#328E6E]"
                />
              </div>
              <div className="flex items-end">
                {stepActive.email && !emailVerified ? (
                  <button
                    type="button"
                    onClick={onVerifyEmail}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-md text-white bg-[#328E6E] hover:bg-[#67AE6E]"
                  >
                    Mark as Verified
                  </button>
                ) : (
                  emailVerified && (
                    <span className="inline-flex items-center gap-2 text-sm text-[#1f7a55] bg-[#E8F8F0] px-3 py-2 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0L3.293 9.957a1 1 0 011.414-1.414l3.043 3.043 6.543-6.543a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Verified
                    </span>
                  )
                )}
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Use the same email you registered with.
            </p>
          </Section>

          {/* Basic Details */}
          <Section
            index={2}
            title="Basic Details"
            subtitle="Confirm your details as they appear on your Aadhaar."
            disabled={!emailVerified || basicConfirmed}
            onConfirm={!basicConfirmed ? onConfirmBasic : undefined}
            active={stepActive.basic}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700">
                  Full Name (as per Aadhaar)
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={basic.fullName}
                  onChange={handleChange(setBasic)}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#328E6E]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={basic.phone}
                  onChange={handleChange(setBasic)}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#328E6E]"
                />
              </div>
            </div>
          </Section>

          {/* Address */}
          <Section
            index={3}
            title="Address Details"
            subtitle="Enter your current residential address."
            disabled={!basicConfirmed || addressConfirmed}
            onConfirm={!addressConfirmed ? onConfirmAddress : undefined}
            active={stepActive.address}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700">
                  Ward No. / Colony
                </label>
                <input
                  type="text"
                  name="ward"
                  value={address.ward}
                  onChange={handleChange(setAddress)}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#328E6E]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700">
                  Village / Town
                </label>
                <input
                  type="text"
                  name="town"
                  value={address.town}
                  onChange={handleChange(setAddress)}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#328E6E]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700">District</label>
                <input
                  type="text"
                  name="district"
                  value={address.district}
                  onChange={handleChange(setAddress)}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#328E6E]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700">State</label>
                <input
                  type="text"
                  name="state"
                  value={address.state}
                  onChange={handleChange(setAddress)}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#328E6E]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Country</label>
                <input
                  type="text"
                  name="country"
                  value={address.country}
                  onChange={handleChange(setAddress)}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-100"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={address.pincode}
                  onChange={handleChange(setAddress)}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#328E6E]"
                />
              </div>
            </div>
          </Section>

          {/* Aadhaar Number */}
          <Section
            index={4}
            title="Aadhaar Number"
            subtitle="Enter your 12-digit Aadhaar number."
            disabled={!addressConfirmed || aadhaarConfirmed}
            onConfirm={!aadhaarConfirmed ? onConfirmAadhaar : undefined}
            active={stepActive.aadhaar}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-700">
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  name="number"
                  value={aadhaar.number}
                  onChange={handleChange(setAadhaar)}
                  placeholder="1234 5678 9012"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#328E6E] tracking-widest"
                />
              </div>
            </div>
          </Section>

          {/* Uploads */}
          <Section
            index={5}
            title="Upload Aadhaar Images"
            subtitle="Upload clear images of the front and back of your Aadhaar card. (PNG/JPG)"
            disabled={!aadhaarConfirmed}
            active={stepActive.upload}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <FileInput
                label="Aadhaar Front"
                value={files.front}
                onChange={(e) =>
                  setFiles((p) => ({
                    ...p,
                    front: e.target.files?.[0] || null,
                  }))
                }
              />
              <FileInput
                label="Aadhaar Back"
                value={files.back}
                onChange={(e) =>
                  setFiles((p) => ({
                    ...p,
                    back: e.target.files?.[0] || null,
                  }))
                }
              />
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                disabled={!canSubmit}
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white text-base font-semibold shadow-sm transition ${
                  canSubmit
                    ? "bg-[#328E6E] hover:bg-[#67AE6E]"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M3 3a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-.293.707l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 013 9V3z" />
                </svg>
                Submit for Verification
              </button>
            </div>
            {!canSubmit && (
              <p className="mt-2 text-center text-sm text-gray-500">
                Complete all steps and upload both images to enable submission.
              </p>
            )}
          </Section>
        </form>
      </div>
    </div>
  );
}
