import { Table } from "reactstrap";

import data2 from './../../data/data2.json'

export default function CompaniesList() {
  const headers = ['Thumbnail', 'Title', 'Brand', 'Total ad spend', 'As spend 30', 'Publish Date', 'Duration']
  const companiesList = data2?.data?.results
  return (
    <>
      <hr />
      <h4 className="bg-blue-100 p-2 text-center rounded-sm">Companies List</h4>
      <Table responsive hover>
        <thead>
          <tr >
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
            <tr key={ytVideoId} className="text-xs align-middle">
              <td>
                <img src={thumbnail} className="rounded-full h-12 w-12 object-cover" />
              </td>
              <td className="font-semibold">{title}</td>
              <td className="font-semibold">
                <p className="m-0 text-blue-600">{brandName}</p></td>
              <td>{totalSpend}</td>
              <td>{last30Days}</td>
              <td>{new Date(publishedAt)?.toLocaleDateString()}</td>
              <td>0:{duration}</td>
            </tr>)}
        </tbody>
      </Table>
    </>
  )
}