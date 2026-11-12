// HUMANVERSE Auth Configuration
// Replace the placeholders below with your Supabase project values.
// Get them from: Supabase Dashboard → Project Settings → API
// NEVER put the service_role key here. Use only the anon/public key.

const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL'; // e.g. https://xxxxx.supabase.co
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Example usage once configured (uncomment and include supabase-js CDN):
// import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'
// const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('HUMANVERSE auth.js loaded. Configure SUPABASE_URL and SUPABASE_ANON_KEY to enable real authentication.');

// Recommended Supabase tables (enable RLS):
// profiles (id uuid references auth.users, full_name text, avatar_url text, created_at timestamptz)
// quiz_results (id uuid, user_id uuid references auth.users, score int, total int, created_at timestamptz)
// journal_entries (id uuid, user_id uuid references auth.users, title text, content text, created_at timestamptz)
// Policies: users can only select/insert/update/delete their own rows (auth.uid() = user_id)