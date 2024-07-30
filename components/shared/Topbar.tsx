import {
  OrganizationSwitcher,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { dark } from "@clerk/themes";

const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/social_logo.png" alt="logo" width={50} height={40} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden -m-3">5ocial</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <header>
            {/* <SignedOut>
              <SignInButton/>
            </SignedOut> */}
            <SignedIn>
              {/* <UserButton /> */}
              <SignOutButton>
                <div className="flex cursor-pointer">
                  <Image
                    src="/assets/logout.svg"
                    alt="logout"
                    width={24}
                    height={24}
                  />
                </div>
              </SignOutButton>
            </SignedIn>
          </header>
        </div>

        <OrganizationSwitcher
          appearance={{
            baseTheme:dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Topbar;
