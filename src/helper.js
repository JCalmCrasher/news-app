function formatDate(date) {
    const formattedDate = new Date(date);
    return `${formattedDate.toLocaleString('default', { month: 'long' })} ${formattedDate.getDay()}, ${formattedDate.getFullYear()}`;
}

export { formatDate };