export default (expenses) => {
    return expenses
        .map((e) => e.amount)
        .reduce((sum, value) => {
            return sum + value
        }, 0)
};