document.getElementById('coupon-btn').addEventListener('click', function () {
    const coupon = document.getElementById('couponField').value;
    document.getElementById('couponField').value = '';
    if (coupon === 'DOM') {
        const priceText = document.getElementById('price').innerText;
        const previousPriceAmount = parseInt(priceText);
        const discountAmount = (30 * previousPriceAmount) / 100;
        const currentPriceAmount = previousPriceAmount - discountAmount;
        document.getElementById('price-element').style.textDecorationLine = "line-through";
        document.getElementById('discountPrice').style.display = "block";
        document.getElementById('discount').innerText = currentPriceAmount;
        alert('Congratulations you got discount $' + discountAmount);
    }
    else {
        alert('Invalid coupon!');
    }
});