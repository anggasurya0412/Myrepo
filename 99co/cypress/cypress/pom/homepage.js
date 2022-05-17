export default class HomePage {
    
    title1(){
        return cy.get('div._2Tvf3 > div:nth-child(1) > header > h2')
    };

    title2(){
        return cy.get('div._2Tvf3 > div:nth-child(2) > header > h2')
    };

    title3(){
        return cy.get('div._2Tvf3 > div:nth-child(3) > section > div > h2')
    };

    title4(){
        return cy.get('div._2Tvf3 > div:nth-child(4) > header > h2')
    };

    title5(){
        return cy.get('div._2Tvf3 > div:nth-child(5) > header > h2')
    };

    title6(){
        return cy.get('div._2Tvf3 > div:nth-child(6) > header > h2')
    };

    title7(){
        return cy.get('div._2Tvf3 > div._1YwbC._1CUuH > div:nth-child(1) > header > h2')
    };

    title8(){
        return cy.get('div._2Tvf3 > div:nth-child(8) > header > h2')
    };

    title9(){
        return cy.get('div._2Tvf3 > div._3aLzm._2EnZ_ > div > div.XbGF9 > div > h2')
    };

    title10(){
        return cy.get('div._2Tvf3 > div:nth-child(10) > header > h2')
    };

    popularProject(index){
        return cy.get(` div._2Tvf3 > div:nth-child(2) > div > div:nth-child(${index}) > div._2gMFW > a`)
    }

    tabRent(){
        return cy.get('[for="search_category_rent"]')
    }

    allProperty(){
        return cy.get('div:nth-child(2) > div._3vylw > span')
    }

    allBed(){
        return cy.get('div:nth-child(3) > div._3vylw > span')
    }

    entireUnit(){
        return cy.get('div:nth-child(4) > div._3vylw > span')
    }

    option(index){
        return cy.get(`ul > li:nth-child(${index}) > label > label`)
    }
}