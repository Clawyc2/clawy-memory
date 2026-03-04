import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clawy Memory Bank',
  description: 'Sesiones y memoria de Clawy organizadas por fecha',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
