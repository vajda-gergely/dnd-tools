import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftMenuComponent } from "./components/left-menu/left-menu.component";
import { TopMenuComponent } from "./components/top-menu/top-menu.component";

@Component({
  selector: 'dmt-root',
  standalone: true,
  imports: [RouterOutlet, TopMenuComponent, LeftMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
