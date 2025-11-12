export default function getBaseUrl() {
  // 1️⃣ Essaie d'abord la variable NEXT_PUBLIC_BASE_URL si elle existe
  let url = process.env.NEXT_PUBLIC_BASE_URL

  // 2️⃣ Si non définie, on regarde si on est sur Vercel
  if (!url) {
    if (process.env.VERCEL_URL) {
      url = `https://${process.env.VERCEL_URL}`
    } else if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:3000'
    } else {
      // fallback de sécurité
      url = 'https://ea4-nine.vercel.app'
    }
  }

  // 3️⃣ On s'assure que le protocole https:// est présent
  if (!url.startsWith('http')) {
    url = `https://${url}`
  }

  return url
}
