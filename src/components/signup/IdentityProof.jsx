import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Camera,
    Check,
    CircleX,
    Image as ImageIcon,

} from "lucide-react";

import SignCard from "./SignCard";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
];

const IdentityProof = () => {
    const navigate = useNavigate();

    const frontInputRef = useRef(null);
    const backInputRef = useRef(null);

    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);

    const [errors, setErrors] = useState({
        front: "",
        back: "",
    });

    const validateFile = (file) => {
        if (!file) {
            return "Please upload an image";
        }

        if (!ALLOWED_TYPES.includes(file.type)) {
            return "Only JPG, JPEG and PNG files are allowed";
        }

        if (file.size > MAX_FILE_SIZE) {
            return "Image size must not exceed 5MB";
        }

        return "";
    };

    const createPreview = (file, side) => {
        const error = validateFile(file);

        if (error) {
            setErrors((prev) => ({
                ...prev,
                [side]: error,
            }));

            return;
        }

        const previewUrl = URL.createObjectURL(file);

        const imageData = {
            file,
            preview: previewUrl,
            name: file.name,
            size: file.size,
            type: file.type,
        };

        if (side === "front") {
            setFrontImage(imageData);
        } else {
            setBackImage(imageData);
        }

        setErrors((prev) => ({
            ...prev,
            [side]: "",
        }));
    };

    const handleFileChange = (e, side) => {
        const file = e.target.files?.[0];

        if (!file) return;

        createPreview(file, side);

        // Allows selecting the same file again
        e.target.value = "";
    };

    const removeImage = (side) => {
        if (side === "front") {
            if (frontImage?.preview) {
                URL.revokeObjectURL(frontImage.preview);
            }

            setFrontImage(null);

            if (frontInputRef.current) {
                frontInputRef.current.value = "";
            }
        }

        if (side === "back") {
            if (backImage?.preview) {
                URL.revokeObjectURL(backImage.preview);
            }

            setBackImage(null);

            if (backInputRef.current) {
                backInputRef.current.value = "";
            }
        }

        setErrors((prev) => ({
            ...prev,
            [side]: "",
        }));
    };

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = () => {
                reject(new Error("Unable to read image"));
            };
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!frontImage) {
            newErrors.front = "Please upload the front side of your ID";
        }

        if (!backImage) {
            newErrors.back = "Please upload the back side of your ID";
        }

        setErrors({
            front: newErrors.front || "",
            back: newErrors.back || "",
        });

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (!isValid) return;

        try {
            const frontBase64 = await fileToBase64(
                frontImage.file
            );

            const backBase64 = await fileToBase64(
                backImage.file
            );

            const identityProofData = {
                front: {
                    image: frontBase64,
                    name: frontImage.name,
                    type: frontImage.type,
                },
                back: {
                    image: backBase64,
                    name: backImage.name,
                    type: backImage.type,
                },
            };

            /*
             * sessionStorage is used because this is temporary
             * signup information.
             */
            sessionStorage.setItem(
                "identityProof",
                JSON.stringify(identityProofData)
            );

            navigate("/verification", {
                state: {
                    identityProofData,
                },
            });
        } catch (error) {
            console.error("Unable to save identity images:", error);
        }
    };

    return (
        <div className="min-h-screen bg-[#f3f3f3]">
            <div
                className="
          mx-auto
          flex
          min-h-screen max-md:flex-col
          max-w-[1200px]
          overflow-hidden
          bg-white
          shadow-sm
        "
            >
                {/* =========================================
            LEFT COMMON SIGN CARD
        ========================================= */}
                <div className="min-w-[44%] ">
                    <SignCard />
                </div>

                {/* =========================================
            RIGHT CONTENT
        ========================================= */}
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
                        {/* Heading */}
                        <h1
                            className="
                mb-6
                text-[20px]
                font-semibold
                text-[#222]
                sm:text-[22px]
              "
                        >
                            Proof of Identity
                        </h1>

                        <form
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            {/* =====================================
                  UPLOAD BOXES
              ===================================== */}
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {/* FRONT */}
                                <UploadBox
                                    title="Upload front side"
                                    image={frontImage}
                                    error={errors.front}
                                    inputRef={frontInputRef}
                                    onChange={(e) =>
                                        handleFileChange(e, "front")
                                    }
                                    onRemove={() =>
                                        removeImage("front")
                                    }
                                />

                                {/* BACK */}
                                <UploadBox
                                    title="Upload back side"
                                    image={backImage}
                                    error={errors.back}
                                    inputRef={backInputRef}
                                    onChange={(e) =>
                                        handleFileChange(e, "back")
                                    }
                                    onRemove={() =>
                                        removeImage("back")
                                    }
                                />
                            </div>

                            {/* =====================================
                  FILE INFORMATION
              ===================================== */}
                            <p
                                className="
                  mt-3
                  text-[10px] sm:text-sm
                  leading-4
                  text-[#999]
                "
                            >
                                Upload JPG, JPEG, PNG files and no more
                                than 5MB
                            </p>

                            {/* =====================================
                  IMAGE QUALITY EXAMPLES
              ===================================== */}
                            <div
                                className="
                  mt-5
                  rounded-[8px]
                  bg-[#f7f8fc]
                  p-3
                "
                            >
                                <div className="grid grid-cols-4 gap-2">
                                    <QualityCard
                                        image={frontImage?.preview}
                                        title="Good"
                                        success
                                    />

                                    <QualityCard
                                        title="Not Cut"
                                        error
                                    />

                                    <QualityCard
                                        title="Not Blur"
                                        error
                                    />

                                    <QualityCard
                                        title="Non Reflective"
                                        error
                                    />
                                </div>
                            </div>

                            {/* =====================================
                  IMPORTANT NOTES
              ===================================== */}
                            <div className="mt-4">
                                <h2
                                    className="
                    mb-2
                    text-[12px]
                    font-semibold
                    text-[#333]
                  "
                                >
                                    Important Notes
                                </h2>

                                <ul className="space-y-1">
                                    <li className="text-[10px] sm:text-sm text-[#999]">
                                        Don't use beauty photos
                                    </li>

                                    <li className="text-[10px] sm:text-sm text-[#999]">
                                        Don't wear hats
                                    </li>

                                    <li className="text-[10px] sm:text-sm text-[#999]">
                                        Don't take screenshot
                                    </li>
                                </ul>
                            </div>

                            {/* =====================================
                  NEXT
              ===================================== */}
                            <button
                                type="submit"
                                className="
                  mt-7
                  w-full
                  rounded-[5px]
                  bg-[#4965E8]
                  px-5
                  py-3
                  text-[12px]
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#3854d8]
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

/* =====================================================
   UPLOAD BOX
===================================================== */

const UploadBox = ({
    title,
    image,
    error,
    inputRef,
    onChange,
    onRemove,
}) => {
    return (
        <div>
            <input
                ref={inputRef}
                type="file"
                accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                onChange={onChange}
                className="hidden"
            />

            <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className={`
          group
          relative
          flex
          h-[105px]
          w-full
          items-center
          justify-center
          overflow-hidden
          rounded-[7px]
          bg-[#f7f8fc]
          transition
          hover:bg-[#f0f2fa]
          ${error
                        ? "border border-red-300"
                        : "border border-transparent"
                    }
        `}
            >
                {image ? (
                    <>
                        <img
                            src={image.preview}
                            alt={title}
                            className="
                h-full
                w-full
                object-contain
                p-2
              "
                        />

                        {/* Remove */}
                        <span
                            role="button"
                            tabIndex={0}
                            onClick={(e) => {
                                e.stopPropagation();
                                onRemove();
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.stopPropagation();
                                    onRemove();
                                }
                            }}
                            className="
                absolute
                right-2
                top-2
                flex
                h-5
                w-5
                cursor-pointer
                items-center
                justify-center
                rounded-full
                bg-red-500
                text-white
                shadow-sm
              "
                        >
                            <CircleX size={13} />
                        </span>

                        {/* Success */}
                        <span
                            className="
                absolute
                bottom-2
                right-2
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-green-500
                text-white
              "
                        >
                            <Check size={12} strokeWidth={3} />
                        </span>
                    </>
                ) : (
                    <div className="flex flex-col items-center">
                        <div
                            className="
                mb-2
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-md
                text-[#4965E8]
              "
                        >
                            <Camera size={20} />
                        </div>

                        <span className="text-[10px] sm:text-sm font-medium text-[#222]">
                            {title}
                        </span>
                    </div>
                )}
            </button>

            {error && (
                <p className="mt-1 text-[9px] text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

/* =====================================================
   QUALITY CARD
===================================================== */

const QualityCard = ({
    image,
    title,
    success = false,
    error = false,
}) => {
    return (
        <div className="relative">
            <div
                className="
          flex
          h-[58px]
          items-center
          justify-center
          overflow-hidden
          rounded-[3px]
          bg-white
        "
            >
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="flex flex-col items-center gap-1 text-[#bbb]">
                        <ImageIcon size={18} />
                    </div>
                )}
            </div>

            {success && (
                <span
                    className="
            absolute
            right-[-3px]
            top-[-3px]
            flex
            h-3.5
            w-3.5
            items-center
            justify-center
            rounded-full
            bg-green-500
            text-white
          "
                >
                    <Check size={9} strokeWidth={4} />
                </span>
            )}

            {error && (
                <span
                    className="
            absolute
            right-[-3px]
            top-[-3px]
            flex
            h-3.5
            w-3.5
            items-center
            justify-center
            rounded-full
            bg-red-500
            text-white
          "
                >
                    <CircleX size={9} />
                </span>
            )}

            <p className="mt-1 text-center text-[8px] sm:text-xs text-[#555]">
                {title}
            </p>
        </div>
    );
};

export default IdentityProof;