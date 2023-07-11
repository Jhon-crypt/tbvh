import { NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js'
 
export async function GET(request: Request) {
  //const supabase = createServerComponentClient({ cookies });

  const supabase  = createClient('https://vgcabbxadiekjzzjamux.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnY2FiYnhhZGlla2p6emphbXV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MzI0NDgsImV4cCI6MTk5OTQwODQ0OH0.pFj621LtTxLq9qZlrZFnOk_ol_RKAYRYiVL0qOHDC9Q')

  const { searchParams } = new URL(request.url);

  const chatId = searchParams.get("id");

  let { data: chatBox, error }: any = await supabase
    .from("honest_box")
    .select("*")
    .eq("chat_box_uuid", `${chatId}`)
    .single();

  return NextResponse.json({ chatBox });
}