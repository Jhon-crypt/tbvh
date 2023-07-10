import { NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js'
 
export async function GET(request: Request) {
  //const supabase = createServerComponentClient({ cookies });

  const supabase_config : any = {
    url : process.env.NEXT_PUBLIC_SUPABASE_URL,
    key : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  }


  const supabase  = createClient(supabase_config.url,supabase_config.key)

  const { searchParams } = new URL(request.url);

  const chatId = searchParams.get("id");

  let { data: chatBox, error }: any = await supabase
    .from("honest_box")
    .select("*")
    .eq("chat_box_uuid", `${chatId}`)
    .single();

  return NextResponse.json({ chatBox });
}
