import { Country } from '../../interfaces/Country';
import { CountriesService } from './../../countries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService){};

  searchByRegion(region: string){
    this.countriesService.searchRegion(region)
      .subscribe(countries => {
          this.countries = countries;
        });
  }

}
