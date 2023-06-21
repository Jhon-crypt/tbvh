import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    const supabase = createServerComponentClient({ cookies });

    //fetching user UUID from supbase
    const { data }: any = await supabase.auth.getUser();
  
    if (data) {
      try {
        let { data: honestBox, error }: any = await supabase
          .from("honest_box")
          .select("*")
          .eq("user_uuid", `${data.user.id}`)
          .order("id", { ascending: false });
  
        return NextResponse.json({ honestBox });
      } catch (error) {
        return NextResponse.json({ message: "Error during Request" });
      }
    } else {
      return NextResponse.json({ message: "Error during Request" });
    }
}
