import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request : Request) {
  const supabase = createServerComponentClient({ cookies });

  const { searchParams } = new URL(request.url)

  const userId = searchParams.get("userId");

  let { data: chatBox, error }: any = await supabase
    .from("honest_box")
    .select("*")
    .eq("user_uuid", `${userId}`)

  return NextResponse.json({ chatBox });

}
