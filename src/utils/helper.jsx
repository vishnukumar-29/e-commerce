// nav
export const navLinks = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQs", href: "#faqs" },
  { name: "Partners", href: "#partners" },
];

export const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="h-5 w-5"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="h-5 w-5"
  >
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
    <path d="M10 21h4" />
  </svg>
);

export const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-6 w-6"
  >
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </svg>
);

export const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-6 w-6"
  >
    <path d="m6 6 12 12" />
    <path d="m18 6-12 12" />
  </svg>
);



export const customers = [
    {
        id: 1,
        name: "Bilal Ahmad",
        location: "Germany",
        image: "/images/png/bilal.png",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac asaAs.",
    },
    {
        id: 2,
        name: "Aleena Zaheer",
        location: "United Kingdom",
        image: "/images/png/aleena.png",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac sasasAs.",
    },
    {
        id: 3,
        name: "David Wilson",
        location: "Australia",
        image: "/images/png/bilal.png",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac lorem ipsum.",
    },
    {
        id: 4,
        name: "Sarah Khan",
        location: "Canada",
        image: "/images/png/bilal.png",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac customer.",
    },
    {
        id: 5,
        name: "James Smith",
        location: "United States",
        image: "/images/png/bilal.png",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac lorem ipsum.",
    },
    {
        id: 6,
        name: "Emma Watson",
        location: "France",
        image: "/images/png/bilal.png",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac customer.",
    },
];


export const partners = [
    {
        name: "Lloyds Bank",
        logo: (
            <svg
                viewBox="0 0 120 70"
                className="h-14 w-24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Horse */}
                <path
                    d="M35 48c-3-3-5-7-4-11 1-4 4-6 7-7l-2-6 4-2 5 6
          c4-1 8 0 11 3 3 3 4 7 3 11l-4-1
          c1-4-1-7-5-8l-5 8 5 5-4 3-5-5
          -5 3 1 4-2 2Z"
                    fill="#111827"
                />

                <path
                    d="M28 50c5-3 11-3 17 0"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
    {
        name: "HSBC",
        logo: (
            <svg
                viewBox="0 0 120 70"
                className="h-14 w-24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <polygon
                    points="60,10 88,35 60,60 32,35"
                    fill="#DB0011"
                />

                <polygon
                    points="60,10 60,35 32,35"
                    fill="#FFFFFF"
                />

                <polygon
                    points="60,35 60,60 32,35"
                    fill="#FFFFFF"
                />

                <polygon
                    points="60,10 88,35 60,35"
                    fill="#DB0011"
                />

                <polygon
                    points="60,35 88,35 60,60"
                    fill="#DB0011"
                />

                <text
                    x="60"
                    y="68"
                    textAnchor="middle"
                    fontSize="7"
                    fontWeight="600"
                    fill="#111827"
                >
                    HSBC
                </text>
            </svg>
        ),
    },
];


export const footerLinks = [
  { name: "Home", href: "#" },
  { name: "FAQs", href: "#faqs" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Partners", href: "#partners" },
];

export const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path d="M13.5 8H16V4.5c-.4-.1-1.8-.2-3.4-.2-3.3 0-5.5 2-5.5 5.6V13H4v4h3.1v7h3.9v-7h3.2l.5-4H11V10.3c0-1.2.3-2.3 2.5-2.3Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path d="M6.5 8.5A2.5 2.5 0 1 0 6.5 3a2.5 2.5 0 0 0 0 5.5ZM4.2 21h4.6V9.5H4.2V21ZM11 9.5V21h4.5v-5.7c0-1.5.3-3 2.2-3 1.9 0 1.9 1.8 1.9 3.1V21H24v-6.3c0-3.1-.7-5.5-4.7-5.5-1.9 0-3.2 1-3.8 1.9h-.1V9.5H11Z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.4l-5-6.5L6.1 22H3l7.3-8.4L2.2 2h6.5l4.5 5.9L18.9 2Zm-1.1 17.8h1.7L7.7 4H5.9l11.9 15.8Z" />
      </svg>
    ),
  },
];


// FAQ
export const faqData = [
  {
    question: "What is Project?",
    answer:
      "StudentHub is a platform that helps students find suitable accommodation near their university. You can explore different properties and choose the one that best fits your requirements.",
  },
  {
    question: "How can I find a property?",
    answer:
      "You can use the search options to select your location, university, property type, and price range. After that, click on the Search button to view available properties.",
  },
  {
    question: "How do I book a property?",
    answer:
      "Once you find a suitable property, open its details and follow the booking process. You can review the property information before confirming your booking.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, depending on the property's cancellation policy. Please check the booking terms before confirming your reservation.",
  },
];

export 
const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
};

export const MinusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M5 12h14" />
    </svg>
  );
};


// hero
export const searchFields = [
  {
    label: "Location",
    value: "Location",
  },
  {
    label: "University",
    value: "University",
  },
  {
    label: "Property Type",
    value: "Property Type",
  },
  {
    label: "Price Range",
    value: "Price Range",
  },
];

export const ChevronDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4 shrink-0"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
};


// Features
export const features = [
  {
    title: "Secure account creation",
    description:
      "StudentHub provides secure account creation of both student and landlord by strong and secured verification process.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5"
      >
        <circle cx="12" cy="8" r="3" />
        <path d="M5 20c.5-3.2 2.7-5 7-5s6.5 1.8 7 5" />
        <path d="M18 13v4" />
        <path d="M16 15h4" />
      </svg>
    ),
  },
  {
    title: "Rental Privacy Policy",
    description:
      "Following governmental regulation on renting as a privacy policy in website protects students and make their payments secured.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5"
      >
        <path d="M12 3 5 6v5c0 4.7 2.8 8.2 7 10 4.2-1.8 7-5.3 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Direct communication",
    description:
      "StudentHub helps students to make direct communication with landlords or home owners to help them finding answers to their queries and many more.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5"
      >
        <path d="M21 11.5a7.5 7.5 0 0 1-8 7.4 8.4 8.4 0 0 1-3-.6L5 20l1.5-4A7.2 7.2 0 0 1 3 10.5 7.5 7.5 0 0 1 11 4h2a7.5 7.5 0 0 1 8 7.5Z" />
        <path d="M8 10h8" />
        <path d="M8 13h5" />
      </svg>
    ),
  },
  {
    title: "Fast Process",
    description:
      "A fast way to book an accommodation from anywhere around the world.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];



export const steps = [
  {
    id: 1,
    title: "Personal Information",
    paths: ["/personal"],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="8" r="3" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      </svg>
    ),
  },

  {
    id: 2,
    title: "Address Details",
    paths: ["/address"],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
  },

  {
    id: 3,
    title: "Proof of Identity",
    paths: [
      "/identity-proof",
      "/proof-of-identity",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8" cy="11" r="2" />
        <path d="M5.5 16c.8-1.5 2-2.2 3.5-2.2s2.7.7 3.5 2.2M14 10h4M14 14h4" />
      </svg>
    ),
  },

  {
    id: 4,
    title: "Verification",
    paths: ["/verification"],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="m8 12 2.5 2.5L16 9" />
      </svg>
    ),
  },

  {
    id: 5,
    title: "Confirmation of Account",
    paths: [
      "/confirmation",
      "/account-confirmation",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    ),
  },
];