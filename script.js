var testiNascosti = document.querySelectorAll('.testoNascosto');
var intro = document.getElementById('testo0');
var ultimoTestoMostrato = null;

function mostraTesto(id) {
    var testoDaMostrare = document.getElementById(id);

    if (testoDaMostrare.style.display === 'block') {
        testoDaMostrare.style.display = 'none';
        intro.style.display = 'block';  // Riappare l'introduzione
        ultimoTestoMostrato = null;
    } else {
        if (ultimoTestoMostrato) {
            ultimoTestoMostrato.style.display = 'none';
        }
        testoDaMostrare.style.display = 'block';
        intro.style.display = 'none';  // Scompare l'introduzione
        ultimoTestoMostrato = testoDaMostrare;
        hideNavbar(); // Nascondi il navbar dopo aver mostrato il testo
    }
}


var menuItems = document.querySelectorAll('.menu li');
menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
        var id = this.dataset.target;
        mostraTesto(id);
    });
});

function hideNavbar() {
    if (window.innerWidth <= 600) {
        document.getElementById("navbar").style.display = "none";
    }
}


function toggle()
{
        if(document.getElementById("navbar").style.display=="none")
        {
            document.getElementById("navbar").style.display="block";
        }
        else
        {
            document.getElementById("navbar").style.display="none";
        }
}
