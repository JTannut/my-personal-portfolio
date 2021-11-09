function getBotResponse(input) {
    // Simple responses
    if (input == "hello") {
        return "สวัสดัเช่นกันนะครับ";
    } else if (input == "name") {
        return "Tannut Tawornsan";
    } else if(input == "about") {
        return "Email : tannut_tawornsan@hotmail.com  Facebook: Tannut Tawornsan";
    }else {
        return "ขอโทษครับผมไม่เข้าใจ กรุณาป้อนคำสั่งใหม่ด้วย";
    }
}