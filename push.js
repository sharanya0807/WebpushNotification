var push = require('web-push')

let vapidKeys = {
    publicKey: 'BN2zMXqCWhQS0jf07FnUYvfP10jEb7FZ4H9Hi5-wzamKqozViKn6roNjEs5t-tl1ilUIYoZK5KM2UNzFzJwzbAg',
    privateKey: 'OH9T8BEaYNtdA3PYEiztAp1ObmbSCpg_AjJxgBZH5gc'
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = { 
    endpoint: "https://fcm.googleapis.com/fcm/send/f1s4WMKd4rE:APA91bEgUBh6v-a8oycnPVNqJkOTQ7A8ctrsVJygAR-xpQ84aaqcKAxH2jtwpZPb-Kcdxq842QcwWh6ePVkaO0Rx4lGvyGAjkI2bS6v_5G-yjxq-1uQkv9vC0uoZR18V1fB81hHQlSnL",
    expirationTime: null, 
    keys: { "p256dh": "BPgHGL0edaxoyruazPyw_pwbiy8PhD6emsnKhUPxLYsb6XIsNI2ci39jWeB45eUDQnLqWV-_jEbMBOcehzsO30w", 
    auth: "0pk0QdYMGY0l_P-kvbe4SA"
    }
 };

push.sendNotification(sub, 'test message')