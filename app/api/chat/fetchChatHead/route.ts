import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const supabase = createServerComponentClient({ cookies });

  const { searchParams } = new URL(request.url);

  const chatId = searchParams.get("id");

  let { data: chatBox, error }: any = await supabase
    .from("honest_box")
    .select("*")
    .eq("chat_box_uuid", `${chatId}`)
    .single();

  return NextResponse.json({ chatBox });
}
