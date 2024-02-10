import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react'
import {
    // Import predefined theme
    ThemeSupa,
  } from '@supabase/auth-ui-shared'
const supabaseUrl: string = 'https://bjyptozoojmaekhjuvir.supabase.co';
const supabaseKey: string = process.env.SUPABASE_KEY || '';
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export { supabaseUrl, supabaseKey, supabase };
