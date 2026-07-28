// src/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Mantém o site público funcionando mesmo quando as variáveis do painel
// administrativo não estão disponíveis no ambiente de hospedagem.
const fallbackUrl = "https://placeholder.supabase.co"
const fallbackKey = "public-portfolio-without-supabase"

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey)
export const supabase = createClient(
  supabaseUrl || fallbackUrl,
  supabaseKey || fallbackKey,
)
