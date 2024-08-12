import { Table } from "reactstrap";

import data2 from './../../data/data2.json'

export default function CompaniesList() {
  const headers = ['Thubnail', 'Title', 'Brand', 'Toal ad spend', 'As spend 30', 'Publish Date', 'duration']
  const companiesList = data2?.data?.results
  return (
    <Table responsive>
      <thead>
        <tr>
          {headers?.map((h: string) => <th key={h}>{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {companiesList?.map(({
          ytVideoId,
          thumbnail,
          title,
          brandName,
          totalSpend,
          last30Days,
          publishedAt,
          duration
        }: any) =>
          <tr key={ytVideoId}>
            <td>
              <img src={thumbnail} className="rounded-lg h-auto w-1/2" />
            </td>
            <td>{title}</td>
            <td>{brandName}</td>
            <td>{totalSpend}</td>
            <td>{last30Days}</td>
            <td>{publishedAt}</td>
            <td>0:{duration}</td>
          </tr>)}
      </tbody>

    </Table>
  )
}