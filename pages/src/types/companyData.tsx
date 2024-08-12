// src/types/companyData.ts
export default function Types() {
  return (
    <></>
  )
}

export interface CompanyData {
  company: {
    companyId: number;
    legalName: string;
    countryId: number;
    swiped: boolean;
    categoryId: number;
    revenue: string;
    headquarters: string;
    yearFounded: string;
    spend: {
      today: number;
      last7Days: number;
      last14Days: number;
      last21Days: number;
      last30Days: number;
      last60Days: number;
      last90Days: number;
      last180Days: number;
      last365Days: number;
      last720Days: number;
      collected_on: string;
    };
    numberOfEmployees: string;
  };
  ranks: {
    global: {
      rank: number;
      change: number;
    };
    country: {
      rank: number;
      change: number;
    };
    category: {
      rank: number;
      change: number;
    };
  };
  creativeCount: number;
  top5Countries: Array<{
    countryId: number;
    count: number;
    percentage: number;
  }>;
}

export interface CompanyOverview {
  [key: string]: string | number | undefined;
  Company: string | undefined;
  'Year Founded': string | undefined;
  Employees: string | undefined;
  HQ: string | undefined;
  Category: number | undefined;
}

export interface StatisticsOverview {
  [key: string]: string | number | undefined;
  'Ad spend 365': string | undefined,
  'Country rank': string | undefined,
  'Global rank': string | undefined,
  'Category rank': string | undefined
}
