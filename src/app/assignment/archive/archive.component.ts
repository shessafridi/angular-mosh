import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit {
  archive = {
    year: null,
    month: null,
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  onClick() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.archive.month = param.get('month');
      this.archive.year = param.get('year');
    });
  }
}
