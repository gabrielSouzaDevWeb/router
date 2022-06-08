import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface IParamiter {
  username: string;
  id: number;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  public nome: string;
  public id: number;
  public obj: {};
  ngOnInit(): void {
    //res=> console.log(res.id,res.username
    this.getIdAndNameByUrl();
    this.queryParamsUrl();
    this.redirectByTime();

    console.log(this.nome);
    console.log(this.id);
  }

  getIdAndNameByUrl() {
    this.activatedRoute.params.subscribe({
      next: (res) => {
        console.log(res);

        return (this.nome = res?.['username']), (this.id = res?.['id']);
      },
      error: (err) => console.log(err),
    });
  }
  queryParamsUrl() {
    this.activatedRoute.queryParams.subscribe({
      next: (res) => {
        console.log(res);
        this.obj = res;
        return res;
      },

      error: (err) => err,
    });
  }

  redirectByTime() {
    setInterval(() => {
      this.router.navigate(['404']);
      // this.router.navigateByUrl('404');
    }, 5000);
  }
}
