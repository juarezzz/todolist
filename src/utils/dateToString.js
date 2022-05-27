const dateToString = date => {
    let [hour, minute, month, day] = [date.getHours(), date.getMinutes(), date.getMonth() + 1, date.getDate()]
    const pastNoon = hour > 12
    if (pastNoon) {
        hour = hour - 12
    }
    return `${month}/${day} ${hour}:${minute < 10 ? '0' : ''}${minute}${pastNoon ? 'PM' : 'AM'}`
}

export default dateToString