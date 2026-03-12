import { createClient } from '@/lib/supabase/server'
import { HeaderClient } from './header-client'

export async function Header() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()
  const user = data?.claims ?? null
  return <HeaderClient user={user} />
}
