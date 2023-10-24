import React, { useRef } from 'react'
import { TableBody, TableHead, TableRow, TableCell } from 'commons/components'

const ChartTable = ({ chartItem }) => {
  const DISTINCT_ROW = [
    'Aktivitas Operasional',
    'Aktivitas Investasi',
    'Aktivitas Pendanaan',
    '',
  ]

  const tableBody = useRef([])
  return chartItem.map((row, index) => {
    if (DISTINCT_ROW.includes(row.name) || row.level == 0) {
      const tBody = [...tableBody.current]
      tableBody.current = []
      return (
        <>
          {tBody.length !== 0 && (
            <TableBody>
              {tBody.map((chart, idx) => (
                <TableRow key={idx}>
                  <TableCell className="whitespace-normal max-w-[32ch]">
                    <span
                      style={{ paddingLeft: `${parseInt(chart.level)}rem` }}
                    >
                      {chart?.name}
                    </span>
                  </TableCell>
                  <TableCell>{chart?.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
          <TableHead>
            <TableRow>
              <TableCell className="whitespace-normal max-w-[32ch]">
                <span style={{ paddingLeft: `${parseInt(row.level)}rem` }}>
                  {row?.name}
                </span>
              </TableCell>
              <TableCell>{row?.amount}</TableCell>
            </TableRow>
          </TableHead>
        </>
      )
    } else {
      tableBody.current.push(row)
      if (index === chartItem.length - 1)
        return (
          tableBody.current.length !== 0 && (
            <TableBody>
              {tableBody.current.map((chartItem, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <span
                      style={{ paddingLeft: `${parseInt(chartItem.level)}rem` }}
                    >
                      {chartItem?.name}
                    </span>
                  </TableCell>
                  <TableCell>{chartItem?.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )
        )
    }
  })
}

export default ChartTable
