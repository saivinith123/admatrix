
import 'bootstrap/dist/css/bootstrap.min.css';

import CompaniesList from './src/components/tables/CompaniesList';
import companyData from './src/data/data1.json'
import CompanyInformation from "./src/components/CompanyInformation";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex bg-slate-200 h-24 justify-center flex-col">
        <p className=" text-center text-xl font-semibold m-0">
          YouTube, Inc.
        </p>
        <p className="text-center text-md m-0">United States of America (the)</p>
      </div>
      <div className="bg-white  p-8">
        <CompanyInformation companyData={companyData} />
        <CompaniesList />
      </div>
    </main >
  );
}