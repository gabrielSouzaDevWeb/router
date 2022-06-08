import { ActivatedRoute } from '@angular/router';
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
  constructor(private activatedRoute: ActivatedRoute) {}

  public nome: string;
  public id: number;
  ngOnInit(): void {
    //res=> console.log(res.id,res.username
    this.activatedRoute.params.subscribe({
      next: (res) => {
        console.log(res);

        return (this.nome = res?.['username']), (this.id = res?.['id']);
      },
      error: (err) => console.log(err),
    });

    this.activatedRoute.queryParams.subscribe({
      next: (res) => console.log(res),

      error: (err) => err,
    });

    console.log(this.nome);
    console.log(this.id);
  }
}
