import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const supabase = createClient(
  "https://bjyptozoojmaekhjuvir.supabase.co",
  process.env.SUPABASE_KEY || ''
);

export default function page() {

    <Auth
    supabaseClient={supabase}

    appearance={{ theme: ThemeSupa }}
  />
}


