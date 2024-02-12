import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/sharp-regular-svg-icons";

import AriaLink from "~/components/aria-link";

export default function Footer() {
  return (
    <footer className="flex-1 bg-neutral text-neutral-content">
      <div className="container footer mx-auto px-4 py-8">
        <aside>
          <p className="font-heading text-3xl font-semibold leading-none opacity-60">
            Purple Mortgage <br />
            <span className="text-lg font-light italic">a demo by Nicholas Dobie</span>
          </p>
          <p>Copyright &copy; {new Date().getFullYear()}</p>
          <p>
            <a
              href="mailto:hello@purplemortgage.test"
              className="hover:underline"
            >
              hello@purplemortgage.test
            </a>
          </p>
          <p>
            <a
              href="tel:+18805559878"
              className="hover:underline"
            >
              (880) 555-9878
            </a>
          </p>
          <p>
            <a
              href="https://maps.app.goo.gl/qUtnuhRKM1ghc2wE7"
              target="_blank"
              className="hover:underline"
            >
              725 Vineland Pl
              <br />
              Minneapolis, MN 55403
            </a>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <AriaLink
            href="/apply"
            className="hover:underline"
          >
            Apply for Loan
          </AriaLink>
          <AriaLink
            href="/prequalified"
            className="hover:underline"
          >
            Get Prequalified
          </AriaLink>
          <AriaLink
            href="/calculators"
            className="hover:underline"
          >
            Calculators
          </AriaLink>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <AriaLink
            href="/company/meet-the-team"
            className="hover:underline"
          >
            Meet the Team
          </AriaLink>
          <AriaLink
            href="/company/about-us"
            className="hover:underline"
          >
            About Us
          </AriaLink>
          <AriaLink
            href="/company/contact-us"
            className="hover:underline"
          >
            Contact Us
          </AriaLink>
          <AriaLink
            href="/company/careers"
            className="hover:underline"
          >
            Careers
          </AriaLink>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <AriaLink
            className="hover:underline"
            href="/legal/rates"
          >
            Rates
          </AriaLink>
          <AriaLink
            className="hover:underline"
            href="/legal/privacy-policy"
          >
            Privacy Policy
          </AriaLink>
          <AriaLink
            className="hover:underline"
            href="/legal/terms-of-service"
          >
            Terms of Service
          </AriaLink>
          <AriaLink
            className="hover:underline"
            href="/legal/fair-lender"
          >
            Fair Lender
          </AriaLink>
          <AriaLink
            className="hover:underline"
            href="/legal/fair-housing"
          >
            Fair Housing
          </AriaLink>
          <AriaLink
            className="hover:underline"
            href="/legal/equal-housing-opportunity"
          >
            Equal Housing Opportunity
          </AriaLink>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="flex items-center gap-2 hover:underline"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              fixedWidth
            />
            <span>Facebook</span>
          </a>
          <a
            href="https://www.x.com"
            target="_blank"
            className="flex items-center gap-2 hover:underline"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              fixedWidth
            />
            <span>X (Twitter)</span>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="flex items-center gap-2 hover:underline"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              fixedWidth
            />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            className="flex items-center gap-2 hover:underline"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              fixedWidth
            />
            <span>TikTok</span>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="flex items-center gap-2 hover:underline"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              fixedWidth
            />
            <span>LinkedIn</span>
          </a>
        </nav>
      </div>
      <div className="container mx-auto space-y-4 px-4 py-8">
        <div
          role="alert"
          className="alert alert-warning"
        >
          <FontAwesomeIcon icon={faTriangleExclamation} />
          <span>
            This is a demo site made for demonstration purposes only and is not affiliated with any real company or
            brand. Please do not submit any personal information.
          </span>
        </div>
        <div
          role="alert"
          className="alert alert-info"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>
            Want to see the code?{" "}
            <a
              href="https://github.com/nrdobie/purple-mortgage-demo"
              target="_blank"
              className="underline"
            >
              Check out it out GitHub.
            </a>
            <br />
            Want to hire me?{" "}
            <a
              href="https://www.nickdobie.com"
              target="_blank"
              className="underline"
            >
              Check out my website.
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
