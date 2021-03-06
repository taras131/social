const ADDMESSAGE = `ADDMESSAGE`,
      MESSAGEINPUT = `MESSAGEINPUT`;
      
const initialstate = {
    dialogsData: [
        {id: 1, name : "ivan", url : "https://i.gjcdn.net/data/fireside/posts/23/163/1491663/media/5f7-raxzkzk7.jpg"},
        {id: 2, name : "stas", url : "http://metierkudos.com/wp-content/uploads/2018/10/ocs1.jpg"},
        {id: 3, name : "дюша", url : "https://pristor.ru/wp-content/uploads/2019/09/%D0%A4%D0%BE%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B2-%D0%BE%D0%B4%D0%BD%D0%BE%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D0%B8%D0%BA%D0%B0%D1%85-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD007.jpg"},
        {id: 4, name : "метёдлкин", url : "https://whatsism.com/uploads/posts/2019-04/1556173275_prikolnye_kartinki_na_zastavku_telefona_2_18034955.jpg"},
        {id: 5, name : "злодей", url : "https://p7.hiclipart.com/preview/925/547/763/sticker-whatsapp-emoticon-kik-messenger-emoji-viber.jpg"},
        {id: 6, name : "птица говорун", url : "https://скачать-ватсап-бесплатно.рус/wp-content/uploads/2018/10/avatarka-dlya-vatsap-10.jpg"},
    ],
      messagesData: [
        {id: 1, text: "привет", likescount: 47},
        {id: 2, text: "пока", likescount: 147},
        {id: 3, text: "не звони сюда больше", likescount: 470},
        {id: 4, text: "я скучаю", likescount: 7},
        {id: 5, text: "ты негодяй!", likescount: 4}
    ],
    inputValue : ``			
};

const messagesReducer = (state = initialstate , action) => {
    switch(action.type) {
        case ADDMESSAGE: {         
                let newMessage = {
                id:5,
                text: state.inputValue,
                likescount: 0
                }
            let statecopy = {...state};
            statecopy.messagesData = [...state.messagesData]
            statecopy.messagesData.push(newMessage);
            statecopy.inputValue = ``;
            return statecopy;}
        case MESSAGEINPUT:{
            let statecopy = {...state};
            statecopy.inputValue = action.messageimput;
            return statecopy;}
        default:
            return state;
    }
}

export const postNewMessageActionCreater = () => ({
	type: ADDMESSAGE
})

export const inputMessageActionCreater = (text) => {
	return {
		type: MESSAGEINPUT,
		messageimput: text
	}
}

export default messagesReducer;