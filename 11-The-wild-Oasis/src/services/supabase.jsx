import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://oyfnhnhbieqziotkfjmv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95Zm5obmhiaWVxemlvdGtmam12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyNDMyODMsImV4cCI6MjA3NDgxOTI4M30.gLPLaKLRsVVnqCLyz9O2sXZ7GmCVGW6hk5im5e3fKgI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
