        function hideSummary() {
            document.getElementById("summary").style.display = "none";

        }

        function hidePinned() {
            document.getElementById("pinnedIssues").style.display = "none";
        }

        function clearSearch() {
            document.getElementById("searchQ").value = " ";
        }

        function sortSumRecent() {
            document.getElementById("recent").style.backgroundColor = "#0378DF";
            document.getElementById("likes").style.backgroundColor = "#dbdfe5";
            document.getElementById("comments").style.backgroundColor = "#dbdfe5";

        }

        function sortSumLikes() {
            document.getElementById("likes").style.backgroundColor = "#0378DF";
            document.getElementById("recent").style.backgroundColor = "#dbdfe5";
            document.getElementById("comments").style.backgroundColor = "#dbdfe5";

        }

        function sortSumComments() {
            document.getElementById("comments").style.backgroundColor = "#0378DF";
            document.getElementById("recent").style.backgroundColor = "#dbdfe5";
            document.getElementById("likes").style.backgroundColor = "#dbdfe5";

        }

        function sortRangeDay() {
            document.getElementById("day").style.backgroundColor = "#0378DF";
            document.getElementById("week").style.backgroundColor = "#dbdfe5";
            document.getElementById("month").style.backgroundColor = "#dbdfe5";
            document.getElementById("year").style.backgroundColor = "#dbdfe5";
            document.getElementById("all").style.backgroundColor = "#dbdfe5";
        }

        function sortRangeWeek() {
            document.getElementById("day").style.backgroundColor = "#dbdfe5";
            document.getElementById("week").style.backgroundColor = "#0378DF";
            document.getElementById("month").style.backgroundColor = "#dbdfe5";
            document.getElementById("year").style.backgroundColor = "#dbdfe5";
            document.getElementById("all").style.backgroundColor = "#dbdfe5";
        }

        function sortRangeMonth() {
            document.getElementById("day").style.backgroundColor = "#dbdfe5";
            document.getElementById("week").style.backgroundColor = "#dbdfe5";
            document.getElementById("month").style.backgroundColor = "#0378DF";
            document.getElementById("year").style.backgroundColor = "#dbdfe5";
            document.getElementById("all").style.backgroundColor = "#dbdfe5";
        }

        function sortRangeYear() {
            document.getElementById("day").style.backgroundColor = "#dbdfe5";
            document.getElementById("week").style.backgroundColor = "#dbdfe5";
            document.getElementById("month").style.backgroundColor = "#dbdfe5";
            document.getElementById("year").style.backgroundColor = "#0378DF";
            document.getElementById("all").style.backgroundColor = "#dbdfe5";
        }

        function sortRangeAll() {
            document.getElementById("day").style.backgroundColor = "#dbdfe5";
            document.getElementById("week").style.backgroundColor = "#dbdfe5";
            document.getElementById("month").style.backgroundColor = "#dbdfe5";
            document.getElementById("year").style.backgroundColor = "#dbdfe5";
            document.getElementById("all").style.backgroundColor = "#0378DF";
        }
