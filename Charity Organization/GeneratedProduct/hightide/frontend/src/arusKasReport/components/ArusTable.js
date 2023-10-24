import React, { useRef } from 'react'
import { TableBody, TableHead, TableRow, TableCell } from 'commons/components'

const ArusTable = ({ arusItem }) => {
  const DISTINCT_ROW = [
    'Aktivitas Operasional',
    'Aktivitas Investasi',
    'Aktivitas Pendanaan',
    '',
  ]

  const tableBody = useRef([])
  return arusItem.map((row, index) => {
    if (DISTINCT_ROW.includes(row.name) || row.level == 0) {
      const tBody = [...tableBody.current]
      tableBody.current = []
      return (
        <>
          {tBody.length !== 0 && (
            <TableBody>
              {tBody.map((arus, idx) => (
                <TableRow key={idx}>
                  <TableCell className="whitespace-normal max-w-[32ch]">
                    <span style={{ paddingLeft: `${parseInt(arus.level)}rem` }}>
                      {arus?.name}
                    </span>
                  </TableCell>
                  <TableCell isCurrency>{arus?.amount}</TableCell>
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
      if (index === arusItem.length - 1)
        return (
          tableBody.current.length !== 0 && (
            <TableBody>
              {tableBody.current.map((arusItem, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <span
                      style={{ paddingLeft: `${parseInt(arusItem.level)}rem` }}
                    >
                      {arusItem?.name}
                    </span>
                  </TableCell>
                  <TableCell isCurrency>{arusItem?.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )
        )
    }
  })
}

export default ArusTable
