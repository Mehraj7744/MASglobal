"use client";

import dynamic from "next/dynamic";

// CLIENT ONLY COMPONENTS
const ScrollToTop = dynamic(
  () =>
    import(
      "../ScrollToTop"
    ),
  {
    ssr: false,
  }
);

const FloatingLeadButtons =
  dynamic(
    () =>
      import(
        "../common/FloatingButtons"
      ),
    {
      ssr: false,
    }
  );

const VisitorTracker = dynamic(
  () =>
    import(
      "../common/VisitorTracker"
    ),
  {
    ssr: false,
  }
);

const ClientProviders = () => {
  return (
    <>
      <VisitorTracker />

      <ScrollToTop />

      <FloatingLeadButtons />
    </>
  );
};

export default ClientProviders;
