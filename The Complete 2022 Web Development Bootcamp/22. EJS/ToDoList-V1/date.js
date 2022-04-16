


exports.getDate = function(){  // Converted into a function expression

    const  today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    return day = today.toLocaleDateString("en-US", options);
}


exports.getDay = function (){  // Converted into a function expression

    const today = new Date();
    const options = {
        weekday: "long",
    }

    return day = today.toLocaleDateString("en-US", options);
}
