var allEventsElm = document.getElementById("allNames")
var loaderElm = document.getElementById("loader")
var errorMessageElm = document.getElementById("errorMessage")

function setErrorDisplay(){
	loaderElm.style.display = "none"
	allEventsElm.style.display = "none"
	errorMessageElm.style.display = "block"
}

fetch("https://api.apispreadsheets.com/data/LTL9nmNNMG3Pgqie/").then(res=>{
	if (res.status === 200){
		res.json().then(data=>{
			const yourData = data["data"]
            console.log(yourData);
            for (let i=0; i<2; i++) {
                let rowInfo = yourData[i]

                if (rowInfo["Upcoming"] = "Yes"){
                    let eventWrap = document.createElement("div")
                    let eventInfo = document.createElement("div")
                    let eventImageBox = document.createElement("div")
                    
                    eventWrap.classList.add("event-wrap")
                    eventInfo.classList.add("event-info")
                    eventImageBox.classList.add("image-box")

                    let eventName = document.createElement("h2")
                    let eventNameNode = document.createTextNode(rowInfo["Event Name"])
                    eventName.appendChild(eventNameNode)
                    eventName.classList.add("event-name")
                    
                    //description 
                    let eventDesc = document.createElement("p")
                    let eventDescNode = document.createTextNode(rowInfo["Description"])
                    eventDesc.appendChild(eventDescNode)
                    eventDesc.classList.add("event-desc")
                    
                    //time / date
                    let eventDate = document.createElement("div")
                    let eventDateNode = document.createTextNode(rowInfo["Date"])
                    eventDate.appendChild(eventDateNode)
                    eventDate.classList.add("event-date")
                    let eventTime = document.createElement("div")
                    let eventTimeNode = document.createTextNode(rowInfo["Time"])
                    eventTime.appendChild(eventTimeNode)
                    eventTime.classList.add("event-time")
                    
                    let eventTimeInfo = document.createElement("div")
                    eventTimeInfo.classList.add("time-wrapper")
                    eventTimeInfo.appendChild(eventDate)
                    eventTimeInfo.appendChild(eventTime)


                    //image
                    let imageWrap = document.createElement("a")
                    let eventImage = document.createElement("img")
                    let imageUrl = JSON.stringify(rowInfo["Image Link (upload a usable link)"])
                    let eventImageUrl = imageUrl.replace(/['"]+/g, '')
                    eventImage.src = eventImageUrl;
                    eventImage.classList.add("event-image")
                    imageWrap.href = eventImageUrl
                    imageWrap.appendChild(eventImage);
                    console.log(imageWrap);

                    //links
                    let eventLinkUrl1 = document.createElement("a")
                    let eventLinkUrl1Node = JSON.stringify(rowInfo["Additional Link Address 1"])
                    let url1 = eventLinkUrl1Node.replace(/['"]+/g, '')
                    eventLinkUrl1.href = url1
                    eventLinkUrl1.classList.add("eventLink")
                    let eventLinkName1 = document.createTextNode(rowInfo["Additional Link Name 1"])
                    eventLinkUrl1.appendChild(eventLinkName1)

                    let eventLinkUrl2 = document.createElement("a")
                    let eventLinkUrl2Node = JSON.stringify(rowInfo["Additional Link Address 2"])
                    let url2 = eventLinkUrl1Node.replace(/['"]+/g, '')
                    eventLinkUrl2.href = url2
                    eventLinkUrl2.classList.add("eventLink")
                    let eventLinkName2 = document.createTextNode(rowInfo["Additional Link Name 2"])
                    eventLinkUrl2.appendChild(eventLinkName2)

                    eventImageBox.appendChild(imageWrap)
                    eventInfo.appendChild(eventName)
                    eventInfo.appendChild(eventTimeInfo)
                    eventInfo.appendChild(eventDesc)
                    eventInfo.appendChild(eventLinkUrl1)

                    eventWrap.appendChild(eventImageBox);
                    eventWrap.appendChild(eventInfo)

                    allEventsElm.appendChild(eventWrap)
                }
            
                
            }
            loaderElm.style.display = "none"
            allEventsElm.style.display = "flex"
            errorMessageElm.style.display = "none"

		}).catch(err => console.log(err))
	}
	else{
		// ERROR
	}
})
