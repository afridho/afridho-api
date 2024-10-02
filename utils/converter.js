function toIdr(amount) {
    if (!amount) return 'Invalid Amount.';
    return `Rp ${amount.toLocaleString('id-ID')}`;
}

module.exports = { toIdr };
