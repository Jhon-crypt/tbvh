export default async function getChatHeadchat(chatId : string) {

    const response = await fetch(`/api/chat/fetchChatHead/${chatId}`, {
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