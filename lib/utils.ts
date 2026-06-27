// Format a date string like "2023-01-15" into "Jan 2023"
export function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

// Format a date range
export function formatDateRange(
  start: string | undefined,
  end: string | undefined,
  current: boolean | undefined
): string {
  const startLabel = formatDate(start)
  if (current) {
    return startLabel ? `${startLabel} - Present` : 'Present'
  }
  const endLabel = formatDate(end)
  if (startLabel && endLabel) return `${startLabel} - ${endLabel}`
  return startLabel || endLabel || ''
}