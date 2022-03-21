let apiadress = "https://quirky-server.herokuapp.com/api/v1"

function colorizer(str) {
    let red = parseInt(str.substr(1, 2), 16);
    let green = parseInt(str.substr(3, 2), 16);
    let blue = parseInt(str.substr(5, 2), 16);
    let intensity = red * 0.299 + green * 0.587 + blue * 0.114;
    return intensity > 168 ? true : false;
}

i = 10;

function statueChanger(x) {
}


document.getElementById("dayAccept").addEventListener("click", function() {

})


setTimeout(() => {
    // Initialize the echarts instance based on the prepared dom
    var myChart = echarts.init(document.getElementById('visRate'));

    // Specify the configuration items and data for the chart

    option = {
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal',
        },
        xAxis: {
            show: false,
            type: 'category',
            data: ['', '', '', '', '', '', ''],
            nameTextStyle: {
                color: "rgba(255, 255, 255, 1)"
            },
            axisLine: {
                show: false,
            }
        },
        yAxis: {
            show: false,
            type: 'value',
            nameTextStyle: {
                color: "rgba(255, 255, 255, 1)"
            },

            axisLine: {
                show: false,
            }
        },


        color: ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
        animationDuration: 1800,
        series: [{
            data: [3, 9, 1, 4, 9, 3, 10],
            type: 'line',
            smooth: true
        }]
    };
    // Display the chart using the configuration items and data just specified.
    myChart.setOption(option);


}, 1600);




function dateLoader() {
    let dt = new Date();
    document.getElementById("time").innerHTML = dt.toDateString();
}

function quoteLoader() {
    let apiUrl = 'https://api.quotable.io/random';
    fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        document.getElementById("quote").innerHTML = `"${data.content}" <br> -${data.author}`;

    }).catch(err => {
    });
}

function crosser() {
    if (document.getElementById("flexCheckDefault").checked == TRUE) {
    }

}

function backgroundLoader() {
    let apiUrl = "https://api.smk.dk/api/v1/art/search/?keys=*&fields=image_thumbnail,colors,artist,titles,labels,object_number&filters=[has_image:true],[object_names:maleri],[public_domain:true]&offset=0&rows=300";
    fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        let random = Math.floor(Math.random() * 300);
        let body = document.getElementById("myBody");
        document.getElementById("leftSection").classList.add("bg-[" + data.items[random].colors[1] + "]");
        document.getElementById("rightSection").classList.add("bg-[" + data.items[random].colors[2] + "]");
        let text = data.items[random].titles[0].title + " by " + data.items[random].artist;
        body.style.backgroundImage = "url('" + data.items[random].image_thumbnail + "')";
        let link = data.items[random].object_number;
        link = "https://open.smk.dk/artwork/image/" + link.toLowerCase();
        document.getElementById("reference").innerHTML = `<a href="${link}" target="_blank">${text}</a>`;
        if (colorizer(data.items[random].colors[1]) == false)
            document.getElementById("leftSection").classList.add("text-white");
        if (colorizer(data.items[random].colors[2]) == false) {
            document.getElementById("rightSection").classList.add("text-white");
        }
        document.getElementById("modalContent").classList.add("bg-[" + data.items[random].colors[3] + "]");
        document.getElementById("modalContent2").classList.add("bg-[" + data.items[random].colors[3] + "]");
        document.getElementById("input").classList.add("bg-[" + data.items[random].colors[3] + "]");
        document.getElementById("modalContent2").classList.add("bg-[" + data.items[random].colors[3] + "]");
        document.getElementById("modalContent3").classList.add("bg-[" + data.items[random].colors[3] + "]");
        document.getElementById("noteDescription").classList.add("bg-[" + data.items[random].colors[3] + "]");
        document.getElementById("inputNote").classList.add("bg-[" + data.items[random].colors[3] + "]");

        if (colorizer(data.items[random].colors[3]) == false) {
            document.getElementById("input").classList.add("border-white");
            document.getElementById("input").classList.add("text-white");
            document.getElementById("accept").classList.add("text-white");
            document.getElementById("inputNote").classList.add("border-white");
            document.getElementById("inputNote").classList.add("text-white");
            document.getElementById("noteDescription").style.borderColor = "white";
            document.getElementById("noteDescription").classList.add("text-white");
            document.getElementById("acceptNote").classList.add("text-white");
            document.getElementById("myModal2").classList.add("text-white");
            document.getElementById("myModal3").classList.add("text-white");


        }

    }).catch(err => {
    });
}

document.getElementById("add").addEventListener("click", function() {
    document.getElementById("myModal").style.visibility = "visible";
    document.getElementById("myModal").style.opacity = 1;



    document.getElementById("error").innerHTML = "";
    errr = false;
})

function getThisDate() {
    const dateObject = new Date();
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = String(dateObject.getDate()).padStart(2, '0');
    return `${day}${month}${year}`
}

let errr = false;
let errr2 = false;

document.getElementById("accept").addEventListener("click", function() {

    let newTask = document.getElementById("input").value;
    if (newTask.length == 0) {
        if (errr == false) document.getElementById("error").innerHTML += "No task entered";
        errr = true;


    } else {
        let labeler = document.createElement("br");
        let label = document.createElement("label");
        label.classList.add("form-check-label", "inline-block");
        let inputer = document.createElement("input", );
        inputer.setAttribute("type", "checkbox");
        let spaner = document.createElement("span");
        spaner.innerText = newTask;
        inputer.classList.add("form-check-input", "appearance-none", "h-3", "w-3", "border", "border-gray-300", "rounded-sm", "bg-gray-300", "checked:bg-black", "checked:border-black", "focus:outline-none", "transition", "duration-200", "mt-1", "align-top", "bg-no-repeat", "bg-center", "bg-contain", "float-left", "mr-2", "cursor-pointer");
        label.appendChild(inputer);
        label.appendChild(spaner);
        document.getElementById("tasks").appendChild(label);
        document.getElementById("tasks").append(labeler);
        i++;
        document.getElementById("myModal").style.visibility = "hidden";
        document.getElementById("myModal").style.opacity = 0;
        let thisDate = getThisDate();
        let reqJson = {
            taskContent: document.getElementById("input").value,
            user: "mySelf",
            dateAdded: thisDate + ""
        }
        fetch(`${apiadress}/tasks/`, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reqJson),
            })
            .then(response => response.json())
            .then(data => {
                inputer.setAttribute("id", `${data.insertedId}`);
                inputer.addEventListener("click", function() {
                    let spayload;
                    if (inputer.checked == true) {
                        spayload = { checked: true };
                    } else {
                        spayload = { checked: false };
                    }


                    fetch(`${apiadress}/tasks/${data.insertedId}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(spayload),
                    }).then(response => response.json()).then(data => {  }).catch((error) => {  })
                });

            })
            .catch((error) => {
            });
    }
});

setTimeout(function() {
    document.getElementById("loading").classList.add("opacity-0");
}, 1500);
setTimeout(function() {
    document.getElementById("loading").style.display = "none";
}, 3000);

window.onload = function() {
    backgroundLoader();
    dateLoader();
    quoteLoader();

}

document.getElementById("refImage").addEventListener("click", function() {

    location.reload()
});
document.getElementById("showImage").addEventListener("mouseover", function() {
    document.getElementById("leftSection").style.visibility = "hidden";
    document.getElementById("leftSection").style.opacity = 0;
    document.getElementById("rightSection").style.visibility = "hidden";
    document.getElementById("rightSection").style.opacity = 0;

})
document.getElementById("showImage").addEventListener("mouseleave", function() {
    document.getElementById("leftSection").style.visibility = "visible";
    document.getElementById("leftSection").style.opacity = 1;
    document.getElementById("rightSection").style.visibility = "visible";
    document.getElementById("rightSection").style.opacity = 1;

});

document.getElementById("addNote").addEventListener("click", function() {
    document.getElementById("myModal2").style.visibility = "visible";
    document.getElementById("myModal2").style.opacity = 1;

})


document.body.onclick = function(event) {
    if (event.target == document.getElementById("myModal2")) {
        document.getElementById("myModal2").style.visibility = "hidden";
        document.getElementById("myModal2").style.opacity = 0;
        document.getElementById("error2").innerHTML = "";
        errr2 = false;


    }
}

document.getElementById("acceptNote").addEventListener("click", function() {
    let idclick = 0;
    let noteValue = document.getElementById("inputNote").value;
    let thisDate = getThisDate();
    let reqJson = {
        dateAdded: thisDate + "",
        title: document.getElementById("inputNote").value,
        Content: document.getElementById("noteDescription").value
    }
    if (noteValue.length == 0) {
        if (errr2 == false) document.getElementById("error2").innerHTML = "No title entered";
        errr2 = true;
    } else {
        document.getElementById("myModal2").style.visibility = "hidden";
        document.getElementById("myModal2").style.opacity = 0;

        fetch(`${apiadress}/notes/`, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reqJson),
            })
            .then(response => response.json())
            .then(data => {
                idclick = data.insertedId;
                fetch(`${apiadress}/notes/${data.insertedId}`, {
                    "method": "GET",
                    "headers": {
                        'Content-Type': 'application/json',
                    }
                }).then(response => response.json()).then(data => {
                }).catch((error) => {  })
            }).catch((error) => {  })

    }
    document.getElementById("notes").innerHTML = '';
    setTimeout(() => {
        notesLoader();
    }, 1000);

})


function notesLoader() {
    fetch(`${apiadress}/notes/`, {
        "method": "GET",
        "headers": {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json()).then(data => {
        data.data?.map((item, index) => {
            document.getElementById("notes").innerHTML += `<p id=${item._id} class="cursor-pointer"> ${item.title}</p> <br>`;
        });
        data.data?.map((item, index) => {
            document.getElementById(item._id).addEventListener("click", function() {
                document.getElementById("myModal3").style.visibility = "visible";
                document.getElementById("myModal3").style.opacity = 1;
                fetch(`${apiadress}/notes/${item._id}`, {
                    "method": "GET",
                    "headers": {
                        'Content-Type': 'application/json',
                    }
                }).then(response => response.json()).then(data => {
                    document.getElementById("modalContent3").innerHTML = `<p> ${data.Content} </p>`
                }).catch((error) => {  })
            })

        });
    }).finally(() => {
        setTimeout(() => {
            tasksLoader();
        }, 500);
    }
    )
}


document.getElementById("tasks").addEventListener("mouseover", function() {
    document.getElementById("add").style.visibility = " visible"
    document.getElementById("add").style.opacity = 1;
})
document.getElementById("add").addEventListener("mouseover", function() {
    document.getElementById("add").style.visibility = " visible"
    document.getElementById("add").style.opacity = 1;
})
document.getElementById("tasks").addEventListener("mouseleave", function() {
    document.getElementById("add").style.visibility = "hidden"
    document.getElementById("add").style.opacity = 0;
})
document.getElementById("add").addEventListener("mouseleave", function() {
    document.getElementById("add").style.visibility = "hidden"
    document.getElementById("add").style.opacity = 0;
})


document.getElementById("notes").addEventListener("mouseover", function() {
    document.getElementById("addNote").style.visibility = " visible"
    document.getElementById("addNote").style.opacity = 1;
})
document.getElementById("addNote").addEventListener("mouseover", function() {
    document.getElementById("addNote").style.visibility = " visible"
    document.getElementById("addNote").style.opacity = 1;
})
document.getElementById("notes").addEventListener("mouseleave", function() {
    document.getElementById("addNote").style.visibility = "hidden"
    document.getElementById("addNote").style.opacity = 0;
})
document.getElementById("addNote").addEventListener("mouseleave", function() {
        document.getElementById("addNote").style.visibility = "hidden"
        document.getElementById("addNote").style.opacity = 0;
    })

function tasksLoader() {
    fetch(`${apiadress}/tasks/`, {
            "method": "GET",
            "headers": {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            data.data?.map((item, index) => {
                let labeler = document.createElement("br");
                let label = document.createElement("label");
                label.classList.add("taskgoose");
                label.classList.add("form-check-label", "inline-block");
                let inputer = document.createElement("input", );
                inputer.setAttribute("type", "checkbox");
                inputer.setAttribute("id", `${item._id}`);
                if (item.checked)
                    inputer.checked = true;
                else
                    inputer.checked = false;
                inputer.addEventListener("click", function() {
                    let spayload;
                    if (inputer.checked == true) {
                        spayload = { checked: true };
                    } else {
                        spayload = { checked: false };
                    }


                    fetch(`${apiadress}/tasks/${item._id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(spayload),
                    }).then(response => response.json()).then(data => { }).catch((error) => {  })
                })
                if (item.statue == 1) inputer.setAttribute("checked", "true");
                let spaner = document.createElement("span");
                spaner.innerText = item.taskContent;
                inputer.classList.add("form-check-input", "appearance-none", "h-3", "w-3", "border", "border-gray-300", "rounded-sm", "bg-gray-300", "checked:bg-black", "checked:border-black", "focus:outline-none", "transition", "duration-200", "mt-1", "align-top", "bg-no-repeat", "bg-center", "bg-contain", "float-left", "mr-2", "cursor-pointer");
                label.appendChild(inputer);
                label.appendChild(spaner);
                document.getElementById("tasks").appendChild(label);
                document.getElementById("tasks").append(labeler);

            })
            let tasksEventListen = document.getElementsByClassName("taskgoose");

        }).finally(() => {
            setTimeout(() => {
                ratingsLoader();
            }, 500);
        })
        .catch(err => {
        });




}
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.visibility = "hidden";
        document.getElementById("myModal").style.opacity = 0;

    }
}
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal3")) {
        document.getElementById("myModal3").style.visibility = "hidden";
        document.getElementById("myModal3").style.opacity = 0;
        setTimeout(() => {
            document.getElementById("modalContent3").innerHTML = 'Loading';
        }, 150);


    }
}

document.getElementById("dayAccept").addEventListener("click", function(){
    let reqJson ={ rating : document.getElementById("slider").value }
    fetch(`${apiadress}/ratings/`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqJson),
    })
    .then(response => response.json()).then(data => { })
})

function ratingsLoader() {
    fetch(`${apiadress}/ratings/`, {  
        "method": "GET",
        "headers": {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json()).then(data => {
        setTimeout(() => {
            // Initialize the echarts instance based on the prepared dom
            var myChart = echarts.init(document.getElementById('visRate'));
        
            // Specify the configuration items and data for the chart
        
            option = {
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                },
                xAxis: {
                    show: false,
                    type: 'category',
                    data: ['', '', '', '', '', '', ''],
                    nameTextStyle: {
                        color: "rgba(255, 255, 255, 1)"
                    },
                    axisLine: {
                        show: false,
                    }
                },
                yAxis: {
                    show: false,
                    type: 'value',
                    nameTextStyle: {
                        color: "rgba(255, 255, 255, 1)"
                    },
        
                    axisLine: {
                        show: false,
                    }
                },
        
        
                color: ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
                animationDuration: 1800,
                series: [{
                    data: [data.data[0].rating, 90, 19, 48, 90, 37, 40],
                    type: 'line',
                    smooth: true
                }]
            };
            // Display the chart using the configuration items and data just specified.
            myChart.setOption(option);
        
        
        }, 1600);
    })
    }

notesLoader();