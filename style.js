
var turn = "P1"
var counter = 0;
function clickOnBtn(id) {
    if (document.getElementById(id).innerHTML == "_" && !(checkWinner())) {
        document.getElementById(id).innerHTML = turn;
        counter++;
        if (!(checkWinner()))

            if (turn == "P1") {
                turn = "P2";
            }
            else {
                turn = "P1";
            }
    }

}

function checkWinner() {
    for (var i = 1; i <= 3; i++) {
        if ((document.getElementById("R" + i + "C1").innerHTML == document.getElementById("R" + (i) + "C2").innerHTML)
            && (document.getElementById("R" + (i) + "C2").innerHTML == document.getElementById("R" + (i) + "C3").innerHTML)
            && (document.getElementById("R" + (i) + "C1").innerHTML != "_")) {

            let v1 = document.getElementById("R" + (i) + "C1")
            v1.innerHTML = "✓"
            v1.style.color = "green"
            let v2 = document.getElementById("R" + (i) + "C2")
            v2.innerHTML = "✓"
            v2.style.color = "green"
            let v3 = document.getElementById("R" + (i) + "C3")
            v3.innerHTML = "✓"
            v3.style.color = "green"
            document.getElementById("lab").innerHTML = turn + " is the WINNER"
            document.getElementById("image").style.display = "block";
            document.getElementById("aud").play();
            return true;

        }

    }

    for (var i = 1; i <= 3; i++) {
        if ((document.getElementById("R1C" + i).innerHTML == document.getElementById("R2C" + i).innerHTML)
            && (document.getElementById("R2C" + i).innerHTML == document.getElementById("R3C" + i).innerHTML)
            && (document.getElementById("R1C" + i).innerHTML != "_")) {
            let v1 = document.getElementById("R1C" + i)
            v1.innerHTML = "✓"
            v1.style.color = "green"
            let v2 = document.getElementById("R2C" + i)
            v2.innerHTML = "✓"
            v2.style.color = "green"
            let v3 = document.getElementById("R3C" + i)
            v3.innerHTML = "✓"
            v3.style.color = "green"
            document.getElementById("lab").innerHTML = turn + " is the WINNER"
            document.getElementById("image").style.display = "block";
            document.getElementById("aud").play();
            return true;

        }
    }

    if ((document.getElementById("R1C1").innerHTML == document.getElementById("R2C2").innerHTML)
        && (document.getElementById("R2C2").innerHTML == document.getElementById("R3C3").innerHTML)
        && (document.getElementById("R1C1").innerHTML != "_")) {

        let v1 = document.getElementById("R1C1")
        v1.innerHTML = "✓"
        v1.style.color = "green"
        let v2 = document.getElementById("R2C2")
        v2.innerHTML = "✓"
        v2.style.color = "green"
        let v3 = document.getElementById("R3C3")
        v3.innerHTML = "✓"
        v3.style.color = "green"

        document.getElementById("lab").innerHTML = turn + " is the WINNER"
        document.getElementById("image").style.display = "block";
        document.getElementById("aud").play();
        return true;

    }

    if ((document.getElementById("R1C3").innerHTML == document.getElementById("R2C2").innerHTML)
        && (document.getElementById("R2C2").innerHTML == document.getElementById("R3C1").innerHTML)
        && (document.getElementById("R2C2").innerHTML != "_")) {

        let v1 = document.getElementById("R1C3")
        v1.innerHTML = "✓"
        v1.style.color = "green"
        let v2 = document.getElementById("R2C2")
        v2.innerHTML = "✓"
        v2.style.color = "green"
        let v3 = document.getElementById("R3C1")
        v3.innerHTML = "✓"
        v3.style.color = "green"

        document.getElementById("lab").innerHTML = turn + " is the WINNER"
        document.getElementById("image").style.display = "block";
        document.getElementById("aud").play();
        return true;

    }

    return false;
}