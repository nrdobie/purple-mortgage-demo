"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, forwardRef } from "react";

type Props = ComponentProps<typeof Link>;

/**
 * A link that is aware of the current page.
 *
 * @param props Properties from Next.js's `Link` component.
 */
const AriaLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { href } = props;

  const pathname = usePathname();

  const isCurrentPage = href === pathname;

  return (
    <Link
      ref={ref}
      {...props}
      aria-current={isCurrentPage ? "page" : false}
    />
  );
});

AriaLink.displayName = "AriaLink";

export default AriaLink;
