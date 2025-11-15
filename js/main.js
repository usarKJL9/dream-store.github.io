// فلترة المنتجات - Tebex Style
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // إزالة النشط من جميع الأزرار
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.transform = 'translateY(0)';
            });
            
            // إضافة النشط للزر المضغوط
            this.classList.add('active');
            this.style.transform = 'translateY(-2px)';
            
            const category = this.getAttribute('data-category');
            
            // تصفية المنتجات مع أنيميشن
            productCards.forEach((card, index) => {
                setTimeout(() => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.5s ease forwards';
                    } else {
                        card.style.animation = 'fadeOut 0.3s ease forwards';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }, index * 100);
            });
        });
    });

    // زر الطلب - Tebex Style
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            // تأثير النقر
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 150);
            
            // نافذة التأكيد
            const confirmed = confirm(`🛒 تأكيد الطلب\n\nالمنتج: ${productName}\nالسعر: ${productPrice}\n\nبعد التأكيد، سيتم توجيهك للديسكورد لإكمال عملية الشراء`);
            
            if (confirmed) {
                alert(`✅ تم إضافة ${productName} إلى طلباتك\n\nيرجى التواصل على الديسكورد: kjl9\nلإكمال عملية الشراء واستلام المنتج`);
            }
        });
    });

    // تأثيرات التمرير
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // مراقبة العناصر للأنيميشن
    document.querySelectorAll('.product-card, .category-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

// أنيميشن للخروج
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }
`;
document.head.appendChild(style);
