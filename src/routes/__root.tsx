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
        title: "Redeemed Pillar of Fire (RPF) - IT'S TIME TO SEEK THE LORD",
      },
      {
        name: "description",
        content:
          "Join Redeemed Pillar of Fire - sparking and sustaining revival to restore the early church as defined in Acts until the coming of Christ. Experience transformation through love, sound doctrine, and spiritual discipline.",
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
