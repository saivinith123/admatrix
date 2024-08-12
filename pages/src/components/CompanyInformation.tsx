import { Col, Row } from "reactstrap"

import type { CompanyOverview, StatisticsOverview } from "../types/companyData"

const LineData = ({ label, value }: { label: string, value: any }) => {
  return (
    <div className="flex">
      <p className="w-1/2 m-0 text-xs">{label}</p>
      <p className="m-0 text-xs">: {value}</p>
    </div>
  )
}

const StatsCard = ({ label, value }: { label: string, value: string | any }) => {
  return (
    <div className="rounded-lg h-[90%] bg-white p-3 border-1 border-[#c3c6ce] transition ease-out duration-500 overflow-visible hover:border-[#008bf8] hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)]">
      <div className="text-black">
        <p className="text-sm text-slate-500  m-0">{label}</p>
      </div>
      <p className="text-md font-medium whitespace-nowrap m-0">{value}</p>
    </div>
  )
}

const ViewStatics = ({ statistics }: { statistics: StatisticsOverview }) => {
  return (
    <>
      <Row>
        <Col md="6">
          <StatsCard label={'Ad Spend 365'} value={statistics?.['Ad spend 365']} />
        </Col>
        <Col md="6">
          <StatsCard label={'Global rank'} value={statistics?.['Global rank']} />
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <StatsCard label={'Country rank'} value={statistics?.['Country rank']} />
        </Col>
        <Col md="6">
          <StatsCard label={'Category rank'} value={statistics?.['Category rank']} />
        </Col>
      </Row>
    </>
  )
}

const CompanyOverview = ({ companyProfile }: { companyProfile: CompanyOverview }) => {
  return (
    <>
      <div className="rounded-lg bg-white p-3 border-1 border-[#c3c6ce]  transition ease-out duration-500 overflow-visible hover:border-[#008bf8] hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)]">
        <div className="text-black ">
          <p className="text-xl font-bold pb-2 m-0">Company Info</p>
        </div>
        {Object.keys(companyProfile)?.map((key: string) =>
          <LineData key={key} label={key} value={companyProfile[key]} />)}
      </div>
    </>
  )
}

const Campaigns = ({ campaigns }: any) => {

  const countryCodes: any = {
    236: 'US',
    227: 'TR',
    176: 'PL',
    234: 'GB',
    0: 'Others'
  }
  return (
    <div className="rounded-lg bg-white p-3 border-1 border-[#c3c6ce]  transition ease-out duration-500 overflow-visible hover:border-[#008bf8] hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)]">
      <div className="text-black">
        <p className="text-xl font-bold pb-2 m-0">Campaigns per country</p>
      </div>
      {(campaigns)?.map(({ countryId, count, percentage }: any) =>
        <p className="m-0 text-xs" key={countryId}>
          <strong>{countryCodes[countryId]}</strong>: {count} {''} ({percentage.toFixed()} %)</p>
      )
      }
    </div >
  )
}

export default function CompanyInformation({ companyData }: { companyData: any }) {
  const company = companyData?.data?.company
  const ranks = companyData?.data?.ranks
  const campaigns = companyData?.data?.top5Countries

  const companyProifle: CompanyOverview = {
    'Company': company?.legalName,
    'Year Founded': company?.yearFounded,
    'Employees': company?.numberOfEmployees,
    'HQ': company?.headquarters,
    'Category': company?.categoryId
  }

  const statistics: StatisticsOverview = {
    'Ad spend 365': `$ ${company?.spend?.last365Days}`,
    'Country rank': `# ${ranks?.country?.rank}`,
    'Global rank': `# ${ranks?.global?.rank}`,
    'Category rank': `# ${ranks?.category?.rank}`
  }

  return (
    <Row>
      <Col md="3">
        <CompanyOverview companyProfile={companyProifle} />
      </Col>
      <Col md="6">
        <ViewStatics statistics={statistics} />
      </Col>
      <Col md="3">
        <Campaigns campaigns={campaigns} />
      </Col>
    </Row>
  )
}


