import { createClient } from '@supabase/supabase-js'

export const Supabase = createClient('https://vgcabbxadiekjzzjamux.supabase.co', `${process.env.SUPABASE_KEY}`)