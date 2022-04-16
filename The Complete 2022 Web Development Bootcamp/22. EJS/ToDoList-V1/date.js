

//module.exports = getDate; //there is no bracket after getDate since we don't want to call it when exporting
module.exports.getDate = getDate; //there is no bracket after getDate since we don't want to call it when exporting


function getDate(){


    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-US", options);

    return day;
}

module.exports.getDay = getDay; //there is no bracket after getDate since we don't want to call it when exporting

function getDay(){


    let today = new Date();
    let options = {
        weekday: "long",
    }

    let day = today.toLocaleDateString("en-US", options);

    return day;
}
