import InvestorView from "@/components/investor/InvestorView";

export const metadata = {
  title: "Investor Relations",
  description:
    "Access investor relations information including annual reports, financial statements, corporate governance, disclosures, and shareholder resources of Laxmi Steel Limited.",

  openGraph: {
    title: "Investor Relations | Laxmi Steel Limited",
    description:
      "Stay informed with financial reports, governance information, and investor resources.",
    images: ["/company/dccc (15).jpg"],
  },
};
function page() {
  return (
    <div>
      <InvestorView />
    </div>
  );
}

export default page;
