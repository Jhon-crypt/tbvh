export default async function getChatHead(chatId : string) {

    const response = await fetch(`/api/chat/fetchChatHead?id=${chatId}`, {
        method: "GET",
        headers: {
            "Content-Type": "apllication/json",
        },
    });

    if(response.ok){

        const response_data = await response.json()

        console.log(response_data)

        return response_data

    }else if(!response.ok){

        console.log("Could Not Get Chat Box")

    }

}