// var allEventsElm = document.getElementById("allNames")
// var loaderElm = document.getElementById("loader")
// var errorMessageElm = document.getElementById("errorMessage")

// function setErrorDisplay(){
// 	loaderElm.style.display = "none"
// 	allEventsElm.style.display = "none"
// 	errorMessageElm.style.display = "block"
// }

// fetch("https://api.apispreadsheets.com/data/LTL9nmNNMG3Pgqie/").then(res=>{
// 	if (res.status === 200){
// 		res.json().then(data=>{
// 			const yourData = data["data"]
//             console.log(yourData);
//             for (let i=0; i<2; i++) {
//                 let rowInfo = yourData[i]

//                 if (rowInfo["Upcoming"] = "Yes"){
//                     let eventWrap = document.createElement("div")
//                     let eventInfo = document.createElement("div")
//                     let eventImageBox = document.createElement("div")
                    
//                     eventWrap.classList.add("event-wrap")
//                     eventInfo.classList.add("event-info")
//                     eventImageBox.classList.add("image-box")

//                     let eventName = document.createElement("h2")
//                     let eventNameNode = document.createTextNode(rowInfo["Event Name"])
//                     eventName.appendChild(eventNameNode)
//                     eventName.classList.add("event-name")
                    
//                     //description 
//                     let eventDesc = document.createElement("p")
//                     let eventDescNode = document.createTextNode(rowInfo["Description"])
//                     eventDesc.appendChild(eventDescNode)
//                     eventDesc.classList.add("event-desc")
                    
//                     //time / date
//                     let eventDate = document.createElement("div")
//                     let eventDateNode = document.createTextNode(rowInfo["Date"])
//                     eventDate.appendChild(eventDateNode)
//                     eventDate.classList.add("event-date")
//                     let eventTime = document.createElement("div")
//                     let eventTimeNode = document.createTextNode(rowInfo["Time"])
//                     eventTime.appendChild(eventTimeNode)
//                     eventTime.classList.add("event-time")
                    
//                     let eventTimeInfo = document.createElement("div")
//                     eventTimeInfo.classList.add("time-wrapper")
//                     eventTimeInfo.appendChild(eventDate)
//                     eventTimeInfo.appendChild(eventTime)


//                     //image
//                     let imageWrap = document.createElement("a")
//                     let eventImage = document.createElement("img")
//                     let imageUrl = JSON.stringify(rowInfo["Image Link (upload a usable link)"])
//                     let eventImageUrl = imageUrl.replace(/['"]+/g, '')
//                     eventImage.src = eventImageUrl;
//                     eventImage.classList.add("event-image")
//                     imageWrap.href = eventImageUrl
//                     imageWrap.appendChild(eventImage);
//                     console.log(imageWrap);

//                     //links
//                     let eventLinkUrl1 = document.createElement("a")
//                     let eventLinkUrl1Node = JSON.stringify(rowInfo["Additional Link Address 1"])
//                     let url1 = eventLinkUrl1Node.replace(/['"]+/g, '')
//                     eventLinkUrl1.href = url1
//                     eventLinkUrl1.classList.add("eventLink")
//                     let eventLinkName1 = document.createTextNode(rowInfo["Additional Link Name 1"])
//                     eventLinkUrl1.appendChild(eventLinkName1)

//                     let eventLinkUrl2 = document.createElement("a")
//                     let eventLinkUrl2Node = JSON.stringify(rowInfo["Additional Link Address 2"])
//                     let url2 = eventLinkUrl1Node.replace(/['"]+/g, '')
//                     eventLinkUrl2.href = url2
//                     eventLinkUrl2.classList.add("eventLink")
//                     let eventLinkName2 = document.createTextNode(rowInfo["Additional Link Name 2"])
//                     eventLinkUrl2.appendChild(eventLinkName2)

//                     eventImageBox.appendChild(imageWrap)
//                     eventInfo.appendChild(eventName)
//                     eventInfo.appendChild(eventTimeInfo)
//                     eventInfo.appendChild(eventDesc)
//                     eventInfo.appendChild(eventLinkUrl1)

//                     eventWrap.appendChild(eventImageBox);
//                     eventWrap.appendChild(eventInfo)

//                     allEventsElm.appendChild(eventWrap)
//                 }
            
                
//             }
//             loaderElm.style.display = "none"
//             allEventsElm.style.display = "flex"
//             errorMessageElm.style.display = "none"

// 		}).catch(err => console.log(err))
// 	}
// 	else{
// 		// ERROR
// 	}
// })


let PROJECT_ID = "vuhv4f43";
let DATASET = "production";
let QUERY = encodeURIComponent('*[_type == "event"]');
// Compose the URL for your project's endpoint and add the query
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
// fetch the content
let allEventsElm = document.getElementById("allNames");

fetch(URL)
    .then((res) => res.json())
    .then(({ result }) => {
    console.log(result);
    if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
            if (result[i].active = "yes") {

                //creating the divs for html layout
                let eventWrap = document.createElement("div")
                let eventInfo = document.createElement("div")
                let eventImageBox = document.createElement("div")


                //adding classes to the div for styling
                eventWrap.classList.add("event-wrap")
                eventInfo.classList.add("event-info")
                eventImageBox.classList.add("image-box")

                //adding the title
                let eventName = document.createElement("h2")
                let eventNameNode = document.createTextNode(result[i].name)
                eventName.appendChild(eventNameNode)
                eventName.classList.add("event-name")
                                
                //time / date
                let eventDate = document.createElement("div")
                let eventDateNode = document.createTextNode(result[i].date)
                eventDate.appendChild(eventDateNode)
                eventDate.classList.add("event-date")
                let eventTime = document.createElement("div")
                let eventTimeNode = document.createTextNode(result[i].time)
                eventTime.appendChild(eventTimeNode)
                eventTime.classList.add("event-time")

                let eventTimeInfo = document.createElement("div")
                eventTimeInfo.classList.add("time-wrapper")
                eventTimeInfo.appendChild(eventDate)
                eventTimeInfo.appendChild(eventTime)

                //description 
                let eventDesc = document.createElement("p")
                let eventDescNode = document.createTextNode(result[i].desc)
                eventDesc.appendChild(eventDescNode)
                eventDesc.classList.add("event-desc")

                //image
                let imageWrap = document.createElement("a")
                let eventImage = document.createElement("img")
                let imgAsset = result[i].image.asset._ref
                // let imageUrl = JSON.stringify(result[i].image)
                let imgReplaceJpg = imgAsset.replace('-jpg', '.jpg')
                let eventImageUrl = "https://cdn.sanity.io/images/vuhv4f43/production/" + imgReplaceJpg.replace('image-', '')
                
                eventImage.src = eventImageUrl;
                eventImage.classList.add("event-image")
                //imageWrap.href = imgAsset
                imageWrap.appendChild(eventImage);
                console.log(imageWrap);

                //https://cdn.sanity.io/images/vuhv4f43/production/ad1700be5e79b272bbe098dae3b53833940ad68a-600x897.jpg
                //image-ad1700be5e79b272bbe098dae3b53833940ad68a-600x897.jpg
                //links
                let eventLinkUrl1 = document.createElement("a")
                let eventLinkUrl1Node = result[i].linkurl
                //let url1 = eventLinkUrl1Node.replace(/['"]+/g, '')
                eventLinkUrl1.href = eventLinkUrl1Node
                eventLinkUrl1.classList.add("eventLink")
                let eventLinkName1 = document.createTextNode(result[i].linkname)
                eventLinkUrl1.appendChild(eventLinkName1)

                // let eventLinkUrl2 = document.createElement("a")
                // let eventLinkUrl2Node = JSON.stringify(rowInfo["Additional Link Address 2"])
                // let url2 = eventLinkUrl1Node.replace(/['"]+/g, '')
                // eventLinkUrl2.href = url2
                // eventLinkUrl2.classList.add("eventLink")
                // let eventLinkName2 = document.createTextNode(rowInfo["Additional Link Name 2"])
                // eventLinkUrl2.appendChild(eventLinkName2)

                eventImageBox.appendChild(imageWrap)
                eventInfo.appendChild(eventName)
                eventInfo.appendChild(eventTimeInfo)
                eventInfo.appendChild(eventDesc)
                eventInfo.appendChild(eventLinkUrl1)

                eventWrap.appendChild(eventImageBox)
                eventWrap.appendChild(eventInfo)
                allEventsElm.appendChild(eventWrap)
            }
            allEventsElm.style.display = "flex";
        }
    }
    })
    .catch((err) => console.error(err));