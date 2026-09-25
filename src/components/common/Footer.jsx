import { footerLinks, socialLinks } from "../../utils/helper";

const Footer = () => {
  return (
    <footer className="bg-[#4964ed] px-4 py-8 text-white sm:px-6 md:py-9 lg:px-8">
      <div className="mx-auto max-w-[1200px]">

        {/* ================= NAVIGATION ================= */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:gap-x-8">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="
                    group
                    relative
                    inline-block
                    py-1
                 text-base md:text-lg
                    font-medium
                    text-white
                    transition-opacity
                    duration-300
                    hover:opacity-80
                  "
                >
                  {link.name}

                  {/* Underline animation */}
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[1px]
                      w-full
                      origin-left
                      scale-x-0
                      bg-white
                      transition-transform
                      duration-300
                      group-hover:scale-x-100
                    "
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ================= SOCIAL ICONS ================= */}
        <div className="mt-5 flex items-center justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#4964ed]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/90
                hover:shadow-lg
                sm:h-8
                sm:w-8
              "
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mx-auto mt-5 h-px w-full bg-white/25" />

        {/* ================= COPYRIGHT ================= */}
        <p className="mt-3 text-center text-base md:text-lg font-normal text-white/90">
          Copyright StudentHub
        </p>
      </div>
    </footer>
  );
};

export default Footer;