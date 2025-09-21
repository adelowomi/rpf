import type { QueryClient } from "@tanstack/react-query";

import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import appCss from "@/styles.css?inline";

import ChurchHeader from "../components/church-header.tsx";
import ChurchFooter from "../components/church-footer.tsx";
import TanStackQueryLayout from "../integrations/tanstack-query/layout.tsx";

type MyRouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "RPF Europe - Find Your Purpose, Grow in Community",
      },
      {
        name: "description",
        content:
          "Join Redeemed Pillar of Fire Europe - a vibrant community of believers dedicated to revival, prayer, and spreading God's love. Find your purpose and grow in faith.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: () => (
    <>
      <ChurchHeader />

      <Outlet />

      <ChurchFooter />
      <TanStackRouterDevtools />

      <TanStackQueryLayout />
    </>
  ),
});
