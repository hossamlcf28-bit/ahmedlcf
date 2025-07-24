// server.js
// لتشغيل هذا الخادم، ستحتاج إلى:
// 1. تثبيت Node.js على جهازك أو خدمة الاستضافة.
// 2. تشغيل الأمر التالي في الطرفية (Terminal): npm install express node-fetch cors
// 3. تشغيل الخادم بالأمر: node server.js

const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 3002; // يمكنك تغيير المنفذ إذا أردت

// !!! هام جداً !!!
// قم باستبدال النص التالي بمفتاح API السري الخاص بك من Chargily
const CHARGILY_API_KEY = 'test_sk_Oup1YPQmPxiIChh3QfqbNNXVvS7VYouNBmwuxrEw';

// السماح لموقعك بالتواصل مع هذا الخادم
app.use(cors());
// السماح للخادم بقراءة البيانات بصيغة JSON
app.use(express.json());

// نقطة النهاية (Endpoint) لإنشاء رابط الدفع
app.post('/create-payment', async (req, res) => {
    // التحقق من وجود مفتاح API
    if (!CHARGILY_API_KEY || CHARGILY_API_KEY === 'test_sk_Oup1YPQmPxiIChh3QfqbNNXVvS7VYouNBmwuxrEw') {
        return res.status(500).json({ error: 'لم يتم تكوين مفتاح Chargily API على الخادم.' });
    }

    try {
        const { amount, price_dinar, player_id } = req.body;

        // إعداد البيانات التي سيتم إرسالها إلى Chargily
        const payload = {
            amount: price_dinar, // السعر يجب أن يكون بالدينار الجزائري
            currency: 'dzd',
            // !! هام: استبدل هذه الروابط بروابط الصفحات على موقعك الفعلي !!
            success_url: 'http://shop2.mygamesonline.org/success.html', // رابط صفحة نجاح الدفع
            failure_url: 'http://shop2.mygamesonline.org/failure.html', // رابط صفحة فشل الدفع
            webhook_endpoint: 'https://your-backend-service.com/chargily-webhook', // رابط اختياري لإشعارات الخادم
            metadata: {
                product: `${amount} Diamonds`,
                player_id: player_id,
            },
        };

        // إرسال الطلب إلى Chargily لإنشاء صفحة الدفع
        const chargilyResponse = await fetch('https://pay.chargily.com/api/v2/checkouts', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${CHARGILY_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await chargilyResponse.json();

        // إذا حدث خطأ من Chargily
        if (!chargilyResponse.ok) {
            throw new Error(data.message || 'Chargily API error');
        }

        // إرسال رابط الدفع إلى الواجهة الأمامية
        res.status(200).json({ checkout_url: data.checkout_url });

    } catch (error) {
        console.error('Error creating payment:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server for Chargily running on http://localhost:${PORT}`);
});
