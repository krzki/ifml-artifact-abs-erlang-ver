const cleanFormData = data => {
  return Object.fromEntries(
    Object.entries(data).map(([key, val]) => [key, String(val)])
  )
}

export default cleanFormData
