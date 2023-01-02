function formatJobDateRange(dateRangeElement) { //startDateString, elementId) {
    try {
        let formattedDateRange = "";
        let startDateString = dateRangeElement.getAttribute("data-start-date");
        let elementId = dateRangeElement.getAttribute("id");
        let startDate = new Date(startDateString);
        let endDate = new Date();
        let startDateFormattedString = new Date(startDateString).toLocaleDateString('en-us', { year:"numeric", month:"short"});
        let endDateFormattedString = new Date().toLocaleDateString('en-us', { year:"numeric", month:"short"});
        let durationInSeconds = (endDate / 1000) - (startDate / 1000);
        let durationInDays = durationInSeconds / 86400;
        let durationInYears = durationInDays / 365;
        let years = Math.floor(durationInYears);
        let months = Math.ceil((durationInYears % 1) * 12);
        let yearsAbbreviated = years == 1? "yr" : "yrs";
        let monthsAbbreviated = months == 1? "mo" : "mos";
        let formattedYears = years == 0 ? "" : years + " " + yearsAbbreviated;
        let durationString = 
            "{yrs} {Y} {mos}"
                .replace("{yrs}", formattedYears)
                .replace("{Y}", months)
                .replace("{mos}", monthsAbbreviated);

        // {% assign start_date = '2022-01-01' | date: '%s' %}
        // {% assign end_date = '2025-07-01' | date: '%s' %}
        
        // {% assign diff_in_seconds = end_date | minus: start_date %}
        // {% assign diff_in_days = diff_in_seconds | divided_by: 86400 %}
        // {% assign diff_in_years = diff_in_days | divided_by: 365 %}
        
        // {% assign years = diff_in_years | floor %}
        // {% assign months = (diff_in_years | modulo: 1) | times: 12 | floor %}
        
        // The difference is {{ years }} years and {{ months }} months.
    
        formattedDateRange = 
            "{startDate} - {endDate} · {duration}"
                .replace("{startDate}", startDateFormattedString)
                .replace("{endDate}", "Present")
                .replace("{duration}", durationString);
        document.getElementById(elementId).innerHTML = formattedDateRange; 
    } catch(error) {
        console.log(error);
    }
}

function formatJobDateRanges() {
    const dateRanges = document.getElementsByClassName("calculated-date-range");
    console.log("dateRanges: "+ dateRanges.length);
    for (let i = 0; i < dateRanges.length; i++) {
        formatJobDateRange(dateRanges[i]);
    }
}