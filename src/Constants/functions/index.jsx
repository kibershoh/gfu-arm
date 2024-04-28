export const time = (date) => {
    // const day = `${formatDate(date.toDate().getDate())}.${formatDate(date.toDate().getMonth() + 1)}.${formatDate(date.toDate().getFullYear())}, ${formatDate(date.toDate().getHours())} : ${formatDate(date.toDate().getMinutes())}`
    const day = new Date(date).getHours()
    return day
}