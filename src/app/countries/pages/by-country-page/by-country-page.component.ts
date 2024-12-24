import { Component } from '@angular/core';
import { CountriesService } from '../../countries.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];  

  constructor(private countryService: CountriesService){};

  searchByCountry(country: string){
    this.countryService.searchCountry(country)
      .subscribe(countries => {
        this.countries = countries;
      });
  }

}
