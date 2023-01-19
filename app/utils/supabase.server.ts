import { createServerClient } from '@supabase/auth-helpers-remix'

import type { Database } from '~/types/database'

export const createSupabaseServerClient = ({ request, response }: {
  request: Request,
  response: Response
}) => createServerClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
  { request, response }
)