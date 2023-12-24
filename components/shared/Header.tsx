import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt={""}
            width={128}
            height={38}
          />
        </Link>
        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <Button asChild className="roundend-full" size='lg'>
              <Link href={""}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};
