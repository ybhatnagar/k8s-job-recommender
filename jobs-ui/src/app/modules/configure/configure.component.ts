import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "configure",
  templateUrl: "configure.component.html",
  styleUrls: ["configure.component.scss"]
})
export class ConfigureComponent {
  public clusterList = [];
  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.loadClusters();
  }

  loadClusters() {}

  isSelected() {
    return this.clusterList.some(cl => {
      return cl.podsSelected && cl.podsSelected.length;
    });
  }

  onAnalyise() {
    let selection = [];
    this.clusterList.forEach(element => {
      if (element.podsSelected && element.podsSelected.length) {
        selection.push({
          clusterName: element.clusterName,
          pods: element.podsSelected
        });
      }
    });
    this.router.navigate(["/recommendations"]);
  }
}
