export function dateFormat(dateFormat, date) {

    const weekKorName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    const weekKorShortName = ["일", "월", "화", "수", "목", "금", "토"];
    const weekEngName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekEngShortName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let h = date.getHours();
    return dateFormat.replace(/(yyyy|yy|MM|dd|KS|KL|ES|EL|HH|hh|mm|ss|a\/p)/gi, function ($1) {
        switch ($1) {
            case "yyyy": return date.getFullYear(); // 년 (4자리)
            case "yy": return (date.getFullYear() % 1000).zf(2); // 년 (2자리)
            case "MM": return (date.getMonth() + 1).zf(2); // 월 (2자리)
            case "dd": return date.getDate().zf(2); // 일 (2자리)
            case "KS": return weekKorShortName[date.getDay()]; // 요일 (짧은 한글)
            case "KL": return weekKorName[date.getDay()]; // 요일 (긴 한글)
            case "ES": return weekEngShortName[date.getDay()]; // 요일 (짧은 영어)
            case "EL": return weekEngName[date.getDay()]; // 요일 (긴 영어)
            case "HH": return date.getHours().zf(2); // 시간 (24시간 기준, 2자리)
            case "hh": return ((h = date.getHours() % 12) ? h : 12).zf(2); // 시간 (12시간 기준, 2자리)
            case "mm": return date.getMinutes().zf(2); // 분 (2자리)
            case "ss": return date.getSeconds().zf(2); // 초 (2자리)
            case "a/p": return date.getHours() < 12 ? "오전" : "오후"; // 오전/오후 구분
            default: return $1;
        }
    });
}

String.prototype.string = function (len) { var s = '', i = 0; while (i++ < len) { s += this; } return s; };
String.prototype.zf = function (len) { return "0".string(len - this.length) + this; };
Number.prototype.zf = function (len) { return this.toString().zf(len); };