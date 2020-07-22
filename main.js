let chatListPointer = 5;
const users = [
    'Ronaldo',
    'Alex Hunter',
    'Auba',
    'Laca',
    'SRK',
    'Pogba',
    'Alice',
    'Messi',
    'Mikel',
    'Giroud',
    'Sharp',
    'Sundar',
    'Arteta',
    'Ram',
    'Shyam'
];

const times = [
    '11:01',
    '11:20',
    '12:30',
    'Yesterday',
    'Yesterday',
    '07/06/2020',
    '01/06/2020',
    '01/06/2020',
    '28/05/2020',
    '27/05/2020',
    '27/05/2020',
    '22/05/2020',
    '21/05/2020',
    '11/05/2020',
    '06/05/2020',
];

const imageUrls = {
    'Ronaldo': "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/200px-Cristiano_Ronaldo_2018.jpg",
    'Alex Hunter': "https://m0.joe.co.uk/wp-content/uploads/2016/09/14215422/Alex-Hunter.jpg",
    'Auba': "https://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2020/07/21114525/auba34-1.jpg",
    'Laca': "https://images.outlookindia.com/public/uploads/articles/2019/11/23/Alexandre-Lacazette-Home-AP_571_855.jpg",
    'SRK': "https://static.toiimg.com/photo/msid-69902898/69902898.jpg?115506",
};

const msg = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, pariatur?";
const imageLink = "https://ptetutorials.com/images/user-profile.png";

let currentChat = undefined;

const addChat = () => {
    if (chatListPointer == users.length)
        return;
    const inbox = document.getElementsByClassName("inbox_chat")[0];
    for (let i = chatListPointer; i < chatListPointer + 5; i++) {

        let divCL = document.createElement("div");
        divCL.setAttribute("class", "chat_list");
        let id = "cl" + String(i + 1);
        divCL.setAttribute("id", id);
        let ocl = "openChat('" + id + "')";
        divCL.setAttribute("onclick", ocl);

        let divCP = document.createElement("div");
        divCP.setAttribute("class", "chat_people");

        let divCI = document.createElement("div");
        divCI.setAttribute("class", "chat_img");

        let image = document.createElement("img");
        image.setAttribute("src", imageLink);
        image.setAttribute("alt", users[i]);
        image.setAttribute("class", "chat_img_round");

        divCI.appendChild(image);

        let divCB = document.createElement("div");
        divCB.setAttribute("class", "chat_ib");

        let h5 = document.createElement("h5");
        h5.innerText = users[i];
        h5.setAttribute("name", users[i]);

        let span = document.createElement("span");
        span.setAttribute("class", "chat_date");
        span.innerText = times[i];

        h5.appendChild(span);

        let p = document.createElement("p");
        p.innerText = msg;

        divCB.appendChild(h5);
        divCB.appendChild(p);

        divCP.appendChild(divCI);
        divCP.appendChild(divCB);

        divCL.appendChild(divCP);

        inbox.appendChild(divCL);

    }
    chatListPointer += 5;
};

const openChat = (id) => {
    if (currentChat)
        currentChat.classList.remove("active_chat");
    let chatList = document.getElementById(id);
    let name = chatList.getElementsByTagName("h5")[0].getAttribute("name");
    document.getElementById("chatName").innerText = name;
    chatList.classList.add("active_chat");
    let span = chatList.getElementsByClassName("dot")[0];
    if (span)
        span.parentNode.removeChild(span);
    currentChat = chatList;
    let imgURL = chatList.getElementsByTagName("img")[0].getAttribute("src");
    let incomingMsgs = document.getElementsByClassName("incoming_msg_img");
    for (let i = 0; i < incomingMsgs.length; i++) {
        incomingMsgs[i].getElementsByTagName("img")[0].setAttribute("src", imgURL);
    }
};

let currentChatList, center;

const searchContacts = (name) => {
    // console.log('name is ', name);
    if (currentChatList == undefined) {
        let cl = document.getElementsByClassName("inbox_chat")[0];
        let ct = document.getElementsByTagName("center")[0];
        currentChatList = cl.cloneNode(true);
        center = ct.cloneNode(true);
        cl.parentNode.removeChild(cl);
        ct.parentNode.removeChild(ct);
    } else if (name == undefined || name == '') {
        let currentInbox = document.getElementsByClassName("inbox_chat")[0];
        if (currentInbox)
            currentInbox.parentNode.removeChild(currentInbox);
        let col = document.getElementsByClassName("col-sm-4")[0];
        col.appendChild(currentChatList);
        col.appendChild(center);
        currentChatList = undefined;
        center = undefined;
    }
    if (name.length > 0) {
        name = name.toLowerCase();
        let currentInbox = document.getElementsByClassName("inbox_chat")[0];
        if (currentInbox)
            currentInbox.parentNode.removeChild(currentInbox);
        let inbox = document.createElement("div");
        inbox.setAttribute("class", "inbox_chat");
        for (let i = 0; i < users.length; i++) {
            // console.log('username is ', users[i]);
            if (users[i].toLowerCase().startsWith(name)) {

                let divCL = document.createElement("div");
                divCL.setAttribute("class", "chat_list");
                let id = "cl" + String(i + 1);
                divCL.setAttribute("id", id);
                let ocl = "openChat('" + id + "')";
                divCL.setAttribute("onclick", ocl);

                let divCP = document.createElement("div");
                divCP.setAttribute("class", "chat_people");

                let divCI = document.createElement("div");
                divCI.setAttribute("class", "chat_img");

                let image = document.createElement("img");

                let link;
                if (users[i] in imageUrls)
                    link = imageUrls[users[i]];
                else
                    link = imageLink;
                image.setAttribute("src", link);
                image.setAttribute("alt", users[i]);
                image.setAttribute("class", "chat_img_round");

                divCI.appendChild(image);

                let divCB = document.createElement("div");
                divCB.setAttribute("class", "chat_ib");

                let h5 = document.createElement("h5");
                h5.innerText = users[i];
                h5.setAttribute("name", users[i]);

                let span = document.createElement("span");
                span.setAttribute("class", "chat_date");
                span.innerText = "Dec 25";

                h5.appendChild(span);

                let p = document.createElement("p");
                p.innerText = msg;

                divCB.appendChild(h5);
                divCB.appendChild(p);

                divCP.appendChild(divCI);
                divCP.appendChild(divCB);

                divCL.appendChild(divCP);

                inbox.appendChild(divCL);
            }
        }
        let col = document.getElementsByClassName("col-sm-4")[0];
        col.appendChild(inbox);
    }
};