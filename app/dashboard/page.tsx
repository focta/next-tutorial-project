import React from "react";
import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { fetchRevenue } from "@/app/lib/data";

export default async function page() {
  const revenue = await fetchRevenue();
  return (
    <main>
      <h1 className={`${lusitana.className} md-4 text-x1 md:text-2xl`}>
        Dashboards
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-col-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid-cols-1 gap-6 md:grid-cols-6 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}
