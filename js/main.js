// فلترة المنتجات
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // إزالة النشط من جميع الأزرار
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة النشط للزر المضغوط
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // تصفية المنتجات
            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // زر الطلب
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').textContent;
            alert(`شكراً لاهتمامك بمنتج: ${productName}\nيرجى التواصل معنا على الديسكورد: kjl9 لإكمال الطلب`);
        });
    });
});
