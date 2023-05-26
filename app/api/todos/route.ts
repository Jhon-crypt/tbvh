import { NextResponse } from "next/server";

const DATA_URL = "https://jsonplaceholder.typicode.com/todos "

const API_KEY : string = process.env.DATA_API_KEY as string

/*
export async function GET() {

    const response = await fetch(DATA_URL)

    const todos : Todo[] = await response.json()

    return NextResponse.json(todos)

}
*/

export async function POST(request: Request){

    const { userId, title }: Partial<Todo> = await request.json()

    if(!userId || !title) return NextResponse.json({ "message": "Missing Required data" })

    const res = await fetch(DATA_URL,{

        method: `POST`,
        headers : {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify({
            userId, title, completed: false
        })

    })

    const newTodo : Todo = await res.json()

    return NextResponse.json(newTodo)

    //return NextResponse.json({ "message": `Todo ${userId} deleted` })

}
