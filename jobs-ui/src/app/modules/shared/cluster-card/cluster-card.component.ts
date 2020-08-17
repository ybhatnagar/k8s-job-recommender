import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "cluster-card",
  templateUrl: "cluster-card.component.html",
  styleUrls: ["cluster-card.component.scss"]
})
export class ClusterCardComponent {
  constructor(private readonly router: Router) {}
  @Input() cluster: any = {};
  @Input() signpostPosition: string = "right-bottom";
  ngOnInit(): void {
    this.cluster.podsSelected = this.cluster.podsSelected || [];
  }

  onCardClick() {}

  // updateSelectList(pod) {
  //     this.cluster.podsSelected = this.cluster.podsSelected || [];
  //     if (pod.isSelected) {
  //         this.cluster.podsSelected.push(pod);
  //     } else {
  //         let index = this.cluster.podsSelected.findIndex((p) => {
  //             return p.podIp === pod.podIp;
  //         });
  //         this.cluster.podsSelected.splice(index, 1);
  //     }
  // }

  onAnalyise() {
    let selection = [];

    this.router.navigate(["/recommendations"]);
  }
}
