import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
// import "rxjs/add/operator/map";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getAdvantageData().subscribe(
      data => {
        console.log("Data9", data);
        this.name = data;
      },
      error => {
        console.log("Error", error);
      }
    );
  }

  getAdvantageData(): Observable<any> {
    let apiUrl = "https://my-backend-app-vzslkjuwcx.now.sh/Random";

    return this.http.get(apiUrl).pipe(
      map((response: Response) => {
        return response;
      })
    );
  }
}
