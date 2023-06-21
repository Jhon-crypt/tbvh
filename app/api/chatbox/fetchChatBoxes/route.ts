import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET(request: Request) {

  const supabase = createServerComponentClient({ cookies });

  //fetching user UUID from supbase
  const { data }: any = await supabase.auth.getUser();

  if (data) {
    let { data: honestBox, error }: any = await supabase
      .from("honest_box")
      .select("*")
      .eq("user_uuid", `${data.user.id}`)
      .order("id", { ascending: false });

    return NextResponse.json({ honestBox });
  }else{
    return NextResponse.json({ "message": 'Error during Request' });
  }
}
