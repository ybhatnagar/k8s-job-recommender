import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ClusterListService } from "../cluster-list.service";

@Component({
  selector: "maintenance",
  templateUrl: "maintenance.component.html",
  styleUrls: ["maintenance.component.scss"]
})
export class MaintenanceComponent {
  public selections = [];
  public recommendations = [{ name: "DUMMY" }];
  public chartBefore = [];
  public chartAfter = [];
  public latencySeries = [];
  public openRec = false;
  public openApply = false;

  public recClicked: any;
  public appClicked: any;

  constructor(
    private readonly _service: ClusterListService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      this.selections = this._service.getSelections();
      console.log(this.selections);
      this.loadRecommendations();
      this.loadChartData();
    }, 0);
  }

  loadRecommendations() {
    this._service.getRecommendations(this.selections).subscribe(
      recom => {
        this.recommendations = recom;
      },
      err => {
        this.router.navigate(["clusters"]);
      }
    );
  }

  loadChartData() {
    this._service.getChartData().subscribe(data => {
      this.chartBefore = data;
    });
    this._service.getChartData().subscribe(data => {
      this.chartAfter = data;
    });
    this._service.getLatencyChartData().subscribe(data => {
      this.latencySeries = data;
    });
  }

  onRecClick(rec) {
    this.openRec = true;
    this.recClicked = rec;
  }

  onApplyClick(rec) {
    this.openApply = true;
    this.appClicked = rec;
  }

  onApply(rec) {
    let chart = this.chartAfter;
    this.chartAfter = null;
    let currentNode = chart.find(cluster => {
      return cluster.name.indexOf(rec.currentNode) > -1;
    });
    let recommendedNode = chart.find(cluster => {
      return cluster.name.indexOf(rec.recommendedNode) > -1;
    });
    let podIndex = currentNode.data.findIndex(pod => {
      return pod.name === rec.pod;
    });
    let movingPods = currentNode.data.splice(podIndex, 1);
    recommendedNode.data = recommendedNode.data.concat(movingPods);
    setTimeout(() => {
      this.chartAfter = chart;
      rec.applied = true;
    }, 100);
  }
}
