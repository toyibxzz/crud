import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wmiweztloiapehjhyxjv.supabase.co'
const supabaseKey = 'sb_publishable_NH7Nl8rmElPBuJw0roQG4g_gxpgrBrb'

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
)