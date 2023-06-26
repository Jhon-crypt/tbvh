import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

type chat_message = {
  message?: string;
  chat_box_id?: string;
};

const supabase = createServerComponentClient({ cookies });

export async function POST(request: Request) {
  const randomName: string = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
  });

  const chat_message_data: chat_message = await request.json();

  const { message, chat_box_id } = chat_message_data;

  const { data, error } = await supabase.from("honest_box_messages").insert([
    { message: `${message}` },
    { chatbox_uuid: `${chat_box_id}` },
    { username: `${randomName}` },
    {
      avatar:
        "https://res.cloudinary.com/db7wwc9ex/image/upload/v1687170435/tbvh/tbvh-avatars_rzlwmb.jpg",
    },
  ]);

  if (error) {
    let status = false;

    return NextResponse.json({ message: status });
  } else {
    let status = true;

    return NextResponse.json({ message: status });
  }

  
}
