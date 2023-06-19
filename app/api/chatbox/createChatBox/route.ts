import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from 'uuid';

type honest_box_data = {
  message?: string;
};

const supabase = createServerComponentClient({ cookies });

const id = uuidv4();

export async function POST(request: Request) {
  const chat_box_data: honest_box_data = await request.json();

  const { message } = chat_box_data;

  //fetching user UUID from supbase
  const { data }: any = await supabase.auth.getUser();

  if (data) {
    try {
      const { error } = await supabase
        .from("honest_box")
        .insert({ 
            fullname: `${data.user.user_metadata.full_name}`,
            username: "NOt set",
            message: `${message}`,
            avatar: "https://res.cloudinary.com/db7wwc9ex/image/upload/v1687170435/tbvh/tbvh-avatars_rzlwmb.jpg",
            user_uuid: `${data.user.id}`,
            chat_box_uuid : id
        });
    } catch (error) {
      console.log(error);
    }

    return NextResponse.json({ message: message });

  } else {
    console.log("Error with getting user");
  }

  
}
