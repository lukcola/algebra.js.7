var auto = {
    boja: "crna",
    marka: { tip: "BMW", model: "ff30" },
    cijena: 22000,
    brzina: 10,
    maxBrzina: 220,
    registriran: true,
    ubrzaj: function (vrijeme) {
        let tmpVrijeme = 0;
        while (this.brzina <= this.maxBrzina) {
            this.brzina = this.brzina + 5;
            if (tmpVrijeme == vrijeme) {
                break;
            }
            tmpVrijeme++;
        }
        return this.brzina;
    },
    zakoci: function (vrijeme) {
        return vrijeme / 5;
    },
    promjeniBoju: function (novaBoja) {
        this.boja = novaBoja;
        return this.boja;
    }
}

console.log("auto JSON --> " + JSON.stringify(auto));